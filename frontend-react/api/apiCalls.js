import api from "./index";

export const CheckLogIn = async (data) => {
  try {
    const res = await api.post("/user/login", data);
    console.log(res);
    return res;
  } catch (error) {
    return -1;
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
