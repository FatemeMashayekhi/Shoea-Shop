import axios from "../api";
import { router } from "../main";
import { routes } from "../main";

export function loginPage() {
  return `
    <a href="/slider" class="mt-2">
       <img src="./imges/prev icon.png" alt="prev-icon" class="cursor-pointer" />
    </a>
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
          <i class="fa-solid fa-eye-slash absolute text-grayBtn right-3 top-3 text-xs cursor-pointer"></i>
        </label>

        <div class="flex justify-center mt-6">
        <label class="block relative cursor-pointer select-none pl-7 text-base font-medium">
          <input type="checkbox" class="absolute opacity-0 cursor-pointer h-0 w-0 checked:" />
          Remember me
          <span class="absolute top-0 left-0 h-5 w-5 bg-white border-1 border-gray-300 rounded-md"></span>
        </label>
        </div>
        <div class="flex justify-center mt-2">
        <a href="/signup" data-navigo class="text-grayBtn hover:text-black cursor-pointer">Don't have an account?</a>
        </div>
        <span id="error" style="color:red;"></span>
      </div>
      <button id="login-btn" type="submit" class="w-96 h-12 bg-grayBtn text-white font-Roboto rounded-3xl cursor-not-allowed mt-[75px]" disabled="true">Sign In</button>
    </div>
    `;

  //   document.querySelector("img").addEventListener("click", () => {
  //     router.navigate(routes.slider);
  //   });
}

export function login() {
  const loginBtn = document.querySelector("#login-btn");
  const emailInput = document.querySelector("#email");
  const passInput = document.querySelector("#password");

  emailInput.addEventListener("input", (e) => {
    e.preventDefault();
    if (emailInput.value !== "") {
      document.querySelector(".fa-envelope").classList.add("text-black");
      document.querySelector(".fa-envelope").classList.remove("text-grayBtn");
      updateLoginButton();
    } else {
      document.querySelector(".fa-envelope").classList.remove("text-black");
      document.querySelector(".fa-envelope").classList.add("text-grayBtn");
      updateLoginButton();
    }
  });

  passInput.addEventListener("input", (e) => {
    e.preventDefault();
    if (passInput.value !== "") {
      document.querySelector(".fa-lock").classList.add("text-black");
      document.querySelector(".fa-lock").classList.remove("text-grayBtn");
      updateLoginButton();
      showpass();
    } else {
      document.querySelector(".fa-lock").classList.remove("text-black");
      document.querySelector(".fa-lock").classList.add("text-grayBtn");
      updateLoginButton();
      showpass();
    }
  });

  loginBtn.addEventListener("click", async (e) => {
    e.preventDefault();

    const credentials = {
      email: emailInput.value,
      password: passInput.value,
    };

    try {
      let response = await axios.post("/login", credentials);
      if (response.status === 200) {
        console.log(response);
        localStorage.setItem("accessToken", response.data.accessToken);
        localStorage.setItem("email", response.data.user.email);
        router.navigate(routes.products);
      }
    } catch (e) {
      console.log(e);
      document.querySelector("span").innerHTML = e.response.data;
    }
  });
}

function updateLoginButton() {
  const emailInput = document.querySelector("#email");
  const passInput = document.querySelector("#password");
  const loginBtn = document.querySelector("#login-btn");

  if (emailInput.value !== "" && passInput.value !== "") {
    loginBtn.classList.remove("cursor-not-allowed", "bg-grayBtn");
    loginBtn.removeAttribute("disabled");
    loginBtn.classList.add("bg-darkBtn");
  } else {
    loginBtn.classList.add("cursor-not-allowed", "bg-grayBtn");
    loginBtn.setAttribute("disabled", true);
    loginBtn.classList.remove("bg-darkBtn");
  }
}

function showpass() {
  const passInput = document.querySelector("#password");
  const eye = document.querySelector(".fa-eye-slash");

  eye.addEventListener("click", (e) => {
    e.preventDefault();
    if (passInput.type === "password") {
      passInput.type = "text";
      eye.classList.remove("fa-eye-slash");
      eye.classList.add("fa-eye");
    } else {
      passInput.type = "password";
      eye.classList.add("fa-eye-slash");
      eye.classList.remove("fa-eye");
    }
  });
}

// export const login = () => {
//     document.querySelector("form").addEventListener("submit", async (e) => {
//       e.preventDefault();

//       const credentials = {
//         email: e.target["email"].value,
//         password: e.target["pass"].value,
//       };

//       try {
//         let response = await axios.post("/login", credentials);
//         if (response.status === 200) {
//           console.log(response);
//           localStorage.setItem("accessToken", response.data.accessToken);
//           localStorage.setItem("email", response.data.user.email);
//           router.navigate(routes.dashboard);
//         }
//       } catch (e) {
//         console.log(e);
//         document.querySelector("span").innerHTML = e.response.data;
//       }
//     });
//   };
