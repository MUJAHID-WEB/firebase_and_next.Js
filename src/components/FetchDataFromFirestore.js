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