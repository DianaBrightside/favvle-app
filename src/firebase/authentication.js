import React, { useContext, createContext } from "react";
import { useUserChangedState } from "./hooks";

const authContext = createContext();

function useProvideAuth() {
  const [user] = useUserChangedState();
  return { user };
}

export const ProvideAuth = ({ children }) => {
  const auth = useProvideAuth();
  return <authContext.Provider value={auth}>{children}</authContext.Provider>;
};

export function useAuth() {
  return useContext(authContext);
}
