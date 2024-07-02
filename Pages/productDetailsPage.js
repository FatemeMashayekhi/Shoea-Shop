import axios from "../api";

export async function productDetailsPage(match) {
  try {
    const response = await axios.get(`/products/${match.data.id}`);
    if (response.status === 200) {
      console.log(response);
      const product = response.data;
      console.log(product);
      console.log(match.data.id);

      return `<p>${match.data.id}</p>`;
    }
  } catch (error) {
    console.log(error);
  }
}
