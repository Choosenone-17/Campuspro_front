import { useState } from "react";

import axios from "axios";
import toast from "react-hot-toast";
export default function Register() {
  const [name, setName] =
    useState("");

  const [email, setEmail] =
    useState("");

  const [password, setPassword] =
    useState("");

  const handleRegister = async (
    e
  ) => {
    e.preventDefault();

    try {
      const { data } =
        await axios.post(
          "http://localhost:5000/api/auth/register",
          {
            name,
            email,
            password
          }
        );

      localStorage.setItem(
        "user",
        JSON.stringify(data)
      );

      toast.success("Account created");
    } catch (error) {
      toast.error("Registration failed");
      console.log(error);
    }
  };

  return (
    <main className="page">
      <div className="auth-card glass">

        <h1>Create Account</h1>

        <form
          onSubmit={handleRegister}
        >

          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) =>
              setName(
                e.target.value
              )
            }
          />

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
            Register
          </button>

        </form>
      </div>
    </main>
  );
}