import React, { useState } from 'react'
import './SignUp.css'
import { auth } from './firebase';
import { useDispatch } from 'react-redux';
import { login } from './features/userSlice';
import logo from './ConnectifyLogos/logo-transparent-png.png'

function SignUp() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setname] = useState("");
    const [profilePic, setprofilePic] = useState("");
    const dispatch = useDispatch();

    const register = (e) => {
        e.preventDefault();

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
    <div className='signup'>
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
            placeholder='Full Name (required)'
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
            <button type='submit' onClick={register}>
                Sign Up
            </button>
        </form>
        {/* <p>Already a Member!!{" "}
            <span className='Login__Register' onClick={register}>
                Sign In
            </span>
        </p> */}
    </div>
  )
}


export default SignUp