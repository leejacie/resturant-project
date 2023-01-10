function bearpu() {
  var popup = document.getElementById("pub");
  popup.classList.toggle("show");
}
var select = document.getElementById("selectNumber");
var options = ["1", "2", "3", "4", "5"];

for(var i = 0; i < options.length; i++) {
    var opt = options[i];
    var el = document.createElement("option");
    el.textContent = opt;
    el.value = opt;
    select.appendChild(el);
}

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
