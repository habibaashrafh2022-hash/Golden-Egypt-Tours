import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
export default function ProtectedRoute({ children, adminOnly = false }) {
 
  const location  = useLocation();

  if (!user) {
    // مش logged in → ودّيه للـ login وارجعله بعدين
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  if (adminOnly && user.role !== "admin") {
    // logged in بس مش admin
    return <Navigate to="/" replace />;
  }

  return children;
}