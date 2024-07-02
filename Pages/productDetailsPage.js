import axios from "../api";

export async function productDetailsPage(match) {
  const product = await getProduct(match.data.id);
  console.log(product);
  return `
  <div>
  <div>
    <img src="./imges/prev icon.png" alt="prev-icon" class="cursor-pointer" />
    <div class="swiper mySwiper">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <img src="./public/imges/adidas/1.png" alt="adidas1" />
        </div>
        <div class="swiper-slide">
          <img src="./public/imges/adidas/1_2.png" alt="adidas1-2" />
        </div>
        <div class="swiper-slide">
          <img src="./public/imges/adidas/1_3.png" alt="adidas1-3" />
        </div>
      </div>
      <div class="swiper-pagination"></div>
    </div>
  </div>
  <div>
    <div>
      <p>Runing Sportwear</p>
      <img src="./public/imges/like.png" alt="like-icon" />
    </div>
    <div>
      <p>5.371 sold</p>
      <img src="./public/imges/star.png" alt="star-logo" />
      <p>4.3 (5.389 reviews)</p>
    </div>
    <div></div>
    <div>
      <p>Description</p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
        doloribus consequatur autem nihil!
      </p>
    </div>
    <div>
      <div>
        <p>Size</p>
        <div>
          <button type="button">40</button>
          <button type="button">41</button>
          <button type="button">42</button>
        </div>
      </div>
      <div>
        <p>Color</p>
        <div>
          <button type="button">1</button>
          <button type="button">2</button>
          <button type="button">3</button>
          <button type="button">4</button>
          <button type="button">5</button>
        </div>
      </div>
    </div>
    <div>
      <p>Quantity</p>
      <div>
        <span>-</span>
        <span>2</span>
        <span>+</span>
      </div>
    </div>
    <div></div>
    <div>
      <div>
        <p>Total price</p>
        <p>$240.00</p>
      </div>
      <button type="button">
        <i class="fas fa-shopping-bag"></i>
        Add to Cart
      </button>
    </div>
  </div>
</div>
  `;
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
