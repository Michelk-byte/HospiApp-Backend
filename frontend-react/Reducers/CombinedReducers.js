import { combineReducers } from "redux";
import Login from "./LogInReducer";
import Signup from "./SignupReducer";

const allReducers = combineReducers({
  Login: Login,
  Signup: Signup,
});

export default allReducers;
