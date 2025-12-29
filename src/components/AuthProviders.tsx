import axios from "axios";
import {
  createContext,
  useContext,
  useEffect,
  useLayoutEffect,
  useState,
} from "react";
import { Api } from "../api/base.api";

type Props = {
  children: React.ReactNode;
};

export type ResponseToken = {
  username: string;
  email: string;
  roles: "ROLE_USER" | "ROLE_ADMIN";
  token: string;
  type: "Bearer";
};

export type AuthContextType = {
  auth: ResponseToken | undefined;
  setAuth: React.Dispatch<React.SetStateAction<ResponseToken | undefined>>;
  loading: boolean;
  isAuthenticated: boolean;
};

const AuthContext = createContext<AuthContextType | null>(null);

export const useAuth = () => {
  const authContext = useContext(AuthContext);

  if (!authContext) {
    throw new Error("useAuth must be used within an AuthProvider");
  }

  return authContext;
};

export function AuthProvider({ children }: Props) {
  const [auth, setAuth] = useState<ResponseToken | undefined>(undefined);
  const [loading, setLoading] = useState(true);
  const isAuthenticated = !!auth;
  useEffect(() => {
    const fetchAccess = async () => {
      try {
        console.log("Checking access cookies");
        const { data }: { data: ResponseToken } = await axios.post(
          "http://localhost:8080/api/auth/refresh-token",
          {},
          { withCredentials: true }
        );
        setAuth(data);
      } catch (error) {
        console.log("Cookie is not valid: ", error);
        setAuth(undefined);
      } finally {
        setLoading(false);
      }
    };
    fetchAccess();
  }, []);

  useLayoutEffect(() => {
    const authInterceptor = Api.interceptors.request.use(
      (config) => {
        if (auth?.token && !config.headers["Authorization"]) {
          config.headers["Authorization"] = `Bearer ${auth.token}`;
        }
        return config;
      },
      (error) => Promise.reject(error)
    );
    return () => {
      Api.interceptors.request.eject(authInterceptor);
    };
  }, [auth]);

  useLayoutEffect(() => {
    const refreshInterceptor = Api.interceptors.response.use(
      (response) => response,
      async (error) => {
        const originalRequest = error?.config;

        if (error?.response?.status === 401 && !originalRequest._retry) {
          originalRequest._retry = true;

          try {
            const { data }: { data: ResponseToken } = await axios.post(
              "http://localhost:8080/api/auth/refresh-token",
              {},
              { withCredentials: true }
            );
            // console.log("Interceptor data:", data);
            setAuth(data);

            originalRequest.headers["Authorization"] = `Bearer ${data.token}`;

            return Api(originalRequest);
          } catch (refreshError) {
            console.log("Refresh request failed: ", refreshError);

            setAuth(undefined);
            return Promise.reject(refreshError);
          }
        }
        return Promise.reject(error);
      }
    );
    return () => {
      Api.interceptors.response.eject(refreshInterceptor);
    };
  }, [auth]);

  return (
    <AuthContext.Provider value={{ auth, setAuth, loading, isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
}
