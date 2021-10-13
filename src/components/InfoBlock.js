import { InfoList, InfoText, MainInfoTitle } from "../styles/Texts/AppTexts";
import Flexbox from "flexbox-react";

import Logo from "../images/Logo.png";
import LoginImage from "../images/Background_login.png";
import SignUpImage from "../images/Background_signup.png";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const InfoBlock = () => {
  const listArray = [
    "Create beautiful rankings, with up to 25 items in each ranking",
    "Use simple Drag & Drop functionality to rank your lists",
    "Easily and quickly share your rankings on social media",
    "Create and share a unique GIF-version of your ranking",
    "Personalize your ranking with Favvle’s design tools",
    "Save up to 10 unique rankings to your personal library",
  ];

  return (
    <Router>
      <Flexbox width="560px" flexDirection="column" alignSelf="center">
        <img width="298px" src={Logo} alt="favvle logo" />
        <MainInfoTitle>Create, share, rank, compare</MainInfoTitle>
        <Switch>
          <Route path="/" exact>
            <InfoText>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </InfoText>
            <img
              className="info__image"
              width="540px"
              src={LoginImage}
              alt="music list"
            />
          </Route>
          <Route path={["/signup", "/account"]}>
            <InfoList>
              <ul>
                {listArray.map((item, index) => {
                  return <li key={index}>{item}</li>;
                })}
              </ul>
            </InfoList>
            <img
              className="info__image"
              width="540px"
              src={SignUpImage}
              alt="music list"
            />
          </Route>
        </Switch>
      </Flexbox>
    </Router>
  );
};

export default InfoBlock;
