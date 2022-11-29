/* about page carousel
var aboutInd = 0;
carousel();

function carousel() {
  var y;
  var z = document.getElementsByClassName("aboutSlides");
  for (y = 0; y < z.length; y++) {
    z[y].style.display = "none";  
  }
  aboutIndex++;
  if (aboutInd > z.length) {aboutInd = 1}    
    z[aboutInd-1].style.display = "block";
  setTimeout(carousel, 3000);
} */

/* responsive nav bar */
function navFunction() {
  var x = document.getElementById("astronav2");
  if (x.className === "astronav") {
    x.className += " responsive";
  } else {
    x.className = "astronav";
  }
}


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

/* movie slideshows */
var slideIndex = [1,1,1,1,1,1,1,1,1,1,1,1];
var slideId = ["movies1", "movies2", "movies3", "movies4", "movies5", "movies6", "movies7", "movies8", "movies9", "movies10", "movies11", "movies12"]
showDivs(1, 0);
showDivs(1, 1);
showDivs(1, 2);
showDivs(1, 3);
showDivs(1, 4);
showDivs(1, 5);
showDivs(1, 6);
showDivs(1, 7);
showDivs(1, 8);
showDivs(1, 9);
showDivs(1, 10);
showDivs(1, 11);

function plusDivs(n, no) {
  showDivs(slideIndex[no] += n, no);
}

function showDivs(n, no) {
  var i;
  var x = document.getElementsByClassName(slideId[no]);
  if (n > x.length) {slideIndex[no] = 1}
  if (n < 1) {slideIndex[no] = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  x[slideIndex[no]-1].style.display = "block";  
}

/* making the slideshows collapsible */ 
var colSlides = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < colSlides.length; i++) {
  colSlides[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
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