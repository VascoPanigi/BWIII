import { configureStore, combineReducers } from "@reduxjs/toolkit";
import fetchUserReducer from "../reducers/fetchUserReducer";
import fetchUsersListReducer from "../reducers/fetchUsersListReducer";

const rootReducer = combineReducers({
  user: fetchUserReducer,
  users_list: fetchUsersListReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
