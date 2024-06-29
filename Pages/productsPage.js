import { router, routes } from "../main";

export function productsPage() {
  const accessToken = localStorage.getItem("accessToken") ?? false;
  if (accessToken) {
    document.querySelector("#app").innerHTML = `Hiiii Productsss`;
  } else {
    router.navigate(routes.login);
  }
}
