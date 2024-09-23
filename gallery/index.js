let slideIndex = 1;
let scrollInterval;
let isAutoScrollPaused = false
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function autoScroll(slideIndex) {
if(!isAutoScrollPaused) { 
    plusSlides(1)
}
}

function startAutoScroll() {
 setInterval(autoScroll, 4000)
}

function stopAutoScroll() {
    setInterval()
}

function pauseAutoScroll() {
    isAutoScrollPaused = true
}

function resumeAutoScroll() {
    isAutoScrollPaused = false;
}



function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("slide");
  let dots = document.getElementsByClassName("demo");
  let captionText = document.getElementById("caption");
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
  captionText.innerHTML = dots[slideIndex-1].alt;

  
}


document.addEventListener('DOMContentLoaded', () => {
    showSlides(slideIndex)
    startAutoScroll();

    let gallery = document.querySelector('.container'); // Adjust this selector to match your gallery's container
    gallery.addEventListener('mouseenter', pauseAutoScroll);
    gallery.addEventListener('mouseleave', resumeAutoScroll);
})