import { router, routes } from "../main";

export function productsPage() {
  const accessToken = localStorage.getItem("accessToken") ?? false;
  if (accessToken) {
    return `
<div class="flex flex-col gap gap-y-5">
  <label for="search" class="relative">
    <i class="fa-solid fa-magnifying-glass absolute top-2 left-4 pt-0.5 text-grayBtn"></i>
    <input type="text" id="search" placeholder="Search" class="w-96 h-9 bg-lightGray pl-10 placeholder-placeholderText" />
  </label>
<div class="flex flex-wrap gap-10 justify-center font-Roboto">
  <a href="#" data-navigo class="text-center flex flex-col gap-y-3">
    <div class="bg-navBg rounded-full size-[60px] relative">
      <img src="./public/imges/categories.png" alt="nike-logo" class="absolute top-3 left-3" />
    </div>
    <p class="text-sm ">Nike</p>
  </a>
  <a href="#" data-navigo class="text-center flex flex-col gap-y-3">
    <div class="bg-navBg rounded-full size-[60px] relative">
      <img src="./public/imges/adidas.png" alt="adidas-logo" class="absolute top-4 left-3" />
    </div>
    <p class="text-sm">Adidas</p>
  </a>
  <a href="#" data-navigo class="text-center flex flex-col gap-y-3">
    <div class="bg-navBg rounded-full size-[60px] relative">
      <img src="./public/imges/puma.png" alt="puma-logo" class="absolute top-4 left-2" />
    </div>
    <p class="text-sm">Puma</p>
  </a>
  <a href="#" data-navigo class="text-center flex flex-col gap-y-3">
    <div class="bg-navBg rounded-full size-[60px] relative">
      <img src="./public/imges/asics.png" alt="asics-logo" class="absolute top-3 left-4" />
    </div>
    <p class="text-sm">Asics</p>
  </a>
  <a href="#" data-navigo class="text-center flex flex-col gap-y-3">
    <div class="bg-navBg rounded-full size-[60px] relative">
      <img src="./public/imges/reebok.png" alt="rebook-logo" class="absolute top-4 left-3" />
    </div>
    <p class="text-sm">Reebok</p>
  </a>
  <a href="#" data-navigo class="text-center flex flex-col gap-y-3">
    <div class="bg-navBg rounded-full size-[60px] relative">
      <img src="./public/imges/newba.png" alt="newba-logo" class="absolute top-2 left-2" />
    </div>
    <p class="text-sm">New Ba..</p>
  </a>
  <a href="#" data-navigo class="text-center flex flex-col gap-y-3">
    <div class="bg-navBg rounded-full size-[60px] relative">
      <img src="./public/imges/convers.png" alt="converse-logo" class="absolute top-4 left-3" />
    </div>
    <p class="text-sm">Converse</p>
  </a>
  <a href="#" data-navigo class="text-center flex flex-col gap-y-3">
    <div class="bg-navBg rounded-full size-[60px] relative">
      <img src="./public/imges/more.png" alt="more-logo" class="absolute top-3 left-2" />
    </div>
    <p class="text-sm">More ..</p>
  </a>
</div>
<div class="flex justify-between px-2 font-semibold items-center tracking-wider">
  <p class="text-xl">Most Popular</p>
  <a href="#">
    <p class="text-base">See All</p>
  </a>
</div>
</div>
    `;
  } else {
    router.navigate(routes.login);
  }
}
