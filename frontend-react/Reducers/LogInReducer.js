import { DATA_IN, ERROR_IN, ERROR_CRED } from "../actions/action";

const initial = {
  data: null,
  error: "",
  status: false,
};

const LoggedReducer = (state = initial, action) => {
  switch (action.type) {
    case ERROR_IN:
      return { ...state, error: action.payload };
    case DATA_IN:
      return { ...state, data: action.payload };
    case ERROR_CRED:
      return { ...state, status: action.payload };
    default:
      return state;
  }
};

export default LoggedReducer;
