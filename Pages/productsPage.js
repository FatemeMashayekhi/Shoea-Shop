import { router, routes } from "../main";

export function productsPage() {
  const accessToken = localStorage.getItem("accessToken") ?? false;
  if (accessToken) {
    return `
  <label for="search" class="relative">
    <i class="fa-solid fa-magnifying-glass absolute top-0 left-4 pt-0.5 text-grayBtn"></i>
    <input type="text" id="search" placeholder="Search" class="w-96 h-9 bg-lightGray pl-10 placeholder-placeholderText" />
  </label>
  heyyy
    `;
  } else {
    router.navigate(routes.login);
  }
}
