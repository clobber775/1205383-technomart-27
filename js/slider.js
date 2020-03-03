var rightlink = document.querySelector(".right-button");
var leftlink = document.querySelector(".left-button");
var slide1 = document.querySelector(".drill");
var slide2 = document.querySelector(".hammer-drill");

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


