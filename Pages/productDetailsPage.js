import Swiper from "swiper";
import axios from "../api";
import { Navigation, Pagination } from "swiper/modules";
import { routes } from "../main";

let isInWish = false;

export async function productDetailsPage(match) {
  const product = await getProduct(match.data.id);
  console.log(product);

  if (product) {
    try {
      const response = await axios.get("/wishList");
      if (response.status === 200) {
        const wishes = response.data;
        isInWish = !!wishes.find((item) => item.id === product.id);
      }
    } catch (error) {
      console.log(error);
    }
  }

  console.log(isInWish);

  ///////////////back icon///////////////
  const prevHandler = () => {
    window.location.replace(routes.products);
  };

  const createEventListeners = () => {
    ////////////////back icon select////////////
    const prevButton = document.getElementById("prev");
    if (prevButton) {
      prevButton.addEventListener("click", prevHandler);
    }

    ////////////////////swiper////////////////////
    if (document.querySelector(".swiper")) {
      const swiper = new Swiper(".swiper", {
        modules: [Navigation, Pagination],

        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },

        pagination: {
          el: ".swiper-pagination",
        },
      });
    }

    ////////////////variables//////////////
    let currentQuantity = 0;
    let totalPrice = null;
    let selectedSizeValue = null;
    let colorName = null;
    let colorCode = null;

    //////////////plus handler//////////////
    function incrementQuantity() {
      currentQuantity = Math.min(currentQuantity + 1);
      updateQuantityDisplay();
    }

    //////////////minus handler//////////////
    function decrementQuantity() {
      currentQuantity = Math.max(currentQuantity - 1, 0);
      updateQuantityDisplay();
    }

    //////////////number input//////////////
    function updateQuantityDisplay() {
      document.getElementById("num").textContent = currentQuantity;
      updateButtonState();

      //////////////total price handler//////////////
      function updateTotalPrice() {
        totalPrice = product.price * currentQuantity;

        document.getElementById("price").textContent = `$${totalPrice}`;
      }
      updateTotalPrice();
    }

    const minus = document.getElementById("minus");
    if (minus) {
      minus.addEventListener("click", decrementQuantity);
    }

    const plus = document.getElementById("plus");
    if (plus) {
      plus.addEventListener("click", incrementQuantity);
    }

    ///////////////to select between sizes and get the size value///////////
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

          selectedSizeValue = size.textContent;
          console.log(selectedSizeValue);
          updateButtonState();
        });
      });
    }
    selectedSize();

    ///////////////to select between colors and get the color value///////////
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
          color.classList.add("fa-solid", "fa-check");

          ///////update the selected button reference///////////
          selectedButton = color;

          colorName = color.dataset.colorName;
          colorCode = color.dataset.colorCode;

          console.log("Selected color name:", colorName);
          console.log("Selected color code:", colorCode);
          updateButtonState();
        });
      });
    }
    selectedColor();

    ///////////add wish handler////////////////
    const like = document.getElementById("like");
    if (like) {
      like.addEventListener("click", async (e) => {
        e.preventDefault();
        console.log(product);

        try {
          let response = await axios.post("/wishList", product);
          if (response.status === 201) {
            like.src = "../public/imges/heartt.png";
            like.classList.add("size-16");
            const modal = document.getElementById("myModal");
            modal.style.display = "block";
            modal.innerHTML = "";
            modal.innerHTML = `
              <div id="modal-content" class="bg-white p-6 h-96 rounded-t-45 bottom-0 flex flex-col text-center items-center gap-y-5 absolute">
                <div class="border-1 w-8"></div>
                <div class="flex flex-col gap-y-5 mt-8 items-center justify-center">
                  <div></div>
                  <p class="font-semibold text-2xl">This Product has been Successfully added to your Wish List</p>
                  <p>Press button to continue</p>
                  <button id="continue-btn" type="button" class="bg-black text-white p-4 rounded-full w-64">Continue</button>
               </div>
             </div>
            `;
            document
              .getElementById("continue-btn")
              .addEventListener("click", () => {
                const modal = document.getElementById("myModal");
                modal.style.display = "none";
              });
          }
        } catch (e) {
          ////////////if added with same id///////////////
          if (e.response && e.response.status === 500) {
            const modal = document.getElementById("myModal");
            modal.style.display = "block";
            modal.innerHTML = "";
            modal.innerHTML = `
              <div id="modal-content" class="bg-white p-6 h-96 rounded-t-45 bottom-0 flex flex-col text-center items-center gap-y-5 absolute">
                <div class="border-1 w-8"></div>
                <div class="flex flex-col gap-y-5 mt-8 items-center justify-center">
                  <div></div>
                  <p class="font-semibold text-2xl">You Already have this Product in your Wishes</p>
                  <p>Press button to continue</p>
                  <button id="continue-btn" type="button" class="bg-black text-white p-4 rounded-full w-64">Continue</button>
               </div>
             </div>
            `;
            document
              .getElementById("continue-btn")
              .addEventListener("click", () => {
                const modal = document.getElementById("myModal");
                modal.style.display = "none";
              });
          } else {
            console.error("Other error:", e);
          }
        }
      });
    }

    //////////add Cart btn handler////////////
    const addCartBtn = document.getElementById("add-cart");
    addCartBtn.disabled = true;

    function updateButtonState() {
      ////////////////enable the button if size and color are selected and quantity is not 0/////////////
      addCartBtn.disabled = !(
        selectedSizeValue &&
        colorName &&
        currentQuantity > 0
      );

      if (addCartBtn.disabled) {
        ////////////button is disabled////////
        addCartBtn.style.backgroundColor = "#6C757D";
      } else {
        //////////////button is enabled///////////
        addCartBtn.style.backgroundColor = "black";
      }
    }
    if (addCartBtn) {
      addCartBtn.addEventListener("click", async (e) => {
        e.preventDefault();

        const specifications = {
          name: product.name,
          brand: product.brand,
          price: totalPrice,
          pricePerUnit: product.price,
          color: colorName,
          colorCode: colorCode,
          sizes: selectedSizeValue,
          quantity: currentQuantity,
          imgUrl: product.images[0],
        };

        /////////check if the product already exists in the cart//////////////

        const existingCartItems = await fetchExistingCartItems(); //////get what is in cart now for comparing///////

        const isDifferent = existingCartItems.every((item) => {
          return (
            item.name !== specifications.name ||
            item.color !== specifications.color ||
            item.sizes !== specifications.sizes
          );
        });

        if (isDifferent) {
          /////////allow adding the product to the cart///////////
          try {
            let response = await axios.post("/cart", specifications);
            if (response.status === 201) {
              console.log(response);
              const modal = document.getElementById("myModal");
              modal.style.display = "block";
            }
          } catch (e) {
            console.log(e);
          }
        } else {
          //////////////if color or size was same , not allowed to add////////////
          const modal = document.getElementById("myModal");
          modal.style.display = "block";
          modal.innerHTML = "";
          modal.innerHTML = `
              <div id="modal-content" class="bg-white p-6 h-96 rounded-t-45 bottom-0 flex flex-col text-center items-center gap-y-5 absolute">
                <div class="border-1 w-8"></div>
                <div class="flex flex-col gap-y-5 mt-8 items-center justify-center">
                  <div></div>
                  <p class="font-semibold text-2xl">You Already have this Product in your Cart</p>
                  <p>Press button to continue</p>
                  <button id="continue-btn" type="button" class="bg-black text-white p-4 rounded-full w-64">Continue</button>
               </div>
             </div>
            `;
          document
            .getElementById("continue-btn")
            .addEventListener("click", () => {
              const modal = document.getElementById("myModal");
              modal.style.display = "none";
            });
        }
      });
    }

    ////////////////get cart items////////////////
    async function fetchExistingCartItems() {
      try {
        const response = await axios.get("/cart");
        return response.data;
      } catch (error) {
        console.log(error);
        return [];
      }
    }

    /////////////modal close btn//////////////
    document.getElementById("continue-btn").addEventListener("click", () => {
      const modal = document.getElementById("myModal");
      modal.style.display = "none";
    });
  };

  const html = `
    <div class="font-Roboto">
      <div class="relative bg-navBg w-full h-[440px]">
        <img src="../public/imges/prev icon.png" alt="prev-icon" id="prev" class="cursor-pointer absolute z-40" />
        <div class="swiper mySwiper">
          <div class="swiper-wrapper mt-12">
            ${imagesList(product.images)}
          </div>
          <div class="swiper-button-next"></div>
          <div class="swiper-button-prev"></div>
        </div>
        <div class="swiper-pagination"></div>
      </div>
      <div class="flex flex-col p-6 gap-y-4">
        <div class="flex justify-between">
          <p class="font-semibold text-4xl">${product.name}</p>
        ${
          isInWish
            ? '<img src="../public/imges/heartt.png" alt="like-icon" id="like" class="size-7 cursor-pointer" />'
            : '<img src="../public/imges/like.png" alt="like-icon" id="like" class="size-7 cursor-pointer" />'
        }
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
            <button type="button" id="add-cart" class="bg-grayBtn text-white p-4 rounded-full w-64">
              Add to Cart
            </button>
            <i class="fas fa-shopping-bag text-white absolute left-14 top-5"></i>
          </div>

          <div id="myModal" class="hidden fixed z-50 bottom-0 left-0 w-full h-screen overflow-auto bg-black/50">
            <div id="modal-content" class="bg-white p-6 h-96 rounded-t-45 bottom-0 flex flex-col text-center items-center gap-y-5 absolute">
              <div class="border-1 w-8"></div>
              <div class="flex flex-col gap-y-5 mt-8 items-center justify-center">
                  <div></div>
                  <p class="font-semibold text-2xl">The Product has been Successfully Added to your Cart.</p>
                  <p>Press button to continue</p>
                  <button id="continue-btn" type="button" class="bg-black text-white p-4 rounded-full w-64">Continue</button>
              </div>
           </div>
         </div>

        </div>
        </div>
      </div>
    </div>
  `;

  return { html, createEventListeners };
}

/////////////////get clicked product from products base on their id////////////
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

//////////////////////create sizes btns///////////////
function sizesList(sizes) {
  let flag = "";
  sizes.forEach((size) => {
    flag += `<button type="button" class="size-btn rounded-full border-2 text-textGray border-textGray size-9">${size}</button>`;
  });
  return flag;
}

//////////////////////create colors btns///////////////
function colorsList(colors) {
  let flag = "";
  colors.forEach((color) => {
    const { "color-name": name, "color-code": code } = color;
    flag += `<button style="background-color:${code};" type="button" data-color-name="${name}" data-color-code="${code}" class="color-btn rounded-full size-9"></button>`;
  });
  return flag;
}

//////////////////////create imgs for slider///////////////
function imagesList(images) {
  let flag = "";
  images.slice(1).forEach((img) => {
    flag += `
      <div class="swiper-slide">
        <img src=".${img}" alt="pic" />
      </div>
    `;
  });
  return flag;
}
