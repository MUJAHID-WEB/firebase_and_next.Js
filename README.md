# Sample web for Firebase firstore database connect with Next.Js

- Run Command:

        npm i firebase

- Setup Firebase project in https://console.firebase.google.com/

- Configure web app

    - Register app
    - Add Firebase SDK
      - make a file name 'firebaseConfig.js' and paste it

            import { initializeApp } from "firebase/app";
            import { getFirestore } from 'firebase/firestore'

            // Your web app's Firebase configuration
            const firebaseConfig = {
            apiKey: "",
            authDomain: "",
            projectId: "",
            storageBucket: "",
            messagingSenderId: "",
            appId: ""
            };

            // Initialize Firebase
            const app = initializeApp(firebaseConfig);




- Setup Authentication in firebase
    - Create sign-in method in firebase Authentication
    - import auth in 'firebaseConfig.js'

           
            import {getAuth} from 'firebase/auth'

            export const auth = getAuth(app)



- Set the page for Signup through Sign up Form


            import { createUserWithEmailAndPassword } from "firebase/auth"
            import {auth} from '../firebaseConfig'
            import Link from "next/link"
            import { useState } from "react"


            const [email, setEmail] = useState('')
            const [password, setPassword] = useState('')

            const signup = async () =>{
                if(email === '' || password === ''){
                    return alert('Please fill all fields')
                }
                try{
                    const user = await createUserWithEmailAndPassword(auth, email, password)

                    alert('Signup Successfully')

                    setEmail('')
                    setPassword('')

                }catch(error){
                    console.log(error)
                }
            }


            <input type="email"
                name='email'
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
            />

            <input
                type="password"
                value={password}
                onChange={(e)=>setPassword(e.target.value)}
            />

            <button
                onClick={signup}>
                Signup
            </button>





- Add data to Firestore Database 
    - Create database in test mode
    - import db in 'firebaseConfig.js'

            import { getFirestore } from 'firebase/firestore'

            const db = getFirestore(app)

            export {db}



- Set the page from where data sent to database through Form

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
            


- Fetch data from Firestore Database 
    - Create database in test mode
    - import db in 'firebaseConfig.js'

            import { getFirestore } from 'firebase/firestore'

            const db = getFirestore(app)

            export {db}



- Set the page where data get from database through doc

            'use client'

            import React, { useEffect, useState } from 'react'
            import {db} from '../app/firebaseConfig'
            import {collection, getDocs} from 'firebase/firestore'


            async function fetchDataFromCollection(){
                const querySnapshot = await getDocs(collection(db, 'messages'))

                const data = []
                querySnapshot.forEach(doc=>{
                    data.push({id: doc.id, ...doc.data()})
                })
                return data
            }


            function FetchDataFromFirestore() {
                const [messagesData, setMessagesData]=useState([])

                useEffect(()=>{
                    async function fetchMessages(){
                        const data = await fetchDataFromCollection()

                        setMessagesData(data)
                    }
                    fetchMessages()
                },[])

            return (
                <div>
                <h1 className='font-bold text-3xl text-center mb-3'>Fetch Data From Firestore</h1>

                <div className=' flex flex-wrap gap-5'>
                    {
                        messagesData.map((message)=>(
                            <div key={message.id} className='bg-blue-400 p-3'>

                            <h3>Name: {message.name}</h3>
                            <h5>email: {message.email}</h5>
                            <p>Message: {message.message}</p>

                            </div>
                        ))
                    }
                </div>
                </div>
            )
            }

            export default FetchDataFromFirestore



