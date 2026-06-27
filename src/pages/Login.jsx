import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../styles/Login.css";

function Login() {

  const navigate = useNavigate();

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const [message, setMessage] = useState("");

  async function handleSubmit(e) {

    e.preventDefault();

    if (!email || !password) {

      setMessage("Please fill all fields.");

      return;

    }

    try {

      const res = await axios.post(
        "https://reqres.in/api/login",
        {
          email,
          password
        }
      );

      localStorage.setItem(
        "token",
        res.data.token
      );


      setMessage("Login Successful");

      navigate("/dashboard");

    } catch {

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

          onChange={(e)=>

          setEmail(e.target.value)

          }

        />

        <input

          type="password"

          placeholder="Password"

          value={password}

          onChange={(e)=>

          setPassword(e.target.value)

          }

        />

        <button>

          Login

        </button>

      </form>

      <p>{message}</p>

    </div>

  );

}

export default Login;