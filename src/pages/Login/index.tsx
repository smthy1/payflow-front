import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import DefaultInput from '@/components/DefaultInput';
import DefaulButton from '@/components/DefaultButton';
import { loginService } from '@/services/auth/auth.services';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useAuthMe } from '@/hooks/useAuthMe';

const LoginPage: React.FC = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const [error, setError] = useState<string>("");

  const { refetch } = useAuthMe();


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    try {
      const response = await loginService({ email: email, password: password });
      console.log(response);

      if (!response.error) {
        await refetch();

        navigate("/dashboard", { replace: true });
      }
    } catch (err) {
      if (axios.isAxiosError(err)) {
        setError(`Erro inesperado ${err.response?.data.message}`);
      }
    }
  };

  return (
    <>
      <div className='flex flex-col justify-center items-center min-h-screen bg-gray-950 pt-20'>
        <h1 className='text-2xl p-2 font-bold text-fuchsia-500'>Login</h1>
        <div className='flex flex-col rounded-2xl gap-1 md:w-md sm:w-sm p-8 bg-slate-900'>
          <form onSubmit={handleSubmit} className='flex flex-col items-center justify-center content-center'>
            <DefaultInput placeholder='Email' onChange={(e) => setEmail(e.target.value)}/>
            <DefaultInput placeholder='Senha' onChange={(e) => setPassword(e.target.value)}/>
            
            <DefaulButton type='submit'>
              Enviar
            </DefaulButton>
          </form>
        </div>


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
  );
};

export default LoginPage;