
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoutes = () => {
  const token = localStorage.getItem("token");    // Check JWT token
  return token ? <Outlet /> : <Navigate to="/login" />;  
};

export default ProtectedRoutes;
