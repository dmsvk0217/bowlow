import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// auth nav footer scroll
import Navbar from "./component/Navbar/Navbar";
import Footer from "./component/common/Footer/Footer";
import Auth from "./hoc/auth";
import ScrollToTop from "./component/ScrollToTop";

//user auth
import LandingPage from "./component/Landingpage/LandingPage";
import RegisterPage from "./component/RegisterPage/RegisterPage";
import LoginPage from "./component/LoginPage/LoginPage";

//product type + detail
import BowulPage from "./component/BowulPage/BowulPage";
import NewArrivalsPage from "./component/NewArrivalsPage/NewArrivalsPage";
import BestItemPage from "./component/BestItemPage/BestItemPage";
import Shop from "./component/Shop/Shop";
import ProductDetailPage from "./component/ProductPage/ProductDetailPage";

//notice
import NoticePage from "./component/Notice/NoticePage";
import NoticeCreatePage from "./component/Notice/NoticeCreatePage";
import NoticeDatail from "./component/Notice/NoticeDatail";
import NoticeUpdatePage from "./component/Notice/NoticeUpdatePage";

//event
import EventPage from "./component/Event/EventPage";
import EventCreatePage from "./component/Event/EventCreatePage";
import EventDatail from "./component/Event/EventDatail";
import EventUpdatePage from "./component/Event/EventUpdatePage";

//review
import ReviewPage from "./component/ReviewPage/ReviewPage";

//cart
import CartPage from "./component/Cart/CartPage";

//user auth
const AuthLandingPage = Auth(LandingPage, null);
const AuthLoginPage = Auth(LoginPage, false);
const AuthRegisterPage = Auth(RegisterPage, false);

//product type + detail
const AuthBowulPage = Auth(BowulPage, null);
const AuthNewArrivalsPage = Auth(NewArrivalsPage, null);
const AuthBestItemPage = Auth(BestItemPage, null);
const AuthShop = Auth(Shop, null);
const AuthProductDetailPage = Auth(ProductDetailPage, null);

//notice
const AuthNoticePage = Auth(NoticePage, null);
const AuthNoticeCreatePage = Auth(NoticeCreatePage, true);
const AuthNoticeDatail = Auth(NoticeDatail, null);
const AuthNoticeUpdatePage = Auth(NoticeUpdatePage, true);

//event
const AuthEventPage = Auth(EventPage, null);
const AuthEventCreatePage = Auth(EventCreatePage, true);
const AuthEventDatail = Auth(EventDatail, null);
const AuthEventUpdatePage = Auth(EventUpdatePage, true);

//review
const AuthReviewPage = Auth(ReviewPage, null);

//cart
const AuthCartPage = Auth(CartPage, true);

function App() {
  return (
    // <React.StrictMode>
    <Router>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<AuthLandingPage />} />
        <Route path="/bowul" element={<AuthBowulPage />} />
        <Route path="/newArrivals" element={<AuthNewArrivalsPage />} />
        <Route path="/bestItem" element={<AuthBestItemPage />} />
        <Route path="/shop" element={<AuthShop />} />
        <Route path="/cart" element={<AuthCartPage />} />

        {/* product */}
        <Route path="/product/:id" element={<AuthProductDetailPage />} />

        {/* notice */}
        <Route path="/notice" element={<AuthNoticePage />} />
        <Route path="/notice/:id" element={<AuthNoticeDatail />} />
        <Route path="/notice/create" element={<AuthNoticeCreatePage />} />
        <Route path="/notice/update/:id" element={<AuthNoticeUpdatePage />} />

        {/* event */}
        <Route path="/event" element={<AuthEventPage />} />
        <Route path="/event/:id" element={<AuthEventDatail />} />
        <Route path="/event/create" element={<AuthEventCreatePage />} />
        <Route path="/event/update/:id" element={<AuthEventUpdatePage />} />

        <Route path="/review" element={<AuthReviewPage />} />
        <Route path="/login" element={<AuthLoginPage />} />
        <Route path="/register" element={<AuthRegisterPage />} />
      </Routes>
      <Footer />
    </Router>
    //</React.StrictMode>
  );
}

export default App;
