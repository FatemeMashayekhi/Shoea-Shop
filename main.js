import { homePage, checkVisitedToken } from "./Pages/homePage";
import { loginPage } from "./Pages/loginPage";
import { productsPage } from "./Pages/productsPage";
import { signupPage } from "./Pages/signupPage";
import { sliderPage } from "./Pages/sliderPage";
import { welcomePage, changeRouter } from "./Pages/welcomePage";
import "./style.css";
import Navigo from "navigo";

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
};

router
  .on(routes.home, () => render(homePage(), checkVisitedToken))
  .on(routes.welcome, () => render(welcomePage(), changeRouter))
  .on(routes.slider, sliderPage)
  .on(routes.login, loginPage)
  .on(routes.signup, signupPage)
  .on(routes.products, productsPage)

  .resolve();
