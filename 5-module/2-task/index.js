function toggleText() {
  document
    .querySelector(".toggle-text-button")
    .addEventListener("click", (event) => {
      let divText = document.querySelector("#text");
      divText.hidden = !divText.hidden;
    });
}
