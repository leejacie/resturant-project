  function bearpu() {
    var popup = document.getElementById("pub");
    popup.classList.toggle("show");
  }
let counterDisplayElem = document.querySelector('.counter-display');
let counterMinusElem = document.querySelector('.counter-minus');
let counterPlusElem = document.querySelector('.counter-plus');

let count = 0;

updateDisplay();

counterPlusElem.addEventListener("click",()=>{
    count++;
    updateDisplay();
}) ;

counterMinusElem.addEventListener("click",()=>{
    count--;
    updateDisplay();
});

function updateDisplay(){
    counterDisplayElem.innerHTML = count;
};
  function sandopu() {
    var popup2 = document.getElementById("puSando");
    popup2.classList.toggle("show2");
  }
  function bingspu() {
    var popup3 = document.getElementById("pubing");
    popup3.classList.toggle("show3");
  }
  function lpu() {
    var popup4 = document.getElementById("pulat");
    popup4.classList.toggle("show4");
  }
  function milkpu() {
    var popup5 = document.getElementById("pumilk");
    popup5.classList.toggle("show5");
  }
  function parfpu() {
    var popup6 = document.getElementById("puparf");
    popup6.classList.toggle("show6");
  }
