import { useState } from "react";
import { Link } from "react-router-dom";
import Flexbox from "flexbox-react";
// import app from "../firebase";
// import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

import MediaButtons from "./MediaButtons";
import Password from "./Password";

import {
  ForgotPassword,
  MainButton,
  UnderlinedButton,
} from "../styles/Buttons/AppButtons";
import { Input } from "../styles/Inputs/AppInputs";
import {
  MainTitle,
  MainSubtitle,
  OrText,
  ErrorText,
  ErrorContainer,
} from "../styles/Texts/AppTexts";
import { useSignInWithEmailAndPassword } from "../firebase/hooks";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword();

  const handleSubmit = () => {
    signInWithEmailAndPassword(email, password);
  };

  const emailErrorMessage = (message) => {
    if (message === "auth/invalid-email" || message === "auth/wrong-password") {
      return "Error, we do not recognize the email or password!";
    } else {
      console.log(message);
    }
  };
  console.log(password);
  return (
    <Flexbox
      minWidth="300px"
      className="form__wrapper"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
    >
      <MainTitle>Login</MainTitle>
      <MainSubtitle>Welcome back</MainSubtitle>
      <MediaButtons />
      <OrText>or</OrText>
      <Input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
      />
      <Password
        inputText="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <ForgotPassword>Forgot password?</ForgotPassword>
      <MainButton onClick={handleSubmit}>Login</MainButton>
      <Link to="/signup">
        <UnderlinedButton>Don't have an account yet?</UnderlinedButton>
      </Link>
      <ErrorContainer>
        {error && error.code && (
          <ErrorText>{emailErrorMessage(error.code)}</ErrorText>
        )}
      </ErrorContainer>
    </Flexbox>
  );
};

export default LoginPage;
