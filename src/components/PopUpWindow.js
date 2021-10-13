import Flexbox from "flexbox-react";
import {
  PopUpBlock,
  PopUpContainer,
  PopUpFader,
} from "../styles/Backgrounds.js/Background";
import {
  CloseButton,
  MainButtonSignUp,
  SkipPopUpButton,
} from "../styles/Buttons/AppButtons";
import { PopUpText, PopUpTitle } from "../styles/Texts/AppTexts";
import Cross from "../images/cross.png";

const PopUpWindow = ({ onClose, onSignUp }) => {
  return (
    <PopUpContainer alignItems="center" as={Flexbox}>
      <PopUpFader onClick={onClose} />
      <PopUpBlock>
        <CloseButton onClick={onClose}>
          <img src={Cross} alt="close" />
        </CloseButton>
        <PopUpTitle>Are you sure?</PopUpTitle>
        <PopUpText>
          You’ve reached the maximum of 5 lists for Free. Upgrade your Plan to
          go beyond the limits!
        </PopUpText>
        <>
          <MainButtonSignUp onClick={onSignUp}>Sign Up</MainButtonSignUp>
          <SkipPopUpButton>Yes, Skip</SkipPopUpButton>
        </>
      </PopUpBlock>
    </PopUpContainer>
  );
};

export default PopUpWindow;
