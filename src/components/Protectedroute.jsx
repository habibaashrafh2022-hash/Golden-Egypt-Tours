import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { GlobalContext } from "../context/GlobalContext";

/**
 * ProtectedRoute
 * - adminOnly={true}  → يطلب role === "admin"
 * - بدونها            → يطلب أي user مسجّل
 */
export default function ProtectedRoute({ children, adminOnly = false }) {
  const { user } = useContext(GlobalContext);
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