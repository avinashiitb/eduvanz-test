const defaultState = {
  myStoreList: [],
}

export default function reducer(state = defaultState, action) {
    switch(action.type) {
      case 'ADMIN_STORE_LIST': {
        // Check to see if the user exists with the correct password
        const storeObj = action.payload;
        // console.log("Reducer", storeObj);
        return {...state, ...storeObj
        };
      }
      default:
        return state;
    }

  return state;
}
