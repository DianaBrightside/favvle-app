import { PasswordContainer, PasswordInput } from "../styles/Inputs/AppInputs";

import showPasswordIcon from "../images/eye.svg";
import { useState } from "react";

const Password = ({ inputText, onChange }) => {
  const [passwordShown, setPasswordShown] = useState(false);
  const togglePasswordVisiblity = () => {
    setPasswordShown(!passwordShown);
  };

  return (
    <PasswordContainer>
      <PasswordInput
        autoComplete="current-password"
        onChange={onChange}
        type={passwordShown ? "text" : "password"}
        placeholder={inputText}
      />
      <img
        className={passwordShown ? "active" : ""}
        src={showPasswordIcon}
        onClick={togglePasswordVisiblity}
        alt="show password"
      />
    </PasswordContainer>
  );
};

export default Password;
