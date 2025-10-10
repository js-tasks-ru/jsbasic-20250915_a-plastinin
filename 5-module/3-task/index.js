function initCarousel() {
  new Carousel(document.querySelector(".carousel"));
}
class Carousel {
  _currentSlideIndex = 0;
  _slideCount = 0;
  _arrowButtons = { left: undefined, right: undefined };
  _elem = {};
  _inner = {};

  constructor(elem) {
    elem.onclick = this.onClick.bind(this);
    this._elem = elem;
    this._inner = elem.querySelector(".carousel__inner");
    this._slideCount = elem.querySelectorAll(".carousel__slide").length;
    this._arrowButtons.left = elem.querySelector(".carousel__arrow_left");
    this._arrowButtons.right = elem.querySelector(".carousel__arrow_right");
    this.updateVisible();
  }

  updateVisible() {
    this._arrowButtons.right.style.display =
      this._currentSlideIndex === this._slideCount - 1 ? "none" : "";
    this._arrowButtons.left.style.display =
      this._currentSlideIndex === 0 ? "none" : "";
  }

  move(index) {
    this._currentSlideIndex += index;
    this._inner.style.transform = `translateX(-${
      this._currentSlideIndex * this._inner.offsetWidth
    }px)`;
  }

  onClick(event) {
    if (event.target.closest(".carousel__arrow")) {
      this.move(event.target.closest(".carousel__arrow_left") ? -1 : 1);
      this.updateVisible();
    }
  }
}
