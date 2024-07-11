import { homePage, checkVisitedToken } from "./Pages/homePage";
import { login, loginPage } from "./Pages/loginPage";
import { getProducts, productsPage } from "./Pages/productsPage";
import { signup, signupPage } from "./Pages/signupPage";
import { sliderPage } from "./Pages/sliderPage";
import { welcomePage, changeRouter } from "./Pages/welcomePage";
import "./style.css";
import Navigo from "navigo";

// import Swiper and modules styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
// import styles bundle
import "swiper/css/bundle";

import { mainLayout } from "./Layouts/main-layout/mainLayout";
import { getWishes, wishListPage } from "./Pages/wishListPage";
import { productDetailsPage } from "./Pages/productDetailsPage";
import { ownSearch, searchPage, searching } from "./Pages/searchPage";
import { cartPage } from "./Pages/cartPage";
import { checkoutPage } from "./Pages/checkoutPage";
import { addressPage } from "./Pages/addressPage";
import { shipPage } from "./Pages/shipPage";
import { paymentPage } from "./Pages/paymentPage";
import { orderPage } from "./Pages/orderPage";
import { brandPage } from "./Pages/brandPage";

export const router = new Navigo("/");

function render(children, createEventListeners, event) {
  document.querySelector("#app").innerHTML = `<div>${children}</div>`;
  if (createEventListeners) {
    createEventListeners();
  }
  if (event) {
    event();
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
  search: "/search",
  cart: "/cart",
  checkout: "/checkout",
  address: "/address",
  ship: "/ship",
  payment: "/payment",
  order: "/order",
  brand: "/brand",
};

router
  .on(routes.home, () => render(homePage(), checkVisitedToken))
  .on(routes.welcome, () => render(welcomePage(), changeRouter))
  .on(routes.slider, () => render(sliderPage()))
  .on(routes.login, () => render(loginPage(), login))
  .on(routes.signup, () => render(signupPage(), signup))
  .on(routes.products, async () => {
    render(mainLayout(productsPage()));
    await getProducts();
  })
  .on(routes.productDetails, async (match) => {
    const { html, createEventListeners } = await productDetailsPage(match);
    render(html, createEventListeners);
  })
  .on(routes.cart, async () => {
    const { html, createEventListeners } = await cartPage();
    render(html, createEventListeners);
  })
  .on(routes.wishList, () => render(wishListPage(), getWishes))
  .on(routes.search, async (match) => {
    render(searchPage(), ownSearch);
    await searching(match.params);
  })
  .on(routes.checkout, async () => {
    const { html, createEventListeners } = await checkoutPage();
    render(html, createEventListeners);
  })
  .on(routes.address, async () => {
    const { html, createEventListeners } = await addressPage();
    render(html, createEventListeners);
  })
  .on(routes.ship, async () => {
    const { html, createEventListeners } = await shipPage();
    render(html, createEventListeners);
  })
  .on(routes.payment, async () => {
    const { html, createEventListeners } = await paymentPage();
    render(html, createEventListeners);
  })
  .on(routes.order, async () => {
    const { html, createEventListeners } = await orderPage();
    render(html, createEventListeners);
  })
  .on(routes.brand, async (match) => {
    const { html, createEventListeners } = await brandPage(match);
    render(html, createEventListeners);
  })
  .resolve();
