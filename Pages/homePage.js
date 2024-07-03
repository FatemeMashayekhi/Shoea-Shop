import { router, routes } from "../main.js";

export function homePage() {
  return `
    <div class="flex flex-col justify-around min-h-screen items-center">
        <div></div>
        <div class="flex items-center">
          <img src="./imges/Group 2.png" alt="logo-Group2" />
          <p class="text-5xl font-Roboto font-semibold text-darkBlue">Shoea</p>
        </div>
        <div class="h-10 w-10 animate-spin rounded-full border-5 border-solid border-current border-e-transparent align-[-0.125em] text-surface motion-reduce:animate-[spin_2s_linear_infinite] dark:text-black"></div>
    </div>
    `;
}

export function checkVisitedToken() {
  const visitedToken = localStorage.getItem("previouslyVisited") ?? false;
  const accessToken = localStorage.getItem("accessToken") ?? false;
  if (accessToken) {
    setTimeout(() => {
      router.navigate(routes.products);
    }, 2000);
  } else {
    if (!visitedToken) {
      localStorage.setItem("previouslyVisited", "true");
      setTimeout(() => {
        router.navigate(routes.welcome);
      }, 2000);
    } else {
      setTimeout(() => {
        router.navigate(routes.login);
      }, 2000);
    }
  }
}
