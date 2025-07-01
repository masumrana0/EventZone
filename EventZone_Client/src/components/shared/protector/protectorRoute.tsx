// components/auth/ProtectedRoute.tsx
import { Navigate, Outlet } from "react-router";
import { useAppSelector } from "../../../redux/hook";

const ProtectedRoute = () => {
  const isAuthenticated = useAppSelector((state) => state.auth.isLoggedIn);
  return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoute;
