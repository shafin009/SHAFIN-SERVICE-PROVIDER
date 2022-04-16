// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAIGSBqaHCP8n20D0Zg4q4JXpABOpYOobQ",
    authDomain: "covid-data-d75c5.firebaseapp.com",
    projectId: "covid-data-d75c5",
    storageBucket: "covid-data-d75c5.appspot.com",
    messagingSenderId: "40485991280",
    appId: "1:40485991280:web:d17a82e87bfd29fa93d5b5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);



const auth = getAuth(app);

export default auth;