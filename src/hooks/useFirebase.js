import { useState } from "react"
import initializeAuthentication from "../Firebase/firebase.init";
import { getAuth, signInWithPopup, GoogleAuthProvider,FacebookAuthProvider ,GithubAuthProvider, onAuthStateChanged , signOut  } from "firebase/auth";
import { useEffect } from "react";

initializeAuthentication();

const useFirebase = () =>{
    const [user, setUser] = useState({});
    console.log(user.displayName)
    const [error, setError] = useState('');
    const googoleProvider = new GoogleAuthProvider();
    const facebookProvider = new FacebookAuthProvider();
    const githubProvider = new GithubAuthProvider ();
    const auth = getAuth();

    const signInUseingGoogle = () =>{
        signInWithPopup(auth, googoleProvider)
        .then(result =>{
            console.log(result.user);
            setUser(result.user);
        })
        .catch(error =>{
            setError(error.message);
        })
    }

    const signInUsingFacebook = () =>{
        signInWithPopup(auth, facebookProvider)
        .then(result =>{
            setUser(result.user)
        })
        .catch(error =>{
            setError(error.message);
        })
    }

    const signInUsingGithub = () =>{
        signInWithPopup(auth, githubProvider)
        .then(result =>{
            setUser(result.user)
        })
        .catch(error => {
            setError(error.message)
        })
    }

    const logout = () =>{
        signOut(auth)
        .then( () =>{
            setUser({})
        })
    }

    useEffect( () =>{
        onAuthStateChanged(auth, user =>{
            if(user){
                // console.log('inside sate change', user)
                setUser(user)
            }
        })
    }, [])

    return{
        user,
        error,
        logout,
        signInUseingGoogle,
        signInUsingFacebook,
        signInUsingGithub
    }

};

export default useFirebase;