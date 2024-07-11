import axios from "../api";
import { routes } from "../main";

export async function brandPage(match) {
  //   console.log(match.data.id);
  //   const data = await getBrands(match.data.id);
  //   console.log(data);
  const createEventListeners = () => {
    const prevIcon = document.querySelector("#prev");
    if (prevIcon) {
      prevIcon.addEventListener("click", () => {
        window.location.replace(routes.products);
      });
    }
  };

  const html = `

  <div class="flex flex-col gap-4 py-3 px-5 flex-wrap">
  <div class="flex justify-between items-center ml-0">
    <div class="flex items-center">
      <img
        src="./imges/prev icon.png"
        alt="prev-icon"
        id="prev"
        class="cursor-pointer -ml-7"
      />
      <p class="font-bold text-2xl">Nike</p>
    </div>
  </div>

  <div id="container">

    <div class="flex flex-col justify-start gap-y-1">
      <a href="/products/" class="bg-productsBg size-[182px] relative rounded-3xl">
          <img src="./public/imges/shoe1.png" alt="shoe1" class="absolute top-9 left-5 mix-blend-darken" />
      </a>
      <p class="font-semibold text-xl">Air Jordan 3 Retro</p>
      <p class="font-semibold">$ 105.00</p>
  </div>

  </div>
</div>

  `;

  return { html, createEventListeners };
}

const getBrands = async (brand) => {
  try {
    const response = await axios.get(`/products?brand=${brand}`);
    if (response.status === 200) {
      const brands = response.data;
      return brands;
    }
  } catch (error) {
    console.log(error);
  }
};
