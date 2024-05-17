import { GET_COMMENTS, RETURN_SPECIFIC_POST_COMMENTS } from "../actions/index";

const initialState = {
  all_comments: [],
  specific_post_comments: [],
  specific_post_id: "",
};

const fetchExperiencesReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_COMMENTS:
      return {
        ...state,
        all_comments: action.payload,
      };
    case RETURN_SPECIFIC_POST_COMMENTS:
      return {
        ...state,
        specific_post_id: action.payload,
        specific_post_comments: state.all_comments.filter((comment) => comment.elementId === action.payload),
      };
    default:
      return state;
  }
};

export default fetchExperiencesReducer;
