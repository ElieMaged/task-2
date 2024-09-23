let slideIndex = 1;
let scrollInterval;
let isAutoScrollPaused = false
showSlides(slideIndex);

// next/controls thing
function plusSlides(n) {
  showSlides(slideIndex += n);
}


function currentSlide(n) {
  showSlides(slideIndex = n);
}
//the main way to start gallery auto scroll
function autoScroll(slideIndex) {
if(!isAutoScrollPaused) { 
    plusSlides(1)
}
}
//adds 4 seconds interval between auto scrolls
function startAutoScroll() {
 setInterval(autoScroll, 4000)
}

//stops auto scroll 
function pauseAutoScroll() {
    isAutoScrollPaused = true
}
//resumes auto scroll
function resumeAutoScroll() {
    isAutoScrollPaused = false;
}


//n < && n > so gallery doesen't break when going over or under image limit
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

//DOMloaded to make sure the full container is getting the functions set to it
document.addEventListener('DOMContentLoaded', () => {
    showSlides(slideIndex)
    startAutoScroll();

    let gallery = document.querySelector('.container'); 
    gallery.addEventListener('mouseenter', pauseAutoScroll);
    gallery.addEventListener('mouseleave', resumeAutoScroll);
})