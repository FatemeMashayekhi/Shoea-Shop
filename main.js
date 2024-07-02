import { homePage, checkVisitedToken } from "./Pages/homePage";
import { login, loginPage } from "./Pages/loginPage";
import { getProducts, productsPage } from "./Pages/productsPage";
import { signup, signupPage } from "./Pages/signupPage";
import { sliderPage } from "./Pages/sliderPage";
import { welcomePage, changeRouter } from "./Pages/welcomePage";
import "./style.css";
import Navigo from "navigo";

// core version + navigation, pagination modules:
import Swiper from "swiper";
import { Navigation, Pagination } from "swiper/modules";
// import Swiper and modules styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
// import styles bundle
import "swiper/css/bundle";
import { mainLayout } from "./Layouts/main-layout/mainLayout";
import { wishListPage } from "./Pages/wishListPage";
import { productDetailsPage } from "./Pages/productDetailsPage";

export const router = new Navigo("/");

function render(children, createEventListeners) {
  document.querySelector("#app").innerHTML = `<div>${children}</div>`;
  if (createEventListeners) {
    createEventListeners();
  }
}

export const routes = {
  home: "/",
  welcome: "/welcome",
  slider: "/slider",
  login: "/login",
  signup: "/signup",
  products: "/products",
  productDetails: "/products/:id",
  wishList: "/wishList",
};

router
  .on(routes.home, () => render(homePage(), checkVisitedToken))
  .on(routes.welcome, () => render(welcomePage(), changeRouter))
  .on(routes.slider, () => render(sliderPage()))
  .on(routes.login, () => render(loginPage(), login))
  .on(routes.signup, () => render(signupPage(), signup))
  .on(routes.products, () => render(mainLayout(productsPage(), getProducts())))
  .on(routes.productDetails, async (match) =>
    render(await productDetailsPage(match))
  )
  .on(routes.wishList, () => render(wishListPage()))
  .resolve();
