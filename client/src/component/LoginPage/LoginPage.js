import React, { useState } from "react";
import UserInput from "../common/UserInput/UserInput";
import "./LoginPage.css";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginUser } from "../../_actions/user_action";

function LoginPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //오류메시지 상태저장
  const [emailMessage, setEmailMessage] = useState("");
  const [passwordMessage, setPasswordMessage] = useState("");
  const [alramText, setalramText] = useState("");

  const loginHandler = () => {
    const data = {
      email: email,
      password: password,
    };

    dispatch(loginUser(data))
      .then((response) => {
        if (response.payload.loginSuccess) {
          console.log("[login] 로그인 성공입니다.");
          navigate("/", { replace: true });
          return;
        }
        if (response.payload.exist === false) {
          setalramText("이메일에 해당하는 계정이 존재하지 않습니다.");
          return;
        }
        if (response.payload.worngPassword) {
          setalramText("비밀번호가 틀렸습니다.");
          return;
        }
        setalramText("무슨 케이스지?");
        return;
      })
      .catch((err) => {
        console.log(err);
      });
  };

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
          <div className="text_form">
            <UserInput
              name="Email address"
              data={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email Address"
            />
          </div>
          <div className="text_form">
            <UserInput
              name="Password"
              data={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              type="password"
            />
          </div>

          <div className="login_submit">
            <button onClick={loginHandler}>Submit</button>
            <p>{alramText}</p>
          </div>
          <p className="login_bottom">
            Forgot <Link to="#">password?</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
