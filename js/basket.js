var linkbuys = document.querySelectorAll(".buy-catalog");
var popupbuy = document.querySelector(".success");
var close = popupbuy.querySelector(".close");



for (var i = 0; i < linkbuys.length; i++) {
  linkbuys[i].addEventListener("click", function (evt) {
    evt.preventDefault();
    popupbuy.classList.add("reply-show");
  });
}

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (popupbuy.classList.contains("reply-show")) {
      popupbuy.classList.remove("reply-show");
    }
  }
});

close.addEventListener("click", function (evt) {
  evt.preventDefault();
  popupbuy.classList.remove("reply-show");
});
