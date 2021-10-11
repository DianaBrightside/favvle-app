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
import { MainTitle, MainSubtitle, OrText } from "../styles/Texts/AppTexts";
// import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { useSignInWithEmailAndPassword } from "../firebase/hooks";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword();

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
      <MainButton onClick={() => signInWithEmailAndPassword(email, password)}>
        Login
      </MainButton>
      <Link to="/signup">
        <UnderlinedButton>Don't have an account yet?</UnderlinedButton>
      </Link>
    </Flexbox>
  );
};

export default LoginPage;
