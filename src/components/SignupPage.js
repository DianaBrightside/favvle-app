import Flexbox from "flexbox-react";
import { Link } from "react-router-dom";

import {
  MainButtonSignUp,
  SkipButton,
  UnderlinedButton,
} from "../styles/Buttons/AppButtons";
import { Input } from "../styles/Inputs/AppInputs";
import { MainSubtitle, MainTitle, OrText } from "../styles/Texts/AppTexts";
import MediaButtons from "./MediaButtons";
import Password from "./Password";

const SignupPage = () => {
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
      <Input placeholder="Email" />
      <Password inputText="Password" />
      <Password inputText="Confirm password" />
      <MainButtonSignUp>Sign Up</MainButtonSignUp>
      <SkipButton>Not now</SkipButton>
      <Link to="/">
        <UnderlinedButton>Already have an account?</UnderlinedButton>
      </Link>
    </Flexbox>
  );
};

export default SignupPage;
