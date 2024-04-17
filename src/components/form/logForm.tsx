"use client"
import { auth } from '@/app/api/login';
import { signIn } from 'next-auth/react';
import Link from 'next/link';
import { useState } from 'react';
import { PulseLoader } from 'react-spinners';
import { Auth } from '../../../types/auth';

interface AuthW {
  ok:boolean,
  message:string,
  jwt:string
}

const LoginForm = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
    setError("");
    const authh: AuthW = await auth({email:email, password:password});

    if(authh.ok){
      localStorage.setItem("jwt",authh.jwt);
      window.location.href = "/";
       
    }else{
      setLoading(false);
      setError(authh.message);
    }
    
  };
  
  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <img
          className="mx-auto h-[150px] w-auto"
          alt="Your Company"
          src="img/logomoviehub.jpg"
        />
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" onSubmit={handleSubmit} method="POST">
          <div>
            <label htmlFor="email" className="block text-sm font-medium leading-6">
              Correo electrónico
            </label>
            <div className="mt-2">
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="block w-full rounded-md border-0 py-1.5 px-2 shadow-sm ring-1 ring-inset ring-gray-300 text-black placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label htmlFor="password" className="block text-sm font-medium leading-6">
                Contraseña
              </label>
            </div>
            <div className="mt-2">
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="block w-full rounded-md border-0 py-1.5 px-2 shadow-sm ring-1 ring-inset ring-gray-300 text-black placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
          {error !== ""&& <p className='text-red-500 text-center my-5 text-[15px]'>{error}</p>}

            <button
              type="submit"
              className="flex w-full justify-center h-10 flex items-center rounded-md bg-[#006AFF] px-3 py-2 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              {loading ?
                <PulseLoader color='#fff' size={7}/>
                :
                "Iniciar sesión"

              }
            </button>
          </div>
        </form>
        <Link href="/"> Regresar </Link>
      </div>
    </div>
  );
};

export default LoginForm;

