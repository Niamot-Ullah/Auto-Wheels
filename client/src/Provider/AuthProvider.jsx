import React, { createContext, useEffect, useState } from 'react';
import app from './../firebase/firebase.config';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import axios from 'axios';
export const AuthContext = createContext()

const auth = getAuth(app)
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    // console.log(loading, user);

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const logOut = () => {
        return signOut(auth)
    }
    const login = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const updateUser = (updatedData) => {
        return updateProfile(auth.currentUser, updatedData)
    }


    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
//
            // if (currentUser?.email) {
            //     axios
            //         .post(
            //             `${import.meta.env.VITE_API_URL}/jwt`,
            //             {
            //                 email: currentUser?.email,
            //             },
            //             {
            //                 withCredentials: true, //mandatory to store token in browser cookie
            //             }
            //         )
            //         .then(res => {
            //             // to store token in localstorage method only
            //             // localStorage.setItem('token', res.data.token)

            //             console.log(res.data)
            //         })
            // } else {
            //     localStorage.removeItem('token')
            // }
//
            setLoading(false)
        })
        return () => {
            unsubscribe()
        }
    }, [])

    const authData = {
        user,
        setUser,
        createUser,
        logOut,
        login,
        loading,
        setLoading,
        updateUser,
        auth,
    }
    return <AuthContext value={authData}>{children}</AuthContext>
}



export default AuthProvider;