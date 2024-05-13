import { GET_PROFILES_LIST } from "../actions/index";

const initialState = {
  users_list: [],
};

const fetchUsersListReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PROFILES_LIST:
      return {
        ...state,
        users_list: action.payload,
      };

    default:
      return state;
  }
};

export default fetchUsersListReducer;
