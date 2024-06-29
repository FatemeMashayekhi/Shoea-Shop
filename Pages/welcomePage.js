import { router, routes } from "../main.js";
export function welcomePage() {
  return `
<div class="bg-[url('../public/imges/WallpaperDog.png')] w-full h-screen bg-cover">
<div class="w-full h-screen flex flex-col justify-end bg-black bg-opacity-10 text-white gap-6 p-8 font-Roboto">
<p class="text-4xl font-normal flex ">
  Welcome to
  <img src="./imges/waving-hand_1f44b.png" alt="wave-hand" class="w-9 h-9 ml-2" />
</p>
<p class="text-7xl font-bold">Shoea</p>
<p class="text-base font-medium mb-12">
  The best sneakers & shoes e-commerse app of the century for your fashion
  needs!
</p>
</div>
</div>
    `;
}

export function changeRouter() {
  setTimeout(() => {
    router.navigate(routes.slider);
  }, 2000);
}
