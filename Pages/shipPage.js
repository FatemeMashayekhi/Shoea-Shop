import axios from "../api";
import { router, routes } from "../main";

export async function shipPage() {
  const shipment = await getShipType();
  console.log(shipment);

  const createEventListeners = () => {
    let shipType = null;
    let selectedType;
    document.querySelector("#apply-btn").disabled = true;
    function selectedShipType() {
      const buttons = document.querySelectorAll(".select-btn");
      let selectedButton = null;
      buttons.forEach((btn) => {
        btn.addEventListener("click", () => {
          btn.classList.add("bg-black");

          if (selectedButton) {
            selectedButton.classList.remove("bg-black");
          }

          ////////add classes to the clicked button///////////
          btn.classList.add("bg-black");

          ///////update the selected button reference///////////
          selectedButton = btn;

          shipType = btn.getAttribute("data-name");
          selectedType = shipment.find((item) => item.name === shipType);
          console.log(selectedType);

          if (selectedType) {
            document.querySelector("#apply-btn").disabled = false;
            document.querySelector("#apply-btn").style.backgroundColor =
              "black";
          }
        });
      });
    }
    selectedShipType();
    console.log(shipType);

    document.querySelector("#apply-btn").addEventListener("click", () => {
      const type = JSON.stringify(selectedType);
      localStorage.setItem("selectedType", type);
      router.navigate(routes.checkout);
    });

    document.querySelector("#prev-icon").addEventListener("click", () => {
      router.navigate(routes.checkout);
    });
  };

  const html = `
<div class="flex flex-col gap-y-4 bg-lightGray font-Roboto min-h-screen">
  <div class="grow p-6">
    <div class="flex justify-between items-center ml-0">
    <div class="flex items-center">
      <img
        src="./imges/prev icon.png"
        alt="prev-icon"
        id="prev-icon"
        class="cursor-pointer -ml-7"
      />
      <p class="font-bold text-2xl">Choose Shipping</p>
    </div>
  </div>
  <div id="address-container" class="flex flex-col gap-y-6 mt-6">


    ${shipment
      .map((item) => {
        return `
    <div class="card flex justify-between items-center bg-white p-4 rounded-3xl">
      <div class="flex gap-x-4 items-center">
        <img src="${item.icon}" class="size-14" />
        <div class="flex flex-col gap-y-3">
          <div class="flex gap-x-4 items-center">
          <p class="font-semibold text-lg">${item.name}</p>
          
          </div>
          <p class="text-textGray text-sm">${item.description}</p>
        </div>
      </div>
      <span class="font-semibold text-lg">$${item.price}</span>
      <div data-name="${item.name}" class="select-btn border-3 border-black rounded-full size-5 flex items-center justify-center cursor-pointer">
         <div class="bg-black rounded-full"></div>
      </div>
    </div>
        `;
      })
      .join("")}


    
  </div>
  </div>
  
  <div class="sticky bottom-0 z-40 bg-white rounded-t-3xl shadow-inner text-center p-7">
    <button type="button" id="apply-btn" class="bg-grayBtn text-white p-4 rounded-full w-[364px]">Apply</button>
  </div>
</div>
  `;

  return { html, createEventListeners };
}

const getShipType = async () => {
  try {
    const response = await axios.get("/shipment");
    if (response.status === 200) {
      const shipment = response.data;
      return shipment;
    }
  } catch (error) {
    console.log(error);
  }
};
