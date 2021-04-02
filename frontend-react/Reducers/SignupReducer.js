import { MESSAGE_UP, STATUS, REGISTER } from "../actions/action";

const initial = {
  status: "",
  message: "",
  register: false,
};

const SignedUpReducer = (state = initial, action) => {
  switch (action.type) {
    case STATUS:
      return { ...state, status: action.payload };
    case MESSAGE_UP:
      return { ...state, message: action.payload };
    case REGISTER:
      return { ...state, register: action.payload };
    default:
      return state;
  }
};

export default SignedUpReducer;
