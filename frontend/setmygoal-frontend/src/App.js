import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />

        {/* AUTH */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* USER FLOW */}
        <Route path="/profile/:userId" element={<Profile />} />
        <Route path="/dashboard/:userId" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
