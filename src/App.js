import Flexbox from "flexbox-react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import InfoBlock from "./components/InfoBlock";
import LoginPage from "./components/LoginPage";
import SignupPage from "./components/SignupPage";
import {
  LeftColumn,
  LeftColumnSignUp,
  RightColumn,
  RightColumnSignUp,
} from "./styles/Backgrounds.js/Background";

import GlobalStyle from "./styles/Global";

function App() {
  return (
    <Router>
      <Flexbox flexDirection="row" alignItems="stretch">
        <Switch>
          <Route path="/" exact>
            <LeftColumn
              as={Flexbox}
              flex={1}
              justifyContent="flex-end"
              minHeight="100vh"
              alignItems="center"
            >
              <InfoBlock />
            </LeftColumn>
            <RightColumn
              as={Flexbox}
              flex={1}
              justifyContent="flex-start"
              minHeight="100vh"
            >
              <LoginPage />
            </RightColumn>
          </Route>
          <Route path="/signup">
            <LeftColumnSignUp
              as={Flexbox}
              flex={1}
              justifyContent="flex-end"
              minHeight="100vh"
            >
              <SignupPage />
            </LeftColumnSignUp>
            <RightColumnSignUp
              as={Flexbox}
              flex={1}
              justifyContent="flex-start"
              minHeight="100vh"
            >
              <InfoBlock />
            </RightColumnSignUp>
          </Route>
        </Switch>
        <GlobalStyle />
      </Flexbox>
    </Router>
  );
}

export default App;
