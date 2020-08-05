//navbar transparency
let myNav = document.querySelector('nav');
window.onscroll = function () { 
    if (document.body.scrollTop >= 50 || document.documentElement.scrollTop >= 50) {
        myNav.classList.add("nav-colored");
        myNav.classList.remove("nav-transparent");
    } 
    else {
        myNav.classList.add("nav-transparent");
        myNav.classList.remove("nav-colored");
    }
};


const menu = document.querySelector("#menu")

function toggleMenu() {
  menu.classList.toggle("active");
}


document.querySelectorAll(".menu_links").forEach(e => e.addEventListener("click", () => toggleMenu()))

//menu control with touch
const body = document.querySelector("body");

let initialX = 0;
let moveX = 0;
const MOVE_THRESHOLD = 250;

body.addEventListener("touchstart", (e) => {
  initialX = e.touches[0].pageX;
})

body.addEventListener("touchmove", (e) => {
  moveX = e.touches[0].pageX - initialX;
})

body.addEventListener("touchend", (e) => {
  if(moveX < MOVE_THRESHOLD * Math.sign(moveX)){
    menu.classList.remove("active")
  }
  else if(moveX > MOVE_THRESHOLD * Math.sign(moveX)){
    menu.classList.add("active")
  }
  moveX = 0;
  initialX = 0;
})


//slider
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("testemone_card");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}




//popup related
const popup = document.querySelector("#popup_holder");

function closePopup(){
    popup.classList.add("deactive");
}

function openPopup() {
    popup.classList.remove("deactive");
}

setTimeout(() => {openPopup()}, 3000);