import { homePage } from "./Pages/homePage";
import "./style.css";
import Navigo from "navigo";

export const router = new Navigo("/");

function render(children) {
  document.querySelector("#app").innerHTML = `<div>${children}</div>`;
}

export const routes = {
  home: "/",
};

router.on(routes.home, () => render(homePage())).resolve();
