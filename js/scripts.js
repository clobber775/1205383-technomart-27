var linkbuys = document.querySelectorAll(".buy-catalog");
var popupbuy = document.querySelector(".success");
var close = popupbuy.querySelector(".close");
var linkmap = document.querySelector(".map-link");
var popupmap = document.querySelector(".map-extended");
if (popupmap!=null){
  var closemap = popupmap.querySelector(".close");
}
var link = document.querySelector(".contacts-lost");
var popup = document.querySelector(".reply-form");
if (popup!=null){
  var closepopup = popup.querySelector(".close");
  var user = popup.querySelector("[name=name-input]");
  var email = popup.querySelector("[name=email]");
  var form = popup.querySelector("form");
}
var rightlink = document.querySelector(".right-button");
var leftlink = document.querySelector(".left-button");
var slide1 = document.querySelector(".drill");
var slide2 = document.querySelector(".hammer-drill");
var delivery = document.querySelector(".delivery");
var credit = document.querySelector(".credit");
var warranty = document.querySelector(".warranty");
var deliverylink = document.querySelector(".delivery-link");
var creditlink = document.querySelector(".credit-link");
var warrantylink = document.querySelector(".warranty-link");
var isStorageSupport = true;
var storage = "";


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

linkmap.addEventListener("click", function (evt) {
  evt.preventDefault();
  popupmap.classList.add("reply-show");
});

closemap.addEventListener("click", function (evt) {
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

try {
  storage = localStorage.getItem("user");
} catch (err) {
  isStorageSupport = false;
}

link.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.add("reply-show");
  if (storage) {
    user.value = storage;
    email.focus();
  } else {
    user.focus();
  }
});

closepopup.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.remove("reply-show");
  popup.classList.remove("reply-error");
});

form.addEventListener("submit", function (evt) {
  if (!user.value || !email.value) {
    evt.preventDefault();
    popup.classList.remove("reply-error");
    popup.offsetWidth = popup.offsetWidth;
    popup.classList.add("reply-error");
  }
  else {
    if (isStorageSupport) {
      localStorage.setItem("user", user.value);
    }
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (popup.classList.contains("reply-show")) {
      popup.classList.remove("reply-show");
      popup.classList.remove("reply-error");
    }
  }
});

rightlink.addEventListener("click",function (evt){
  evt.preventDefault();
  if (slide1.classList.contains('slide-active')){slide1.classList.remove('slide-active'); slide2.classList.add('slide-active')}
  else {slide2.classList.remove('slide-active'); slide1.classList.add('slide-active')}
});

leftlink.addEventListener("click",function (evt){
  evt.preventDefault();
  if (slide1.classList.contains('slide-active')){slide1.classList.remove('slide-active'); slide2.classList.add('slide-active')}
  else {slide2.classList.remove('slide-active'); slide1.classList.add('slide-active')}
});

deliverylink.addEventListener("click",function (evt) {
  evt.preventDefault();
  delivery.classList.add("tab-active");
  warranty.classList.remove("tab-active");
  credit.classList.remove("tab-active")
});

creditlink.addEventListener("click",function (evt) {
  evt.preventDefault();
  credit.classList.add("tab-active");
  warranty.classList.remove("tab-active");
  delivery.classList.remove("tab-active");
  deliverylink.classList.remove("white")
});

warrantylink.addEventListener("click",function (evt) {
  evt.preventDefault();
  warranty.classList.add("tab-active");
  delivery.classList.remove("tab-active");
  credit.classList.remove("tab-active");
  deliverylink.classList.remove("white")
});

