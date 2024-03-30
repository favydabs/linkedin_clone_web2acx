// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCiNWNBaOTeP9BYw5_ZlFb2X_KTad8FeHo",
  authDomain: "linkedin-clone-19cb8.firebaseapp.com",
  projectId: "linkedin-clone-19cb8",
  storageBucket: "linkedin-clone-19cb8.appspot.com",
  messagingSenderId: "1016820916713",
  appId: "1:1016820916713:web:c65fad0dba97af587b2b78",
  measurementId: "G-4HDHLTL6PG",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);
const storage = getStorage(app);
export { auth, app, firestore, storage };
