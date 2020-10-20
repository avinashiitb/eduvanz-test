const defaultState = {
  auth: {
    isSignUp: false,
    isLoggedIn: false,
    OTP: false
  },
  activeUser: {},
  loader: false,
  location:{},
  notifications: []
}

export default function reducer(state = defaultState, action) {
    switch(action.type) {
      case 'LOG_IN': {
        // Check to see if the user exists with the correct password
        const userObj = action.payload.userData;
        // console.log("Login Reducer", userObj);
        return {...state, auth: {
            isLoggedIn: userObj.isLoggedIn,
            isSignUp: userObj.isSignUp,
            OTP: userObj.OTP
          },
          activeUser: {
            userObj
          }
        };
      }

      case 'LOADER': {
        // console.log('Logging Out');
        const loader = action.payload;
        return {
          ...state, ...loader
        };
      }
      case 'LOCATION': {
        // console.log('Logging Out');
        const location = action.payload;
        return {
          ...state, ...location
        };
      }
      case 'NOTIFICATION': {
        // console.log('Logging Out');
        const location = action.payload;
        return {
          ...state, ...location
        };
      }
      default:
        return state;
    }

  return state;
}
