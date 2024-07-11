export async function brandPage() {
  const createEventListeners = () => {};

  const html = `

  <div class="flex flex-col gap-4 py-3 px-5 flex-wrap">
  <div class="flex justify-between items-center ml-0">
    <div class="flex items-center">
      <img
        src="./imges/prev icon.png"
        alt="prev-icon"
        id="prev"
        class="cursor-pointer -ml-7"
      />
      <p class="font-bold text-2xl">Nike</p>
    </div>
  </div>

  <div id="container">

    <div class="flex flex-col justify-start gap-y-1">
      <a href="/products/" class="bg-productsBg size-[182px] relative rounded-3xl">
          <img src="./public/imges/shoe1.png" alt="shoe1" class="absolute top-9 left-5 mix-blend-darken" />
      </a>
      <p class="font-semibold text-xl">Air Jordan 3 Retro</p>
      <p class="font-semibold">$ 105.00</p>
  </div>

  </div>
</div>

  `;

  return { html, createEventListeners };
}
