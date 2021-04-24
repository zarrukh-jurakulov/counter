counter = 0;


function increase() {

 if (counter === 100) {
  counter = 0;
 }
 document.querySelector("article").innerHTML = counter++;
}



function decrease() {

 if (counter === 0) {
  counter = -0;
 }
 document.querySelector("article").innerHTML = --counter;
}