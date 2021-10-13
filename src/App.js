import Flexbox from "flexbox-react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import InfoBlock from "./components/InfoBlock";
import LoginPage from "./components/LoginPage";
import ProtectedRoute from "./components/ProtectedRoute";
import SignupPage from "./components/SignupPage";
import SuccessfulSignup from "./components/SuccessfulSignup";
import { ProvideAuth } from "./firebase/authentication";

import {
  LeftColumn,
  LeftColumnSignUp,
  RightColumn,
  RightColumnSignUp,
} from "./styles/Backgrounds.js/Background";

import GlobalStyle from "./styles/Global";

function App() {
  return (
    <ProvideAuth>
      <Router>
        <Flexbox
          flexDirection="row"
          alignItems="stretch"
          justifyContent="center"
        >
          <Switch>
            <Route path="/" exact>
              <LeftColumn
                as={Flexbox}
                flex="1"
                justifyContent="flex-end"
                minHeight="100vh"
                alignItems="center"
              >
                <InfoBlock />
              </LeftColumn>
              <RightColumn as={Flexbox} flex="1" minHeight="100vh">
                <LoginPage />
              </RightColumn>
            </Route>
            <Route path="/signup">
              <LeftColumnSignUp
                as={Flexbox}
                flex="1"
                justifyContent="flex-end"
                minHeight="100vh"
              >
                <SignupPage />
              </LeftColumnSignUp>
              <RightColumnSignUp as={Flexbox} flex="1" minHeight="100vh">
                <InfoBlock />
              </RightColumnSignUp>
            </Route>
            <ProtectedRoute path="/account" component={SuccessfulSignup} />
          </Switch>
          <GlobalStyle />
        </Flexbox>
      </Router>
    </ProvideAuth>
  );
}

export default App;
