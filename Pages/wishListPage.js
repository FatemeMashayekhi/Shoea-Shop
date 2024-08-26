import axios from "../api";
import { routes } from "../main";

export function wishListPage() {
  return `
<div class="flex flex-col gap-y-5 font-Roboto p-5">
  <div class="flex justify-between items-center ml-0">
    <div class="flex items-center">
      <img src="./imges/prev icon.png" alt="prev-icon" id="prev-icon" class="cursor-pointer -ml-7" />
      <p class="font-bold text-2xl">My Wishlist</p>
    </div>
  </div>
  <label for="search-box" class="relative">
      <i id="search" class="fas fa-search absolute top-4 left-3 text-btnListBg text-xl cursor-pointer"></i>
      <input type="text" id="search-box" class="w-full h-14 bg-productsBg px-11 rounded-2xl placeholder-placeholderText" placeholder="Search Wishes.." />
  </label>
  <div id="scroll-container" class="flex gap-x-2 w-full overflow-x-scroll">
    <button type="button" id="btn1" class="bg-black text-white  border-2 border-black rounded-full h-10 px-4">All</button>
    <button type="button" id="btn2" class="text-black font-semibold border-2 border-black rounded-full h-10 px-5">Nike</button>
    <button type="button" id="btn3" class="text-black font-semibold border-2 border-black rounded-full h-10 px-5">Adidas</button>
    <button type="button" id="btn4" class="text-black font-semibold border-2 border-black rounded-full h-10 px-5">Puma</button>
    <button type="button" id="btn5" class="text-black font-semibold border-2 border-black rounded-full h-10 px-5">Asics</button>
    <button type="button" id="btn6" class="text-black font-semibold border-2 border-black rounded-full h-10 px-5">NewBalance</button>
    <button type="button" id="btn7" class="text-black font-semibold border-2 border-black rounded-full h-10 px-5">Converse</button>
    <button type="button" id="btn8" class="text-black font-semibold border-2 border-black rounded-full h-10 px-5">Reebok</button>
    <button type="button" id="btn9" class="text-black font-semibold border-2 border-black rounded-full h-10 px-5">IranKafsh</button>
    <button type="button" id="btn10" class="text-black font-semibold border-2 border-black rounded-full h-10 px-5">KafshMeli</button>
  </div>
  <div id="wish-container" class="grid grid-cols-2 justify-center gap-4">
    <div class="flex flex-col justify-start gap-y-2">
      <div class="bg-productsBg size-[182px] relative rounded-3xl">
      <img src="./imges/love.png" alt="love-icon" class="absolute right-3 top-3 z-30" />
        <img
          src="./public/imges/shoe1.png"
          alt="shoe1"
          class="absolute top-9 left-5"
        />
      </div>
      <p class="font-semibold text-xl">Nike Wooden Style</p>
      <div class="flex gap-x-2 text-center">
        <img src="./public/imges/star.png" alt="star" class="size-5" />
        <p class="text-textGray">4.6</p>
        <span>|</span>
        <p class="bg-navBg text-xs w-20 h-6 rounded-md pt-1">6.641 sold</p>
      </div>
      <p class="font-semibold tracking-tighter">$115.00</p>
    </div>

    <div class="flex flex-col justify-start gap-y-2">
      <div class="bg-productsBg size-[182px] relative rounded-3xl">
      <img src="./imges/love.png" alt="love-icon" class="absolute right-3 top-3 z-30" />
        <img
          src="./public/imges/shoe1.png"
          alt="shoe1"
          class="absolute top-9 left-5"
        />
      </div>
      <p class="font-semibold text-xl">Nike Wooden Style</p>
      <div class="flex gap-x-2 text-center">
        <img src="./public/imges/star.png" alt="star" class="size-5" />
        <p class="text-textGray">4.6</p>
        <span>|</span>
        <p class="bg-navBg text-xs w-20 h-6 rounded-md pt-1">6.641 sold</p>
      </div>
      <p class="font-semibold tracking-tighter">$115.00</p>
    </div>

    <div class="flex flex-col justify-start gap-y-2">
      <div class="bg-productsBg size-[182px] relative rounded-3xl">
      <img src="./imges/love.png" alt="love-icon" class="absolute right-3 top-3 z-30" />
        <img
          src="./public/imges/shoe1.png"
          alt="shoe1"
          class="absolute top-9 left-5"
        />
      </div>
      <p class="font-semibold text-xl">Nike Wooden Style</p>
      <div class="flex gap-x-2 text-center">
        <img src="./public/imges/star.png" alt="star" class="size-5" />
        <p class="text-textGray">4.6</p>
        <span>|</span>
        <p class="bg-navBg text-xs w-20 h-6 rounded-md pt-1">6.641 sold</p>
      </div>
      <p class="font-semibold tracking-tighter">$115.00</p>
    </div>

    <div class="flex flex-col justify-start gap-y-2">
      <div class="bg-productsBg size-[182px] relative rounded-3xl">
      <img src="./imges/love.png" alt="love-icon" class="absolute right-3 top-3 z-30" />
        <img
          src="./public/imges/shoe1.png"
          alt="shoe1"
          class="absolute top-9 left-5"
        />
      </div>
      <p class="font-semibold text-xl">Nike Wooden Style</p>
      <div class="flex gap-x-2 text-center">
        <img src="./public/imges/star.png" alt="star" class="size-5" />
        <p class="text-textGray">4.6</p>
        <span>|</span>
        <p class="bg-navBg text-xs w-20 h-6 rounded-md pt-1">6.641 sold</p>
      </div>
      <p class="font-semibold tracking-tighter">$115.00</p>
    </div>
  </div>

  <div id="myModal" class="hidden fixed z-50 bottom-0 left-0 w-full h-screen overflow-auto bg-black/50">
   <div id="modal-content" class="bg-white p-6 h-96 rounded-t-45 bottom-0 text-center items-center absolute shadow-inner z-50">
    <div class="flex flex-col gap-y-5 mt-8 items-center justify-center">
      <div></div>
      <p class="font-semibold text-2xl">Do you want to delete this item from your wishes?</p>
      <div></div>
      <button id="yes-btn" type="button" class="bg-black text-white p-4 rounded-full w-96">Yes</button>
      <button id="no-btn" type="button" class="bg-gray-200 text-black p-4 font-semibold rounded-full w-96">Cancel</button>
   </div>
  </div>
  </div>
</div>
  `;
}

