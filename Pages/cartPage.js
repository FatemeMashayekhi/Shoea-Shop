import axios from "../api";

export function cartPage() {
  return `

  <div class="min-h-screen flex flex-col font-Roboto">
  <div class="bg-lightGray flex flex-col font-Roboto p-6 gap-y-8 grow">
    <div class="flex justify-between items-center">
      <div class="flex gap-x-5 items-center">
        <img src="./public/imges/logo.png" alt="logo" class="w-4" />
        <p class="font-bold text-2xl">My Cart</p>
      </div>
    </div>
    <label for="search-box" class="relative">
      <i id="search" class="fas fa-search absolute top-4 left-3 text-btnListBg text-xl cursor-pointer"></i>
      <input type="text" id="search-input" class="w-full h-14 bg-productsBg px-11 rounded-2xl placeholder-placeholderText" placeholder="Search.." />
    </label>
    <div id="cart-container" class="flex flex-col gap-y-6">
      <div class="flex bg-white rounded-3xl p-6 gap-x-6">
        <div class="bg-navBg rounded-2xl size-20">
          <img src="./public/imges/adidas/Miniaturized/1.png" alt="pic" class="">
        </div>
        <div class="flex flex-col gap-y-3 w-full">
          <div class="flex justify-between">
            <p class="font-semibold">Air Jordan 3 Retro</p>
            <img src="./public/imges/bin.png" alt="trash-icon" class="w-5 h-6">
          </div>
          <div class="flex gap-x-3 items-center text-xs text-textGray">
            <span class="bg-black rounded-full size-4"></span>
            <span>Black</span>
            <span>|</span>
            <span>Size = 42</span>
          </div>
          <div class="flex items-center justify-between">
            <p class="font-semibold text-lg">$105.00</p>
            <div class="bg-navBg rounded-3xl w-24 p-2 font-semibold flex justify-center gap-x-4 items-center text-sm">
              <i class="fa-solid fa-minus cursor-pointer"></i>
              <span>2</span>
              <i class="fa-solid fa-plus cursor-pointer"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
<footer class="sticky bottom-0 z-40 bg-white">
  <div class="h-48 flex flex-col gap-y-5">
    <div class="flex justify-between p-6 rounded-t-45 shadow-inner ">
      <div>
        <p class="text-xs text-textGray">Total price</p>
        <p class="font-semibold text-2xl">$585.00</p>
      </div>
      <div class="relative">
      <button type="button" class="bg-black text-white p-4 rounded-full w-64 text-center">
        Checkout
      </button>
      <img src="./public/imges/gocheckout.png" alt="checkout-icon" class="right-14 top-5 absolute" />
      </div>
    </div>
    <div class="flex justify-evenly mb-3 text-center items-center">
      <a href="/products" data-navigo>
        <img src="./public/imges/home-2.png" alt="home" />
        <p class="text-10">Home</p>
      </a>
      <a href="/cart" data-navigo>
        <img src="./public/imges/cart-2.png" alt="cart" />
        <p class="text-10">Cart</p>
      </a>
      <a href="#" data-navigo>
        <img src="./public/imges/shoppi.png" alt="order" />
        <p class="text-10">Orders</p>
      </a>
      <a href="#" data-navigo>
        <img src="./public/imges/wallet.png" alt="wallet" />
        <p class="text-10">Wallet</p>
      </a>
      <a href="#" data-navigo>
        <img src="./public/imges/profile.png" alt="profile" />
        <p class="text-10">Profile</p>
      </a>
    </div>
  </div>
</footer>

  </div>

  `;
}

document.addEventListener("DOMContentLoaded", () => {
  const searchInput = document.getElementById("search-input");
  searchInput.addEventListener("input", () => {
    const searchQuery = searchInput.value.toLowerCase();
    getCart(searchQuery);
  });
});

export const getCart = async (searchQuery) => {
  try {
    const response = await axios.get("/cart");
    if (response.status === 200) {
      const cart = response.data;
      console.log(cart);

      const filteredProducts = searchQuery
        ? cart.filter((item) => item.name.toLowerCase().includes(searchQuery))
        : cart;

      document.getElementById("cart-container").innerHTML = "";
      filteredProducts.forEach((item) => {
        document.getElementById("cart-container").innerHTML += `
    <div id="card" class="flex bg-white rounded-3xl p-6 gap-x-6">
        <div class="bg-navBg rounded-2xl w-48 h-28 flex justify-center items-center">
          <img src="${item.imgUrl}" alt="${item.name}" class="top-10 mix-blend-darken">
        </div>
        <div class="flex flex-col gap-y-3 w-full">
          <div class="flex justify-between">
            <p class="font-semibold">${item.name}</p>
            <img src="./public/imges/bin.png" alt="trash-icon" onclick="deleteCart(${item.id})" data-product-id="${item.id}" id="trash-icon" class="w-5 h-6 cursor-pointer">
          </div>
          <div class="flex gap-x-3 items-center text-xs text-textGray">
            <span style="background-color:${item.colorCode};" class="rounded-full size-4"></span>
            <span>${item.color}</span>
            <span>|</span>
            <span>Size = ${item.sizes}</span>
          </div>
          <div class="flex items-center justify-between">
            <p class="font-semibold text-lg">$${item.price}</p>
            <div class="bg-navBg rounded-3xl w-24 p-2 font-semibold flex justify-center gap-x-4 items-center text-sm">
              <i class="fa-solid fa-minus cursor-pointer"></i>
              <span>${item.quantity}</span>
              <i class="fa-solid fa-plus cursor-pointer"></i>
            </div>
          </div>
        </div>
    </div>
          `;
      });
    }
  } catch (error) {
    console.log(error);
  }
};

// let trashIcons = document.querySelectorAll("#trash-icon");
// trashIcons.forEach((icon) => {
//   icon.addEventListener("click", (event) => {
//     alert("hiii");
//     const productId = event.target.dataset.productId;
//     deleteCart(productId);
//   });
// });

export async function deleteCart(productId) {
  try {
    const response = await axios.delete(`/cart/${productId}`);
    if (response.status === 200) {
      console.log(response);
      getCart();
    }
  } catch (error) {
    console.log(error);
  }
}
