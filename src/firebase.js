import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { toast } from "react-toastify";

const firebaseConfig = {
  apiKey: "AIzaSyB6hkD6sRNPiwTMTUtBpcg6unpmcGfjov8",
  authDomain: "netflix-clone-f2535.firebaseapp.com",
  projectId: "netflix-clone-f2535",
  storageBucket: "netflix-clone-f2535.firebasestorage.app",
  messagingSenderId: "818336343390",
  appId: "1:818336343390:web:be14d1d5b055d598441bcf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize aunthentication
const auth = getAuth(app)
// Initialize database
const db = getFirestore(app)

// signup function
const signUp = async (name, email, password)=>{
    try {
        // creating new user with email and password
      const res =  await createUserWithEmailAndPassword(auth , email, password);
      // after created new user it will store that user like response with id 
      const user = res.user;
      /// after creating the user store in database
      await addDoc(collection(db,"user"),{
        uid : user.uid,
        name ,
        authProvider : "local",
        email
      })
    } catch (error) {
        console.log(error);
        toast.error(error.code.split('/')[1].split('-').join(' '))
        
    }
}

/// login function
const login = async (email, password)=>{
    try {
        await signInWithEmailAndPassword(auth, email, password)
    } catch (error) {
        console.log(error);
        toast.error(error.code.split('/')[1].split('-').join(' '))
    }
}

/// logout function
const logout = ()=>{
   signOut(auth)
}

export {auth, db, signUp, login, logout};
