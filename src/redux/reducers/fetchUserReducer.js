import { GET_MY_PROFILE, GET_SPECIFIC_PROFILE } from "../actions/index";

const initialState = {
  user_info: [],
  other_user_info: [],
};

const fetchUserReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_MY_PROFILE:
      return {
        ...state,
        user_info: action.payload,
      };
    case GET_SPECIFIC_PROFILE:
      return {
        ...state,
        other_user_info: action.payload,
      };

    default:
      return state;
  }
};

export default fetchUserReducer;
