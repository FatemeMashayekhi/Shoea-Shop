export function searchPage() {
  return `
<div class="p-6 flex flex-col gap-y-5 font-Roboto">
  <label for="search-box" class="relative">
    <i class="fas fa-search absolute top-4 left-3 text-placeholderText text-xl"></i>
    <input type="text" id="search-box" class="w-full h-14 bg-productsBg px-11 rounded-2xl" />
    <img src="./public/imges/afilter.png" alt="filter" class="absolute right-4 top-4" />
  </label>

  <div class="flex justify-between font-semibold items-center">
    <p class="text-xl">Recent</p>
    <p>Clear All</p>
  </div>

  <div class="border-1"></div>

<div class="flex flex-col gap-y-6">
  <div class="flex justify-between items-center">
    <p class="text-textGray">Nike Wrapshot Classic</p>
    <div class="border-2 rounded-lg size-6 relative border-textGray">
      <i class="fa-solid fa-xmark absolute left-1 top-1 text-xs pl-0.5 text-textGray"></i>
    </div>
  </div>

  <div class="flex justify-between items-center">
    <p class="text-textGray">Nike Wrapshot Classic</p>
    <div class="border-2 rounded-lg size-6 relative border-textGray">
      <i class="fa-solid fa-xmark absolute left-1 top-1 text-xs pl-0.5 text-textGray"></i>
    </div>
  </div>

  <div class="flex justify-between items-center">
    <p class="text-textGray">Nike Wrapshot Classic</p>
    <div class="border-2 rounded-lg size-6 relative border-textGray">
      <i class="fa-solid fa-xmark absolute left-1 top-1 text-xs pl-0.5 text-textGray"></i>
    </div>
  </div>
</div>

</div>
  `;
}
