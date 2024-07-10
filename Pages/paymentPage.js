import axios from "../api";
import { router, routes } from "../main";

export async function paymentPage() {
  const methods = await getPaymentMethods();
  console.log(methods);

  const createEventListeners = () => {
    let method = null;

    function selectedMethod() {
      const buttons = document.querySelectorAll(".check-btn");
      let selectedButton = null;

      buttons.forEach((btn) => {
        btn.addEventListener("click", () => {
          btn.classList.add("bg-black");

          if (selectedButton) {
            selectedButton.classList.remove("bg-black");
          }

          //a//////////dd classes to the clicked button///////
          btn.classList.add("bg-black");

          /////////update the selected button reference//////////
          selectedButton = btn;

          method = btn.getAttribute("data-name");
        });
      });
    }

    selectedMethod();
    const error = document.querySelector("#error-span");
    document.querySelector("#confirm-btn").addEventListener("click", () => {
      if (!method) {
        //////if no method is selected////////
        error.innerHTML = "Please Select a Payment Method First";
      } else {
        error.innerHTML = "";
        const modal = document.querySelector("#modal-container");
        modal.classList.remove("hidden");
      }
    });

    document.querySelector("#prev-icon").addEventListener("click", () => {
      router.navigate(routes.checkout);
    });
  };

  const html = `
  <div class="flex flex-col gap-y-4 bg-lightGray font-Roboto min-h-screen">
  <div class="grow p-6 flex flex-col gap-y-6">
    <div class="flex justify-between items-center ml-0">
      <div class="flex items-center">
        <img
          src="./imges/prev icon.png"
          alt="prev-icon"
          id="prev-icon"
          class="cursor-pointer -ml-7"
        />
        <p class="font-bold text-2xl">Payment Methods</p>
      </div>
      <img
        src="./public/imges/add-square-outlined-interface-button.png"
        alt="plusSquare-icon"
        class="size-6"
      />
    </div>
    <p class="text-btnListBg">Select the payment method you want to use</p>
    <div id="methods-container" class="flex flex-col gap-y-6">


   ${methods
     .map((item) => {
       return `
    <div id="card" class="flex items-center justify-between bg-white p-6 rounded-3xl font-Roboto">
        <div class="flex items-center gap-x-4">
          <img src="${item.icon}" alt="${item.name}" />
          <p class="font-semibold text-lg">${item.name}</p>
        </div>
        <div>
          <div
            data-name="${item.name}"
            class="check-btn border-3 border-black rounded-full size-5 flex items-center justify-center cursor-pointer"
          >
            <div class="radio bg-black rounded-full"></div>
          </div>
        </div>
    </div>
        `;
     })
     .join("")}


     <span id="error-span" class="text-red-600 text-lg"></span>
    </div>
  </div>
  <div
    class="sticky bottom-0 z-40 bg-white rounded-t-3xl shadow-inner text-center p-7"
  >
    <button
      type="button" id="confirm-btn"
      class="bg-black text-white p-4 rounded-full w-[364px]"
    >
      Confirm Payment
    </button>
  </div>

  <div
  id="modal-container"
  class="hidden fixed z-50 bottom-0 left-0 w-full h-screen overflow-auto bg-black/50"
>
  <div
    id="modal-content"
    class="bg-white top-52 left-14 p-6 rounded-45 flex flex-col text-center items-center gap-y-5 absolute w-80"
  >
    <img src="./public/imges/ordersuccess.png" alt="order-success" />
    <p class="text-2xl font-semibold">Order Successful!</p>
    <p class="text-sm tracking-wider">You have successfully made order</p>
    <div class="flex flex-col gap-y-3">
    <button type="button" class="bg-black text-white p-4 rounded-3xl text-sm font-semibold w-[250px]">View Order</button>
    <button type="button" class="bg-navBg text-btnListBg p-4 rounded-3xl text-sm font-semibold w-[250px]">View E-Receipt</button>
    </div>
  </div>

</div>

</div>
  `;

  return { html, createEventListeners };
}

const getPaymentMethods = async () => {
  try {
    const response = await axios.get("/payment");
    if (response.status === 200) {
      const methods = response.data;
      return methods;
    }
  } catch (error) {
    console.log(error);
  }
};
