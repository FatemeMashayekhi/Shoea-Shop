export const mainLayout = (content) => {
  return `
<div class="min-h-screen flex flex-col font-Roboto">
 <header class="flex justify-between">
  <div class="flex">
    <div>
      <img src="./public/imges/safeimagekit-myPic.jpg" alt="parsapic" class="rounded-full"/>
     </div>
     <div>
      <p class="flex">Good Morning
        <img src="./public/imges/waving-hand_1f44b.png" alt="wave-hand" class="w-5 h-5 ml-2" />
      </p>
      <p class="font-semibold">Maral Mashayekhi</p>
     </div>
   </div>
   <div>
    <i class="fa-solid fa-bell"></i>
    <i class="fa-solid fa-heart"></i>
  </div>
 </header>

 <main class="flex-grow p-4">
   ${content}
 </main>

 <footer>
   <div>
    <i class="fa-solid fa-house"></i>
    <i class="fa-solid fa-bag-shopping"></i>
    <i class="fa-solid fa-cart-shopping"></i>
    <i class="fa-solid fa-wallet"></i>
    <i class="fa-solid fa-user"></i>
   </div>

 </footer>
</div>
    `;
};
