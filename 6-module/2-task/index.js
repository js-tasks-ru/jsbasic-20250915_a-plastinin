import createElement from "../../assets/lib/create-element.js";

export default class ProductCard {
  #container;
  #product;

  get elem() {
    return this.#container;
  }

  get product() {
    return this.#product;
  }

  constructor(product) {
    const htmlText = `
      <div class="card">
        <div class="card__top">
          <img src="/assets/images/products/${
            product.image
          }" class="card__image" alt="product">
          <span class="card__price">€${product.price.toFixed(2)}</span>
        </div>
        <div class="card__body">
          <div class="card__title">${product.name}</div>
          <button type="button" class="card__button">
            <img src="/assets/images/icons/plus-icon.svg" alt="icon">
          </button>
        </div>
      </div>`;

    this.#container = createElement(htmlText);
    this.#product = product;
    this.#container.onclick = (event) => {
      if (!event.target.closest(".card__button")) return;
      let newEvent = new CustomEvent("product-add", {
        detail: this.product.id,
        bubbles: true,
      });
      this.#container.dispatchEvent(newEvent);
    };
  }
}
