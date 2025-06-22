import React from 'react'
import { useState } from 'react';


const Login = ({ handleLogin }) => {

    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')


    //two way binding
    const submitHandler = (e) => {
        e.preventDefault();
        // Call the handleLogin function passed as a prop
        handleLogin(email, password);
        console.log("Email:", email);
        console.log("Password:", password);
        // console.log("Login form submitted");
        setemail("");
        setpassword(" ");

    }



  return (
<div className='flex items-center justify-center'>
    <div className="min-h-screen flex items-center justify-center bg-white">
        <form onSubmit={(e) => {
            submitHandler(e)
        }}
        className='flex flex-col items-center justify-center bg-white p-8 rounded-lg shadow-lg'>
            <h1 className='text-3xl font-semibold text-gray-800 mb-6'>Login</h1>
            <input 
                value={email}
                onChange={(e) => {
                    setemail(e.target.value);
                }}
                required
                type="email" 
                placeholder='Email' 
                className='border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 p-3 m-2 w-80 rounded-md outline-none transition-all duration-200' 
            />
            <input 
                onChange={(e) => {
                    setpassword(e.target.value);
                }}
                value={password}
                required
                type="password" 
                placeholder='Password' 
                className='border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 p-3 m-2 w-80 rounded-md outline-none transition-all duration-200' 
            />
            <button 
                type="submit" 
                className='bg-blue-600 hover:bg-blue-700 text-white p-3 m-2 w-80 rounded-md font-medium transition-colors duration-200 shadow-md hover:shadow-lg'
            >
                Login
            </button>
        </form>
    </div>
</div>
  )
}

export default Login