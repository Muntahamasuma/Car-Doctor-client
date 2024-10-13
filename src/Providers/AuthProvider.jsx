import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import app from "../Firebase/firebase.config";

export const AuthContext = createContext()
const auth = getAuth(app)



const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null)
    const [loading, setLoding] = useState(true)

    const createUser = (email, password)=>{
        setLoding(true)
        return createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed up 
          const user = userCredential.user;
          console.log(user)
          // ...
        })
        .catch((error) => {
          console.error(error)
          // ..
        });
    }

    const signIn = (email, password) => {
        setLoding(true)
        return signInWithEmailAndPassword(auth,email,password)
    }

    useEffect(()=>{
        const unsubscriber = onAuthStateChanged(auth, currentUser =>{
            setUser(currentUser)
            setLoding(false)
            console.log(currentUser)
        })
        return () =>{
            return unsubscriber();
        }
    },[])

    const authInfo = {
        createUser,
        user,
        loading,
        signIn
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;