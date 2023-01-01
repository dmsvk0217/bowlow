import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// auth nav footer scroll
import Navbar from "./component/Navbar/Navbar";
import Footer from "./component/common/Footer/Footer";
import ScrollToTop from "./component/ScrollToTop";

import {
  AuthLandingPage,
  AuthBowulPage,
  AuthNewArrivalsPage,
  AuthBestItemPage,
  AuthShop,
  AuthCartPage,
  AuthProductDetailPage,
  AuthNoticePage,
  AuthNoticeDatail,
  AuthNoticeCreatePage,
  AuthNoticeUpdatePage,
  AuthEventPage,
  AuthEventDatail,
  AuthEventCreatePage,
  AuthEventUpdatePage,
  AuthReviewPage,
  AuthReviewCreatePage,
  AuthLoginPage,
  AuthRegisterPage,
  AuthMyPage,
} from "./app.auth";
import Test from "./component/TestComponent";

function App() {
  return (
    // <React.StrictMode>
    <Router>
      <ScrollToTop />
      <Navbar />
      <Routes>
        {/* user, auth */}
        <Route path="/login" element={<AuthLoginPage />} />
        <Route path="/register" element={<AuthRegisterPage />} />
        <Route path="/mypage" element={<AuthMyPage />} />
        <Route path="/test" element={<Test />} />
        {/* product */}
        <Route path="/product/:id" element={<AuthProductDetailPage />} />
        <Route path="/" element={<AuthLandingPage />} />
        <Route path="/bowul" element={<AuthShop />} />
        <Route path="/newArrivals" element={<AuthShop />} />
        <Route path="/bestItem" element={<AuthShop />} />
        <Route path="/shop" element={<AuthShop />} />
        {/* cart */}
        <Route path="/cart" element={<AuthCartPage />} />
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
        {/* review */}
        <Route path="/review" element={<AuthReviewPage />} />
        <Route path="/review/create" element={<AuthReviewCreatePage />} />
      </Routes>
      <Footer />
    </Router>
    //</React.StrictMode>
  );
}

export default App;
