import fetchExperiencesReducer from '../reducers/fetchExperiencesReducer'
import { configureStore, combineReducers } from '@reduxjs/toolkit'
import fetchUserReducer from '../reducers/fetchUserReducer'
import fetchUsersListReducer from '../reducers/fetchUsersListReducer'
import modalReducer from '../reducers/modalReducer'

const rootReducer = combineReducers({
  user: fetchUserReducer,
  users_list: fetchUsersListReducer,
  experiences_list: fetchExperiencesReducer,
  modal: modalReducer,
})

const store = configureStore({
  reducer: rootReducer,
})

export default store
