import { Redirect, Route } from "react-router-dom";
import { useAuth } from "../firebase/authentication";

const ProtectedRoute = ({ component: Component, ...rest }) => {
  const { user } = useAuth();
  return (
    <Route
      {...rest}
      render={() => {
        if (user) {
          return <Component />;
        } else {
          return <Redirect to="/" />;
        }
      }}
    />
  );
};

export default ProtectedRoute;
