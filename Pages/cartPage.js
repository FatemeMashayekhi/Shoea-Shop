import axios from "../api";

export async function cartPage() {
  const cart = await getCart();

  const createEventListeners = () => {
    console.log(document.querySelectorAll(".plus"));
    document.querySelectorAll("#plus").forEach((plusElement) => {
      plusElement.addEventListener("click", () => {
        console.log("plus button clicked");
      });
    });
  };
  //   const searchInput = document.getElementById("search-input");
  //   searchInput.addEventListener("input", () => {
  //     const searchQuery = searchInput.value.toLowerCase();
  //     getCart(searchQuery);
  //   });

  //////////////get Data and filter///////////////

  ////////////////delete method///////////
  async function deleteCart(productId) {
    try {
      const response = await axios.delete(`/cart/${productId}`);
      if (response.status === 200) {
        getCart();
      }
    } catch (error) {
      console.log(error);
    }
  }

  const html = `

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
     ${cart
       .map((item) => {
         return `
        <div id="card" class="flex bg-white rounded-3xl p-6 gap-x-6">
        <div class="bg-navBg rounded-2xl w-48 h-28 flex justify-center items-center">
        <img src="${item.imgUrl}" alt="${item.name}" class="top-10 mix-blend-darken">
        </div>
        <div class="flex flex-col gap-y-3 w-full">
        <div class="flex justify-between">
        <p class="font-semibold">${item.name}</p>
        <img src="./public/imges/bin.png" alt="trash-icon" data-productId="${item.id}" id="trash-icon" class="w-5 h-6 cursor-pointer">
        </div>
        <div class="flex gap-x-3 items-center text-xs text-textGray">
        <span style="background-color:${item.colorCode};" class="rounded-full size-4"></span>
        <span>${item.color}</span>
        <span>|</span>
        <span>Size = ${item.sizes}</span>
        </div>
        <div class="flex items-center justify-between">
        <p id="single-price" class="font-semibold text-lg">$${item.price}</p>
        <div class="bg-navBg rounded-3xl w-24 p-2 font-semibold flex justify-center gap-x-4 items-center text-sm">
        <i id="minus" class="fa-solid fa-minus cursor-pointer"></i>
        <span id="quantity">${item.quantity}</span>
        <i id="plus"  class="fa-solid fa-plus cursor-pointer"></i>
        </div>
        </div>
        </div>
        </div>
        `;
       })
       .join("")}
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

<div
  id="modal-container"
  class="hidden fixed z-50 bottom-0 left-0 w-full h-screen overflow-auto bg-black/50"
>

</div>

</div>

  `;

  return { html, createEventListeners };
}

////////////////////////
// let currentQuantity = 0;
// function incrementQuantity() {
//   currentQuantity = Math.min(currentQuantity + 1);
//   updateQuantityDisplay();
// }

// function decrementQuantity() {
//   currentQuantity = Math.max(currentQuantity - 1, 0);
//   updateQuantityDisplay();
// }

// let singlePrice = null;
// function updateQuantityDisplay() {
//   document.getElementById("quantity").textContent = currentQuantity;

//   function updateSinglePrice() {
//     singlePrice = (product.price / product.quantity) * currentQuantity;

//     document.getElementById("single-price").textContent = `$${singlePrice}`;
//   }
//   updateSinglePrice();
// }

// const minus = document.getElementById("minus");
// if (minus) {
//   minus.addEventListener("click", decrementQuantity);
// }

// const plus = document.getElementById("plus");
// if (plus) {
//   plus.addEventListener("click", incrementQuantity);
// }

////////////////////////

// async function deleteHandler() {
//   try {
//     const response = await axios.get("/cart");
//     if (response.status === 200) {
//       const cart = response.data;
//       let trashIcons = document.querySelectorAll("#trash-icon");
//       cart.forEach((item) => {
//         trashIcons.forEach((icon) => {
//           icon.addEventListener("click", (event) => {
//             event.preventDefault();
//             const modal = document.getElementById("modal-container");
//             modal.style.display = "block";
//             modal.innerHTML = `
// <div
//   id="modal-content"
//   class="bg-white p-6 h-96 rounded-t-45 bottom-0 flex flex-col text-center items-center gap-y-5"
// >
//   <div>
//     <img src="./public/imges/modaltop.png" alt="modal-top" />
//     <p>Remove From Cart?</p>
//   </div>
//   <div></div>
//   <div>
//     <div id="card" class="flex bg-white rounded-3xl p-6 gap-x-6">
//       <div
//         class="bg-navBg rounded-2xl w-48 h-28 flex justify-center items-center"
//       >
//         <img
//           src="${item.imgUrl}"
//           alt="${item.name}"
//           class="top-10 mix-blend-darken"
//         />
//       </div>
//       <div class="flex flex-col gap-y-3 w-full">
//         <div class="flex justify-between">
//           <p class="font-semibold">${item.name}</p>
//         </div>
//         <div class="flex gap-x-3 items-center text-xs text-textGray">
//           <span
//             style="background-color:${item.colorCode};"
//             class="rounded-full size-4"
//           ></span>
//           <span>${item.color}</span>
//           <span>|</span>
//           <span>Size = ${item.sizes}</span>
//         </div>
//         <div class="flex items-center justify-between">
//           <p id="single-price" class="font-semibold text-lg">$${item.price}</p>
//           <div
//             class="bg-navBg rounded-3xl w-24 p-2 font-semibold flex justify-center gap-x-4 items-center text-sm"
//           >
//             <i id="minus" class="fa-solid fa-minus cursor-pointer"></i>
//             <span id="quantity">${item.quantity}</span>
//             <i id="plus" class="fa-solid fa-plus cursor-pointer"></i>
//           </div>
//         </div>
//       </div>
//     </div>
//   </div>
//   <div></div>
//   <div>
//     <button type="button" onclick="cancelDelete()">Cancel</button>
//     <button type="button" onclick="confirmDelete(${item.id})">
//       Yes, Remove
//     </button>
//   </div>
// </div>
// `;
//             const cancelDelete = () => {
//               const modal = document.getElementById("modal-container");
//               modal.style.display = "none";
//             };
//             const confirmDelete = (productId) => {
//               // const productId = event.target.dataset.productid;
//               deleteCart(productId);
//               // Close the modal after deletion (you can add more logic here)
//               cancelDelete();
//             };
//             confirmDelete();
//           });
//         });
//       });
//     }
//   } catch (error) {
//     console.log(error);
//   }
// }

const getCart = async () => {
  try {
    const response = await axios.get("/cart");
    if (response.status === 200) {
      const cart = response.data;
      return cart;
    }
  } catch (error) {
    console.log(error);
  }
};
