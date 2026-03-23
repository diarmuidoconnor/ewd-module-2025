import { useState, createContext, type PropsWithChildren } from "react";
import fakeAuth from '../fakeAuth';
import { AuthContextInterface } from "../types/interfaces";

export const AuthContext = createContext<AuthContextInterface | null>(null);

const AuthContextProvider = (props: PropsWithChildren) => {
  const [token, setToken] = useState<string | null>(null);

  const authenticate = async (username: string, password: string) => {
    const token = await fakeAuth(username, password);
    setToken(token);
  };

  const signout = () => {
    setToken(null)
  };

  return (
    <AuthContext.Provider
      value={{
        token,
        authenticate,
        signout,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
