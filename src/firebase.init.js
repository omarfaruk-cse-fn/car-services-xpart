// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from 'firebase/auth'

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCTdDe10W977E1X1yhaZJmcf4Mf9wsCIUs",
    authDomain: "car-services-xpart.firebaseapp.com",
    projectId: "car-services-xpart",
    storageBucket: "car-services-xpart.appspot.com",
    messagingSenderId: "1047649836357",
    appId: "1:1047649836357:web:45998d9793275255c7b22c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export default auth