import React, { useState } from 'react';
import {useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { login } from '../ACTION/Action';
import './Login.css'

function Login() {
    const dispatch = useDispatch();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const nav = useNavigate()
    
    const loginDetails = {
        email,password
    }
    const handlelogin = (e) => {
        if (email.trim() === '' || password.trim() === '') {
            alert('Please enter both email and password.');
            return; 
          }
        e.preventDefault();
        dispatch(login(loginDetails));
        nav("/table")
       
    }

    return (
        <div className='login-container'>
            <h1 className="login-title" >LogIn Page For Sales Inquiry !.</h1>
            <input
                type="text"
                placeholder="Username"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="login-input"
            />
            <input
              type="text"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="login-input"
            />
            <button onClick={handlelogin} className="login-button">LogIn</button>
        </div>
    )
} 
export default Login;

// api
//Login :
// http://192.168.20.131/api/login
// himanhunanikwal@gmail.com
// Officer@123
