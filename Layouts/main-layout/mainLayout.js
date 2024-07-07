import { router, routes } from "../../main";

export const mainLayout = (content) => {
  return `
<div class="min-h-screen flex flex-col font-Roboto">
 <header class="flex justify-between p-5">
  <div class="flex gap-x-3.5">
    <div>
      <img src="./public/imges/safeimagekit-myPic.jpg" alt="mypic" class="rounded-full"/>
     </div>
     <div class="flex flex-col gap-y-1.5">
      <p class="flex text-textGray">Good Morning
        <img src="./public/imges/waving-hand_1f44b.png" alt="wave-hand" class="size-4 ml-2 mt-1" />
      </p>
      <p id="user-name" class="font-semibold">Maral Mashayekhi</p>
     </div>
   </div>
   <div class="mt-4">
    <div class="cursor-pointer">
      <img id="wish" src="./public/imges/header.png" alt="header" />
    </div>
  </div>
 </header>

 <main class="grow px-4">
   ${content}
 </main>

 <footer class="sticky bottom-0 z-40 bg-white">
   <div class="flex justify-evenly mb-3 text-center items-center">
    <a href="/products" data-navigo>
      <img src="./public/imges/home.png" alt="home" />
      <p class="text-10">Home</p>
    </a>
    <a href="/cart" data-navigo>
      <img src="./public/imges/cart.png" alt="cart" />
      <p class="text-10">Cart</p>
    </a>
    <a href="#" data-navigo>
      <img src="./public/imges/shoppi.png" alt="order" />
      <p class="text-10">Orders</p>
    </a>
    <a href="#" data-navigo>
      <img src="./public/imges/wallet.png" alt="wallet"/>
      <p class="text-10">Wallet</p>
    </a>
    <a href="#" data-navigo>
      <img src="./public/imges/profile.png" alt="profile"/>
      <p class="text-10">Profile</p>
    </a>
   </div>
 </footer>
</div>
    `;
};

// document.addEventListener("DOMContentLoaded", function () {
//   if (document.querySelector("#wish")) {
//     document.querySelector("#wish").addEventListener("click", () => {
//       router.navigate(routes.wishList);
//     });
//   }
// });
