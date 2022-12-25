import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { auth } from "../_actions/user_action";
import { useNavigate } from "react-router-dom";

export default function (SpecificConponent, option, adminRoute = null) {
  function AuthenticationCheck(props) {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
      dispatch(auth()).then((response) => {
        console.log("auth hoc response : ", response);

        //login 안한 상태
        if (!response.payload.isAuth) {
          if (option) {
            navigate("/", { replace: true });
          }
        } else {
          //login 한 상태
          if (!option) {
            navigate("/", { replace: true });
          }
        }
      });
    }, []);

    return <SpecificConponent />;
  }

  return AuthenticationCheck;
}
/*
로그인 안됨
true -> navigate
false -> ok

로그인 됨
true -> ok
false -> navigate
*/
