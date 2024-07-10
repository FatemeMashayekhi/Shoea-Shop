import axios from "../api";

export async function shipPage() {
  const shipment = await getShipType();
  console.log(shipment);

  const createEventListeners = () => {};

  const html = ``;

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
