import { Navigate } from "react-router-dom";

const PrivateRoute = ({ Component }) => {
  return true ? Component : <Navigate to="/login" />;
};

export default PrivateRoute;
