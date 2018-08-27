import Slider from './slider';
import elements from './elements';

let sliderText = document.querySelector("#slider-text")
let sliderTitle = document.querySelector("#slider-title")
let sliderSubtitle = document.querySelector("#slider-subtitle")
let sliderImg = document.querySelector("#slider-img")
let textContent = document.querySelector("#slider-text-content")

let leftArrow = document.querySelector(".left-arrow");
let rightArrow = document.querySelector(".right-arrow");

let slider = new Slider({
  elements,
  animationFunc: function (element) {
    
    textContent.classList.add("hide");
    sliderImg.classList.add("hide");
    
    setTimeout(() => {
      sliderTitle.innerHTML = element.title;
      sliderText.innerHTML = element.text;
      sliderSubtitle.innerHTML = element.subtitle;
      sliderImg.src = element.img;

      textContent.classList.remove("hide");
      sliderImg.classList.remove("hide");
    }, 600);
  },

  speed: 4000
});

slider.play();

leftArrow.addEventListener('click', slider.prev);
rightArrow.addEventListener('click', slider.next);
