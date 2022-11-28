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

/*
function formValidation() {

  let booksRead = document.forms["movieForm"]["birthday"].value;
  let faveGenre = document.forms["movieForm"]["genre"].value;

  let temp = document.getElementById("formResults");
  temp.innerHTML = "Your Astrology Sign Is: " + birthday + "<br /> The Genre You Chose Is: " + faveGenre + "<br /> So You Should Watch: " + ;

  return false;
}
*/


/* changing the color of modalities and elements with buttons */
function changeColor(color, type){
  
  let test = document.getElementsByClassName(type);  

  for (let i = 0; i < test.length; i++) {
   test[i].style.backgroundColor = color;
 }
}


/* movie catalog code for slideshow */
let slideIndex = 1;
showSlides(slideIndex);

/* previous and next button controls */
function plusSlides(n) {
  showSlides(slideIndex += n);
}

/* image controls */
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

/* random movie picker */
window.onload = chooseMovie;

var myMovie = new Array("images/aquarius/comedy-thelobster.jpg","images/aries/drama-eternalsunshine.jpeg","images/cancer/horror-midsommar.jpg","images/capricorn/family-kikisdelivery.jpg","images/gemini/fantasy-theprestige.jpg");

function chooseMovie() {
     var randomNum = Math.floor(Math.random() * myMovie.length);
     document.getElementById("randomMovie").src = myMovie[randomNum];

}

/* credit for api and jquery for horoscopes: https://github.com/sameerkumar18/aztro */
function test(sign){

   $.ajax({
      type:'POST',
      url:`https://aztro.sameerkumar.website?sign=${sign}&day=today`,
      success:function(data){
      console.log(data);
      
document.getElementById("horoscope").innerHTML ="Your horoscope for today is:";
  document.getElementById("scopes").innerHTML = data.description;
        
      }
  });

  
}