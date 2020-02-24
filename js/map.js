var linkmap = document.querySelector(".map-link");
var popupmap =document.querySelector(".map-extended");
var close = popupmap.querySelector(".close");



linkmap.addEventListener("click", function (evt) {
  evt.preventDefault();
  popupmap.classList.add("reply-show");
});

close.addEventListener("click", function (evt) {
  evt.preventDefault();
  popupmap.classList.remove("reply-show");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (popupmap.classList.contains("reply-show")) {
      popupmap.classList.remove("reply-show");
    }
  }
});
