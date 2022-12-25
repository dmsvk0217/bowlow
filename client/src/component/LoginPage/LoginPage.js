import React, { useState } from "react";
import UserInput from "../common/UserInput/UserInput";
import "./LoginPage.css";
import { Link } from "react-router-dom";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="container">
      <div className="login_form">
        <div className="login_head">
          <h1>Login</h1>
          <p>
            Not registered yet?
            <Link to="/register"> Register</Link>
          </p>
        </div>
        <div className="login_body">
          <UserInput
            name="Email address"
            data={email}
            setData={setEmail}
            placeholder="Email Address"
          />
          <UserInput
            name="Password"
            data={password}
            setData={setPassword}
            placeholder="Password"
            type="password"
          />
          <button>Submit</button>
          <p className="login_bottom">
            Forgot <Link to="#">password?</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
