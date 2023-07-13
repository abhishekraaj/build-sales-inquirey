import axios from 'axios';

export const login = (loginDetails) => {
  return async (dispatch) => {
    try {
      const response = await axios.post('http://192.168.20.131/api/login', loginDetails);
      console.log(response, " res");
      const responseData = response.data;
      console.log(response, "response");
      console.log(response.data.data.token, "responseData");
      localStorage.setItem('user', JSON.stringify(responseData));
      localStorage.setItem('token' ,JSON.stringify(response.data.data.token))
      dispatch({ type: 'LOGIN_SUCCESS', payload: response.data });
      return responseData;
    } catch (error) {
      dispatch({ type: 'LOGIN_FAILURE', payload: error.message });
    }
  };
};

//Visitor Add : / List get list
// http://192.168.20.131/api/visitors/add

// export const getVisitorList = () => {
//   return async (dispatch) => {
//     try {
//       const user = JSON.parse(localStorage.getItem('user'));
//       console.log(user)
//       const token = user.data.token;
//       console.log(token )

//       const headers = {
//         Authorization: `${token}`,
//       };
//       console.log(headers)
//       const response = await axios.post(`http://192.168.20.131/api/visitors/get_lists`, headers);

//       console.log(response, 'response');
//       dispatch({ type: 'GET_VISITOR_LIST_SUCCESS', payload: response.data });
//       console.log(response.data)
//       return response.data;
//     } catch (error) {
//       dispatch({ type: 'GET_VISITOR_LIST_FAILURE', payload: error.message });
//     }
//   };
// };





// export const getVisitorList = () => {
//   return async (dispatch) => {
//     try {
//       const url = "http://192.168.20.131/api/visitors/get_lists"  // API url of visitors .
//       const user = JSON.parse(localStorage.getItem('user'));      // getting a token from localstorage by user key .
//       console.log(user);                                          // getting user-data-token .
//       const token = JSON.stringify(user.data.token);              // distructuring to get the token ..
//       console.log(token);                                         // token will get .

//       const headers = {
//         Authorization: `Bearer ${token}`,                          // passing the the token in headers 
//       };
//       console.log(headers);                                        // in console.log header , token was present 

//       const response = await axios.post(url,null, headers);        //passing a three parameters in body .

//       console.log(response, 'response');
//       dispatch({ type: 'GET_VISITOR_LIST_SUCCESS', payload: response.data });//{"status":false,"msg":"Authorization Token not found"}
//       console.log(response.data);                                   // Here i get a error - Authorization token was not found / status- false 
//       return response.data;                            
//     } catch (error) { 
//       dispatch({ type: 'GET_VISITOR_LIST_FAILURE', payload: error.message });
//     }
//   };
// };

// "count": 1,
//"page": 1,


export const getVisitorList = () => {
  return async (dispatch) => {
    try {
      const token = localStorage.getItem('token');
      console.log(token);

      const headers = {
        Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC8xOTIuMTY4LjIwLjEzMVwvYXBpXC9sb2dpbiIsImlhdCI6MTY4OTI0ODAxMiwiZXhwIjoxNjg5NDIwODEyLCJuYmYiOjE2ODkyNDgwMTIsImp0aSI6IkY5UTFmc0s1MGxJY3JNNmMiLCJzdWIiOjQ1LCJwcnYiOiI4N2UwYWYxZWY5ZmQxNTgxMmZkZWM5NzE1M2ExNGUwYjA0NzU0NmFhIn0.yJoG5hPTO3piWwCv3dOYpxyrsA1PCwD2arhmL0jiwe0`,
      };

      console.log(headers);

      const config = {
        headers: headers,
      };

      const response = await axios.post('http://192.168.20.131/api/visitors/get_lists', {project_id:18}, config);

      console.log(response, 'response');
      dispatch({ type: 'GET_VISITOR_LIST_SUCCESS', payload: response.data });
      console.log(response.data);
      return response.data;
    } catch (error) {
      dispatch({ type: 'GET_VISITOR_LIST_FAILURE', payload: error.message });
    }
  };
};
















