import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'; 
import UsefetchData from '../Hooks/Usefetch'
import axios from 'axios'

const Login = () => {
  const [password,setPassword]=useState('')
  const [name,setName]=useState('')
  const navigate=useNavigate()
 const submit=async (e)=>{
  e.preventDefault();
  // const {data,loading,error}=UsefetchData(`http://localhost:3001/auth/login/${name}`)
  // console.log(data);
  // console.log(error);
try {
  const res= await axios.post('http://localhost:3001/auth/login',{name,password})
  console.log(res.status);
  if(res.status ===404) alert("User not found");
   else{
    localStorage.setItem('username',name);
    navigate('/')
   } 
} catch (error) {
 
  if(error.response.status === 404) alert("User not found!!");
  navigate('/register')
  // console.log(error);
}
 }
  return (
   <>
   <div className='bg-[#ADD8E6] flex items-center justify-center h-screen w-screen'>
      <form className='flex flex-col items-center justify-center w-[350px] h-[350px] bg-[#40c4f0]  rounded-md shadow-md backdrop-blur-sm space-y-3' action="" method="post">
        <input required onChange={(e)=>{setName(e.target.value)}}  value={name } className=' focus:outline-none   rounded-md p-3' placeholder='User name' type="text" name="" id="" />
        <input required onChange={(e)=>{setPassword(e.target.value)}} value={password} className=' focus:outline-none   rounded-md p-3' placeholder='Password' type="password" name="" id="" />
        <button onClick={submit} className='bg-[#14a5d5] p-3 rounded-md text-white'>Login</button>
      </form>
   </div>
   </>
  )
}

export default Login