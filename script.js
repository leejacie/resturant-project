function bearpu() {
  var popup = document.getElementById("pub");
  popup.classList.toggle("show");
}

function add(){
  let x = document.getElementById("quantity").value;
  //set the variable x to local storage with the key of firstname
  localStorage.setItem("bmount", x);
  //clearing the input after the button is clicked
  document.getElementById("quantity").value = " ";

  let b = document.getElementById("bname").value;
        //set the variable x to local storage with the key of firstname
  localStorage.setItem("bbn", b);
  
  let bp = document.getElementById("bprice").value;
  localStorage.setItem("bbp",bp);
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

function pay(){
  location.href="check.html";
}
