function done(){
    location.href="index.html";
}

function pay(){
    let z = localStorage.getItem("bmount");
    document.getElementById("bam").innerHTML = z;
    
    let y = localStorage.getItem("bbn");
    document.getElementById("bread").innerHTML = y;

    let w = localStorage.getItem("bbp");
    document.getElementById("btt").innerHTML = w;

    console.log(z, y, w)
}
