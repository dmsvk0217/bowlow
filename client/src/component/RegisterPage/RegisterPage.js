import React, { useState, useCallback } from "react";
import UserInput from "../common/UserInput/UserInput";
import "./RegisterPage.css";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { registerUser } from "../../_actions/user_action";

function RegisterPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [phone, setphone] = useState("");
  const [password, setpassword] = useState("");
  const [passwordConfirm, setpasswordConfirm] = useState("");

  //오류메시지 상태저장
  const [nameMessage, setNameMessage] = useState("");
  const [emailMessage, setEmailMessage] = useState("");
  const [phoneMessage, setphoneMessage] = useState("");
  const [passwordMessage, setPasswordMessage] = useState("");
  const [passwordConfirmMessage, setPasswordConfirmMessage] = useState("");
  const [alramText, setalramText] = useState("");

  // 유효성 검사
  const [isName, setIsName] = useState(false);
  const [isEmail, setIsEmail] = useState(false);
  const [isphone, setisphone] = useState(false);
  const [isPassword, setIsPassword] = useState(false);
  const [isPasswordConfirm, setIsPasswordConfirm] = useState(false);

  // 이름
  const onChangeName = useCallback((e) => {
    setname(e.target.value);
    if (e.target.value.length < 2 || e.target.value.length > 5) {
      setNameMessage("2글자 이상 5글자 미만으로 입력해주세요.");
      setIsName(false);
    } else {
      setNameMessage("올바른 이름 형식입니다 :)");
      setIsName(true);
    }
  }, []);

  // 이메일
  const onChangeEmail = useCallback((e) => {
    const emailRegex =
      /([\w-.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
    const emailCurrent = e.target.value;
    setemail(emailCurrent);

    if (!emailRegex.test(emailCurrent)) {
      setEmailMessage("이메일 형식이 틀렸어요! 다시 확인해주세요 ㅜ ㅜ");
      setIsEmail(false);
    } else {
      setEmailMessage("올바른 이메일 형식이에요 : )");
      setIsEmail(true);
    }
  }, []);

  // 휴대폰
  const onChangePhone = useCallback((e) => {
    const phoneCurrent = e.target.value
      .replace(/[^0-9]/g, "")
      .replace(/^(\d{0,3})(\d{0,4})(\d{0,4})$/g, "$1-$2-$3")
      .replace(/(\-{1,2})$/g, "");
    setphone(phoneCurrent);
    if (phoneCurrent.length != 13) {
      setphoneMessage("전화번호 형식이 틀렸어요! 다시 확인해주세요 ㅜ ㅜ");
      setisphone(false);
    } else {
      setphoneMessage("올바른 전화번호 형식이에요 : )");
      setisphone(true);
    }
  }, []);

  // 비밀번호
  const onChangePassword = useCallback((e) => {
    const passwordRegex =
      /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,25}$/;
    const passwordCurrent = e.target.value;
    setpassword(passwordCurrent);

    if (!passwordRegex.test(passwordCurrent)) {
      setPasswordMessage(
        "숫자+영문자+특수문자 조합으로 8자리 이상 입력해주세요!"
      );
      setIsPassword(false);
    } else {
      setPasswordMessage("안전한 비밀번호에요 : )");
      setIsPassword(true);
    }
  }, []);

  // 비밀번호 확인
  const onChangePasswordConfirm = useCallback(
    (e) => {
      const passwordConfirmCurrent = e.target.value;
      setpasswordConfirm(passwordConfirmCurrent);

      if (password === passwordConfirmCurrent) {
        setPasswordConfirmMessage("비밀번호를 똑같이 입력했어요 : )");
        setIsPasswordConfirm(true);
      } else {
        setPasswordConfirmMessage("비밀번호가 틀려요. 다시 확인해주세요 ㅜ ㅜ");
        setIsPasswordConfirm(false);
      }
    },
    [password]
  );

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
          <div className="text_form">
            <UserInput
              name="Name"
              data={name}
              onChange={onChangeName}
              placeholder="your name"
            />
            {name.length > 0 && (
              <span className={`message ${isName ? "success" : "error"}`}>
                {nameMessage}
              </span>
            )}
          </div>

          <div className="text_form">
            <UserInput
              name="Email address"
              data={email}
              onChange={onChangeEmail}
              placeholder="Email Address"
              type="email"
            />
            {email.length > 0 && (
              <span className={`message ${isEmail ? "success" : "error"}`}>
                {emailMessage}
              </span>
            )}
          </div>
          <div className="text_form">
            {" "}
            <UserInput
              name="Phone"
              data={phone}
              onChange={onChangePhone}
              placeholder="Phone"
              type="text"
            />
            {phone.length > 0 && (
              <span className={`message ${isphone ? "success" : "error"}`}>
                {phoneMessage}
              </span>
            )}
          </div>
          <div className="text_form">
            <UserInput
              name="Password"
              data={password}
              onChange={onChangePassword}
              placeholder="Password"
              type="password"
            />
            {password.length > 0 && (
              <span className={`message ${isPassword ? "success" : "error"}`}>
                {passwordMessage}
              </span>
            )}
          </div>
          <div className="text_form">
            <UserInput
              name="passwordConfirm"
              data={passwordConfirm}
              onChange={onChangePasswordConfirm}
              placeholder="passwordConfirm"
              type="password"
            />
            {passwordConfirm.length > 0 && (
              <span
                className={`message ${isPasswordConfirm ? "success" : "error"}`}
              >
                {passwordConfirmMessage}
              </span>
            )}
          </div>
          <button onClick={RegisterHandler}>Submit</button>
          <p>{alramText}</p>
        </div>
      </div>
    </div>
  );
}

export default RegisterPage;
