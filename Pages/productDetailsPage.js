import Swiper from "swiper";
import axios from "../api";
import { Navigation, Pagination } from "swiper/modules";
import { routes } from "../main";

export async function productDetailsPage(match) {
  const product = await getProduct(match.data.id);
  console.log(product);

  const prevHandler = () => {
    window.location.replace(routes.products);
  };

  let currentQuantity = 0;

  function incrementQuantity() {
    currentQuantity = Math.min(currentQuantity + 1);
    updateQuantityDisplay();
  }

  function decrementQuantity() {
    currentQuantity = Math.max(currentQuantity - 1, 0);
    updateQuantityDisplay();
  }

  function updateQuantityDisplay() {
    document.getElementById("num").textContent = currentQuantity;

    function updateTotalPrice() {
      const totalPrice = product.price * currentQuantity;

      document.getElementById("price").textContent = `$${totalPrice}`;
    }
    updateTotalPrice();
  }

  const createEventListeners = () => {
    const prevButton = document.getElementById("prev");
    if (prevButton) {
      prevButton.addEventListener("click", prevHandler);
    }

    if (document.querySelector(".swiper")) {
      const swiper = new Swiper(".swiper", {
        modules: [Navigation, Pagination],

        pagination: {
          el: ".swiper-pagination",
        },
      });
    }

    const minus = document.getElementById("minus");
    if (minus) {
      minus.addEventListener("click", decrementQuantity);
    }

    const plus = document.getElementById("plus");
    if (plus) {
      plus.addEventListener("click", incrementQuantity);
    }

    function selectedSize() {
      const sizes = document.querySelectorAll(".size-btn");
      let selectedButton = null;
      sizes.forEach((size) => {
        size.addEventListener("click", () => {
          size.classList.remove("text-textGray", "border-textGray");
          size.classList.add("text-white", "bg-black", "border-black");

          if (selectedButton) {
            selectedButton.classList.remove(
              "text-white",
              "bg-black",
              "border-black"
            );
            selectedButton.classList.add("text-textGray", "border-textGray");
          }

          ////////add classes to the clicked button///////////
          size.classList.remove("text-textGray", "border-textGray");
          size.classList.add("text-white", "bg-black", "border-black");

          ///////update the selected button reference///////////
          selectedButton = size;
        });
      });
    }
    selectedSize();

    function selectedColor() {
      const colors = document.querySelectorAll(".color-btn");
      let selectedButton = null;
      colors.forEach((color) => {
        color.addEventListener("click", () => {
          color.classList.add("fa-solid", "fa-check");

          if (selectedButton) {
            selectedButton.classList.remove("fa-solid", "fa-check");
          }

          ////////add classes to the clicked button///////////
          size.classList.add("fa-solid", "fa-check");

          ///////update the selected button reference///////////
          selectedButton = color;
        });
      });
    }
    selectedColor();

    // const addCartBtn = document.getElementById("add-cart");
    // const quantity = document.getElementById("num");
    // const price = document.getElementById("price");
    // if (addCartBtn) {
    //   addCartBtn.addEventListener("click", async (e) => {
    //     e.preventDefault();

    //     const specifications = {
    //       name: product.name ,
    //       brand: product.brand ,
    //       price: price,
    //       color:,
    //       colorCode:,
    //       sizes:,
    //       quantity: quantity,
    //       imgUrl: product.images[0],
    //     };

    //     try {
    //       let response = await axios.post("/cart", specifications);
    //       if (response.status === 200) {
    //         console.log(response);

    //       }
    //     } catch (e) {
    //       console.log(e);
    //     }
    //   });
    // }
  };

  const html = `
    <div class="font-Roboto">
      <div class="relative bg-navBg w-full h-[440px]">
        <img src="../public/imges/prev icon.png" alt="prev-icon" id="prev" class="cursor-pointer absolute z-40" />
        <div class="swiper mySwiper">
          <div class="swiper-wrapper mt-12">
            ${imagesList(product.images)}
          </div>
          
        </div>
        <div class="swiper-pagination"></div>
      </div>
      <div class="flex flex-col p-6 gap-y-4">
        <div class="flex justify-between">
          <p class="font-semibold text-4xl">${product.name}</p>
          <img src="../public/imges/like.png" alt="like-icon" class="size-7 cursor-pointer" />
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
        <div class="flex gap-x-6 overflow-x-scroll">
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
            <i id="minus" class="fa-solid fa-minus cursor-pointer"></i>
            <span id="num">0</span>
            <i id="plus" class="fa-solid fa-plus cursor-pointer"></i>
          </div>
        </div>
        <div class="border-1"></div>
        <div class="flex justify-between">
          <div class="flex flex-col">
            <p class="text-xs text-textGray">Total price</p>
            <p id="price" class="font-semibold text-2xl">0</p>
          </div>
          <div class="relative">
            <button type="button" id="add-cart" class="bg-black text-white p-4 rounded-full w-64">
              Add to Cart
            </button>
            <i class="fas fa-shopping-bag text-white absolute left-14 top-5"></i>
          </div>
        </div>
      </div>
    </div>
  `;

  return { html, createEventListeners };
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

function sizesList(sizes) {
  let flag = "";
  sizes.forEach((size) => {
    flag += `<button type="button" class="size-btn rounded-full border-2 text-textGray border-textGray size-9">${size}</button>`;
  });
  return flag;
}

function colorsList(colors) {
  let flag = "";
  const color = colors.map((color) => color["color-code"]);
  console.log(color);
  color.forEach((code) => {
    flag += `<button style="background-color:${code};" type="button" class="color-btn rounded-full size-9"></button>`;
  });
  return flag;
}

function imagesList(images) {
  let flag = "";
  images.slice(1).forEach((img) => {
    console.log(img);
    flag += `
      <div class="swiper-slide">
        <img src=".${img}" alt="pic" />
      </div>
    `;
  });
  return flag;
}
