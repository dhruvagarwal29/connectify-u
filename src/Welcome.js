// import React from 'react'
// import './Welcome.css'
// import logo from './ConnectifyLogos/logo-transparent-png.png'
// function Welcome() {
//   return (
//     <div className=' heading' >
//         <img src = {logo} />
//         <p>
//             Hi, Welcome to my Messenger Site. This is a platform I made to have to fun with friends and 
//             family. I hope you enjoy this. 
//         </p>
//         <button type='submit' onClick="login" >
//             <div className = "b1">
//                 Already a Member!! Sign In
//             </div>
//         </button>
//         <button  type='submit' onClick="signup">
//             <div className= 'b2'>
//             Not a Member!! Sign Up
//             </div> 
//         </button>
//         <div className='portfolio'>
//             Made by Dhruv Agarwal, Please check my <a href='https://dhruvagarwal.netlify.app/' > Portfolio!</a>
            

//         </div>

//         <div>

//         </div>
//     </div>
//   )
// }

// export default Welcome


import React, { useState, useRef , useEffect} from 'react';
import './Welcome.css';
import logo from './ConnectifyLogos/logo-transparent-png.png';
import Login from './Login';
import SignUp from './SignUp';


function Welcome() {
  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);
  const loginRef = useRef(null);
  const signUpRef = useRef(null);

  const handleLoginClick = () => {
    setShowLogin(true);

  };

  const handleSignupClick = () => {
    setShowSignup(true);

  };
  

  useEffect(() => {
    if (loginRef.current) {
      loginRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [showLogin]);

  useEffect(() => {
    if (signUpRef.current) {
      signUpRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [showSignup])

  return (
    <div className='heading'>
      <img src={logo} alt='logo' />
      <p>
        Hi, Welcome to my Messenger Site. This is a platform I made to chat with friends and family. I hope you enjoy this.
      </p>
      
        <button type='button' onClick={handleLoginClick}>
            <div className="b1">
            Already a Member!! Sign In
            </div>
        </button>
      
      <button type='button' onClick={handleSignupClick}>
        <div className='b2'>
          Not a Member!! Sign Up
        </div>
      </button>
      <div className='portfolio'>
        Made by Dhruv Agarwal, Please check my <a href='https://dhruvagarwal.netlify.app/'> Portfolio!</a>
      </div>
      { showLogin && (
        <div ref={loginRef}>
          <Login />

        </div>
      )}

      { showSignup && (
        <div ref={signUpRef}>
          <SignUp />
          

        </div>
        
      )}

    </div>
  );
}

export default Welcome;
