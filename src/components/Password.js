import { PasswordContainer, PasswordInput } from "../styles/Inputs/AppInputs";

import showPasswordIcon from "../images/Icon Eye.svg";
import { useState } from "react";

const Password = ({ inputText }) => {
  const [passwordShown, setPasswordShown] = useState(false);
  const togglePasswordVisiblity = () => {
    setPasswordShown(!passwordShown);
  };

  return (
    <PasswordContainer>
      <PasswordInput
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
