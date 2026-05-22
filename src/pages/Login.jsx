import { useState } from "react";

import axios from "axios";
import toast from "react-hot-toast";

export default function Login() {
  const [email, setEmail] =
    useState("");

  const [password, setPassword] =
    useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const { data } =
        await axios.post(
          "https://campuspro-back.onrender.com/api/auth/login",
          {
            email,
            password
          }
        );

      localStorage.setItem(
        "user",
        JSON.stringify(data)
      );

      toast.success("Login successful");
    } catch (error) {
      toast.error("Invalid credentials");
      console.log(error);
    }
  };

  return (
    <main className="page">
      <div className="auth-card glass">

        <h1>Login</h1>

        <form onSubmit={handleLogin}>

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) =>
              setEmail(
                e.target.value
              )
            }
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) =>
              setPassword(
                e.target.value
              )
            }
          />

          <button type="submit">
            Login
          </button>

        </form>
      </div>
    </main>
  );
}