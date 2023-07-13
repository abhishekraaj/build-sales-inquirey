
const initialState = {
  loggedIn: false,
  user: null,
  error: null,
  visitorList: [],
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

      case 'GET_VISITOR_LIST_SUCCESS':
        return {
          ...state,
          visitorList: action.payload,
          error: null,
        };
      case 'GET_VISITOR_LIST_FAILURE':
        return {
          ...state,
          visitorList: [],
          error: action.payload,
        };
        

    



    default:
      return state;
  }
};

export default authReducer;
  


