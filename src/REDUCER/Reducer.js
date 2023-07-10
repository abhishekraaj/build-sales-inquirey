
const initialState = {
  loggedIn: false,
  user: null,
  error: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN_SUCCESS':
      return {
        ...state,
        loggedIn: true,
        user: action.payload,
        error: null,
      };
    case 'LOGIN_FAILURE':
      return {
        ...state,
        loggedIn: false,
        user: null,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default authReducer;
  

// import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE } from '../ACTION/Action';


// const initialState = {
//   user: null,
//   loading: false,
//   error: null,
// };


// const authReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case LOGIN_REQUEST:
//       return {
//         ...state,
//         loading: true,
//         error: null,
//       };
//     case LOGIN_SUCCESS:
//       return {
//         ...state,
//         user: action.payload,
//         loading: false,
//         error: null,
//       };
//     case LOGIN_FAILURE:
//       return {
//         ...state,
//         loading: false,
//         error: action.payload,
//       };
//     default:
//       return state;
//   }
// };

// export default authReducer;
