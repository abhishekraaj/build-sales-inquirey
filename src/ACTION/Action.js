import axios from 'axios';

export const login = (loginDetails) => {
  return async (dispatch) => {
    try {
      const response = await axios.post('http://192.168.20.131/api/login', loginDetails);
      dispatch({ type: 'LOGIN_SUCCESS', payload: response.data });
    } catch (error) {
      dispatch({ type: 'LOGIN_FAILURE', payload: error.message });
    }
  };
};


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// api 
//Login : 
// http://192.168.20.131/api/login
// himanhunanikwal@gmail.com
// Officer@123

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// export const LOGIN_REQUEST = 'LOGIN_REQUEST';
// export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
// export const LOGIN_FAILURE = 'LOGIN_FAILURE';


// export const loginRequest = () => ({
//   type: LOGIN_REQUEST,
// });

// export const loginSuccess = (user) => ({
//   type: LOGIN_SUCCESS,
//   payload: user,
// });

// export const loginFailure = (error) => ({
//   type: LOGIN_FAILURE,
//   payload: error,
// });


// export const login = (email, password) => {
//   return async (dispatch) => {
//     dispatch(loginRequest());

//     try {
    
//       const response = await fetch('http://192.168.20.131/api/login', {
        
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ email, password }),
        
//       });
      
//       if (!response.ok) {
//         throw new Error('Login failed');
//       }

//       const user = await response.json();
//       dispatch(loginSuccess(user));
//     } catch (error) {
//       dispatch(loginFailure(error.message));
    
//     }
//   };
// };




