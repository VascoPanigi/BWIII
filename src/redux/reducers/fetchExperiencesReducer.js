import { GET_EXPERIENCES_LIST, ADD_EXPERIENCE, REMOVE_EXPERIENCE } from "../actions/index";

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
    case ADD_EXPERIENCE:
      return {
        ...state,
        experiences_list: [...state.experiences_list, action.payload],
      };
    case REMOVE_EXPERIENCE:
      return {
        ...state,
        experiences_list: state.experiences_list.filter((experience) => experience.id !== action.payload),
      };

    default:
      return state;
  }
};

export default fetchExperiencesReducer;
