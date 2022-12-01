/* responsive nav bar */
function navFunction() {
  var x = document.getElementById("astronav2");
  if (x.className === "astronav") {
    x.className += " responsive";
  } else {
    x.className = "astronav";
  }
}


/* last modified function */
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


/* movie picker form */
function formValidation() {

/* options for different elements in form */  
  // let name = document.forms["movieForm"]["first"].value;
  // let email = document.forms["movieForm"]["email"].value;
  // let pronoun = document.forms["movieForm"]["pronoun"].value;
  let birthday = document.forms["movieForm"]["birthday"].value;
  let genre = document.forms["movieForm"]["genre"].value;
  

  let starSign = dateToSign(birthday);

/* retrieving the given movie from each labelled star sign folder */  
  document.getElementById("formImage").src = `/images/${starSign}/${genre}.jpg`;
  
  let temp = document.getElementById("formResults");
  temp.innerHTML = "your astrology sign is: " + starSign + "<br /> the genre you chose is: " + genre + "<br /> so you should watch: ";

  
  return false;
}


function dateToSign(date){

  date = new Date(date);

  let day = date.getDate() + 1; //adding in offset
  let month = date.getMonth() + 1; //adding in offset

/* sign | month lower | day lower | month upper | day upper */
  let signDateRanges = [
    ["aries",3,21,4,19],
    ["taurus",4,20,5,20],
    ["gemini",5,21,6,21],
    ["cancer",6,22,7,22],
    ["leo",7,23,8,22],
    ["virgo",8,23,9,22],
    ["libra",9,23,10,23],
    ["scorpio",10,24,11,21],
    ["sag",11,22,12,21],
    ["capricorn",12,22,1,19],
    ["aquarius",1,20,2,18],
    ["pisces",2,19,3,20],
  ];

 /* using a for loop to go through each individual date to retrieve star sign */ 
  for (let index = 0; index < signDateRanges.length; index++) {
    if (month == signDateRanges[index][1] && day >= signDateRanges[index][2]){
      return signDateRanges[index][0];
    }
    else if (month == signDateRanges[index][3] && day <= signDateRanges[index][4]){
      return signDateRanges[index][0];
    }
  }
}



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
function pickRandomMovie() {
  
    var myMovie = new Array("images/aquarius/comedy.jpg","images/aries/drama.jpg","images/cancer/horror.jpg","images/capricorn/family.jpg","images/gemini/fantasy.jpg","images/libra/romance.jpg","images/leo/action.jpg","images/pisces/scifi.jpg","images/sag/drama.jpg","images/scorpio/comedy.jpg","images/taurus/mystery.jpg","images/virgo/superhero.jpg");

 /* using math.random to generate random number which is multiplied by number of images in the array */ 
   var randomNum = Math.floor(Math.random() * myMovie.length);
   document.getElementById("randomMovie").src = myMovie[randomNum];

}


/* credit for api and jquery for horoscopes: https://github.com/sameerkumar18/aztro */
function getScopes(sign){

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