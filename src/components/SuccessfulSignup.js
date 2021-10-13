import Flexbox from "flexbox-react";

import {
  LeftColumnSignUp,
  RightColumnSignUp,
} from "../styles/Backgrounds.js/Background";
import { MainTitle } from "../styles/Texts/AppTexts";
import LogoutButton from "./LogoutButton";
import InfoBlock from "./InfoBlock";

const SuccessfulSignup = () => {
  return (
    <>
      <LeftColumnSignUp
        as={Flexbox}
        flex="1"
        justifyContent="center"
        minHeight="100vh"
        flexDirection="column"
      >
        <Flexbox
          maxWidth="380px"
          alignSelf="flex-end"
          flexDirection="column"
          alignItems="center"
        >
          <MainTitle>Well done! You’ve created an account on Favvle!</MainTitle>
          <LogoutButton />
        </Flexbox>
      </LeftColumnSignUp>
      <RightColumnSignUp
        as={Flexbox}
        flex="1"
        justifyContent="flex-start"
        minHeight="100vh"
      >
        <InfoBlock />
      </RightColumnSignUp>
    </>
  );
};
export default SuccessfulSignup;
