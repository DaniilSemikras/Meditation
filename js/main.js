const audio = new Audio();
let isPlaying = false;
let currentButton = null;
let currentTime = 0;

const buttons = document.querySelectorAll('.play');
buttons.forEach(button => {
  button.addEventListener('click', function(e) {
    if (isPlaying && e.target === currentButton) {
      if (audio.paused) {
        audio.currentTime = currentTime;
        audio.play();
      } else {
        audio.pause();
        currentTime = audio.currentTime;
      }
    } else {
      audio.src = e.target.getAttribute('data-url');
      audio.play();
      currentTime = 0;
      if (currentButton !== null) {
        currentButton.classList.remove('playing');
      }
    }
    isPlaying = true;
    currentButton = e.target;
    e.target.classList.add('playing');
    audio.addEventListener('ended', function() {
      e.target.classList.remove('playing');
    });
    audio.addEventListener('pause', function() {
      e.target.classList.remove('playing');
    });
  });
});



const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector(".header__navigation-list");
const contentHeader = document.querySelector(".header__content");
const burger = document.querySelectorAll(".burger");
const body = document.querySelector('body');

hamburger.addEventListener("click", function() {
    this.classList.toggle("active");
    nav.classList.toggle("active");
    body.classList.toggle("overflow");
    contentHeader.classList.toggle("visible");
})


burger.forEach(item => item.addEventListener("click", () => {
  if(hamburger.classList.contains('active')) {
    hamburger.classList.remove("active");
    nav.classList.remove("active");
    body.classList.remove("overflow");
    contentHeader.classList.remove("visible");
    console.log('dsdsd');
  }
}))