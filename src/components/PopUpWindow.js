import { PopUpBlock } from "../styles/Backgrounds.js/Background";
import {
  ButtonsContainer,
  MainButtonSignUp,
  SkipPopUpButton,
} from "../styles/Buttons/AppButtons";
import { PopUpText, PopUpTitle } from "../styles/Texts/AppTexts";

const PopUpWindow = () => {
  return (
    <PopUpBlock>
      <PopUpTitle>Are you sure?</PopUpTitle>
      <PopUpText>
        You’ve reached the maximum of 5 lists for Free. Upgrade your Plan to go
        beyond the limits!
      </PopUpText>
      {/* <ButtonsContainer> */}
      <>
        <MainButtonSignUp>Sign Up</MainButtonSignUp>
        <SkipPopUpButton>Yes, Skip</SkipPopUpButton>
      </>
      {/* </ButtonsContainer> */}
    </PopUpBlock>
  );
};

export default PopUpWindow;
