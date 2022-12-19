import React, { useRef } from "react";
import { Link } from "react-router-dom";
import "./Navber.css";

function Navbar() {
  const positionChange = useRef();
  const opacityChange = useRef();
  const navBarChange = useRef();

  const menuOnHandler = () => {
    positionChange.current.style =
      "display:block; visibility: visible; right:0px; z-index:101";
    opacityChange.current.style =
      "opacity:0.5; visibility: visible; right: 300px; z-index:100";
  };

  const menuOffHandler = () => {
    positionChange.current.style = "right:-300px; z-index:-1";
    opacityChange.current.style = "opacity:0;  right: 0px; z-index:-1";
  };

  return (
    <>
      <nav className="navbar" ref={navBarChange}>
        <div className="navbar__top">
          <div className="navbar__top__logo">
            <span>BOWLOW</span>
          </div>
          <ul className="navbar__top__middleMenu">
            <li className="nabar__top__middleMune__item">
              <Link to="#">공지사항</Link>
            </li>
            <li className="nabar__top__middleMune__item">
              <Link to="#">이벤트</Link>
            </li>
            <li className="nabar__top__middleMune__item">
              <Link to="#">리뷰</Link>
            </li>
            <li className="nabar__top__middleMune__item">
              <Link to="#">마이 페이지</Link>
            </li>
          </ul>
          <ul className="navbar__top__sideMenu">
            <li className="navbar__top__sideMenu__item">
              <Link to="#">검색</Link>
            </li>
            <li className="navbar__top__sideMenu__item">
              <Link to="#">로그인</Link>
            </li>
            <li className="navbar__top__sideMenu__item">
              <Link to="#">장바구니</Link>
            </li>
          </ul>
          <Link to="#" className="menu" onClick={menuOnHandler}>
            MENU
          </Link>
        </div>

        <ul className="navbar__bottom">
          <li className="bottom_navbar_item">
            <Link to="/bowul">BOWUL</Link>
          </li>
          <li className="bottom_navbar_item">
            <Link to="/newArrivals">NEW ARRIVALS</Link>
          </li>
          <li className="bottom_navbar_item">
            <Link to="/bestItem">BEST ITEM</Link>
          </li>
          <li className="bottom_navbar_item">
            <Link to="/shop">SHOP</Link>
          </li>
        </ul>
      </nav>
      <div ref={positionChange} className="mobile__menu">
        <ul className="mobile__menu__section__1">
          <li className="mobile__menu__section__1__item">
            <Link to="#">검색</Link>
          </li>
          <li className="mobile__menu__section__1__item">
            <Link to="#">로그인</Link>
          </li>
          <li className="mobile__menu__section__1__item">
            <Link to="#">장바구니</Link>
          </li>
          <li className="mobile__menu__section__1__item">
            <Link to="#">마이 페이지</Link>
          </li>
        </ul>

        <ul className="mobile__menu__section__2">
          <li className="mobile__menu__section__2__item">
            <Link to="#">BOWUL</Link>
          </li>
          <li className="mobile__menu__section__2__item">
            <Link to="#">NEW ARRIVALS</Link>
          </li>
          <li className="mobile__menu__section__2__item">
            <Link to="#">BEST ITEM</Link>
          </li>
          <li className="mobile__menu__section__2__item">
            <Link to="#">SHOP</Link>
          </li>
        </ul>

        <ul className="mobile__menu__section__3">
          <li className="mobile__menu__section__3__item">
            <Link to="#">공지사항</Link>
          </li>
          <li className="mobile__menu__section__3__item">
            <Link to="#">이벤트</Link>
          </li>
          <li className="mobile__menu__section__3__item">
            <Link to="#">리뷰</Link>
          </li>
        </ul>

        <ul className="mobile__menu__section__4">
          <Link to="#">Instagram</Link>
        </ul>
      </div>
      <div
        className="mobile__box"
        ref={opacityChange}
        onClick={menuOffHandler}
      ></div>
    </>
  );
}

export default Navbar;
