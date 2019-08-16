import { combineReducers } from "redux";
import authReducer from "./authReducer";
import { reducer as formReducer } from "redux-form"; // getting the in built reducer and naming it as formReducer
import streamReducer from "./streamReducer";
export default combineReducers({
  auth: authReducer,
  form: formReducer,
  streams: streamReducer
});
