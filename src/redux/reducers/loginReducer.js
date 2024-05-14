import { SET_USER_LOGGED, TOGGLE_IS_LOGGED, TOGGLE_STATE } from "../actions/index";

const initialState = {
  isLogged: false,
  userLoggedID: null,
  state: false,
};

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_IS_LOGGED:
      return {
        ...state,
        isLogged: true,
      };
    case SET_USER_LOGGED:
      return {
        ...state,
        userLoggedID: action.payload,
      };
    case TOGGLE_STATE:
      return {
        ...state,
        state: action.payload,
      };

    default:
      return state;
  }
};

export default loginReducer;
