import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import "./Navber.css";
import axios from "axios";
import { initCountUser } from "../../_actions/user_action";

function Navbar() {
  const isAuth = useSelector((state) => state.user.userData.isAuth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const getCartCount = useSelector((state) => state.user.cart_count);
  const positionChange = useRef();
  const opacityChange = useRef();
  const shop = useRef();
  const shopNavbar = useRef();
  const navBar = useRef();

  const [cart_count, setcart_count] = useState(0);

  useEffect(() => {
    setcart_count(getCartCount);
  }, [getCartCount]);

  const menuOnHandler = () => {
    positionChange.current.style =
      "display:block; visibility: visible; right:0px; z-index:101";
    opacityChange.current.style =
      "opacity:0.5; visibility: visible; right: 270px; z-index:100";
  };

  const menuOffHandler = () => {
    positionChange.current.style = "right:-300px; z-index:-1";
    opacityChange.current.style = "opacity:0;  right: 0px; z-index:-1";
  };

  const logoutHandler = () => {
    axios
      .post("/api/user/logout")
      .then((res) => {
        console.log(res.data);
        if (res.data.logoutSuccess) {
          console.log("로그아웃 성공");
          dispatch(initCountUser());
          navigate("/login", { replace: true });
        }
      })
      .catch((err) => {
        alert("로그아웃 중에 에러가 발생했습니다. \n", err);
      });
  };

  const shopOverHandler = () => {
    shopNavbar.current.style =
      "z-index:2; display:block; background-color:white;";
  };
  const shopOutHandler = () => {
    shopNavbar.current.style =
      "z-index:-1; display:none; background-color:none";
  };
  const shopNavBarOverHandler = () => {
    shopNavbar.current.style =
      "z-index:2; display:block; background-color:white;";
    navBar.current.style = "background-color:white";
  };
  const shopNavBarOutHandler = () => {
    shopNavbar.current.style =
      "z-index:-1; display:none; background-color:none";
    navBar.current.style = "background-color:none";
  };

  return (
    <div>
      <div
        className="shopNavbar"
        ref={shopNavbar}
        onMouseOver={shopNavBarOverHandler}
        onMouseOut={shopNavBarOutHandler}
      >
        <ul className="shopNavbar__menu">
          <li className="bold">
            <Link to="/shop" state={{ type: 4, category1: 1, category2: 0 }}>
              bowlow Made
            </Link>
          </li>
          <li className="bold">
            <Link to="/shop" state={{ type: 4, category1: 2, category2: 0 }}>
              당일발송
            </Link>
          </li>
          <li className="bold">
            <Link to="/shop" state={{ type: 4, category1: 3, category2: 0 }}>
              머슬핏
            </Link>
          </li>
          <li>
            <ul className="shopNavbar__menu__sub">
              <li className="bold">
                <Link
                  to="/shop"
                  state={{ type: 4, category1: 4, category2: 0 }}
                >
                  아우터
                </Link>
              </li>
              <li>
                <Link
                  to="/shop"
                  state={{ type: 4, category1: 4, category2: 1 }}
                >
                  자켓
                </Link>
              </li>
              <li>
                <Link
                  to="/shop"
                  state={{ type: 4, category1: 4, category2: 2 }}
                >
                  점퍼
                </Link>
              </li>
              <li>
                <Link
                  to="/shop"
                  state={{ type: 4, category1: 4, category2: 3 }}
                >
                  코트
                </Link>
              </li>
              <li>
                <Link
                  to="/shop"
                  state={{ type: 4, category1: 4, category2: 4 }}
                >
                  가디건
                </Link>
              </li>
            </ul>
          </li>
          <li>
            <ul className="shopNavbar__menu__sub">
              <li className="bold">
                <Link
                  to="/shop"
                  state={{ type: 4, category1: 5, category2: 0 }}
                >
                  상의
                </Link>
              </li>
              <li>
                <Link
                  to="/shop"
                  state={{ type: 4, category1: 5, category2: 1 }}
                >
                  티셔츠
                </Link>
              </li>
              <li>
                <Link
                  to="/shop"
                  state={{ type: 4, category1: 5, category2: 2 }}
                >
                  니트웨어
                </Link>
              </li>
              <li>
                <Link
                  to="/shop"
                  state={{ type: 4, category1: 5, category2: 3 }}
                >
                  셔츠
                </Link>
              </li>
              <li>
                <Link
                  to="/shop"
                  state={{ type: 4, category1: 5, category2: 4 }}
                >
                  스웻셔츠&후드
                </Link>
              </li>
            </ul>
          </li>
          <li>
            <ul className="shopNavbar__menu__sub">
              <li className="bold">
                <Link
                  to="/shop"
                  state={{ type: 4, category1: 6, category2: 0 }}
                >
                  하의
                </Link>
              </li>
              <li>
                <Link
                  to="/shop"
                  state={{ type: 4, category1: 6, category2: 1 }}
                >
                  슬랙스
                </Link>
              </li>
              <li>
                <Link
                  to="/shop"
                  state={{ type: 4, category1: 6, category2: 2 }}
                >
                  데님
                </Link>
              </li>
              <li>
                <Link
                  to="/shop"
                  state={{ type: 4, category1: 6, category2: 3 }}
                >
                  코튼팬츠
                </Link>
              </li>
              <li>
                <Link
                  to="/shop"
                  state={{ type: 4, category1: 6, category2: 4 }}
                >
                  트레이닝
                </Link>
              </li>
              <li>
                <Link
                  to="/shop"
                  state={{ type: 4, category1: 6, category2: 5 }}
                >
                  하프팬츠
                </Link>
              </li>
            </ul>
          </li>
          <li className="bold">
            <Link to="/shop" state={{ type: 4, category1: 7, category2: 0 }}>
              셋업
            </Link>
          </li>
          <li className="bold">
            <Link to="/shop" state={{ type: 4, category1: 8, category2: 0 }}>
              슈즈&장화
            </Link>
          </li>
          <li className="bold">
            <Link to="/shop" state={{ type: 4, category1: 9, category2: 0 }}>
              실버 925
            </Link>
          </li>
        </ul>
      </div>
      <nav className="navbar" ref={navBar}>
        <div className="navbar__top">
          <div className="navbar__top__logo">
            <Link to="/" state={{ type: 0, category1: 0, category2: 0 }}>
              BOWLOW
            </Link>
          </div>
          <ul className="navbar__top__middleMenu">
            <li className="nabar__top__middleMune__item">
              <Link to="/notice">공지사항</Link>
            </li>
            <li className="nabar__top__middleMune__item">
              <Link to="/event">이벤트</Link>
            </li>
            <li className="nabar__top__middleMune__item">
              <Link to="/review">리뷰</Link>
            </li>
            <li className="nabar__top__middleMune__item">
              <Link to="/myPage">마이 페이지</Link>
            </li>
          </ul>
          <ul className="navbar__top__sideMenu">
            <li className="navbar__top__sideMenu__item">
              <Link to="/search">검색</Link>
            </li>
            <li className="navbar__top__sideMenu__item">
              {isAuth == false ? (
                <Link to="/login">로그인</Link>
              ) : (
                <Link onClick={logoutHandler}>로그아웃</Link>
              )}
            </li>
            <li className="navbar__top__sideMenu__item">
              <Link to="/cart">
                장바구니
                {isAuth == true ? <span> {cart_count}</span> : <span></span>}
              </Link>
            </li>
          </ul>
          <Link to="#" className="menu" onClick={menuOnHandler}>
            MENU
          </Link>
        </div>

        <ul className="navbar__bottom">
          <li className="bottom_navbar_item">
            <Link to="/bowul" state={{ type: 1, category1: 0, category2: 0 }}>
              BOWUL
            </Link>
          </li>
          <li className="bottom_navbar_item">
            <Link
              to="/newArrivals"
              state={{ type: 2, category1: 0, category2: 0 }}
            >
              NEW ARRIVALS
            </Link>
          </li>
          <li className="bottom_navbar_item">
            <Link
              to="/bestItem"
              state={{ type: 3, category1: 0, category2: 0 }}
            >
              BEST ITEM
            </Link>
          </li>
          <li className="bottom_navbar_item">
            <div
              className="shop_hover"
              ref={shop}
              onMouseOver={shopOverHandler}
              onMouseOut={shopOutHandler}
            >
              SHOP
            </div>
          </li>
        </ul>
      </nav>

      {/* mobile__menu */}
      <div ref={positionChange} className="mobile__menu">
        <ul className="mobile__menu__section__1">
          <li className="mobile__menu__section__1__item">
            <Link to="/search">검색</Link>
          </li>
          <li className="mobile__menu__section__1__item">
            <Link to="/login">로그인</Link>
          </li>
          <li className="mobile__menu__section__1__item">
            <Link to="/cart">장바구니</Link>
          </li>
          <li className="mobile__menu__section__1__item">
            <Link to="/myPage">마이 페이지</Link>
          </li>
        </ul>

        <ul className="mobile__menu__section__2">
          <li className="mobile__menu__section__2__item">
            <Link to="/bowul">BOWUL</Link>
          </li>
          <li className="mobile__menu__section__2__item">
            <Link to="newArrivals">NEW ARRIVALS</Link>
          </li>
          <li className="mobile__menu__section__2__item">
            <Link to="/bestItem">BEST ITEM</Link>
          </li>
          <li className="mobile__menu__section__2__item">
            <Link to="/shop">SHOP</Link>
          </li>
        </ul>

        <ul className="mobile__menu__section__3">
          <li className="mobile__menu__section__3__item">
            <Link to="/notice">공지사항</Link>
          </li>
          <li className="mobile__menu__section__3__item">
            <Link to="/event">이벤트</Link>
          </li>
          <li className="mobile__menu__section__3__item">
            <Link to="/review">리뷰</Link>
          </li>
        </ul>

        <ul className="mobile__menu__section__4">
          <Link to="/instagram">Instagram</Link>
        </ul>
      </div>
      <div
        className="mobile__box"
        ref={opacityChange}
        onClick={menuOffHandler}
      ></div>
    </div>
  );
}

export default Navbar;
