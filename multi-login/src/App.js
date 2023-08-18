import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import LandingPage from "./components/LandingPage";
import Dashboard from "./components/Dashboard";
import Admin from "./components/Admin";
import Profile from "./components/Profile";
import Voting from "./components/Voting";
import Result from "./components/Result";
import BasicTable from "./components/BasicTable";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/LandingPage" element={<LandingPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/voting" element={<Voting />} />
        <Route path="/result" element={<Result />} />
        <Route path="/table" element={<BasicTable />} />
      </Routes>
    </Router>
  );
}

export default App;
