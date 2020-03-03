var link = document.querySelector(".contacts-lost");
var popup = document.querySelector(".reply-form");
var close = popup.querySelector(".close");
var user = popup.querySelector("[name=name-input]");
var email = popup.querySelector("[name=email]");
var form = popup.querySelector("form");
var isStorageSupport = true;
var storage = "";

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

close.addEventListener("click", function (evt) {
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
