import axios from "../api";
import { router, routes } from "../main";

export function searchPage() {
  return `
<div class="p-6 flex flex-col gap-y-5 font-Roboto min-h-screen pb-0">
  <label for="search-box" class="relative">
    <i id="search-icon" class="fas fa-search absolute top-4 left-3 text-placeholderText text-xl cursor-pointer"></i>
    <input type="text" id="search-box" class="w-full h-14 bg-productsBg px-11 rounded-2xl" />
    <img src="./public/imges/afilter.png" alt="filter" class="absolute right-4 top-4" />
  </label>

  <div class="flex justify-between font-semibold items-center">
    <p id="p1" class="text-xl">Recent</p>
    <p id="p2">Clear All</p>
  </div>

  <div class="border-1"></div>

  <div id="container" class="grow grid grid-cols-2">
    <div class="flex flex-col gap-y-6">
      <div class="flex justify-between items-center">
        <p class="text-textGray">Nike Wrapshot Classic</p>
        <img src="./public/imges/deletebtn.png" alt="delete-icon" class=" left-1 top-1 text-xs pl-0.5" />
      </div>
    
      <div class="flex justify-between items-center">
        <p class="text-textGray">Nike Wrapshot Classic</p>
        <img src="./public/imges/deletebtn.png" alt="delete-icon" class=" left-1 top-1 text-xs pl-0.5" />
      </div>
    
      <div class="flex justify-between items-center">
        <p class="text-textGray">Nike Wrapshot Classic</p>
        <img src="./public/imges/deletebtn.png" alt="delete-icon" class=" left-1 top-1 text-xs pl-0.5" />
      </div>
    </div>
  </div>

  <footer class="sticky bottom-0 z-40 bg-white">
   <div class="flex justify-evenly mb-3 text-center items-center">
    <div id="home" class="cursor-pointer">
      <img src="./public/imges/home-2.png" alt="home" />
      <p class="text-10">Home</p>
    </div>
    <div id="cart" class="cursor-pointer">
      <img src="./public/imges/cart.png" alt="cart" />
      <p class="text-10">Cart</p>
    </div>
    <div class="cursor-pointer">
      <img src="./public/imges/shoppi.png" alt="order" />
      <p class="text-10">Orders</p>
    </div>
    <div class="cursor-pointer">
      <img src="./public/imges/wallet.png" alt="wallet"/>
      <p class="text-10">Wallet</p>
    </div>
    <div class="cursor-pointer">
      <img src="./public/imges/profile.png" alt="profile"/>
      <p class="text-10">Profile</p>
    </div>
   </div>
 </footer>
</div>
  `;
}

export const fetchSearch = async (query) => {
  try {
    const response = await axios(`/products?q=${query}`);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export async function searching(params) {
  const result = await fetchSearch(params?.q);
  console.log(params.q);

  ///////ensure the DOM elements are available before setting their content/////
  let p1 = document.getElementById("p1");
  let p2 = document.getElementById("p2");
  let container = document.getElementById("container");
  const home = document.getElementById("home");
  const cart = document.getElementById("cart");
  const searchInput = document.querySelector("#search-box");

  home.addEventListener("click", () => {
    window.location.replace(routes.products);
  });

  cart.addEventListener("click", () => {
    window.location.replace(routes.cart);
  });

  if (searchInput) {
    searchInput.value = params.q;
  }

  if (!p1 || !p2 || !container) {
    console.error("One or more elements are not found in the DOM");
    return;
  }

  p1.innerHTML = `Results for "${params.q}"`;
  p2.innerHTML =
    result.length === 1 ? `${result.length} found` : `${result.length} founds`;

  container.innerHTML = "";
  if (result.length !== 0) {
    result.forEach((item) => {
      container.innerHTML += `

  <div class="flex flex-col justify-start gap-y-2">
    <div class="bg-productsBg size-[182px] relative rounded-3xl">
    <img src="./imges/love.png" alt="love-icon" class="absolute right-3 top-3 z-30" />
      <img
        src="${item.images[0]}"
        alt="${item.name}"
        class="absolute top-9 left-5 mix-blend-darken"
      />
    </div>
    <p class="font-semibold text-xl">${item.name}</p>
    <div class="flex gap-x-2 text-center">
      <img src="../public/imges/star.png" alt="star" class="size-5" />
      <p class="text-textGray">${item.rate}</p>
      <span>|</span>
      <p class="bg-navBg text-xs w-20 h-6 rounded-md pt-1">${item.sold} sold</p>
    </div>
    <p class="font-semibold tracking-tighter">$${item.price}</p>
  </div>

      `;
    });
  } else {
    container.innerHTML = `
<div class="font-Roboto flex flex-col justify-center items-center mt-28 gap-y-4">
  <img src="./public/imges/notfound.png" alt="notFound" class="size-72" />
  <p class="font-semibold text-2xl">Not Found</p>
  <p class="text-center">
    Sorry, the keyword you entered cannot be found. Please check again or
    search with another keyword.
  </p>
</div>
    `;
  }
}

export function ownSearch() {
  document.querySelector("#search-icon").addEventListener("click", () => {
    const searchInput = document.querySelector("#search-box");
    if (searchInput.value !== "") {
      const query = searchInput?.value.toLowerCase().trim();
      // window.location.replace(`/search?q=${query}`);
      router.navigate(`/search?q=${query}`);
    }
  });
}
