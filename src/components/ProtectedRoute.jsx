import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function ProtectedRoute({ allowedRole, children }) {
  const { role } = useAuth();

  // Not logged in
  if (!role) {
    return <Navigate to="/" replace />;
  }

  // Logged in but wrong role
  if (role !== allowedRole) {
    return <Navigate to="/" replace />;
  }

  return children;
}
