import type { ResponseToken } from "@/components/AuthProviders";
import axios from "axios";

export const AuthApi = axios.create({
  baseURL: "http://localhost:8080/api/auth/",
  headers: { "Content-Type": "application/json" },
  withCredentials: true,
});

const LOGIN_URL = "login";
const REFRESH_URL = "refresh-token";
const SIGN_OUT_URL = "sign-out";
const SIGN_UP_URL = "signup";

export async function login(
  username: string,
  password: string
): Promise<ResponseToken> {
  const { data } = await AuthApi.post(LOGIN_URL, {
    username: username,
    password: password,
  });

  return data;
}

export const refresh = () => {
  return AuthApi.post(REFRESH_URL, {});
};

export const signOut = () => {
  return AuthApi.post(SIGN_OUT_URL, {});
};

export const signUp = (username: string, email: string, password: string) => {
  return AuthApi.post(SIGN_UP_URL, {
    username: username,
    email: email,
    password: password,
  });
};
