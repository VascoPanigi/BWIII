import { GET_MY_PROFILE } from "../actions/index";

const initialState = {
  user_info: [],
};

const fetchUserReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_MY_PROFILE:
      return {
        ...state,
        user_info: action.payload,
      };

    default:
      return state;
  }
};

export default fetchUserReducer;
