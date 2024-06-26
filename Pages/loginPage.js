import { router } from "../main";
import { routes } from "../main";

export function loginPage() {
  document.querySelector("#app").innerHTML = `
    <div class="mt-2">
      <img src="./imges/prev icon.png" alt="prev-icon" class="cursor-pointer" />
    </div>
    <div class="flex flex-col items-center gap-y-32 font-Roboto mt-20">
      <div><img src="./imges/logo.png" alt="logo" /></div>

      <div class="flex flex-col gap-y-5">
        <p class="text-4xl font-semibold text-center mb-9">Login to Your Account</p>

        <label for="email" class="relative">
          <i class="fa-solid fa-envelope absolute top-2 left-4 pt-0.5 text-grayBtn"></i>
          <input type="email" id="email" placeholder="Email" class="w-96 h-9 bg-lightGray pl-10 placeholder-grayBtn" />
        </label>
        
        <label for="password" class="relative">
          <i class="fa-solid fa-lock absolute top-2 left-4 pt-0.5 text-grayBtn"></i>
          <input type="password" id="password" placeholder="Password" class="w-96 h-9 bg-lightGray pl-10 placeholder-grayBtn" />
          <i class="fa-solid fa-eye-slash absolute text-grayBtn right-3 top-3 text-xs"></i>
        </label>

        <div class="flex justify-center mt-6">
        <label class="block relative cursor-pointer select-none pl-7 text-base font-medium">
          <input type="checkbox" class="absolute opacity-0 cursor-pointer h-0 w-0 checked:" />
          Remember me
          <span class="absolute top-0 left-0 h-5 w-5 bg-white border-1 border-gray-300 rounded-md"></span>
        </label>
        </div>
      </div>
      <button id="login-btn" type="submit" class="w-96 h-12 bg-grayBtn text-white font-Roboto rounded-3xl cursor-not-allowed mt-36" disabled>Sign In</button>
    </div>
    `;

  document.querySelector("img").addEventListener("click", () => {
    router.navigate(routes.slider);
  });
  login();
}

function login() {
  const loginBtn = document.querySelector("#login-btn");
  const emailInput = document.querySelector("#email");
  const passInput = document.querySelector("#password");

  emailInput.addEventListener("input", () => {
    if (emailInput.value !== "") {
      document.querySelector("i").classList.add("text-black");
      document.querySelector("i").classList.remove("text-grayBtn");
    } else {
      document.querySelector("i").classList.remove("text-black");
      document.querySelector("i").classList.add("text-grayBtn");
    }
  });
}
