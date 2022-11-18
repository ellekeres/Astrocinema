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