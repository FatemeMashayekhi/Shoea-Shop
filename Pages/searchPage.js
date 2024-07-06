import axios from "../api";

export function searchPage() {
  return `
<div class="p-6 flex flex-col gap-y-5 font-Roboto">
  <label for="search-box" class="relative">
    <i class="fas fa-search absolute top-4 left-3 text-placeholderText text-xl"></i>
    <input type="text" id="search-box" class="w-full h-14 bg-productsBg px-11 rounded-2xl" />
    <img src="./public/imges/afilter.png" alt="filter" class="absolute right-4 top-4" />
  </label>

  <div class="flex justify-between font-semibold items-center">
    <p id="p1" class="text-xl">Recent</p>
    <p id="p2">Clear All</p>
  </div>

  <div class="border-1"></div>

<div id="container">
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

</div>
  `;
}

export const fetchSearch = async (query) => {
  try {
    const response = await axios(`/products?q=${query}`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export async function searching(params) {
  const result = await fetchSearch(params?.q);
  console.log(result);

  let p1 = document.getElementById("p1");
  p1.innerHTML = "";
  p1.innerHTML = `Results for "${params.q}"`;

  let p2 = document.getElementById("p2");
  p2.innerHTML = "";
  if (result.length === 1 || result.length === 0) {
    p2.innerHTML = `${result.length} found`;
  } else {
    p2.innerHTML = `${result.length} founds`;
  }

  if (result.length !== 0) {
    let container = document.getElementById("container");
    container.innerHTML = "";
    result.forEach((item) => {
      container.innerHTML = `
    <div class="flex flex-col justify-start gap-y-2">
      <div class="bg-productsBg size-[182px] relative rounded-3xl">
      <img src="./imges/love.png" alt="love-icon" class="absolute right-3 top-3 z-30" />
        <img
          src="${item.images[0]}"
          alt="${item.name}"
          class="absolute top-9 left-5"
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
    let container = document.getElementById("container");
    container.innerHTML = "";
    container.innerHTML = `
<div class="font-Roboto flex flex-col justify-center items-center mt-28 gap-y-4">
  <img src="./public/imges/notfound.png" alt="notFound" class="size-72" />
  <p class="font-semibold text-2xl">Not Found</p>
  <p class="text-center">
    Sorry , the keyword you entered cannot be found , please check again or
    search with another keyword.
  </p>
</div>
    `;
  }
}
