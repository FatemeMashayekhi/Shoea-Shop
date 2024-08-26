import axios from "../api";
import { router, routes } from "../main";

export function productsPage() {
  const accessToken = localStorage.getItem("accessToken") ?? false;
  if (accessToken) {
    return `
<div class="flex flex-col gap gap-y-5">
  <label for="search" class="relative">
    <i id="search-icon" class="fa-solid fa-magnifying-glass absolute top-2 left-4 pt-0.5 text-grayBtn cursor-pointer"></i>
    <input type="text" id="search" placeholder="Search" class="w-96 h-9 bg-lightGray pl-10 placeholder-placeholderText" />
  </label>

  <div class="flex justify-center font-Roboto">
  <div class="grid grid-cols-4 mt-[10px] w-[380px] gap-10">
    <div>
      <a class='brand-btns flex flex-col items-center cursor-pointer'>
        <img id='nike-round'
          class="w-[60px] h-[60px] rounded-full"
          src="./public/shoeimage/imges/nikelikepic.png"
          alt=""
        />
        <span>Nike</span>
      </a>
    </div>
    <div>
      <a class='brand-btns flex flex-col items-center cursor-pointer'>
        <img id='adidas-round'
          class="w-[60px] h-[60px] rounded-full"
          src="./public/shoeimage/imges/adidaspic.png"
          alt=""
        />
        <span>Adidas</span>
      </a>
    </div>
    <div>
      <a class='brand-btns flex flex-col items-center cursor-pointer'>
        <img id='asics-round'
          class="w-[60px] h-[60px] rounded-full"
          src="./public/shoeimage/imges/Asicspic.png"
          alt=""
        />
        <span>Asics</span>
      </a>
    </div>
    <div>
      <a class='brand-btns flex flex-col items-center cursor-pointer'>
        <img id='convers-round'
          class="w-[60px] h-[60px] rounded-full"
          src="./public/shoeimage/imges/converspic.png"
          alt=""
        />
        <span>Converse</span>
      </a>
    </div>
    <div>
      <a class='brand-btns flex flex-col items-center cursor-pointer'>
        <img id='newball-round'
          class="w-[60px] h-[60px] rounded-full"
          src="./public/shoeimage/imges/newbalpic.png"
          alt=""
        />
        <span>NewBalance</span>
      </a>
    </div>
    <div>
      <a class='brand-btns flex flex-col items-center cursor-pointer'>
        <img id='puma-round'
          class="w-[60px] h-[60px] rounded-full"
          src="./public/shoeimage/imges/pumapic.png"
          alt=""
        />
        <span>Puma</span>
      </a>
    </div>
    <div>
      <a class='brand-btns flex flex-col items-center cursor-pointer'>
        <img id='reebok-round'
          class="w-[60px] h-[60px] rounded-full"
          src="./public/shoeimage/imges/reebokpic.png"
          alt=""
        />
        <span>Reebok</span>
      </a>
    </div>
    <div>
      <button>
        <img
          class="w-[60px] h-[60px] rounded-full"
          src="./public/shoeimage/imges/morpicc.png"
          alt=""
        />more
      </button>
    </div>
  </div>
  </div>
<div class="flex justify-between px-2 font-semibold items-center tracking-wider">
  <p class="text-xl">Most Popular</p>
  <div>
    <p class="text-base cursor-pointer">See All</p>
  </div>
</div>
<div id="scroll-container" class="flex gap-x-2 w-full overflow-x-scroll">
  <button type="button" id="btn1" class="bg-btnListBg text-white  border-2 border-btnListBg rounded-full h-10 px-4">All</button>
  <button type="button" id="btn2" class="text-btnListBg font-semibold border-2 border-btnListBg rounded-full h-10 px-5">Nike</button>
  <button type="button" id="btn3" class="text-btnListBg font-semibold border-2 border-btnListBg rounded-full h-10 px-5">Adidas</button>
  <button type="button" id="btn4" class="text-btnListBg font-semibold border-2 border-btnListBg rounded-full h-10 px-5">Puma</button>
  <button type="button" id="btn5" class="text-btnListBg font-semibold border-2 border-btnListBg rounded-full h-10 px-5">Asics</button>
  <button type="button" id="btn6" class="text-btnListBg font-semibold border-2 border-btnListBg rounded-full h-10 px-5">NewBalance</button>
  <button type="button" id="btn7" class="text-btnListBg font-semibold border-2 border-btnListBg rounded-full h-10 px-5">Converse</button>
  <button type="button" id="btn8" class="text-btnListBg font-semibold border-2 border-btnListBg rounded-full h-10 px-5">Reebok</button>
  <button type="button" id="btn9" class="text-btnListBg font-semibold border-2 border-btnListBg rounded-full h-10 px-5">IranKafsh</button>
  <button type="button" id="btn10" class="text-btnListBg font-semibold border-2 border-btnListBg rounded-full h-10 px-5">KafshMeli</button>
</div>
<div id="products-container" class="grid grid-cols-2 justify-center gap-3">

</div>
</div>
    `;
  } else {
    router.navigate(routes.login);
  }
}

