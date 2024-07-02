import axios from "../api";

export async function productDetailsPage(match) {
  const product = await getProduct(match.data.id);
  console.log(product);
  return `<p>${product.name}</p>`;
}

const getProduct = async (productId) => {
  try {
    const response = await axios.get(`/products/${productId}`);
    if (response.status === 200) {
      const product = response.data;
      return product;
    }
  } catch (error) {
    console.log(error);
  }
};
