'use client'

import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import {auth} from '../firebaseConfig'
import { signInWithEmailAndPassword } from 'firebase/auth'
import Link from 'next/link'


function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const router = useRouter()

    const login = async () =>{
        if(email === '' || password === ''){
            return alert('Please fill all fields')
        }
        try{
            const user = await signInWithEmailAndPassword(auth, email, password)

            alert('Login Successfully')
            router.push('/');

            setEmail('')
            setPassword('')

        }catch(error){
            console.log(error)
        }
    }

   
    return (
        <div className=' flex justify-center items-center h-screen'>
            <div className=' bg-gray-800 px-10 py-10 rounded-xl '>
                <div className="">
                    <h1 className='text-center text-white text-xl mb-4 font-bold'>Login</h1>
                </div>
                <div>
                    <input type="email"
                        name='email'
                        value={email}
                        onChange={(e)=>setEmail(e.target.value)}
                        className=' bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none'
                        placeholder='Email'
                    />
                </div>
                <div>
                    <input
                        type="password"
                        value={password}
                        onChange={(e)=>setPassword(e.target.value)}
                        className=' bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none'
                        placeholder='Password'
                    />
                </div>
                <div className=' flex justify-center mb-3'>
                    <button
                    onClick={login}
                        className=' bg-yellow-500 w-full text-black font-bold  px-2 py-2 rounded-lg'>
                        Login
                    </button>
                </div>
                <div>
                    <h2 className='text-white'>Dont have an account <Link className=' text-yellow-500 font-bold' href={'/signup'}>Signup</Link></h2>
                </div>
            </div>
        </div>
    )
}

export default Login