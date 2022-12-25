import React, { useState } from "react";
import UserInput from "../common/UserInput/UserInput";
import "./RegisterPage.css";
import { Link } from "react-router-dom";

function RegisterPage() {
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="container">
      <div className="login_form">
        <div className="login_head">
          <h1>Register</h1>
          <p>
            Already registered?
            <Link to="/login"> Login</Link>
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
            name="Phone"
            data={phone}
            setData={setPhone}
            placeholder="Phone"
            type="text"
          />
          <UserInput
            name="Password"
            data={password}
            setData={setPassword}
            placeholder="Password"
            type="password"
          />
          <button>Submit</button>
        </div>
      </div>
    </div>
  );
}

export default RegisterPage;
