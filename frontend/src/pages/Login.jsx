<<<<<<< HEAD
import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import axios from 'axios';
import { toast } from 'react-toastify';

const Login = () => {

  const [currentState, setCurrentState] = useState('Login');
  const { token, setToken, navigate, backendUrl } = useContext(ShopContext);

  const [name, setName] = useState('');
  const [password, setPasword] = useState('');
  const [email, setEmail] = useState('');

  const onSubmitHandler = async (event) => {
      event.preventDefault();
      try {
        if (currentState === 'Sign Up') {
          
          const response = await axios.post(backendUrl + '/api/user/register', { name, email, password });
          if (response.data.success) {
            setToken(response.data.token);
            localStorage.setItem('token', response.data.token);
          } else {
            toast.error(response.data.message);
          }

        } else {

          const response = await axios.post(backendUrl + '/api/user/login', { email, password });
          if (response.data.success) {
            setToken(response.data.token);
            localStorage.setItem('token', response.data.token);
          } else {
            toast.error(response.data.message);
          }

        }

      } catch (error) {
        console.log(error);
        toast.error(error.message);
      }
  };

  useEffect(() => {
    if (token) {
      navigate('/');
    }
  }, [token]);

  return (
    <form onSubmit={onSubmitHandler} className='flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-800'>
        <div className='inline-flex items-center gap-2 mb-2 mt-10'>
            <p className='prata-regular text-3xl text-[#d5006d]'>{currentState}</p>
            <hr className='border-none h-[1.5px] w-8 bg-[#d5006d]' />
        </div>
        {currentState === 'Login' ? '' : <input onChange={(e) => setName(e.target.value)} value={name} type="text" className='w-full px-3 py-2 border border-[#d5006d]' placeholder='Name' required />}
        <input onChange={(e) => setEmail(e.target.value)} value={email} type="email" className='w-full px-3 py-2 border border-[#d5006d]' placeholder='Email' required />
        <input onChange={(e) => setPasword(e.target.value)} value={password} type="password" className='w-full px-3 py-2 border border-[#d5006d]' placeholder='Password' required />
        <div className='w-full flex justify-between text-sm mt-[-8px]'>
            <p className='cursor-pointer text-[#d5006d]'>Forgot your password?</p>
            {
              currentState === 'Login'
              ? <p onClick={() => setCurrentState('Sign Up')} className='cursor-pointer text-[#d5006d]'>Create account</p>
              : <p onClick={() => setCurrentState('Login')} className='cursor-pointer text-[#d5006d]'>Login Here</p>
            }
        </div>
        <button className='bg-[#d5006d] text-white font-light px-8 py-2 mt-4'>{currentState === 'Login' ? 'Sign In' : 'Sign Up'}</button>
    </form>
  );
};

export default Login;
=======
import React, { useState } from 'react'

const Login = () => {

    const [currentState, setCurrentState] = useState('Login');

    const onSubmitHandler = async (e) => {
        e.preventDefault();
    }

    return (
        <form onSubmit={onSubmitHandler} className='flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-[#D5006D]'>
            <div className='inline-flex items-center gap-2 mb-2 mt-10'>
                <p className='prata-regular text-3xl text-[#D5006D]'>{currentState}</p>
                <hr className='border-none h-[1.5px] w-8 bg-[#D5006D]' />
            </div>
            {currentState === 'Login' ? null : <input className='w-full px-3 py-2 border border-[#D5006D]' type="text" placeholder='Name' required />}
            <input className='w-full px-3 py-2 border border-[#D5006D]' type="email" placeholder='Email' required />
            <input className='w-full px-3 py-2 border border-[#D5006D]' type="password" placeholder='Password' required />
            <div className='w-full flex justify-between text-sm mt-[-8px]'>
                <p className='cursor-pointer text-[#D5006D]'>Forgot your password?</p>
                {
                    currentState === 'Login'
                        ? <p onClick={() => setCurrentState('Sign Up')} className='cursor-pointer text-[#D5006D]'>Create account</p>
                        : <p onClick={() => setCurrentState('Login')} className='cursor-pointer text-[#D5006D]'>Login here</p>
                }
            </div>
            <button type='submit' className='bg-[#D5006D] text-white font-light px-8 py-2 mt-4'>{currentState === 'Login' ? 'Sign in' : 'Sign up'}</button>
        </form>
    )
}

export default Login
           
>>>>>>> 7a3663e7552d30f68f9013e5422f8a643d29c399
