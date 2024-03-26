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


- Firestore Database 
    - Create database in test mode
    - import db in 'firebaseConfig.js'

            import { getFirestore } from 'firebase/firestore'

            const db = getFirestore(app)

            export {db}

