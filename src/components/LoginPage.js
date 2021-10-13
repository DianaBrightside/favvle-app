import { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import Flexbox from "flexbox-react";

import MediaButtons from "./MediaButtons";
import Password from "./Password";

import {
  ForgotPassword,
  MainButton,
  UnderlinedButton,
} from "../styles/Buttons/AppButtons";
import { Input, InputForm } from "../styles/Inputs/AppInputs";
import {
  MainTitle,
  MainSubtitle,
  OrText,
  ErrorText,
  ErrorContainer,
} from "../styles/Texts/AppTexts";
import {
  useSetPasswordResetEmail,
  useSignInWithEmailAndPassword,
} from "../firebase/hooks";
import { useAuth } from "../firebase/authentication";
import Spinner from "../images/Spinner.gif";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { user } = useAuth();
  const [signInWithEmailAndPassword, loading, error] =
    useSignInWithEmailAndPassword();

  const [sendPasswordResetEmail, isLoading, isError] =
    useSetPasswordResetEmail();

  const handleSubmit = async () => {
    await signInWithEmailAndPassword(email, password);
  };

  const handleForgotPassword = async () => {
    await sendPasswordResetEmail(email);
  };

  const emailErrorMessage = (message) => {
    if (message === "auth/invalid-email" || message === "auth/wrong-password") {
      return "Error, we do not recognize the email or password!";
    } else if (message === "auth/user-not-found") {
      return "User not found";
    }
    return "error";
  };
  if (user) return <Redirect to="/account" />;
  return (
    <Flexbox
      minWidth="300px"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
    >
      <MainTitle>Login</MainTitle>
      <MainSubtitle>Welcome back</MainSubtitle>
      <MediaButtons />
      <OrText>or</OrText>
      <InputForm>
        <Input
          autoComplete="username"
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
        <ForgotPassword onClick={handleForgotPassword}>
          Forgot password?
        </ForgotPassword>
      </InputForm>
      {(loading && <img src={Spinner} alt="loading" />) || (
        <MainButton onClick={handleSubmit}>Login</MainButton>
      )}
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
