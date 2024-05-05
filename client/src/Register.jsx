import React, { useState } from 'react'
const [username, setUsername] = useState('');
const [password, setPassword] = useState('');
const Register = () => {
  return (
   <div className='bg-gray-900 h-screen flex items-center'>
        <form className='w-64 mx-auto '>
            <input type='text' 
            placeholder='username' 
            className='block w-full bg-gray-800 p-2 mb-2 border border-gray-700 hover:bg-gray-700 rounded-sm'/>

            <input type='password' 
            placeholder='password' 
            className='block w-full bg-gray-800 p-2 mb-2 border border-gray-700 hover:bg-gray-700 rounded-sm'/>

            <button className='bg-gray-600 w-full p-2 text-white block rounded-sm'>
                Register
            </button>
        </form>

   </div>
  )
}

export default Register
