import axios from "../api";
import { router, routes } from "../main";
export function signupPage() {
  const accessToken = localStorage.getItem("accessToken") ?? false;
  if (accessToken) {
    return window.location.replace(routes.products);
  } else {
    return `
    <a href="/slider" data-navigo class="mt-2">
       <img src="./imges/prev icon.png" alt="prev-icon" class="cursor-pointer" />
    </a>
    <div class="flex flex-col items-center gap-y-32 font-Roboto mt-20">
      <div><img src="./imges/logo.png" alt="logo" /></div>

      <div class="flex flex-col gap-y-5">
        <p class="text-4xl font-semibold text-center mb-9">Create a New Account</p>

        <label for="email" class="relative">
          <i class="fa-solid fa-envelope absolute top-2 left-4 pt-0.5 text-grayBtn"></i>
          <input type="email" id="email" placeholder="Email" class="w-96 h-9 bg-lightGray pl-10 placeholder-grayBtn" />
        </label>
        
        <label for="password" class="relative">
          <i id="pass" class="fa-solid fa-lock absolute top-2 left-4 pt-0.5 text-grayBtn"></i>
          <input type="password" id="password" placeholder="Password" class="w-96 h-9 bg-lightGray pl-10 placeholder-grayBtn" />
          <i id="passEye" class="fa-solid fa-eye-slash absolute text-grayBtn right-3 top-3 text-xs cursor-pointer"></i>
        </label>

        <label for="repeatPassword" class="relative">
          <i id="repeatPass" class="fa-solid fa-lock absolute top-2 left-4 pt-0.5 text-grayBtn"></i>
          <input type="password" id="repeatPassword" placeholder="Repeat Password" class="w-96 h-9 bg-lightGray pl-10 placeholder-grayBtn" />
          <i id="repeatPassEye" class="fa-solid fa-eye-slash absolute text-grayBtn right-3 top-3 text-xs cursor-pointer"></i>
        </label>


        <div class="flex justify-center mt-2">
        <a href="/login" data-navigo class="text-grayBtn hover:text-black cursor-pointer">Already have an account?</a>
        </div>
        <span id="error" class="text-red-800 h-7 text-center"></span>
      </div>
      <button id="create-btn" type="submit" class="w-96 h-12 bg-grayBtn text-white font-Roboto rounded-3xl cursor-not-allowed" disabled="true">Create</button>
    </div>
  `;
  }
}

export function signup() {
  const createBtn = document.querySelector("#create-btn");
  const emailInput = document.querySelector("#email");
  const passInput = document.querySelector("#password");
  const repeatPassInput = document.querySelector("#repeatPassword");

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
      document.querySelector("#pass").classList.add("text-black");
      document.querySelector("#pass").classList.remove("text-grayBtn");
      updateLoginButton();
      showpass();
    } else {
      document.querySelector("#pass").classList.remove("text-black");
      document.querySelector("#pass").classList.add("text-grayBtn");
      updateLoginButton();
      showpass();
    }
  });

  repeatPassInput.addEventListener("input", (e) => {
    e.preventDefault();
    if (repeatPassInput.value !== "") {
      document.querySelector("#repeatPass").classList.add("text-black");
      document.querySelector("#repeatPass").classList.remove("text-grayBtn");
      updateLoginButton();
      showpass();
    } else {
      document.querySelector("#repeatPass").classList.remove("text-black");
      document.querySelector("#repeatPass").classList.add("text-grayBtn");
      updateLoginButton();
      showpass();
    }
  });

  createBtn.addEventListener("click", async (e) => {
    e.preventDefault();

    if (repeatPassInput.value !== passInput.value) {
      document.querySelector("#error").innerHTML =
        "Password Must be Repeated Exactly";
    } else {
      const credentials = {
        email: emailInput.value,
        password: passInput.value,
      };

      try {
        let response = await axios.post("/signup", credentials);
        if (response.status === 201) {
          router.navigate(routes.login);
        }
      } catch (e) {
        console.log(e);
        document.querySelector("#error").innerHTML = e.response.data;
      }
    }
  });
  showpass();
}

function updateLoginButton() {
  const emailInput = document.querySelector("#email");
  const passInput = document.querySelector("#password");
  const createBtn = document.querySelector("#create-btn");
  const repeatPassInput = document.querySelector("#repeatPassword");

  if (
    emailInput.value !== "" &&
    passInput.value !== "" &&
    repeatPassInput.value !== ""
  ) {
    createBtn.classList.remove("cursor-not-allowed", "bg-grayBtn");
    createBtn.removeAttribute("disabled");
    createBtn.classList.add("bg-darkBtn");
  } else {
    createBtn.classList.add("cursor-not-allowed", "bg-grayBtn");
    createBtn.setAttribute("disabled", true);
    createBtn.classList.remove("bg-darkBtn");
  }
}

function showpass() {
  const passInput = document.querySelector("#password");
  const passEye = document.querySelector("#passEye");
  const repeatPassEye = document.querySelector("#repeatPassEye");
  const repeatPassInput = document.querySelector("#repeatPassword");

  passEye.addEventListener("click", (e) => {
    e.preventDefault();
    if (passInput.type === "password") {
      passInput.type = "text";
      passEye.classList.remove("fa-eye-slash");
      passEye.classList.add("fa-eye");
    } else {
      passInput.type = "password";
      passEye.classList.add("fa-eye-slash");
      passEye.classList.remove("fa-eye");
    }
  });

  repeatPassEye.addEventListener("click", (e) => {
    e.preventDefault();
    if (repeatPassInput.type === "password") {
      repeatPassInput.type = "text";
      repeatPassEye.classList.remove("fa-eye-slash");
      repeatPassEye.classList.add("fa-eye");
    } else {
      repeatPassInput.type = "password";
      repeatPassEye.classList.add("fa-eye-slash");
      repeatPassEye.classList.remove("fa-eye");
    }
  });
}
