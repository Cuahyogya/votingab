import React, { useState } from "react";
import axios from "axios";
import "./Register.css";
import NavbarDashboard from "./NavbarDashboard";
import Footer from "./Footer";
import Modal from "./Modallogin";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");

  const handleRegister = async () => {
    try {
      const response = await axios.post("http://localhost:5000/api/register", {
        username,
        email,
        password,
        role,
      });
      // Proses respons dari server setelah pendaftaran pengguna baru
      console.log("Registration successful:", response.data);
    } catch (error) {
      console.error("Registration failed:", error);
    }
  };

  return (
    <div className="bg-slate-200">
      <NavbarDashboard />
      <div class="py-10 flex flex-auto h-autodrop-shadow-lg w-full">
        <form
          onSubmit={handleRegister}
          className="register-form"
          class="rounded-xl  mt-5 mx-auto p-6 md:flex-row bg-white  hover:shadow-lg"
        >
          <h1 class="text-2xl font-bold text-center">Register</h1>
          <div className="form-group">
            <label>Username:</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Username"
              required
            />
          </div>
          <div className="form-group">
            <label>Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              required
            />
          </div>
          <div className="form-group">
            <label>Password:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              required
            />
          </div>
          <div className="form-group">
            <label>Role:</label>
            <select value={role} onChange={(e) => setRole(e.target.value)}>
              <option value="kosong">Please select a role</option>
              <option value="user" class="font-mono">
                User
              </option>
              <option value="admin" class="font-mono">
                Admin
              </option>
            </select>
          </div>
          <button
            type="submit"
            class="mt-4 px-6 py-2 text-center rounded-md border-spacing-2 bg-green-500 hover:bg-green-600
             active:bg-green-500 mx-28"
          >
            {" "}
            SUMBIT
          </button>

          <div className="login-link">
            Already have an account?{" "}
            <a href="/" class="hover:text-green-600">
              Login
            </a>
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default Register;
