import React, { createContext, useEffect, useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged, updateProfile, GoogleAuthProvider, signInWithPopup, updateEmail } from "firebase/auth";
import app from '../firebase/firebaseConfig';
import axios from 'axios';



export const AuthContext = createContext(null)
const auth = getAuth(app);
const AuthProvider = ({ children }) => {
    const provider = new GoogleAuthProvider();
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const loginUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logOut = () => {
        setLoading(true)
        return signOut(auth)
    }

    const singInWithGoogle = () => {
        setLoading(true)
        return signInWithPopup(auth, provider)

    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            if (currentUser) {
                axios.post('https://mazza-restaurent-server.vercel.app/jwt', { email: currentUser?.email })
                    .then(data => {
                        localStorage.setItem('access-token', data?.data?.token)
                    })
            }
            else {
                localStorage.removeItem('access-token')
            }
            setLoading(false)
        })
        return unsubscribe
    }, [])

    const updateUser = (name, image) => {
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: image,
        })
    }

    const emailUpdate = (email) => {
        return updateEmail(auth.currentUser, email)
    }



    const info = {
        createUser,
        loginUser,
        logOut,
        user,
        loading,
        updateUser,
        singInWithGoogle,
        emailUpdate

    }

    return (
        <AuthContext.Provider value={info}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;