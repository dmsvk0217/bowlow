import React, { useRef } from "react";
import { Link } from "react-router-dom";
import "./Navber.css";

function Navbar() {
  const positionChange = useRef();

  const menuHandler = () => {
    // ChangePosition.current.style = "right:0px;";
  };

  return (
    <>
      <nav className="navbar">
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
        </div>

        <ul className="navbar__bottom">
          <li className="bottom_navbar_item">
            <Link to="#">BOWUL</Link>
          </li>
          <li className="bottom_navbar_item">
            <Link to="#">NEW ARRIVALS</Link>
          </li>
          <li className="bottom_navbar_item">
            <Link to="#">BEST</Link> ITEM
          </li>
          <li className="bottom_navbar_item">
            <Link to="#">SHOP</Link>
          </li>
        </ul>
        <Link to="#" className="menu" onClick={menuHandler}>
          MENU
        </Link>
      </nav>
      <div ref={positionChange} className="mobile__menu">
        <ul className="mobile__menu__section__1">
          <li className="mobile__menu__section__1__item">검색</li>
          <li className="mobile__menu__section__1__item">로그인</li>
          <li className="mobile__menu__section__1__item">장바구니</li>
          <li className="mobile__menu__section__1__item">마이 페이지</li>
        </ul>

        <ul className="mobile__menu__section__2">
          <li className="mobile__menu__section__2__item">BOWUL</li>
          <li className="mobile__menu__section__2__item">NEW ARRIVALS</li>
          <li className="mobile__menu__section__2__item">BEST ITEM</li>
          <li className="mobile__menu__section__2__item">SHOP</li>
        </ul>

        <ul className="mobile__menu__section__3">
          <li className="mobile__menu__section__3__item">공지사항</li>
          <li className="mobile__menu__section__3__item">이벤트</li>
          <li className="mobile__menu__section__3__item">리뷰</li>
        </ul>

        <ul className="mobile__menu__section__4">
          <Link to="#">Instagram</Link>
        </ul>
      </div>
    </>
  );
}

export default Navbar;
