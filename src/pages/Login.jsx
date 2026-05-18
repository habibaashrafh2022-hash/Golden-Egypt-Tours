import { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleLogin() {
   fetch("https://golden-egypt-tours-production.up.railway.app/tours/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);

        if (data.token) {
          // 🔥 أهم خطوة SaaS
          localStorage.setItem("token", data.token);

          alert("Login Success 🚀");

          // روح للداشبورد
          window.location.href = "/dashboard";
        } else {
          alert(data.message || "Login failed");
        }
      })
      .catch(() => {
        alert("Server error");
      });
  }

  return (
    <div style={{ padding: 20 }}>
      <h2>Login</h2>

      <input
        placeholder="email"
        onChange={(e) => setEmail(e.target.value)}
        style={{ display: "block", marginBottom: 10 }}
      />

      <input
        placeholder="password"
        type="password"
        onChange={(e) => setPassword(e.target.value)}
        style={{ display: "block", marginBottom: 10 }}
      />

      <button onClick={handleLogin}>
        Login
      </button>
    </div>
  );
}