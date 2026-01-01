import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const { logout, role } = useAuth();
  const navigate = useNavigate();
  if (!role) return null;


  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <nav className="h-14 bg-blue-700 text-white flex items-center justify-between px-6 shadow">
      <h1 className="font-semibold text-lg">
        Placement Management System
      </h1>

      <div className="flex items-center gap-4">
        <span className="text-sm bg-blue-600 px-3 py-1 rounded">
          {role}
        </span>

        <button
          onClick={handleLogout}
          className="bg-red-500 px-3 py-1 rounded hover:bg-red-600 transition"
        >
          Logout
        </button>
      </div>
    </nav>
  );
}

