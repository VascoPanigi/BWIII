import { GET_EXPERIENCES_LIST } from "../actions/index";

const initialState = {
  experiences_list: [],
};

const fetchExperiencesReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_EXPERIENCES_LIST:
      return {
        ...state,
        experiences_list: action.payload,
      };

    default:
      return state;
  }
};

export default fetchExperiencesReducer;
