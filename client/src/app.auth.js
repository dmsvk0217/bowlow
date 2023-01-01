import Auth from "./hoc/auth";

//user, auth
import LandingPage from "./component/Landingpage/LandingPage";
import RegisterPage from "./component/RegisterPage/RegisterPage";
import LoginPage from "./component/LoginPage/LoginPage";
import MyPage from "./component/MyPage/MyPage";

//product type + detail
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
import ReviewCreatePage from "./component/ReviewPage/ReviewCreatePage";

//cart
import CartPage from "./component/Cart/CartPage/CartPage";

//user auth
export const AuthLandingPage = Auth(LandingPage, null);
export const AuthLoginPage = Auth(LoginPage, false);
export const AuthRegisterPage = Auth(RegisterPage, false);
export const AuthMyPage = Auth(MyPage, true);

//product type + detail
export const AuthShop = Auth(Shop, null);
export const AuthProductDetailPage = Auth(ProductDetailPage, null);

//notice
export const AuthNoticePage = Auth(NoticePage, null);
export const AuthNoticeCreatePage = Auth(NoticeCreatePage, true);
export const AuthNoticeDatail = Auth(NoticeDatail, null);
export const AuthNoticeUpdatePage = Auth(NoticeUpdatePage, true);

//event
export const AuthEventPage = Auth(EventPage, null);
export const AuthEventCreatePage = Auth(EventCreatePage, true);
export const AuthEventDatail = Auth(EventDatail, null);
export const AuthEventUpdatePage = Auth(EventUpdatePage, true);

//review
export const AuthReviewPage = Auth(ReviewPage, null);
export const AuthReviewCreatePage = Auth(ReviewCreatePage, null);

//cart
export const AuthCartPage = Auth(CartPage, true);
