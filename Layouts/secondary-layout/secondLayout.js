export const mainLayout = (content) => {
  return `
<div class="min-h-screen flex flex-col font-Roboto">

 <main class="grow px-4">
   ${content}
 </main>

 <footer class="sticky bottom-0 z-40 bg-white">
   <div class="flex justify-evenly mb-3 text-center items-center">
    <a href="#" data-navigo>
      <img src="./public/imges/home-2.png" alt="home" />
      <p class="text-10">Home</p>
    </a>
    <a href="#" data-navigo>
      <img src="./public/imges/cart-2.png" alt="cart" />
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
