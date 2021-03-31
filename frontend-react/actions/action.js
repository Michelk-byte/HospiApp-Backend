// login actions

export const CHECK_IN = "CHECK_IN"; //1
export const SIGN_UP = "SIGN_UP"; //2
export const LOGGED_IN = "LOGGED_IN"; //3
export const DATA_IN = "DATA_IN"; //4

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
export const loggedIn = (data) => ({
  type: LOGGED_IN,
  payload: data,
});

//4
export const datain = (data) => ({
  type: DATA_IN,
  payload: data,
});
