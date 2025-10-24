//importing and initializing firebase application
import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: "AIzaSyCLxN7X4NMFo1Kvl67YR1Je0cOpZ4pxiew",
  authDomain: "bookify-92ee3.firebaseapp.com",
  projectId: "bookify-92ee3",
  storageBucket: "bookify-92ee3.firebasestorage.app",
  messagingSenderId: "399658050737",
  appId: "1:399658050737:web:97e08b44240fe01d49ee90",
  measurementId: "G-QM14RJ5Y6L", 
  databaseUrl: "https://bookify-92ee3-default-rtdb.firebaseio.com/"
};
export const firebaseApp = initializeApp(firebaseConfig)



//creating and using context & then exporting it
import { createContext, useContext } from "react";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup,
     onAuthStateChanged } from "firebase/auth";
import { getFirestore, collection, addDoc, getDocs, doc, getDoc } from "firebase/firestore";
import { useState, useEffect } from "react";
const FirebaseContext = createContext(null)
export const useFirebase = () => useContext(FirebaseContext)
const firebaseAuth = getAuth(firebaseApp)
const GoogleProvider = new GoogleAuthProvider()
const firestore = getFirestore(firebaseApp)
export const FirebaseProvider = (props) => {
    const [user, setUser] = useState(null)
    useEffect(() => {
        onAuthStateChanged(firebaseAuth, (user) => {
            if(user){
                setUser(user)
            } else {
                setUser(null)
            }
        })
    }, [])
    
    const signUpwithEmailAndPassword = (email, password) => {
        return createUserWithEmailAndPassword(firebaseAuth, email, password)
        .then(() => alert("Congratulations, user created successfully!"))
        .catch((error) => console.log("error creating user", error))
    }

    const loginUserWithEmailAndPassword = (email, password) => {
         signInWithEmailAndPassword(firebaseAuth, email, password)
        .then(() => alert("Congratulations, user successfully logged in!"))
        .catch((error) => console.error("error logging in user", error))
    }

    const loginWithGoogle = () => {
        signInWithPopup(firebaseAuth, GoogleProvider)
    }
    
    const isLoggedIn = user? true : false
    
    const handleCreateNewListing = async (name, author, genre, isbn, price) => {
        await addDoc(collection(firestore, "books"), {
            name, 
            author,
            genre,
            isbn, 
            price,
            email: user.email,
            displayName: user.displayName,
            uid: user.uid
        }).then(() => alert("Success listing your book"))
    }

    const listAllBooks = () => {
        return getDocs(collection(firestore, "books"))
    }

    const getBookDetailsById = async (id) => {
        const docRef = doc(firestore, "books", id);
        const result = await getDoc(docRef);
        return result;
    }

     return (
        <>
            <FirebaseContext.Provider value={{signUpwithEmailAndPassword, loginUserWithEmailAndPassword, loginWithGoogle, handleCreateNewListing, listAllBooks,getBookDetailsById ,isLoggedIn}}>
                {props.children}
            </FirebaseContext.Provider>
        </>
    )
}
