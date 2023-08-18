import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
// import "./Login.css";
import NavbarDashboard from "./NavbarDashboard";
import Footer from "./Footer";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate(); // Dapatkan fungsi navigasi

  const handleLogin = async (e) => {
    e.preventDefault(); // Hindari default behavior submit form
    try {
      const response = await axios.post("http://localhost:5000/api/login", {
        username,
        password,
      });
      // Proses respons dari server setelah login
      console.log(response.data);
      const role = response.data.role; // Ambil nilai role dari respons

      // Navigasi ke halaman sesuai dengan role pengguna
      if (role === "user") {
        navigate("/profile");
      } else if (role === "admin") {
        navigate("/result");
      } else {
        // Jika role tidak dikenali, tampilkan pesan kesalahan
        console.error("Invalid role:", role);
      }
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  return (
    <div className="bg-slate-200">
      <NavbarDashboard />
      <div class="py-10 flex flex-auto h-autodrop-shadow-lg w-full ">
        <form
          onSubmit={handleLogin}
          className="login-form"
          class="rounded-xl  mt-5 mx-auto p-6 md:flex-row bg-white hover:scale-105 hover:shadow-lg"
        >
          <div className="form-group">
            <h1 class="text-2xl font-bold text-center">Login</h1>
            <label>Username:</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Username"
            />
          </div>
          <div className="form-group">
            <label>Password:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
            />
          </div>
          <button
            type="submit"
            class="mt-4 px-6 py-2  text-center rounded-md border-spacing-2 bg-green-500 hover:bg-green-600 
            active:bg-green-500 mx-28"
          >
            Login
          </button>
          <div class="mb-8 mt-2">
            Don't have an account?{" "}
            <a href="/register" class="hover:text-green-400">
              Register
            </a>
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default Login;
