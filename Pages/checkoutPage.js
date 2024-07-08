export function checkoutPage() {
  const createEventListeners = () => {
    const p = document.querySelector("p");
    p.addEventListener("click", () => {
      alert("hiii");
    });
  };

  const html = `<p class="cursor-pointer">hello</p>`;

  return { html, createEventListeners };
}
