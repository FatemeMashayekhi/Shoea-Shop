import axios from "../api";

export async function productDetailsPage(match) {
  try {
    const response = await axios.get(`/products/${match.data.id}`);
    if (response.status === 200) {
      console.log(response);
      const product = response.data;
      console.log(product);

      return `${match.data.id}`;
    }
  } catch (error) {
    console.log(error);
  }
}
