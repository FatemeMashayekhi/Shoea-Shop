import axios from "../api";
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
  <div class="text-center flex flex-col gap-y-3 cursor-pointer">
    <div class="bg-navBg rounded-full size-[60px] relative">
      <img
        src="./public/imges/categories.png"
        alt="nike-logo"
        class="absolute top-3 left-3"
      />
    </div>
    <p class="text-sm">Nike</p>
  </div>
  <div class="text-center flex flex-col gap-y-3 cursor-pointer">
    <div class="bg-navBg rounded-full size-[60px] relative">
      <img
        src="./public/imges/adidas.png"
        alt="adidas-logo"
        class="absolute top-4 left-3"
      />
    </div>
    <p class="text-sm">Adidas</p>
  </div>
  <div class="text-center flex flex-col gap-y-3 cursor-pointer">
    <div class="bg-navBg rounded-full size-[60px] relative">
      <img
        src="./public/imges/puma.png"
        alt="puma-logo"
        class="absolute top-4 left-2"
      />
    </div>
    <p class="text-sm">Puma</p>
  </div>
  <div class="text-center flex flex-col gap-y-3 cursor-pointer">
    <div class="bg-navBg rounded-full size-[60px] relative">
      <img
        src="./public/imges/asics.png"
        alt="asics-logo"
        class="absolute top-3 left-4"
      />
    </div>
    <p class="text-sm">Asics</p>
  </div>
  <div class="text-center flex flex-col gap-y-3 cursor-pointer">
    <div class="bg-navBg rounded-full size-[60px] relative">
      <img
        src="./public/imges/reebok.png"
        alt="rebook-logo"
        class="absolute top-4 left-3"
      />
    </div>
    <p class="text-sm">Reebok</p>
  </div>
  <div class="text-center flex flex-col gap-y-3 cursor-pointer">
    <div class="bg-navBg rounded-full size-[60px] relative">
      <img
        src="./public/imges/newba.png"
        alt="newba-logo"
        class="absolute top-2 left-2"
      />
    </div>
    <p class="text-sm">New Ba..</p>
  </div>
  <div class="text-center flex flex-col gap-y-3 cursor-pointer">
    <div class="bg-navBg rounded-full size-[60px] relative">
      <img
        src="./public/imges/convers.png"
        alt="converse-logo"
        class="absolute top-4 left-3"
      />
    </div>
    <p class="text-sm">Converse</p>
  </div>
  <div class="text-center flex flex-col gap-y-3 cursor-pointer">
    <div class="bg-navBg rounded-full size-[60px] relative">
      <img
        src="./public/imges/more.png"
        alt="more-logo"
        class="absolute top-3 left-2"
      />
    </div>
    <p class="text-sm">More ..</p>
  </div>
</div>
<div class="flex justify-between px-2 font-semibold items-center tracking-wider">
  <p class="text-xl">Most Popular</p>
  <div>
    <p class="text-base cursor-pointer">See All</p>
  </div>
</div>
<div id="scroll-container" class="flex gap-x-2 w-full overflow-x-hidden hover:overflow-x-auto">
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
<div id="products-container" class="flex flex-wrap justify-center gap-3">

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
  const scrollPosition = window.scrollY;
  const windowHeight = window.innerHeight;
  const documentHeight = document.documentElement.scrollHeight;

  if (scrollPosition + windowHeight >= documentHeight * 1) {
    await getProducts();
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
                                <img src="${product.images[0]}" alt="shoe1" class="absolute top-9 left-5" />
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
