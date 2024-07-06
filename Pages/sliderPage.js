import Swiper from "swiper";
import { Navigation, Pagination } from "swiper/modules";
import { router, routes } from "../main";

export function sliderPage() {
  const accessToken = localStorage.getItem("accessToken") ?? false;
  if (accessToken) {
    window.location.replace(routes.products);
  } else {
    return `
    <div class="swiper w-full h-3/5 text-center font-Roboto">
      <div class="swiper-wrapper mb-16">
    
        <div class="swiper-slide">
         <img src="./imges/slide1.png" alt="slide1">
         <p class="text-4xl mt-9">We provide high quality products just for you</p>
        </div>
        <div class="swiper-slide">
          <img src="./imges/slide2.png" alt="slide2">
          <p class="text-4xl mt-9">Your satisfaction is our number one periority</p>
        </div>
        <div class="swiper-slide">
          <img src="./imges/slide3.png" alt="slide3">
          <p class="text-4xl mt-9">Let’s fulfill your fashion needs with shoearight now!</p>
        </div>
    
     </div>
    
     <div class="swiper-pagination"></div>
    
    
    
    </div>
    
    <div class="text-center mt-14">
    <button id="next-btn" type="button" class="w-96 h-12 bg-darkBtn text-white font-Roboto rounded-3xl">Next</button>
    </div>
    
      `;
  }
}

// document.addEventListener("DOMContentLoaded", function () {
//   if (document.querySelector(".swiper")) {
//     const swiper = new Swiper(".swiper", {
//       modules: [Navigation, Pagination],
//       // direction: "vertical",
//       loop: true,
//       pagination: {
//         el: ".swiper-pagination",
//       },
//       navigation: {
//         nextEl: "#next-btn",
//       },
//     });
//   }
// });

document.addEventListener("DOMContentLoaded", function () {
  if (document.querySelector(".swiper")) {
    const swiper = new Swiper(".swiper", {
      modules: [Navigation, Pagination],
      loop: true,
      cssMode: true,
      pagination: {
        el: ".swiper-pagination",
      },
      navigation: {
        nextEl: "#next-btn",
      },
    });

    swiper.on("slideChange", function () {
      if (swiper.activeIndex === 2) {
        document.querySelector("#next-btn").textContent = "Get Started";
        document.querySelector("#next-btn").addEventListener("click", () => {
          // router.navigate(routes.login);
          window.location.replace(routes.login);
        });
      }
    });
  }
});
