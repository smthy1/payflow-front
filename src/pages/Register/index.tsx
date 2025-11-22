import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import DefaultInput from '@/components/DefaultInput';
import DefaulButton from '@/components/DefaultButton';
import { registerService } from '@/services/auth/auth.services';
import axios from 'axios';

const RegisterPage: React.FC = () => {
    const navigate = useNavigate();

    const [name, setName] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    const [result, setResult] = useState<string>("");
    const [error, setError] = useState<string>("");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        
        try {
            const response = await registerService({ name: name, email: email, password: password });
            if (response)
            setError("");
            setResult(JSON.stringify(response));

            navigate("/home");

        } catch (err) {
            setResult("");
            if (axios.isAxiosError(err)) {
                setError(`Erro inesperado ${err.response?.data.message}`);
            }
        }
    };

  return (
    <>
      <div className='flex flex-col justify-center items-center bg-gray-100 pt-20'>
        <h1 className='text-2xl p-2 font-bold'>Cadastre-se</h1>
        <div className='flex flex-col items-center rounded-2xl gap-1 md:w-md sm:w-sm p-8 bg-slate-900'>
          
          <form onSubmit={handleSubmit} className=' flex flex-col items-center justify-center'>
                <DefaultInput placeholder='Nome' type='text' onChange={(e) => setName(e.target.value)}/>
                <DefaultInput placeholder='Email' type='email' onChange={(e) => setEmail(e.target.value)}/>
                <DefaultInput placeholder='Senha' type='password' onChange={(e) => setPassword(e.target.value)}/>
                
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
    </>
  );
};

export default RegisterPage;