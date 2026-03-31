import HomePage from "./pages/HomePage"
import { Routes, Route, Navigate } from "react-router"
import LoginPage from "./pages/LoginPage"
import SignUpPage from "./pages/SignUpPage"
import { ToastContainer } from "react-toastify";

const App = () => {
  const user = localStorage.getItem("user");
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