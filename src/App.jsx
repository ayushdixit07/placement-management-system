import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/auth/Login";
import StudentDashboard from "./pages/student/StudentDashboard";
import TPODashboard from "./pages/tpo/TPODashboard";
import CompanyDashboard from "./pages/company/CompanyDashboard";
import ProtectedRoute from "./components/ProtectedRoute";
import { AuthProvider } from "./context/AuthContext";

export default function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />

         <Route
  path="/student"
  element={
    <ProtectedRoute allowedRole="Student">
      <StudentDashboard />
    </ProtectedRoute>
  }
/>

         <Route
  path="/tpo"
  element={
    <ProtectedRoute allowedRole="TPO">
      <TPODashboard />
    </ProtectedRoute>
  }
/>

         <Route
  path="/company"
  element={
    <ProtectedRoute allowedRole="Company">
      <CompanyDashboard />
    </ProtectedRoute>
  }
/>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}
