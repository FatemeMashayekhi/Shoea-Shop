import axios from "../api";

export function cartPage() {
  return `

  <div class="bg-lightGray flex flex-col font-Roboto p-6 gap-y-8">
    <div class="flex justify-between items-center">
      <div class="flex gap-x-5 items-center">
        <img src="./public/imges/logo.png" alt="logo" class="w-4" />
        <p class="font-bold text-2xl">My Cart</p>
      </div>
      <i class="fas fa-search text-2xl text-btnListBg cursor-pointer"></i>
    </div>
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

  `;
}

export const getCart = async () => {
  try {
    const response = await axios.get("/cart");
    if (response.status === 200) {
      console.log(response);
      const cart = response.data;
      console.log(cart);
      document.getElementById("cart-container").innerHTML = "";
      cart.forEach((item) => {
        document.getElementById("cart-container").innerHTML += `
    <div class="flex bg-white rounded-3xl p-6 gap-x-6">
        <div class="bg-navBg rounded-2xl w-48 h-28 flex justify-center items-center">
          <img src="${item.imgUrl}" alt="${item.name}" class="top-10 mix-blend-darken">
        </div>
        <div class="flex flex-col gap-y-3 w-full">
          <div class="flex justify-between">
            <p class="font-semibold">${item.name}</p>
            <img src="./public/imges/bin.png" alt="trash-icon" class="w-5 h-6">
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
              <span>2</span>
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
