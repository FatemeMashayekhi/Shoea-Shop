export function addressPage() {
  const createEventListeners = () => {};

  const html = `
  <div class="flex flex-col gap-y-4 bg-lightGray font-Roboto min-h-screen">
  <div class="grow p-4">
    <div class="flex justify-between items-center ml-0">
    <div class="flex items-center">
      <img
        src="./imges/prev icon.png"
        alt="prev-icon"
        id="prev-icon"
        class="cursor-pointer -ml-7"
      />
      <p class="font-bold text-2xl">Shipping Address</p>
    </div>
  </div>
  <div id="address-container" class="flex flex-col gap-y-5">
    <div class="flex justify-between items-center bg-white p-4 rounded-3xl">
      <div class="flex gap-x-4 items-center">
        <img src="./public/imges/location.png" alt="location-icon" class="size-14" />
        <div class="flex flex-col gap-y-3">
          <div class="flex gap-x-4 items-center">
          <p class="font-bold">Home</p>
          <span class="bg-navBg text-xs p-2 rounded-xl">Default</span>
          </div>
          <p class="text-textGray text-sm">61480 Sunbrook Park, PC 5679</p>
        </div>
      </div>
      <div class="border-3 border-black rounded-full size-5 flex items-center justify-center">
         <div class="bg-black rounded-full size-3"></div>
      </div>
    </div>
    <button type="button" class="bg-navBg font-semibold text-btnListBg p-4 rounded-full">Add New Address</button>
  </div>
  </div>
  
  <div class="sticky bottom-0 z-40 bg-white rounded-t-3xl shadow-inner text-center p-7">
    <button type="button" class="bg-black text-white p-4 rounded-full w-[364px]">Apply</button>
  </div>
</div>
  `;

  return { html, createEventListeners };
}
