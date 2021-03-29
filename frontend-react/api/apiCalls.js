import api from "./index";

export const CheckLogIn = async (data) => {
  console.log(data.action.payload.email);
  try {
    const res = await api.post("/user/login", data);
    console.log(res.data);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const SignUp = async (data) => {
  console.log(data);
  try {
    const res = await api.post("/user/signup", data);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const logOut = async () => {
  try {
    const res = await api.get(".../...");
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
