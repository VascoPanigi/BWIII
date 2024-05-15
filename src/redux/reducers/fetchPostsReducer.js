import { GET_ALL_POSTS, GET_SPECIFIC_POST } from "../actions/index";

const initialState = {
  posts: [],
  specific_post: [],
};

const fetchPostsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_POSTS:
      return {
        ...state,
        comments: action.payload,
      };
    case GET_SPECIFIC_POST:
      return {
        ...state,
        specific_post: action.payload,
      };

    default:
      return state;
  }
};

export default fetchPostsReducer;