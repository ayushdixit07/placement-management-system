import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/auth/Login";
import StudentDashboard from "./pages/student/StudentDashboard";
import TPODashboard from "./pages/tpo/TPODashboard";
import CompanyDashboard from "./pages/company/CompanyDashboard";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />

        <Route
          path="/student"
          element={
            <ProtectedRoute allowedRole="student">
              <StudentDashboard />
            </ProtectedRoute>
          }
        />

        <Route
          path="/tpo"
          element={
            <ProtectedRoute allowedRole="tpo">
              <TPODashboard />
            </ProtectedRoute>
          }
        />

        <Route
          path="/company"
          element={
            <ProtectedRoute allowedRole="company">
              <CompanyDashboard />
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

