import {
  GET_ALL_JOBS,
  GET_CATEGORY_JOBS,
  GET_COMPANY_JOBS,
  GET_QUERY_JOBS,
  JOBS_DISPLAY,
  JOBS_SEARCH_QUERY,
} from "../actions/index";

const initialState = {
  jobs: [],
  query_jobs: [],
  category_jobs: [],
  company_jobs: [],
  query: "",
  display: "",
};

const fetchJobsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_JOBS:
      return {
        ...state,
        jobs: action.payload.data.slice(0, 100),
      };
    case GET_QUERY_JOBS:
      return {
        ...state,
        query_jobs: action.payload.data.slice(0, 100),
      };
    case GET_COMPANY_JOBS:
      return {
        ...state,
        company_jobs: action.payload.data.slice(0, 20),
      };
    case GET_CATEGORY_JOBS:
      return {
        ...state,
        category_jobs: action.payload.data.slice(0, 20),
      };
    case JOBS_SEARCH_QUERY:
      return {
        ...state,
        query: action.payload,
      };
    case JOBS_DISPLAY:
      return {
        ...state,
        display: action.payload,
      };

    default:
      return state;
  }
};

export default fetchJobsReducer;
