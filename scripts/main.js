
/*const myHeading = document.querySelector('h1');
myHeading.textContent='Hello World!'*/

/* let myVariable= document.querySelector ('h1');
alert ('Hello!');

document.querySelector('html').onclick=function() {
alert ('Oouch! Ne baszogass!');
} */

/* ez ugyanaz mint: let myHTML= document.querySelector('html');
                        myHTML.onclick=function () {alert ('nebaszogass!');}; */

let myImage=document.querySelector ('img');
myImage.onclick= function (){
    let mySrc = myImage.getAttribute ('src');
    if (mySrc==='images/8fcd029e0d578b107a1bc714f039b5ec.jpg') {
        myImage.setAttribute ('src', 'images/tuleles.jpg') }

    else {
        myImage.setAttribute ('src', 'images/8fcd029e0d578b107a1bc714f039b5ec.jpg');
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
  let myName = prompt('Please enter your name.');
  if(!myName) {
    setUserName();
  } else {
    localStorage.setItem('name', myName);
    myHeading.innerHTML = 'Mozilla is cool, ' + myName;
  }
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.innerHTML = 'Mozilla is cool, ' + storedName;
}

myButton.onclick = function() {
  setUserName();
}