import { LOGGED_IN, DATA_IN } from "../actions/action";

const initial = {
  logged: false,
  data: null,
};

const LoggedReducer = (state = initial, action) => {
  switch (action.type) {
    case LOGGED_IN:
      return { ...state, logged: action.payload };
    case DATA_IN:
      return { ...state, data: action.payload };
    default:
      return state;
  }
};

export default LoggedReducer;
