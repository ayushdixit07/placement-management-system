import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = (role) => {
    login(role);
    navigate(`/${role.toLowerCase()}`);
  };

  
   return (
 <div className="min-h-screen flex items-center justify-center 
bg-gradient-to-br from-blue-50 via-white to-gray-100">

    <div className="bg-white p-8 rounded-xl shadow-lg w-96 text-center">

      <h1 className="text-4xl font-bold text-blue-700 mb-2">
        Placement Management System
      </h1>

      <p className="text-gray-500 mb-6">
        Select your role to continue
      </p>

      <button
        onClick={() => handleLogin("Student")}
        className="w-full bg-blue-600 text-white py-2 rounded mb-3 hover:bg-blue-700"
      >
        🎓 Student Login

      </button>

      <button
        onClick={() => handleLogin("TPO")}
        className="w-full bg-blue-600 text-white py-2 rounded mb-3 hover:bg-blue-700"
      >
        🧑‍💼 TPO Login
      </button>

      <button
        onClick={() => handleLogin("Company")}
        className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
      >
        🏢 Company Login
      </button>

    </div>
  </div>
);

  
}


