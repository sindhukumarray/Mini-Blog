import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Login.css";

function Login() {

  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(e) {

    e.preventDefault();

    if (!email || !password) {
      setMessage("Please fill all fields.");
      return;
    }

    // Mock Login
    if (
      email === "sindhukumar@gmail.in" &&
      password === "sindhu2003"
    ) {

      localStorage.setItem("token", "demo-token-123");

      setMessage("Login Successful");

      setTimeout(() => {
        navigate("/dashboard");
      }, 500);

    } else {

      setMessage("Invalid Email or Password");

    }

  }

  return (

    <div className="login">

      <h1>Login</h1>

      <form onSubmit={handleSubmit}>

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit">
          Login
        </button>

      </form>

      <p>{message}</p>

    </div>

  );

}

export default Login;