import Swiper from "swiper";
import axios from "../api";
import { Navigation, Pagination } from "swiper/modules";

export async function productDetailsPage(match) {
  const product = await getProduct(match.data.id);
  console.log(product);
  return `
  <div class="font-Roboto">
  <div class="relative bg-navBg w-full h-96">
    <img src="../public/imges/prev icon.png" alt="prev-icon" class="cursor-pointer absolute z-40" />
    <div class="swiper mySwiper">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <img src="../public/imges/adidas/1.png" alt="adidas1" />
        </div>
        <div class="swiper-slide">
          <img src="../public/imges/adidas/1_2.png" alt="adidas1-2" />
        </div>
        <div class="swiper-slide">
          <img src="../public/imges/adidas/1_3.png" alt="adidas1-3" />
        </div>
      </div>
      <div class="swiper-pagination"></div>
    </div>
  </div>
  <div class="flex flex-col p-6 gap-y-4">
    <div class="flex justify-between">
      <p class="font-semibold text-4xl">${product.name}</p>
      <img src="../public/imges/like.png" alt="like-icon" class="size-7" />
    </div>
    <div class="flex gap-x-4 items-center">
      <p class="bg-navBg text-xs w-20 h-6 rounded-md pt-1 text-center">${
        product.sold
      } sold</p>
      <img src="../public/imges/star.png" alt="star-logo" class="size-5" />
      <p class="text-sm text-btnListBg font-semibold pt-1">${
        product.rate
      } (5.389 reviews)</p>
    </div>
    <div class="border-1"></div>
    <div class="flex flex-col gap-y-2">
      <p class="font-semibold text-lg">Description</p>
      <p class="text-sm text-btnListBg">
        ${product.description}
        <span class="text-sm text-btnListBg font-semibold tracking-wide cursor-pointer">view more..</span>
      </p>
    </div>
    <div class="flex gap-x-6 overflow-x-hidden">
      <div class="flex flex-col gap-y-2">
        <p class="font-semibold text-lg">Size</p>
        <div id="size" class="flex gap-x-3">
          ${sizesList(product.sizes)}
        </div>
      </div>
      <div class="flex flex-col gap-y-2">
        <p class="font-semibold text-lg">Color</p>
        <div class="flex gap-x-3">
          ${colorsList(product.colors)}
        </div>
      </div>
    </div>
    <div class="flex gap-x-5 items-center">
      <p class="font-semibold text-lg tracking-wide">Quantity</p>
      <div class="bg-navBg rounded-3xl w-32 p-2 font-semibold text-lg flex justify-center gap-x-6 items-center">
        <i class="fa-solid fa-minus cursor-pointer"></i>
        <span>2</span>
        <i class="fa-solid fa-plus cursor-pointer"></i>
      </div>
    </div>
    <div class="border-1"></div>
    <div>
      <div>
        <p>Total price</p>
        <p>$240.00</p>
      </div>
      <button type="button">
        <i class="fas fa-shopping-bag"></i>
        Add to Cart
      </button>
    </div>
  </div>
</div>
  `;
}

const getProduct = async (productId) => {
  try {
    const response = await axios.get(`/products/${productId}`);
    if (response.status === 200) {
      const product = response.data;

      return product;
    }
  } catch (error) {
    console.log(error);
  }
};

document.addEventListener("DOMContentLoaded", function () {
  if (document.querySelector(".swiper")) {
    const swiper = new Swiper(".mySwiper", {
      modules: [Navigation, Pagination],
      loop: true,
      cssMode: true,
      pagination: {
        el: ".swiper-pagination",
      },
    });
  }
});

function sizesList(sizes) {
  let flag = "";

  sizes.forEach((size) => {
    flag += `<button type="button" class="rounded-full border-2 text-textGray border-textGray size-9">${size}</button>`;
  });
  return flag;
}

function colorsList(colors) {
  let flag = "";
  const color = colors.map((color) => color["color-code"]);
  console.log(color);
  color.forEach((code) => {
    flag += `<button type="button" class="rounded-full bg-${code} size-9"></button>`;
  });
  return flag;
}
