import { configureStore, combineReducers } from "@reduxjs/toolkit";
import fetchUserReducer from "../reducers/fetchUserReducer";
import fetchUsersListReducer from "../reducers/fetchUsersListReducer";
import fetchExperiencesReducer from "../reducers/fetchExperiencesReducer";

const rootReducer = combineReducers({
  user: fetchUserReducer,
  users_list: fetchUsersListReducer,
  experiences_list: fetchExperiencesReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