// export const getWishes = async () => {
//   try {
//     const response = await axios.get("/wishList");
//     if (response.status === 200) {
//       console.log(response);
//       const wishes = response.data;
//       console.log(wishes);
//       document.getElementById("wish-container").innerHTML = "";
//       wishes.forEach((wish) => {
//         document.getElementById("wish-container").innerHTML += `
//     <div class="flex flex-col justify-start gap-y-2">
//       <div class="bg-productsBg size-[182px] relative rounded-3xl">
//       <img src="./imges/love.png" alt="love-icon" class="absolute right-3 top-3 z-30" />
//         <img
//           src="${wish.images[0]}"
//           alt="${wish.name}"
//           class="absolute top-9 left-5 mix-blend-darken"
//         />
//       </div>
//       <p class="font-semibold text-xl">${wish.name}</p>
//       <div class="flex gap-x-2 text-center">
//         <img src="./public/imges/star.png" alt="star" class="size-5" />
//         <p class="text-textGray">${wish.rate}</p>
//         <span>|</span>
//         <p class="bg-navBg text-xs w-20 h-6 rounded-md pt-1">${wish.sold} sold</p>
//       </div>
//       <p class="font-semibold tracking-tighter">$${wish.price}</p>
//     </div>
//         `;
//       });
//     }

//     //////////////prev Handler//////////////
//     const prev = document.getElementById("prev-icon");
//     prev.addEventListener("click", () => {
//       // router.navigate(routes.products);
//       window.location.replace(routes.products);
//     });
//   } catch (error) {
//     console.log(error);
//   }
// };

document.addEventListener("DOMContentLoaded", () => {
  const searchInput = document.getElementById("search-box");
  if (searchInput) {
    searchInput.addEventListener("input", () => {
      const searchQuery = searchInput.value.toLowerCase();
      getWishes(searchQuery);
    });
  }
});

export const getWishes = async (searchQuery) => {
  try {
    const response = await axios.get("/wishList");
    if (response.status === 200) {
      const wishes = response.data;
      console.log(wishes);

      const filteredWishes = searchQuery
        ? wishes.filter((wish) => wish.name.toLowerCase().includes(searchQuery))
        : wishes;

      let container = document.getElementById("wish-container");
      if (container) {
        container.innerHTML = "";
        if (filteredWishes.length === 0 && searchQuery) {
          container.classList.remove("grid-cols-2");
          container.innerHTML = `

  <div class="font-Roboto flex flex-col justify-center items-center mt-10 gap-y-4">
    <img src="./public/imges/notfound.png" alt="notFound" class="size-80" />
    <div></div>
    <p class="font-semibold text-2xl">Not Found</p>
    <p class="text-center">
      Sorry, the keyword you entered cannot be found. Please check again or
      search with another keyword.
    </p>
  </div>

    `;
        } else {
          container.classList.add("grid-cols-2");
          filteredWishes.forEach((wish) => {
            container.innerHTML += `
                          <div class="flex flex-col justify-start gap-y-2">
            <div class="bg-productsBg size-[182px] relative rounded-3xl">
            <img src="./imges/love.png" alt="love-icon" class="love-icon absolute right-3 top-3 z-30 cursor-pointer" data-wish-id="${wish.id}" />
              <img
                src="${wish.images[0]}"
                alt="${wish.name}"
                class="absolute top-9 left-5 mix-blend-darken"
              />
            </div>
            <p class="font-semibold text-xl">${wish.name}</p>
            <div class="flex gap-x-2 text-center">
              <img src="./public/imges/star.png" alt="star" class="size-5" />
              <p class="text-textGray">${wish.rate}</p>
              <span>|</span>
              <p class="bg-navBg text-xs w-20 h-6 rounded-md pt-1">${wish.sold} sold</p>
            </div>
            <p class="font-semibold tracking-tighter">$${wish.price}</p>
          </div>
              `;
          });
        }

        const heartIcons = document.querySelectorAll(".love-icon");
        heartIcons.forEach((icon) => {
          icon.addEventListener("click", async (event) => {
            const wishId = event.target.getAttribute("data-wish-id");
            try {
              document.getElementById("myModal").classList.remove("hidden");
              const yesButton = document.getElementById("yes-btn");
              yesButton.addEventListener("click", async () => {
                try {
                  await axios.delete(`/wishList/${wishId}`);
                  await getWishes();
                  console.log(`Item with ID ${wishId} deleted successfully.`);
                } catch (error) {
                  console.error("Error deleting item:", error);
                }
                document.getElementById("myModal").classList.add("hidden");
              });
              const noButton = document.getElementById("no-btn");
              noButton.addEventListener("click", async () => {
                document.getElementById("myModal").classList.add("hidden");
              });
            } catch (error) {
              console.error("Error deleting item:", error);
            }
          });
        });
      }
    }

    //////////////prev Handler//////////////
    const prev = document.getElementById("prev-icon");
    if (prev) {
      prev.addEventListener("click", () => {
        // router.navigate(routes.products);
        window.location.replace(routes.products);
      });
    }
  } catch (error) {
    console.log(error);
  }
};
