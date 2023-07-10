import React, { useState } from 'react';
import { Link, useNavigate, } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../ACTION/Action';

function Login() {
    const dispatch = useDispatch();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const nav = useNavigate()
    
    const loginDetails = {
        email,
        password,
    }
    const handlelogin = (e) => {
        e.preventDefault();
        dispatch(login(loginDetails));
       
    }

    return (
        <div>
            <h1>LogIn Page For Sales Inquiry !.</h1>
            <input
                type="text"
                placeholder="Username"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="text"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={handlelogin}>LogIn</button>
        </div>
    )
} 
export default Login;


// import React, { useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { login } from '../ACTION/Action';


// const Login = () => {

//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const dispatch = useDispatch();
//   const loading = useSelector((state) => state.loading);
//   const error = useSelector((state) => state.error);

//   const handleLogin = (e) => {
//     e.preventDefault();
//     dispatch(login(email, password));
//   };

//   return (
//     <div>
//       <h1>Login to access the sales Inquirey ! ..</h1>
//       <div>
//         <label>Email:</label>
//         <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
//       </div>
//       <div>
//         <label>Password:</label>
//         <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
//       </div>
//       {loading && <p>Loading...</p>}
//       {error && <p>Error: {error}</p>}
//       <button onClick={handleLogin} disabled={loading}>Login</button>
//     </div>
//   );

// };

// export default Login;
