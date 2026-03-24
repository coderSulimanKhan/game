import HomePage from "./pages/HomePage"
import { Routes, Route } from "react-router"

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </>
  )
}

export default App