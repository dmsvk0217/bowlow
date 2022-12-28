import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./component/Navbar/Navbar";
import LandingPage from "./component/Landingpage/LandingPage";
import Footer from "./component/common/Footer/Footer";
import BowulPage from "./component/BowulPage/BowulPage";
import NewArrivalsPage from "./component/NewArrivalsPage/NewArrivalsPage";
import BestItemPage from "./component/BestItemPage/BestItemPage";
import Shop from "./component/Shop/Shop";
import ScrollToTop from "./component/ScrollToTop";
import NoticePage from "./component/Notice/NoticePage";
import NoticeCreatePage from "./component/Notice/NoticeCreatePage";
import NoticeDatail from "./component/Notice/NoticeDatail";
import EventPage from "./component/Event/EventPage";
import EventCreatePage from "./component/Event/EventCreatePage";
import EventDatail from "./component/Event/EventDatail";
import ReviewPage from "./component/common/ReviewPage/ReviewPage";
import LoginPage from "./component/LoginPage/LoginPage";
import RegisterPage from "./component/RegisterPage/RegisterPage";
import Auth from "./hoc/auth";
import NoticeUpdatePage from "./component/Notice/NoticeUpdatePage";
import EventUpdatePage from "./component/Event/EventUpdatePage";
import ProductDetailPage from "./component/ProductPage/ProductDetailPage";

const AuthLandingPage = Auth(LandingPage, null);
const AuthLoginPage = Auth(LoginPage, false);
const AuthRegisterPage = Auth(RegisterPage, false);

function App() {
  return (
    // <React.StrictMode>
    <Router>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<AuthLandingPage />} />
        <Route path="/bowul" element={<BowulPage />} />
        <Route path="/newArrivals" element={<NewArrivalsPage />} />
        <Route path="/bestItem" element={<BestItemPage />} />
        <Route path="/shop" element={<Shop />} />

        {/* product */}
        <Route path="/product/:id" element={<ProductDetailPage />} />

        {/* notice */}
        <Route path="/notice" element={<NoticePage />} />
        <Route path="/notice/:id" element={<NoticeDatail />} />
        <Route path="/notice/create" element={<NoticeCreatePage />} />
        <Route path="/notice/update/:id" element={<NoticeUpdatePage />} />

        {/* event */}
        <Route path="/event" element={<EventPage />} />
        <Route path="/event/:id" element={<EventDatail />} />
        <Route path="/event/create" element={<EventCreatePage />} />
        <Route path="/event/update/:id" element={<EventUpdatePage />} />

        <Route path="/review" element={<ReviewPage />} />
        <Route path="/login" element={<AuthLoginPage />} />
        <Route path="/register" element={<AuthRegisterPage />} />
      </Routes>
      <Footer />
    </Router>
    //</React.StrictMode>
  );
}

export default App;
