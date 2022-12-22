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
import Notice from "./component/Notice/Notice";

function App() {
  return (
    <React.StrictMode>
      <Router>
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/bowul" element={<BowulPage />} />
          <Route path="/newArrivals" element={<NewArrivalsPage />} />
          <Route path="/bestItem" element={<BestItemPage />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/notice" element={<Notice />} />
        </Routes>
        <Footer />
      </Router>
    </React.StrictMode>
  );
}

export default App;