// export const getProducts = async () => {
//   try {
//     const response = await axios.get("/products");
//     if (response.status === 200) {
//       console.log(response);
//       const products = response.data;
//       console.log(products);

//       document.getElementById("products-container").innerHTML = "";

//       products.forEach((product) => {
//         document.getElementById("products-container").innerHTML += `
//   <div class="flex flex-col justify-start gap-y-1">
//     <a href="/products/${product.id}" class="bg-productsBg size-[182px] relative rounded-3xl">
//       <img src="${product.images[0]}" alt="shoe1" class="absolute top-9 left-5" />
//     </a>
//     <p class="font-semibold text-xl">${product.name}</p>
//     <p class="font-semibold">$ ${product.price}</p>
//   </div>
//         `;
//       });
//     }
//   } catch (error) {
//     console.log(error);
//   }
// };

window.addEventListener("scroll", async () => {
  if (window.location.pathname === "/products") {
    const scrollPosition = window.scrollY;
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;

    if (scrollPosition + windowHeight >= documentHeight * 1) {
      await getProducts();
    }
  }
});

let productsLoaded = false;
let currentBatch = 0;

export const getProducts = async () => {
  try {
    if (!productsLoaded) {
      const response = await axios.get("/products");
      if (response.status === 200) {
        const products = response.data;
        const container = document.getElementById("products-container");

        const batchSize = 4;
        const startIdx = currentBatch * batchSize;
        const endIdx = startIdx + batchSize;

        for (let i = startIdx; i < endIdx; i++) {
          const product = products[i];
          if (!product) break;

          container.innerHTML += `
                        <div class="flex flex-col justify-start gap-y-1">
                            <a href="/products/${product.id}" class="bg-productsBg size-[182px] relative rounded-3xl">
                                <img src="${product.images[0]}" alt="shoe1" class="absolute top-9 left-5 mix-blend-darken" />
                            </a>
                            <p class="font-semibold text-xl">${product.name}</p>
                            <p class="font-semibold">$ ${product.price}</p>
                        </div>
                    `;
        }

        currentBatch++;
        productsLoaded = currentBatch * batchSize >= products.length;
      }
    }
  } catch (error) {
    console.log(error);
  }
};

document.addEventListener("DOMContentLoaded", () => {
  if (document.querySelector("#search-icon")) {
    document.querySelector("#search-icon").addEventListener("click", () => {
      const searchInput = document.getElementById("search");
      const query = searchInput?.value.toLowerCase().trim();
      router.navigate(`/search?q=${query}`);
    });
  }

  const productsBrand = document.querySelectorAll(".brand-btns");

  productsBrand.forEach((item) => {
    item.addEventListener("click", (e) => {
      const spanElem = item.querySelector("span").textContent;
      console.log(spanElem);
      router.navigate(`/brands/${spanElem}`);
    });
  });
});
