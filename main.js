import { homePage } from "./Pages/homePage";
import { loginPage } from "./Pages/loginPage";
import { sliderPage } from "./Pages/sliderPage";
import { welcomePage } from "./Pages/welcomePage";
import "./style.css";
import Navigo from "navigo";

export const router = new Navigo("/");

function render(children) {
  document.querySelector("#app").innerHTML = `<div>${children}</div>`;
}

export const routes = {
  home: "/",
  welcome: "/welcome",
  slider: "/slider",
  login: "/login",
};

router
  .on(routes.home, () => render(homePage()))
  .on(routes.welcome, () => render(welcomePage()))
  .on(routes.slider, sliderPage)
  .on(routes.login, loginPage)
  .resolve();
