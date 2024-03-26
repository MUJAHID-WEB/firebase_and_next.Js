// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA7r-UYnzCPXs3vXLIcJSl6p1IZpzHesiA",
  authDomain: "sample-42f42.firebaseapp.com",
  projectId: "sample-42f42",
  storageBucket: "sample-42f42.appspot.com",
  messagingSenderId: "17525318164",
  appId: "1:17525318164:web:f97bfae62a25f57e7efd01"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

export {db}