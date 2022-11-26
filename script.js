window.onload = init;
function init() {
  lastUpdated();
  }

function lastUpdated(){
 /* Using the new Date object and lastModified property to display the date https://www.w3schools.com/jsref/prop_doc_lastmodified.asp */
  const d = new Date(document.lastModified);
/* finding the element labeled lm and using toDateString to display a more visually appealing format*/
  document.getElementById("lm").innerHTML = "Last Modified: " + d.toDateString();
}

let slideIndex = 1;
showSlides(slideIndex);

// previous and next button controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("movieSlides");
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