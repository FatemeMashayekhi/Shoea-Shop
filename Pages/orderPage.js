import axios from "../api";
import { router, routes } from "../main";

export async function orderPage() {
  const orders = await getOrders();
  console.log(orders);
  const createEventListeners = () => {
    const home = document.querySelector("#home");
    const cart = document.querySelector("#cart");
    const order = document.querySelector("#order");

    if (home) {
      home.addEventListener("click", () => {
        router.navigate(routes.products);
      });
    }

    if (cart) {
      cart.addEventListener("click", () => {
        router.navigate(routes.cart);
      });
    }

    if (order) {
      order.addEventListener("click", () => {
        router.navigate(routes.order);
      });
    }
    const container = document.querySelector("#container");
    const divActive = document.querySelector("#div-active");
    const activeBtn = document.querySelector("#active");
    const completedBtn = document.querySelector("#complete");
    const divComplete = document.querySelector("#complete-div");
    ///////////////////////////////////////////////////////////

    if (container) {
      const activeOrders = orders.filter((order) => order.is_active);
      console.log(activeOrders);
      container.innerHTML = "";
      activeOrders.forEach((item) => {
        container.innerHTML += `
        
       <div id="card" class="flex bg-white rounded-3xl p-4 gap-x-6">
        <div
          class="bg-navBg rounded-2xl w-48 h-28 flex justify-center items-center"
        >
          <img
            src="${item.imgUrl}"
            alt="${item.imgUrl}"
            class="top-10 mix-blend-darken"
          />
        </div>
        <div class="flex flex-col gap-y-2 w-full">
          <div class="flex justify-between">
            <p class="font-semibold">${item.name}</p>
          </div>
          <div class="flex gap-x-3 items-center text-xs text-textGray">
            <span
              style="background-color: ${item.colorCode}"
              class="rounded-full size-4"
            ></span>
            <span>${item.color}</span>
            <span>|</span>
            <span>Size = ${item.sizes}</span>
            <span>|</span>
            <span>Qty = ${item.quantity}</span>
          </div>
          <p class="bg-navBg w-20 rounded-lg p-1 text-xs text-center">In Delivery</p>
          <div class="flex items-center justify-between">
            <p
              id="single-price"
              class="font-semibold text-lg"
            >
            $${item.price}
            </p>
            <div
              class="bg-black text-white rounded-3xl w-28 p-1 flex justify-center gap-x-4 items-center text-sm"
            >
              <p>Track Order</p>
            </div>
          </div>
        </div>
      </div>
            `;
      });
    }

    ///////////////////////////////////////////////////////////

    if (container) {
      completedBtn.addEventListener("click", () => {
        completedBtn.classList.remove("text-textGray");
        completedBtn.classList.add("text-black");
        divComplete.classList.remove("border-b-2");
        divComplete.classList.add("border-black", "border-b-4");
        divActive.classList.remove("border-black", "border-b-4");
        divActive.classList.add("border-b-2");
        activeBtn.classList.remove("text-black");
        activeBtn.classList.add("text-textGray");
        const notActiveOrders = orders.filter((order) => !order.is_active);
        console.log(notActiveOrders);

        container.innerHTML = "";
        notActiveOrders.forEach((item) => {
          container.innerHTML += `
       <div id="card" class="flex bg-white rounded-3xl p-4 gap-x-6">
        <div
          class="bg-navBg rounded-2xl w-48 h-28 flex justify-center items-center"
        >
          <img
            src="${item.imgUrl}"
            alt="${item.imgUrl}"
            class="top-10 mix-blend-darken"
          />
        </div>
        <div class="flex flex-col gap-y-2 w-full">
          <div class="flex justify-between">
            <p class="font-semibold">${item.name}</p>
          </div>
          <div class="flex gap-x-3 items-center text-xs text-textGray">
            <span
              style="background-color: ${item.colorCode}"
              class="rounded-full size-4"
            ></span>
            <span>${item.color}</span>
            <span>|</span>
            <span>Size = ${item.sizes}</span>
            <span>|</span>
            <span>Qty = ${item.quantity}</span>
          </div>
          <p class="bg-navBg w-20 rounded-lg p-1 text-xs text-center">Completed</p>
          <div class="flex items-center justify-between">
            <p
              id="single-price"
              class="font-semibold text-lg"
            >
            $${item.price}
            </p>
            <div
              class="bg-black text-white rounded-3xl w-28 p-1 flex justify-center gap-x-4 items-center text-sm"
            >
              <p>Track Order</p>
            </div>
          </div>
        </div>
      </div>
            `;
        });
      });
    }
    /////////////////////////////////////////////////////////
    if (container) {
      activeBtn.addEventListener("click", () => {
        activeBtn.classList.remove("text-textGray");
        activeBtn.classList.add("text-black");
        divActive.classList.remove("border-b-2");
        divActive.classList.add("border-black", "border-b-4");
        divComplete.classList.remove("border-black", "border-b-4");
        divComplete.classList.add("border-b-2");
        completedBtn.classList.remove("text-black");
        completedBtn.classList.add("text-textGray");
        const activeOrders = orders.filter((order) => order.is_active);
        console.log(activeOrders);

        container.innerHTML = "";
        activeOrders.forEach((item) => {
          container.innerHTML += `
         <div id="card" class="flex bg-white rounded-3xl p-4 gap-x-6">
          <div
            class="bg-navBg rounded-2xl w-48 h-28 flex justify-center items-center"
          >
            <img
              src="${item.imgUrl}"
              alt="${item.imgUrl}"
              class="top-10 mix-blend-darken"
            />
          </div>
          <div class="flex flex-col gap-y-2 w-full">
            <div class="flex justify-between">
              <p class="font-semibold">${item.name}</p>
            </div>
            <div class="flex gap-x-3 items-center text-xs text-textGray">
              <span
                style="background-color: ${item.colorCode}"
                class="rounded-full size-4"
              ></span>
              <span>${item.color}</span>
              <span>|</span>
              <span>Size = ${item.sizes}</span>
              <span>|</span>
              <span>Qty = ${item.quantity}</span>
            </div>
            <p class="bg-navBg w-20 rounded-lg p-1 text-xs text-center">In Delivery</p>
            <div class="flex items-center justify-between">
              <p
                id="single-price"
                class="font-semibold text-lg"
              >
              $${item.price}
              </p>
              <div
                class="bg-black text-white rounded-3xl w-28 p-1 flex justify-center gap-x-4 items-center text-sm"
              >
                <p>Track Order</p>
              </div>
            </div>
          </div>
        </div>
              `;
        });
      });
    }
  };
  const html = `
  <div class="min-h-screen flex flex-col font-Roboto">

  <div class="bg-lightGray flex flex-col font-Roboto p-6 gap-y-8 grow">
    <div id="header" class="flex justify-between items-center">
      <div class="flex gap-x-5 items-center">
        <img src="./public/imges/logo.png" alt="logo" class="w-4" />
        <p class="font-bold text-2xl">My Orders</p>
      </div>
      <div class="flex gap-x-4">
        <img src="./public/imges/search-interface-symbol.png" alt="search-icon" class="size-6" />
        <img src="./public/imges/moreicon.png" alt="more-icon" class="size-6" />
      </div>
    </div>

    <div class="flex justify-evenly items-center font-semibold text-lg text-center">
      <div id="div-active" class="border-b-4 border-black w-1/2">
        <button type="button" id="active" class="text-black">Active</button>
      </div>
      <div id="complete-div" class="border-b-2 w-1/2">
        <button type="button" id="complete" class="text-textGray">Completed</button>
      </div>
    </div>

    <div id="container" class="grow flex flex-col gap-y-3">

      <div id="card" class="flex bg-white rounded-3xl p-4 gap-x-6">
        <div
          class="bg-navBg rounded-2xl w-48 h-28 flex justify-center items-center"
        >
          <img
            src="./public/imges/shoe1.png"
            alt="img1"
            class="top-10 mix-blend-darken"
          />
        </div>
        <div class="flex flex-col gap-y-2 w-full">
          <div class="flex justify-between">
            <p class="font-semibold">Air Jordan 3 Retro</p>
          </div>
          <div class="flex gap-x-3 items-center text-xs text-textGray">
            <span
              style="background-color: black"
              class="rounded-full size-4"
            ></span>
            <span>Black</span>
            <span>|</span>
            <span>Size = 42</span>
            <span>|</span>
            <span>Qty = 2</span>
          </div>
          <p class="bg-navBg w-20 rounded-lg p-1 text-xs text-center">In Delivery</p>
          <div class="flex items-center justify-between">
            <p
              id="single-price"
              class="font-semibold text-lg"
            >
              $105
            </p>
            <div
              class="bg-black text-white rounded-3xl w-28 p-1 flex justify-center gap-x-4 items-center text-sm"
            >
              <p>Track Order</p>
            </div>
          </div>
        </div>
      </div>


    </div>
  </div>

  <footer class="sticky bottom-0 z-40 ">
    <div class="flex justify-evenly bg-white text-center items-center p-4 rounded-t-3xl shadow-inner">
      <div id="home" class="cursor-pointer">
        <img src="./public/imges/home-2.png" alt="home" />
        <p class="text-10">Home</p>
      </div>
      <div id="cart" class="cursor-pointer">
        <img src="./public/imges/cart.png" alt="cart" />
        <p class="text-10">Cart</p>
      </div>
      <div id="order" class="cursor-pointer">
        <img src="./public/imges/shoppi1.png" alt="order" />
        <p class="text-10">Orders</p>
      </div>
      <div class="cursor-pointer">
        <img src="./public/imges/wallet.png" alt="wallet" />
        <p class="text-10">Wallet</p>
      </div>
      <div class="cursor-pointer">
        <img src="./public/imges/profile.png" alt="profile" />
        <p class="text-10">Profile</p>
      </div>
    </div>
  </footer>

</div>
  `;
  return { html, createEventListeners };
}

const getOrders = async () => {
  try {
    const response = await axios.get("/orders");
    if (response.status === 200) {
      const orders = response.data;
      return orders;
    }
  } catch (error) {
    console.log(error);
  }
};
