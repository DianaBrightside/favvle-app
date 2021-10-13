import Flexbox from "flexbox-react";
import { useEffect } from "react";
import { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { useAuth } from "../firebase/authentication";
import { useCreateUserWithEmailAndPassword } from "../firebase/hooks";

import {
  MainButtonSignUp,
  SkipButton,
  UnderlinedButton,
} from "../styles/Buttons/AppButtons";
import { Input, InputForm } from "../styles/Inputs/AppInputs";
import {
  ErrorContainer,
  ErrorText,
  MainSubtitle,
  MainTitle,
  OrText,
} from "../styles/Texts/AppTexts";
import MediaButtons from "./MediaButtons";
import Password from "./Password";
import PopUpWindow from "./PopUpWindow";
import Spinner from "../images/Spinner.gif";

const SignupPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [matchPassword, setMatchPassword] = useState(false);
  const [clickSkip, setClickSkip] = useState(false);
  const [createUserWithEmailAndPassword, loading, error] =
    useCreateUserWithEmailAndPassword();
  const { user } = useAuth();

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
  if (user) return <Redirect to="/account" />;
  return (
    <>
      <Flexbox
        minWidth="300px"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
      >
        <MainTitle>Sign up</MainTitle>
        <MainSubtitle>Welcome</MainSubtitle>
        <MediaButtons />
        <OrText>or</OrText>
        <InputForm>
          <Input
            autoComplete="username"
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
        </InputForm>
        {(loading && <img src={Spinner} alt="loading" />) || (
          <MainButtonSignUp onClick={() => matchPassword && handleSubmit()}>
            Sign Up
          </MainButtonSignUp>
        )}
        <SkipButton onClick={() => setClickSkip(true)}>Not now</SkipButton>
        <Link to="/">
          <UnderlinedButton>Already have an account?</UnderlinedButton>
        </Link>
        {!matchPassword && password.length > 0 && confirmPassword.length > 0 && (
          <ErrorContainer>
            <ErrorText>Passwords don't match!</ErrorText>
          </ErrorContainer>
        )}
        <ErrorContainer>
          {error && error.code && (
            <ErrorText>{emailErrorMessage(error.code)}</ErrorText>
          )}
        </ErrorContainer>
      </Flexbox>

      {clickSkip && (
        <PopUpWindow
          onSignUp={handleSubmit}
          onClose={() => setClickSkip(false)}
        />
      )}
    </>
  );
};

export default SignupPage;
