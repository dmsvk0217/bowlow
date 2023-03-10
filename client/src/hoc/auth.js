import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getCountUser, auth } from "../_actions/user_action";
import { useNavigate } from "react-router-dom";
import { getCarts } from "../_actions/cart_action";

export default function (SpecificConponent, option, adminRoute = null) {
  function AuthenticationCheck(props) {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
      dispatch(auth()).then((response) => {
        console.log("auth hoc response : ", response.payload);
        if (!option) {
          if (response.payload.isAuth) {
            const id = response.payload.user.id;
            dispatch(getCountUser());
            dispatch(getCarts(id));
            return;
          } else {
            return;
          }
        }
        //login 안한 상태
        if (!response.payload.isAuth) {
          if (option) {
            alert("로그인이 필요한 페이지입니다.");
            navigate("/", { replace: true });
          }
        } else {
          //login 한 상태
          const id = response.payload.user.id;
          dispatch(getCountUser());
          dispatch(getCarts(id));
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
