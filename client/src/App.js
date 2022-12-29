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
  AuthLoginPage,
  AuthRegisterPage,
} from "./app.auth";
import Test from "./component/TestComponent";

function App() {
  return (
    // <React.StrictMode>
    <Router>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/test" element={<Test />} />

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
