import { Api } from "./base.api";

const LOGIN_URL = "token/";
const REFRESH_URL = "token/refresh/";
const SIGN_OUT_URL = "signout/";
const SIGN_UP_URL = "register/";

export const login = (username: string, password: string) => {
  return Api.post(LOGIN_URL, { username: username, password: password });
};

export const refresh = () => {
  return Api.post(REFRESH_URL, {});
};

export const signOut = () => {
  return Api.post(SIGN_OUT_URL, {});
};

export const signUp = (username: string, email: string, password: string) => {
  return Api.post(SIGN_UP_URL, {
    username: username,
    email: email,
    password: password,
  });
};
