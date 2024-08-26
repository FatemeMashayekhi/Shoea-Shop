import axios from "../api";
import { router, routes } from "../main";

export async function checkoutPage() {
  const orders = await getOrderList();
  console.log(orders);
  const createEventListeners = () => {
    ////////////prev icon handler////////////
    document.querySelector("#prev").addEventListener("click", () => {
      router.navigate(routes.cart);
    });

    ///////////////choose address handler///////
    document.querySelector("#edit-address").addEventListener("click", () => {
      router.navigate(routes.address);
    });

    ///////////////choose shiptype handler///////
    document.querySelector("#ship-type").addEventListener("click", () => {
      router.navigate(routes.ship);
    });

    ///////////////handle address choosing///////
    const addressToken = localStorage.getItem("selectedAddress");
    if (addressToken) {
      const parsedAddressToken = JSON.parse(addressToken);
      const addressCard = document.querySelector("#token");
      if (addressCard) {
        addressCard.innerHTML = `
                         <p id="address-name" class="font-semibold">${parsedAddressToken.name}</p>
               <p id="address-location" class="text-sm text-textGray">${parsedAddressToken.address}</p>
              `;
      }
    } else {
      const addressCard = document.querySelector("#token");
      if (addressCard) {
        addressCard.innerHTML = `
               <p id="address-name" class="font-semibold">Home</p>
               <p id="address-location" class="text-sm text-textGray">Tehran</p>
    
              `;
      }
    }

    ///////////////handle ship choosing///////
    const storedObject = localStorage.getItem("selectedType");

    if (storedObject) {
      const parsedObject = JSON.parse(storedObject);
      const shipCard = document.querySelector("#ship-card");
      shipCard.innerHTML = `
        <div class="flex gap-x-4 items-center">
          <img src="${parsedObject.icon}" class="size-14" />
          <div class="flex flex-col gap-y-2">
            <div class="flex gap-x-4 items-center">
              <p class="font-semibold text-lg">${parsedObject.name}</p>
            </div>
            <p class="text-textGray text-sm">${parsedObject.description}</p>
          </div>
        </div>
        <div class="flex items-center gap-x-3">
          <span class="font-semibold text-lg">$${parsedObject.price}</span>
          <img src="./public/imges/edit.png" alt="edit-icon" id="edit-shipType" class="w-5 cursor-pointer" />
        </div>
      `;

      document.querySelector("#edit-shipType").addEventListener("click", () => {
        router.navigate(routes.ship);
      });
    } else {
      const shipCard = document.querySelector("#ship-card");
      shipCard.innerHTML = `
    <div class="flex items-center gap-x-4">
      <img src="./public/imges/truck.png" alt="truck-icon" class="w-7 h-5" />
      <p class="text-xl font-semibold tracking-tight">Choose Shipping Type</p>
    </div>
    
          <button onclick="window.location.replace('${routes.ship}')" class="cursor-pointer">
        <i id="ship-type" class="fa-solid fa-chevron-right text-lg cursor-pointer"></i>
      </button>
      `;
    }

    ///////////////calc amount///////
    let amount;
    function updateAmount() {
      const amountSpan = document.querySelector("#amount");
      if (orders && orders.length > 0) {
        amount = orders
          .map((item) => item.price)
          .reduce((acc, item) => {
            return acc + item;
          });
        amountSpan.textContent = `$${amount}`;
      } else {
        amountSpan.textContent = "$0";
      }
    }
    updateAmount();

    ///////////////calc ship price///////
    let shipPrice;
    function updateShipping() {
      if (storedObject) {
        const shippingSpan = document.querySelector("#ship");
        shipPrice = JSON.parse(localStorage.getItem("selectedType")).price;
        shippingSpan.textContent = `$${shipPrice}`;
      }
    }
    updateShipping();

    let reducedAmount;
    const promoInput = document.querySelector("#promo-input");
    const promoSpan = document.querySelector("#promo");

    ////initialize a flag to track whether the promo code has been used////////
    let promoCodeUsed = false;

    document.querySelector("#check-promo").addEventListener("click", () => {
      if (!promoCodeUsed) {
        if (promoInput.value === "maral") {
          promoInput.value = "";
          reducedAmount = Math.round((amount * 30) / 100);
          console.log(reducedAmount);
          promoSpan.textContent = `-$${reducedAmount}`;
          promoCodeUsed = true; ///////mark the promo code as used///////
        } else {
          promoSpan.textContent = "-$0";
          promoInput.value = "Wrong Code";
          promoInput.style.color = "red";
          promoInput.addEventListener("input", () => {
            promoInput.style.color = "black";
          });
        }
      } else {
        ////////promo code already used/////////
        promoSpan.textContent = "-$0";
        promoInput.value = "Code Already Used";
        promoInput.style.color = "red";
        promoInput.addEventListener("input", () => {
          promoInput.style.color = "black";
        });
      }
      updateTotal();
    });

    function updateTotal() {
      if (reducedAmount !== undefined) {
        const total = document.querySelector("#total-price");
        const calculateTotal = amount + shipPrice - reducedAmount;
        total.textContent = `$${calculateTotal}`;
      } else {
        const total = document.querySelector("#total-price");
        const calculateTotal = amount + shipPrice;
        total.textContent = `$${calculateTotal}`;
      }
    }
    updateTotal();

    const continueBtn = document.querySelector("#continue-btn");
    continueBtn.disabled = true;
    if (
      localStorage.getItem("selectedType") &&
      localStorage.getItem("selectedAddress")
    ) {
      continueBtn.disabled = false;

      if (continueBtn) {
        continueBtn.addEventListener("click", async () => {
          await handleOrderForItem(); //////assuming handleOrderForItem is asynchronous///////
          orders.splice(0, orders.length);
          router.navigate(routes.payment);
        });
      }
    }

    async function handleOrderForItem() {
      orders.forEach(async (item, index) => {
        const specifications = {
          name: item.name,
          brand: item.brand,
          price: item.price,
          color: item.color,
          colorCode: item.colorCode,
          sizes: item.sizes,
          quantity: item.quantity,
          imgUrl: item.imgUrl,
          is_active: index % 2 === 1,
        };

        try {
          const response = await axios.post("/orders", specifications);
          console.log(
            `Checkout successful for item ${item.id}:`,
            response.data
          );
        } catch (error) {
          console.error(`Error during checkout for item ${item.id}:`, error);
          /////////handle errors////////
        }
      });
    }
  };

  const html = `
<div class="font-Roboto bg-lightGray">
  <div class="p-5 flex flex-col gap-y-5">
    <div class="flex justify-between items-center ml-0">
      <div class="flex items-center">
        <img
          src="./imges/prev icon.png"
          alt="prev-icon"
          id="prev"
          class="cursor-pointer -ml-7"
        />
        <p class="font-bold text-2xl">Checkout</p>
      </div>
      <img src="./public/imges/top-more.png" alt="more-icon" class="size-6" />
    </div>


    <div class="flex flex-col gap-y-5">
      <p class="text-xl font-semibold">Shipping Address</p>
      <div class="bg-white flex p-5 rounded-3xl items-center justify-between">
        <div class="flex gap-x-4 items-center">
           <img src="./public/imges/location.png" alt="location-icon" class="size-14" />
         <div id="token" class="flex flex-col gap-y-1">
           <p id="address-name" class="font-semibold">Home</p>
           <p id="address-location" class="text-sm text-textGray">Tehran</p>
         </div>
        </div>
        <img src="./public/imges/edit.png" alt="edit-icon" id="edit-address" class="w-5 cursor-pointer" />
      </div>
    </div>
    <div class="border-1"></div>


    <div class="flex flex-col gap-y-5">
      <p class="text-xl font-semibold">Order List</p>
      <div id="order-container" class="flex flex-col gap-y-6">


      ${orders
        .map((item) => {
          return `
              <div id="card" class="flex bg-white rounded-3xl p-5 gap-x-6">
                <div
                  class="bg-navBg rounded-2xl w-48 h-28 flex justify-center items-center"
                >
                  <img
                    src="${item.imgUrl}"
                    alt="shoe1"
                    class="top-10 mix-blend-darken"
                  />
                </div>
                <div class="flex flex-col gap-y-3 w-full">
                  <p class="font-semibold">${item.name}</p>
                  <div class="flex gap-x-3 items-center text-xs text-textGray">
                    <span
                      style="background-color: ${item.colorCode}"
                      class="rounded-full size-4"
                    ></span>
                    <span>${item.color}</span>
                    <span>|</span>
                    <span>Size = ${item.sizes}</span>
                  </div>
                  <div class="flex items-center justify-between">
                    <p id="single-price" class="font-semibold text-lg">$${item.price}</p>
                    <p class="rounded-full bg-productsBg size-8 flex items-center justify-center">${item.quantity}</p>
                  </div>
                </div>
              </div>
        `;
        })
        .join("")}


      </div>
    </div>


    <div class="border-1"></div>


    <div class="flex flex-col gap-y-5">
      <p class="text-xl font-semibold">Choose Shipping</p>

      <div id="ship-card" class="bg-white flex justify-between p-5 rounded-3xl">
        <div class="flex items-center gap-x-4">
          <img src="./public/imges/truck.png" alt="truck-icon" class="w-7 h-5" />
          <p class="text-xl font-semibold tracking-tight">Choose Shipping Type</p>
        </div>
        <i id="ship-type" class="fa-solid fa-chevron-right text-lg cursor-pointer"></i>
      </div>

    </div>


    <div class="border-1"></div>


    <div class="flex flex-col gap-y-5">
      <p class="text-xl font-semibold">Promo Code</p>
      <div class="flex items-center justify-between">
        <label for="promo-input">
          <input id="promo-input" type="text" placeholder="Enter Promo Code" class="p-4 rounded-2xl bg-productsBg placeholder-placeholderText w-[310px] text-sm" />
        </label>
        <i id="check-promo" class="fa-solid fa-circle-plus text-5xl cursor-pointer"></i>
      </div>
    </div>


    <div class="bg-white p-5 rounded-3xl flex flex-col gap-y-5">
      <div class="flex flex-col gap-y-4">
        <div class="flex justify-between items-center">
          <p class="text-sm text-textGray">Amount</p>
          <p id="amount" class="font-semibold">$585.00</p>
        </div>
        <div class="flex justify-between items-center">
          <p class="text-sm text-textGray">Shipping</p>
          <p id="ship" class="font-semibold">-</p>
        </div>
        <div class="flex justify-between items-center">
          <p class="text-sm text-textGray">Promo</p>
          <p id="promo" class="font-semibold">-</p>
        </div>
      </div>
      <div class="border-1"></div>
      <div class="flex justify-between items-center">
        <p class="text-sm text-textGray">Total</p>
        <p id="total-price" class="font-semibold">-</p>
      </div>
    </div>


  </div>

  
<div class="sticky bottom-0 bg-white">
  <div class="flex justify-center p-6 rounded-t-45 shadow-inner">
    <div class="relative">
      <button
        type="button" id="continue-btn"
        class="bg-black text-white p-4 rounded-full w-96 text-center"
      >
        Continue to Payment
      </button>
      <img
        src="./public/imges/gocheckout.png"
        alt="checkout-icon"
        class="right-14 top-5 absolute"
      />
    </div>
  </div></div>
</div>
  `;

  return { html, createEventListeners };
}

const getOrderList = async () => {
  try {
    const response = await axios.get("/checkout");
    if (response.status === 200) {
      const orders = response.data;
      return orders;
    }
  } catch (error) {
    console.log(error);
  }
};
