// vars
let number = [];
let date = [];
let count = document.querySelector(".count");
let clr = document.querySelector(".clr");
let counterWrapper = document.getElementById("counter-wrapper");
let overlay = document.getElementById("overlay");
counterWrapper.innerHTML = "";
// onload function
// ----------------------------------function----------------------------------

// 
const render=(arr)=>{
  for (let [i, ciga] of arr.entries()) {
    counterWrapper.innerHTML += `
    <div class="info-wrapper">
    <div class="number">${i+1}</div>
    <div class="time">${ciga.time}</div>
    <button onclick="removeOne(${i})" id="no">❌</button>
    </div>
    `;
  }
}

document.addEventListener("load", onLoad());
// clr function
function clrFunction() {
  number = [];
  localStorage.removeItem("ciga");
  counterWrapper.innerHTML = "";
  overlaychange();
}
// 
removeOne=(indx)=>{
  number.splice(indx,1)
  counterWrapper.innerHTML = "";
  render(number)
  localStorage.setItem("ciga",JSON.stringify(number))
}

// add cigarete function
function oneCiga() {
  // var
  let ciga = {};
  let d = new Date();
  ciga.time = `${d.getHours()}:${
    d.getMinutes() < 10 ? `0${d.getMinutes()}` : d.getMinutes()
  }`;
  // push number of ciga
  ciga.num = number.length + 1;
  number.push(ciga);
  // print
  counterWrapper.innerHTML = "";
 render(number)
  localStorage.setItem("ciga", JSON.stringify(number));
}

//function will check if we stored value in local storage if yes will display it
function onLoad() {
  //
  if (
    localStorage.getItem("ciga") &&
    JSON.parse(localStorage.getItem("ciga")).length > 0
  ) {
    number = JSON.parse(localStorage.getItem("ciga"));
    counterWrapper.innerHTML = "";
    render(JSON.parse(localStorage.getItem("ciga")))
  }
}

// function will change class to hidden
function hiddenchange() {
  if (counterWrapper.innerHTML != "") {
    overlay.removeAttribute("class", "hidden");
    overlay.setAttribute("class", "overlay");
  }
}
function overlaychange() {
  overlay.removeAttribute("class", "overlay");
  overlay.setAttribute("class", "hidden");
}

