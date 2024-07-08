export function checkoutPage() {
  const createEventListeners = () => {
    const p = document.querySelector("p");
    p.addEventListener("click", () => {
      alert("hiii");
    });
  };

  const html = `
<div class="font-Roboto bg-lightGray">
  <div class="p-5 flex flex-col gap-y-5">
    <div class="flex justify-between items-center ml-0">
      <div class="flex items-center">
        <img
          src="./imges/prev icon.png"
          alt="prev-icon"
          id="prev-icon"
          class="cursor-pointer -ml-7"
        />
        <p class="font-bold text-2xl">Checkout</p>
      </div>
      <img src="./public/imges/top-more.png" alt="more-icon" class="size-6" />
    </div>


    <div class="flex flex-col gap-y-5">
      <p class="text-xl font-semibold">Shipping Address</p>
      <div class="bg-white flex p-5 rounded-3xl items-center justify-between">
        <div class="flex gap-x-4 items-center">
           <img src="./public/imges/location.png" alt="location-icon" class="size-14" />
         <div>
           <p class="font-semibold">Home</p>
           <p class="text-sm text-textGray">61480 Sunbrook Park, PC 5679</p>
         </div>
        </div>
        <img src="./public/imges/edit.png" alt="edit-icon" class="w-5" />
      </div>
    </div>
    <div class="border-1"></div>


    <div class="flex flex-col gap-y-5">
      <p class="text-xl font-semibold">Order List</p>
      <div>

        <div id="card" class="flex bg-white rounded-3xl p-5 gap-x-6">
          <div
            class="bg-navBg rounded-2xl w-48 h-28 flex justify-center items-center"
          >
            <img
              src="./public/imges/shoe1.png"
              alt="shoe1"
              class="top-10 mix-blend-darken"
            />
          </div>
          <div class="flex flex-col gap-y-3 w-full">
            <p class="font-semibold">Air Jordan 3 Retro</p>
            <div class="flex gap-x-3 items-center text-xs text-textGray">
              <span
                style="background-color: black"
                class="rounded-full size-4"
              ></span>
              <span>Black</span>
              <span>|</span>
              <span>Size = 42</span>
            </div>
            <div class="flex items-center justify-between">
              <p id="single-price" class="font-semibold text-lg">$105.00</p>
              <p class="rounded-full bg-productsBg size-8 flex items-center justify-center">1</p>
            </div>
          </div>
        </div>

      </div>
    </div>


    <div class="border-1"></div>


    <div class="flex flex-col gap-y-5">
      <p class="text-xl font-semibold">Choose Shipping</p>
      <div class="bg-white flex justify-between p-5 rounded-3xl">
        <div class="flex items-center gap-x-4">
          <img src="./public/imges/truck.png" alt="truck-icon" class="w-7 h-5" />
          <p class="text-xl font-semibold tracking-tight">Choose Shipping Type</p>
        </div>
        <i class="fa-solid fa-chevron-right text-lg"></i>
      </div>
    </div>


    <div class="border-1"></div>


    <div class="flex flex-col gap-y-5">
      <p class="text-xl font-semibold">Promo Code</p>
      <div class="flex items-center justify-between">
        <label for="promo">
          <input id="promo" type="text" placeholder="Enter Promo Code" class="p-4 rounded-2xl bg-productsBg placeholder-placeholderText w-[310px] text-sm" />
        </label>
        <i class="fa-solid fa-circle-plus text-5xl"></i>
      </div>
    </div>


    <div class="bg-white p-5 rounded-3xl flex flex-col gap-y-5">
      <div class="flex flex-col gap-y-4">
        <div class="flex justify-between items-center">
          <p class="text-sm text-textGray">Amount</p>
          <p>$585.00</p>
        </div>
        <div class="flex justify-between items-center">
          <p class="text-sm text-textGray">Shipping</p>
          <p>-</p>
        </div>
      </div>
      <div class="border-1"></div>
      <div class="flex justify-between items-center">
        <p class="text-sm text-textGray">Total</p>
        <p>-</p>
      </div>
    </div>


  </div>

  
<div class="sticky bottom-0 bg-white">
  <div class="flex justify-center p-6 rounded-t-45 shadow-inner">
    <div class="relative">
      <button
        type="button"
        class="bg-black text-white p-4 rounded-full w-96 text-center"
      >
        Continue to Payment
      </button>
      <img
        src="./public/imges/gocheckout.png"
        alt="checkout-icon"
        class="right-14 top-5 absolute"
      />
    </div>
  </div></div>
</div>
  `;

  return { html, createEventListeners };
}
