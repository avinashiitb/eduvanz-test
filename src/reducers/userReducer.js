const defaultState = {
  List: [],
}

export default function reducer(state = defaultState, action) {
    switch(action.type) {
      case 'REGISTER': {
        // Check to see if the user exists with the correct password
        const newUser = action.payload;
        // console.log("newUser", newUser);
        const List = [...state.List]
        // console.log("reducer before", newList);
        List.push(newUser);
        // console.log("reducer", newList);
        return {...state, List
        };
      }
      default:
        return state;
    }
  return state;
}
