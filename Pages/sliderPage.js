import Swiper from "swiper";
import { Navigation, Pagination } from "swiper/modules";

export function sliderPage() {
  return `
<div class="swiper w-full h-screen">
  <div class="swiper-wrapper">
    <!-- Slides -->
    <div class="swiper-slide">
    
    </div>
    <div class="swiper-slide">Slide 2</div>
    <div class="swiper-slide">Slide 3</div>
  </div>
  <div class="swiper-pagination"></div>

  <div class="swiper-button-prev"></div>
  <div class="swiper-button-next"></div>

  <div class="swiper-scrollbar"></div>
</div>
  `;
}

// export const swiper = new Swiper(".swiper", {
//   // configure Swiper to use modules
//   modules: [Navigation, Pagination],

//   // Optional parameters
//   direction: "vertical",
//   loop: true,

//   // If we need pagination
//   pagination: {
//     el: ".swiper-pagination",
//   },

//   // Navigation arrows
//   navigation: {
//     nextEl: ".swiper-button-next",
//     prevEl: ".swiper-button-prev",
//   },

//   // And if we need scrollbar
//   scrollbar: {
//     el: ".swiper-scrollbar",
//   },
// });



document.addEventListener("DOMContentLoaded", function () {
  if (document.querySelector(".swiper")) {
    const swiper = new Swiper(".swiper", {
      modules: [Navigation, Pagination],
      // direction: "vertical",
      loop: true,
      pagination: {
        el: ".swiper-pagination",
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      scrollbar: {
        el: ".swiper-scrollbar",
      },
    });
  }
});