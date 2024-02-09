import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendEmailVerification, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from 'firebase/auth';
import app from '../../firebase/firebase.config';

export const AuthContext = createContext()

const AuthProvider = ({children}) =>{

    const [loading, setLoading] = useState(true)
   const [user, setUser] = useState(null)
   const auth = getAuth(app)

   const signInPopUp = (provider) =>{
        setLoading(true)
        return signInWithPopup(auth, provider)
   }

   const createUser = (email, password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
   }
   
   const logIn = (email, password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
   }

   const updateUserProfile = (profile) =>{
        setLoading(true)
        return updateProfile(auth.currentUser, profile)
   }

   const emailVerification = () =>{
        setLoading(true)
        return sendEmailVerification(auth.currentUser)
   }

   const logOut = () =>{
        setLoading(true)
        return signOut(auth)
   }

   useEffect(() =>{
        const unSubscribe = onAuthStateChanged(auth, (currentUser) =>{
            console.log(currentUser)
            if(currentUser === null || currentUser.emailVerified){
                setUser(currentUser)
            }
            setLoading(false)
        })
        return () =>{
            unSubscribe()
        }
   }, [])

   const authInfo = {user, loading, setLoading, signInPopUp, logOut, logIn,
                    createUser, updateUserProfile, emailVerification}

    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;