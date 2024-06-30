import { router, routes } from "../main";

export function productsPage() {
  const accessToken = localStorage.getItem("accessToken") ?? false;
  if (accessToken) {
    return `hiii Productsss`;
  } else {
    router.navigate(routes.login);
  }
}
