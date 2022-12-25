import React, { useState } from "react";
import UserInput from "../common/UserInput/UserInput";
import "./RegisterPage.css";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { registerUser } from "../../_actions/user_action";
import { useSelector } from "react-redux";

function RegisterPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [phone, setphone] = useState("");
  const [password, setpassword] = useState("");
  const [alramText, setalramText] = useState("");

  const user = useSelector((state) => state.user);

  const RegisterHandler = () => {
    const data = {
      name: name,
      email: email,
      phone: phone,
      password: password,
    };

    dispatch(registerUser(data))
      .then((response) => {
        if (response.payload.registerSuccess) {
          console.log("[register] 회원가입 성공입니다.");
          navigate("/login", { replace: true });
        } else if (response.payload.exist) {
          setalramText("이메일에 해당하는 계정이 이미 존재합니다");
        } else {
          // other cases
          setalramText("무슨 케이스지?");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

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
            name="Name"
            data={name}
            setData={setname}
            placeholder="your name"
          />
          <UserInput
            name="Email address"
            data={email}
            setData={setemail}
            placeholder="Email Address"
            type="email"
          />
          <UserInput
            name="Phone"
            data={phone}
            setData={setphone}
            placeholder="Phone"
            type="text"
          />
          <UserInput
            name="Password"
            data={password}
            setData={setpassword}
            placeholder="Password"
            type="password"
          />
          <button onClick={RegisterHandler}>Submit</button>
          <p>{alramText}</p>
        </div>
      </div>
    </div>
  );
}

export default RegisterPage;
