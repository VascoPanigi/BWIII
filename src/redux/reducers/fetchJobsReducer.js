import { GET_ALL_JOBS, GET_CATEGORY_JOBS, GET_COMPANY_JOBS, GET_QUERY_JOBS } from "../actions/index";

const initialState = {
  jobs: [],
  query_jobs: [],
  category_jobs: [],
  company_jobs: [],
};

const fetchPostsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_JOBS:
      return {
        ...state,
        jobs: action.payload.slice(-100, -1),
      };
    case GET_QUERY_JOBS:
      return {
        ...state,
        query_jobs: action.payload,
      };
    case GET_COMPANY_JOBS:
      return {
        ...state,
        company_jobs: action.payload,
      };
    case GET_CATEGORY_JOBS:
      return {
        ...state,
        category_jobs: action.payload,
      };

    default:
      return state;
  }
};

export default fetchPostsReducer;
