const defaultState = {

}

export default function reducer(state = defaultState, action) {
    switch(action.type) {
      case 'USER_PROFILE': {
        // Check to see if the user exists with the correct password
        const userObj = action.payload;
        // console.log("Profile Reducer", userObj);
        return {...state, ...userObj
        };
      }
      default:
        return state;
    }
  return state;
}
