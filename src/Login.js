import React, { useState } from 'react'
import './Login.css'
import { auth } from './firebase';
import { useDispatch } from 'react-redux';
import { login } from './features/userSlice';
import logo from './ConnectifyLogos/logo-transparent-png.png'

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setname] = useState("");
    const [profilePic, setprofilePic] = useState("");
    const dispatch = useDispatch();

    const loginToAPP = (e) => {
        e.preventDefault();

        auth.signInWithEmailAndPassword(email, password)
        .then(userAuth => {
            dispatch(login({
                email: userAuth.user.email,
                uid: userAuth.user.uid,
                displayName: userAuth.user.displayName,
                profileURL: userAuth.user.photoURL,
            }))
        }).catch((error) => alert(error) ) 

    };
    const register = () => {
        if (!name){
            return alert("Please Enter Your Full Name");
        }
        auth.createUserWithEmailAndPassword(email, password)
        .then((userAuth) => {
            userAuth.user.updateProfile({
                displayName: name,
                photoURL: profilePic,
            })
            .then(() => {
                dispatch(
                    login({
                    email: userAuth.user.email,
                    uid: userAuth.user.uid,
                    displayName: name,
                    photoURL: profilePic,
                }))
            })
        }).catch(error => alert(error))
    };
  return (
    <div className='login'>
        <img src = {logo} 
         alt = ""/>
        <form>
            <input 
            value={profilePic}
            onChange = {(e) => setprofilePic(e.target.value)}
            placeholder='Profile Pic URL (optional)'
            type="text" />

            <input 
            value={name}
            onChange = {(e) => setname(e.target.value)}
            placeholder='Full Name (required if new here)'
            type="text" />

            <input 
                value={email}
                onChange = {(e) => setEmail(e.target.value)}
                placeholder='Email'
                type="email"
            />
            <input 
                value={password}
                onChange = {(e) => setPassword(e.target.value)}
                placeholder='Password'
                type="password" 
            />
            <button type='submit' onClick={loginToAPP}>
                Sign In
            </button>
        </form>
        <p>Not a Member!!{" "}
            <span className='Login__Register' onClick={register}>
                Sign Up
            </span>
        </p>
    </div>
  )
}

export default Login