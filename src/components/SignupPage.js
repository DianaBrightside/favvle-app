import Flexbox from "flexbox-react";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useCreateUserWithEmailAndPassword } from "../firebase/hooks";

import {
  MainButtonSignUp,
  SkipButton,
  UnderlinedButton,
} from "../styles/Buttons/AppButtons";
import { Input } from "../styles/Inputs/AppInputs";
import {
  ErrorText,
  MainSubtitle,
  MainTitle,
  OrText,
} from "../styles/Texts/AppTexts";
import MediaButtons from "./MediaButtons";
import Password from "./Password";
import PopUpWindow from "./PopUpWindow";

const SignupPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [matchPassword, setMatchPassword] = useState(false);
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword();

  useEffect(() => {
    if (password && confirmPassword && password === confirmPassword) {
      setMatchPassword(true);
    } else {
      setMatchPassword(false);
    }
  }, [password, confirmPassword]);

  const handleSubmit = () => {
    createUserWithEmailAndPassword(email, password);
  };

  const emailErrorMessage = (message) => {
    if (message === "auth/invalid-email") {
      return "This Email is invalid";
    } else if (message === "auth/email-already-in-use") {
      return "Error, an account with this email already exists!";
    } else {
      return "Error";
    }
  };

  console.log(password, confirmPassword);
  console.log(error);
  return (
    <Flexbox
      minWidth="300px"
      className="form__wrapper"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
    >
      <MainTitle>Sign up</MainTitle>
      <MainSubtitle>Welcome</MainSubtitle>
      <MediaButtons />
      <OrText>or</OrText>
      <Input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
      />
      <Password
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        inputText="Password"
      />
      <Password
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
        inputText="Confirm password"
      />
      <MainButtonSignUp onClick={() => matchPassword && handleSubmit()}>
        Sign Up
      </MainButtonSignUp>
      <SkipButton>Not now</SkipButton>
      <Link to="/">
        <UnderlinedButton>Already have an account?</UnderlinedButton>
      </Link>
      {!matchPassword && password.length > 0 && confirmPassword.length > 0 && (
        <ErrorText>Passwords don't match!</ErrorText>
      )}
      {error && error.code && (
        <ErrorText>{emailErrorMessage(error.code)}</ErrorText>
      )}
    </Flexbox>
  );
};

export default SignupPage;
