// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyCaQFwNxJ3wmhchJr2hiKuotVmlpgHMCkI",
    authDomain: "jordan-choir-site.firebaseapp.com",
    projectId: "jordan-choir-site",
    storageBucket: "jordan-choir-site.appspot.com",
    messagingSenderId: "182299826237",
    appId: "1:182299826237:web:787feaed3384b0e51d3254",
    measurementId: "G-W3WFXLG7PP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// export const auth = getAuth(app);
// export const googleProvider = new GoogleAuthProvider();
export const storage = getStorage(app);
export const db = getFirestore(app);
