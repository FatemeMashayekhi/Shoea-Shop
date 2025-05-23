import axios from "../api";
import { router, routes } from "../main";

export async function addressPage() {
  const addresses = await getAddresses();
  console.log(addresses);

  const createEventListeners = () => {
    let addressName = "Home";
    let selectedAddress;
    document.querySelector("#apply-btn").disabled = true;

    function selectAddress() {
      const buttons = document.querySelectorAll(".radio-btn");
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

          ///////////////find selected address//////////
          addressName = btn.getAttribute("data-name");
          selectedAddress = addresses.find((item) => item.name === addressName);

          if (selectedAddress) {
            console.log(selectedAddress);
            document.querySelector("#apply-btn").disabled = false;
            document.querySelector("#apply-btn").style.backgroundColor =
              "black";

            // const storedObject = localStorage.getItem("selectedAddress");
            // const parsedObject = JSON.parse(storedObject);
            // console.log(parsedObject);
          }

          console.log(addressName);
        });
      });
    }
    selectAddress();
    document.querySelector("#apply-btn").addEventListener("click", () => {
      const address = JSON.stringify(selectedAddress);
      localStorage.setItem("selectedAddress", address);
      router.navigate(routes.checkout);
    });
    console.log(addressName);

    /////////////prev icon handler/////////////
    document.querySelector("#back-icon").addEventListener("click", () => {
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
        id="back-icon"
        class="cursor-pointer -ml-7"
      />
      <p class="font-bold text-2xl">Shipping Address</p>
    </div>
  </div>
  <div id="address-container" class="flex flex-col gap-y-6 mt-6">


    ${addresses
      .map((item) => {
        return `
    <div class="card flex justify-between items-center bg-white p-4 rounded-3xl">
      <div class="flex gap-x-4 items-center">
        <img src="./public/imges/location.png" alt="location-icon" class="size-14" />
        <div class="flex flex-col gap-y-3">
          <div class="flex gap-x-4 items-center">
          <p class="font-bold">${item.name}</p>
          
          </div>
          <p class="text-textGray text-sm">${item.address}</p>
        </div>
      </div>
      <div data-name="${item.name}" class="radio-btn border-3 border-black rounded-full size-5 flex items-center justify-center cursor-pointer">
         <div class="radio bg-black rounded-full"></div>
      </div>
    </div>
        `;
      })
      .join("")}


    <button type="button" class="bg-navBg font-semibold text-btnListBg p-4 rounded-full">Add New Address</button>
  </div>
  </div>
  
  <div class="sticky bottom-0 z-40 bg-white rounded-t-3xl shadow-inner text-center p-7">
    <button type="button" id="apply-btn" class="bg-grayBtn text-white p-4 rounded-full w-[364px]">Apply</button>
  </div>
</div>
  `;

  return { html, createEventListeners };
}

const getAddresses = async () => {
  try {
    const response = await axios.get("/addresses");
    if (response.status === 200) {
      const addresses = response.data;
      return addresses;
    }
  } catch (error) {
    console.log(error);
  }
};

// <span class="bg-navBg text-xs p-2 rounded-xl">Default</span>
