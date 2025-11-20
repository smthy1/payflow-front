import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import DefaultInput from '../../components/DefaultInput'
import DefaulButton from '../../components/DefaultButton'
import { loginService } from '../../services/auth/auth.services'
import { Link } from 'react-router-dom'
import axios from 'axios'

const LoginPage: React.FC = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const [result, setResult] = useState<string>("");
  const [error, setError] = useState<string>("");

  const hadleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await loginService({ email: email, password: password });
      setError("")
      setResult(JSON.stringify(response));

      navigate("/home");
    } catch (err) {
      setResult("");
      if (axios.isAxiosError(err)) {
        setError(`Erro inesperado ${err.response?.data.message}`);
      }
    }
  }

  return (
    <>
      <div className='flex flex-col justify-center items-center bg-gray-100 pt-20'>
        <h1 className='text-2xl p-2 font-bold'>Login</h1>
        <div className='flex flex-col rounded-2xl gap-1 md:w-md sm:w-sm p-8 bg-slate-900'>
          <form onSubmit={hadleSubmit} className='flex flex-col items-center justify-center content-center'>
            <DefaultInput placeholder='Email' onChange={(e) => setEmail(e.target.value)}/>
            <DefaultInput placeholder='Senha' onChange={(e) => setPassword(e.target.value)}/>
            
            <DefaulButton type='submit'>
              Enviar
            </DefaulButton>
          </form>
        </div>

        {/*Resposta da API*/}
        {result && (
          <p>Resposta: {JSON.stringify(result)}</p>
        )}

        {/*Erro da API*/}
        {error && (
          <p>{error}</p>
        )}
      </div>
      <p className='flex justify-center font-semibold'>
        Ainda não possui conta?<Link to='/register' className='px-1 hover:cursor-pointer 
            hover:text-fuchsia-600 transition'
          >
            Cadastre-se
          </Link>
      </p>
    </>
  )
}

export default LoginPage;