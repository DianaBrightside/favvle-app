import Flexbox from "flexbox-react";
import { MediaButton } from "../styles/Buttons/AppButtons";

import GoogleImage from "../images/google.png";
import FacebookImage from "../images/facebook.png";
import { useGoogleAuth } from "../firebase/hooks";

const MediaButtons = () => {
  return (
    <>
      <MediaButton onClick={useGoogleAuth}>
        <Flexbox alignItems="center">
          <img src={GoogleImage} alt="google icon" />
          Login with Google
        </Flexbox>
      </MediaButton>
      <MediaButton>
        <Flexbox alignItems="center">
          <img src={FacebookImage} alt="facebook icon" />
          Login with Facebook
        </Flexbox>
      </MediaButton>
    </>
  );
};

export default MediaButtons;
