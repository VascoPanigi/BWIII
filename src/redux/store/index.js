import fetchExperiencesReducer from "../reducers/fetchExperiencesReducer";
import { configureStore, combineReducers } from "@reduxjs/toolkit";
import fetchUserReducer from "../reducers/fetchUserReducer";
import fetchUsersListReducer from "../reducers/fetchUsersListReducer";
import modalReducer from "../reducers/modalReducer";
import loginReducer from "../reducers/loginReducer";
import fetchPostsReducer from "../reducers/fetchPostsReducer";
import fetchJobsReducer from "../reducers/fetchJobsReducer";

const rootReducer = combineReducers({
  user: fetchUserReducer,
  users_list: fetchUsersListReducer,
  experiences_list: fetchExperiencesReducer,
  modal: modalReducer,
  login: loginReducer,
  posts: fetchPostsReducer,
  jobs: fetchJobsReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
