import createElement from "../../assets/lib/create-element.js";

export default class Carousel {
  #container;
  #currentSlideIndex = 0;
  #arrowButtons = { left: undefined, right: undefined };
  #inner;

  get elem() {
    return this.#container;
  }

  constructor(slides) {
    this.slides = slides;
    this.render();
    this.updateVisible();

    this.#container.onclick = (event) => {
      if (event.target.closest(".carousel__button")) {
        let newEvent = new CustomEvent("product-add", {
          detail: event.target.closest(".carousel__slide").dataset.id,
          bubbles: true,
        });
        this.#container.dispatchEvent(newEvent);
      }
      if (event.target.closest(".carousel__arrow")) {
        this.move(event.target.closest(".carousel__arrow_left") ? -1 : 1);
        this.updateVisible();
      }
    };
  }

  render() {
    let htmlText = `
      <!--Корневой элемент карусели-->
      <div class="carousel">
        <!--Кнопки переключения-->
        <div class="carousel__arrow carousel__arrow_right">
          <img src="/assets/images/icons/angle-icon.svg" alt="icon">
        </div>
        <div class="carousel__arrow carousel__arrow_left">
          <img src="/assets/images/icons/angle-left-icon.svg" alt="icon">
        </div>
        <div class="carousel__inner">
          ${this.slides.reduce(
            (acc, value) => `${acc} ${this.#getCarouselSlideHTML(value)}`,
            ""
          )}
        </div>
      </div>`;

    this.#container = createElement(htmlText);
    this.#arrowButtons.left = this.#container.querySelector(
      ".carousel__arrow_left"
    );
    this.#arrowButtons.right = this.#container.querySelector(
      ".carousel__arrow_right"
    );
    this.#inner = this.#container.querySelector(".carousel__inner");
  }

  updateVisible() {
    this.#arrowButtons.right.style.display =
      this.#currentSlideIndex === this.slides.length - 1 ? "none" : "";
    this.#arrowButtons.left.style.display =
      this.#currentSlideIndex === 0 ? "none" : "";
  }

  move(index) {
    this.#currentSlideIndex += index;
    this.#inner.style.transform = `translateX(-${
      this.#currentSlideIndex * this.#inner.offsetWidth
    }px)`;
  }

  #getCarouselSlideHTML(slide) {
    return `
      <div class="carousel__slide" data-id="${slide.id}">
        <img src="/assets/images/carousel/${
          slide.image
        }" class="carousel__img" alt="slide">
        <div class="carousel__caption">
          <span class="carousel__price">€${slide.price.toFixed(2)}</span>
          <div class="carousel__title">${slide.name}</div>
          <button type="button" class="carousel__button">
            <img src="/assets/images/icons/plus-icon.svg" alt="icon">
          </button>
        </div>
      </div>`;
  }
}
