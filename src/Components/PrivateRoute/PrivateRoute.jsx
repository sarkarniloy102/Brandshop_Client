import { useContext } from "react";

import { Navigate } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const PrivateRoutes = ({ children }) => {
  const { user, loading} = useContext(AuthContext);
  if(loading){
    return <span className="loading loading-dots loading-lg"></span>
  }

  if (user) {
    return children;
  }
  return <Navigate to="/signin"></Navigate>;
};

export default PrivateRoutes;