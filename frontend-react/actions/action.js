// login actions

export const CHECK_IN = "CHECK_IN"; //1
export const SIGN_UP = "SIGN_UP"; //2
export const ERROR_IN = "LOGGED_IN"; //3
export const DATA_IN = "DATA_IN"; //4
export const MESSAGE_UP = "MESSAGE_UP"; //5
export const STATUS = "STATUS"; //6
export const REGISTER = "REGISTER"; //7
export const ERROR_CRED = "ERROR_CRED"; //7

//1
export const checkIn = (data) => ({
  type: CHECK_IN,
  payload: data,
});

//2
export const signUp = (data) => ({
  type: SIGN_UP,
  payload: data,
});

//3
export const errorin = (data) => ({
  type: ERROR_IN,
  payload: data,
});

//4
export const datain = (data) => ({
  type: DATA_IN,
  payload: data,
});

//5
export const messageup = (data) => ({
  type: MESSAGE_UP,
  payload: data,
});

//6
export const status = (data) => ({
  type: STATUS,
  payload: data,
});

//7
export const register = (data) => ({
  type: REGISTER,
  payload: data,
});

//8
export const errorcred = (data) => ({
  type: ERROR_CRED,
  payload: data,
});
