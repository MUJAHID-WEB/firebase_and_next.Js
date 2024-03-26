'use client'

import { useState } from 'react';
import {db} from './firebaseConfig'
import {collection, addDoc} from 'firebase/firestore'



async function addDatatoFirestore(name, email, message){
  try{

    const docRef = await addDoc(collection(db, 'messages'),{
      name: name,
      email: email,
      message: message,
    });
    console.log('Document written with ID: ', docRef.id)
    return true

  }catch{
    console.error('Error adding document ', error)
    return false
  }
}

export default function Home() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = async(e)=>{
    e.preventDefault();
    const added = await addDatatoFirestore(name, email, message)

    if(added){
      setName('');
      setEmail('')
      setMessage('')

      alert('Data added to Firestore')
    }
  }

  return (
    <main className="flex min-h-screen flex-col items-center p-10">
      <h1 className="text-5xl font-bold m-2">Add Data to FireStore Database</h1>

      <form onSubmit={handleSubmit}>
        <div className='mb-4'>
          <label>Name: </label>
          <input 
            type='text'
            id='name'
            value={name}
            onChange={(e)=> setName(e.target.value)}
          />
        </div>
        <div className='mb-4'>
          <label>Email: </label>
          <input 
            type='text'
            id='email'
            value={email}
            onChange={(e)=> setEmail(e.target.value)}
          />
        </div>
        <div className='mb-4'>
          <label>Message: </label>
          <textarea 
            rows={5}
            id='message'
            value={message}
            onChange={(e)=> setMessage(e.target.value)}
          > </textarea>
        </div>
        <div className='mb-4'>
          <button type='submit' className='bg-black text-white p-2'>
            Submit
          </button>
        </div>
      </form>
    </main>
  );
}
 