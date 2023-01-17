function bearpu() {
  var popup = document.getElementById("pub");
  popup.classList.toggle("show");
}

function add(){
  let x = document.getElementById("quantity").value;
  //set the variable x to local storage with the key of firstname
  localStorage.setItem("bmount", x);
  //clearing the input after the button is clicked
  document.getElementById("quantity").value = "";


  let b = document.getElementById("bname").innerHTML;
        //set the variable x to local storage with the key of firstname
  localStorage.setItem("bbn", b);

  let bp = document.getElementById("bprice").innerHTML;
  localStorage.setItem("bbp",bp);
}


function sandopu() {
  var popup2 = document.getElementById("puSando");
  popup2.classList.toggle("show2");
}
function add2(){
  let x2 = document.getElementById("quantity2").value;
  //set the variable x to local storage with the key of firstname
  localStorage.setItem("sanmount", x2);
  //clearing the input after the button is clicked
  document.getElementById("quantity2").value = "";


  let san = document.getElementById("sanname").innerHTML;
        //set the variable x to local storage with the key of firstname
  localStorage.setItem("ssn", san);

  let sap = document.getElementById("sanprice").innerHTML;
  localStorage.setItem("ssp",sap);
}

function bingspu() {
  var popup3 = document.getElementById("pubing");
  popup3.classList.toggle("show3");
}
function add3(){
  let x3 = document.getElementById("quantity3").value;
  //set the variable x to local storage with the key of firstname
  localStorage.setItem("bingmount", x3);
  //clearing the input after the button is clicked
  document.getElementById("quantity3").value = "";


  let bin = document.getElementById("bingname").innerHTML;
        //set the variable x to local storage with the key of firstname
  localStorage.setItem("bingn", bin);

  let bip = document.getElementById("bingprice").innerHTML;
  localStorage.setItem("bingp",bip);
}

function lpu() {
  var popup4 = document.getElementById("pulat");
  popup4.classList.toggle("show4");
}
function add4(){
  let x4 = document.getElementById("quantity4").value;
  //set the variable x to local storage with the key of firstname
  localStorage.setItem("latmount", x4);
  //clearing the input after the button is clicked
  document.getElementById("quantity4").value = "";


  let ln = document.getElementById("latname").innerHTML;
        //set the variable x to local storage with the key of firstname
  localStorage.setItem("latn", ln);

  let lp = document.getElementById("latprice").innerHTML;
  localStorage.setItem("latp",lp);
}

function milkpu() {
  var popup5 = document.getElementById("pumilk");
  popup5.classList.toggle("show5");
}
function add5(){
  let x5 = document.getElementById("quantity5").value;
  //set the variable x to local storage with the key of firstname
  localStorage.setItem("milkmount", x5);
  //clearing the input after the button is clicked
  document.getElementById("quantity5").value = "";


  let mmn = document.getElementById("milkname").innerHTML;
        //set the variable x to local storage with the key of firstname
  localStorage.setItem("mn", mmn);

  let mmp = document.getElementById("milkprice").innerHTML;
  localStorage.setItem("mp",mmp);
}

function parfpu() {
  var popup6 = document.getElementById("puparf");
  popup6.classList.toggle("show6");
}
function add6(){
  let x6 = document.getElementById("quantity6").value;
  //set the variable x to local storage with the key of firstname
  localStorage.setItem("parfmount", x6);
  //clearing the input after the button is clicked
  document.getElementById("quantity6").value = "";


  let pan = document.getElementById("parfname").innerHTML;
        //set the variable x to local storage with the key of firstname
  localStorage.setItem("parfn", pan);

  let pap = document.getElementById("parfprice").innerHTML;
  localStorage.setItem("parfp",pap);
}
