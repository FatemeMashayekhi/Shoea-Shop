export async function orderPage() {
  const createEventListeners = () => {};
  const html = `
  <div class="min-h-screen flex flex-col font-Roboto">

  <div class="bg-lightGray flex flex-col font-Roboto p-6 gap-y-8 grow">
    <div id="header" class="flex justify-between items-center">
      <div class="flex gap-x-5 items-center">
        <img src="./public/imges/logo.png" alt="logo" class="w-4" />
        <p class="font-bold text-2xl">My Cart</p>
      </div>
      <div class="flex gap-x-4">
        <img src="./public/imges/search-interface-symbol.png" alt="search-icon" class="size-6" />
        <img src="./public/imges/moreicon.png" alt="more-icon" class="size-6" />
      </div>
    </div>

    <div class="flex justify-evenly items-center font-semibold text-lg text-center">
      <div class="border-b-2 w-1/2">
        <button type="button" class="text-textGray">Active</button>
      </div>
      <div class="border-b-2 w-1/2">
        <button type="button" class="text-textGray">Completed</button>
      </div>
    </div>

    <div id="container" class="grow flex flex-col gap-y-3">

      <div id="card" class="flex bg-white rounded-3xl p-4 gap-x-6">
        <div
          class="bg-navBg rounded-2xl w-48 h-28 flex justify-center items-center"
        >
          <img
            src="./public/imges/shoe1.png"
            alt="img1"
            class="top-10 mix-blend-darken"
          />
        </div>
        <div class="flex flex-col gap-y-2 w-full">
          <div class="flex justify-between">
            <p class="font-semibold">Air Jordan 3 Retro</p>
          </div>
          <div class="flex gap-x-3 items-center text-xs text-textGray">
            <span
              style="background-color: black"
              class="rounded-full size-4"
            ></span>
            <span>Black</span>
            <span>|</span>
            <span>Size = 42</span>
            <span>|</span>
            <span>Qty = 2</span>
          </div>
          <p class="bg-navBg w-20 rounded-lg p-1 text-xs text-center">In Delivery</p>
          <div class="flex items-center justify-between">
            <p
              id="single-price"
              class="font-semibold text-lg"
            >
              $105
            </p>
            <div
              class="bg-black text-white rounded-3xl w-28 p-1 flex justify-center gap-x-4 items-center text-sm"
            >
              <p>Track Order</p>
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>

  <footer class="sticky bottom-0 z-40 ">
    <div class="flex justify-evenly bg-white text-center items-center p-4 rounded-t-3xl shadow-inner">
      <div href="/products" data-navigo>
        <img src="./public/imges/home-2.png" alt="home" />
        <p class="text-10">Home</p>
      </div>
      <div href="/cart" data-navigo>
        <img src="./public/imges/cart.png" alt="cart" />
        <p class="text-10">Cart</p>
      </div>
      <div href="#" data-navigo>
        <img src="./public/imges/shoppi1.png" alt="order" />
        <p class="text-10">Orders</p>
      </div>
      <div href="#" data-navigo>
        <img src="./public/imges/wallet.png" alt="wallet" />
        <p class="text-10">Wallet</p>
      </div>
      <div href="#" data-navigo>
        <img src="./public/imges/profile.png" alt="profile" />
        <p class="text-10">Profile</p>
      </div>
    </div>
  </footer>

</div>
  `;
  return { html, createEventListeners };
}
