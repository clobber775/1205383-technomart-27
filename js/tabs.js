var delivery = document.querySelector(".delivery");
var credit = document.querySelector(".credit");
var warranty = document.querySelector(".warranty");

var deliverylink = document.querySelector(".delivery-link");
var creditlink = document.querySelector(".credit-link");
var warrantylink = document.querySelector(".warranty-link");

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
  delivery.classList.remove("tab-active")
});

warrantylink.addEventListener("click",function (evt) {
  evt.preventDefault();
  warranty.classList.add("tab-active");
  delivery.classList.remove("tab-active");
  credit.classList.remove("tab-active")
});
