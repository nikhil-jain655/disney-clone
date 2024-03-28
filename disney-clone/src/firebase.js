

import { initializeApp } from "firebase/app";
import { GoogleAuthProvider } from "firebase/auth";
import { getAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCF-nEBuGo2MvbucI3hrgs3SyBtqf8q8DY",
    authDomain: "disneyplus-b4b52.firebaseapp.com",
    projectId: "disneyplus-b4b52",
    storageBucket: "disneyplus-b4b52.appspot.com",
    messagingSenderId: "552514116062",
    appId: "1:552514116062:web:f4515c719207f4f80ca54f",
    measurementId: "G-M21JWGCLVG"
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);

const auth = getAuth();
const googleAuthProvider = new GoogleAuthProvider();

// const storage = fireBase.storage();

export {auth, googleAuthProvider};
export default db;
