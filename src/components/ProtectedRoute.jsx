import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function ProtectedRoute({ role, children }) {
  const auth = useAuth();
  return auth.role === role ? children : <Navigate to="/" />;
}
