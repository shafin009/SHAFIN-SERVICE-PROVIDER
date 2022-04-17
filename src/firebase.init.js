// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCGe18Sy13YkltfS8r24vgm4IyQZQj9I38",
    authDomain: "doctor-time-1b067.firebaseapp.com",
    projectId: "doctor-time-1b067",
    storageBucket: "doctor-time-1b067.appspot.com",
    messagingSenderId: "471338750375",
    appId: "1:471338750375:web:52ab64c6ade8033398a682"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;