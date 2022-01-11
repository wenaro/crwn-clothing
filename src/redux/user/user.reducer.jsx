const INITIAL_STATE = {
  currentUser: null,
};

export const SET_CURRENTUSER_ACTION = "SET_CURRENT_USER";

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_CURRENTUSER_ACTION:
      return {
        ...state,
        currentUser: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;
