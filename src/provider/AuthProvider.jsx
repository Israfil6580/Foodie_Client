
/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from 'react'
import {
    GithubAuthProvider,
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    getAuth,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signInWithPopup,
    signOut,
    updateProfile,
} from 'firebase/auth'
import { app } from '../firebase/firebase.config'
import axios from 'axios'

export const AuthContext = createContext(null)
const auth = getAuth(app)
const googleProvider = new GoogleAuthProvider()

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(false)
    const [customLoading, setCustomLoading] = useState(true)
    const [see, setSee] = useState(true);
    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }


    const signInWithGoogle = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }
    const signInWithGithub = () => {
        setLoading(true);
        const provider = new GithubAuthProvider();
        return signInWithPopup(auth, provider)
    };
    const logOut = async () => {
        setLoading(true)
        const { data } = await axios('https://server-five-coral.vercel.app/logout', { withCredentials: true })
        console.log(data);
        return signOut(auth)
    }

    const updateUserProfile = (name, photo) => {
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photo,
        })
    }
    const seeOrNot = () => {
        setSee(!see);
    };

    // onAuthStateChange observer
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            setCustomLoading(false)
            setLoading(false)
        })
        return () => {
            return unsubscribe()
        }
    }, [])

    const authInfo = {
        user,
        setUser,
        loading,
        setLoading,
        customLoading,
        createUser,
        signIn,
        signInWithGoogle,
        signInWithGithub,
        logOut,
        updateUserProfile,
        seeOrNot,
        see
    }

    return (
        <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    )
}

export default AuthProvider
