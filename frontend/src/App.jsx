import HomePage from "./pages/HomePage"
import { Routes, Route, useNavigate, Navigate } from "react-router"
import LoginPage from "./pages/LoginPage"
import SignUpPage from "./pages/SignUpPage"
import { ToastContainer } from "react-toastify";
import { useEffect } from "react";
import { useSelector } from "react-redux";

const App = () => {
  const navigate = useNavigate();
  const user = localStorage.getItem("user");
  const reduxUser = useSelector(state => state?.user?.user);
  useEffect(() => {
    if (!user) {
      navigate("/login");
    };
  }, [user, navigate, reduxUser]);
  return (
    <>
      <Routes>
        <Route path="/" element={user ? <HomePage /> : <Navigate to="/login" />} />
        <Route path="/signup" element={user ? <Navigate to="/" /> : <SignUpPage />} />
        <Route path="/login" element={user ? <Navigate to="/" /> : <LoginPage />} />
      </Routes>
      <ToastContainer theme="dark" />
    </>
  )
}

export default App