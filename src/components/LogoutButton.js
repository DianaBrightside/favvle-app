import React from "react";
import { getAuth } from "firebase/auth";
import { useHistory } from "react-router-dom";
import { MainButton } from "../styles/Buttons/AppButtons";

const LogoutButton = () => {
  const auth = getAuth();
  const history = useHistory();
  const logout = async () => {
    await auth.signOut();
    history.push("/");
  };

  return <MainButton onClick={logout}>Continue</MainButton>;
};
export default LogoutButton;
