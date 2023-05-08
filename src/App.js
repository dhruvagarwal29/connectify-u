import React, { useEffect } from 'react';
import './App.css';
import Header from './Header';
import Sidebar from './Sidebar'
import Feed from './Feed'
import Widgets from './Widgets';
import {  useDispatch, useSelector } from 'react-redux';
import { login, logout, selectUser } from './features/userSlice';
import { auth } from './firebase';
import Welcome from './Welcome';


function App() { 

  const user = useSelector(selectUser)
  const dispatch = useDispatch();
  useEffect(()=> {
    auth.onAuthStateChanged(userAuth => {
      if (userAuth) {

        // user is logged in 
        dispatch(
          login({
            email: userAuth.email,
            uid: userAuth.uid,
            displayName: userAuth.displayName,
            photoURL: userAuth.photoURL,
          })
        );
      }
      else{
        // user is logged out
        dispatch(logout());
      }
    })
    // eslint-disable-next-line
  }, [])
  
  return (
    <div className="app">

      {/*Header */}
      <Header />
      {!user ? (
        <Welcome />
      ):(
        <div className="app__body">
        <Sidebar />
        <Feed />
        <Widgets />   
      </div>
      )}
      {/* <SignUp />
      {!user ? (
      <Login />
      ):(
      
      <div className="app__body">
        <Sidebar />
        <Feed />
        <Widgets />   
      </div>
      )} */}
    </div>

  
  );
  
}

export default App;

