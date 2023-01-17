function done(){
    location.href="index.html";
    localStorage.clear();
}

function pay(){
    location.href="check.html";

    let z = localStorage.getItem("bmount");
    document.getElementById("bam").innerHTML = z;
    
    let y = localStorage.getItem("bbn");
    document.getElementById("bread").innerHTML = y;

    let w = localStorage.getItem("bbp");
    document.getElementById("btt").innerHTML = w;

    let ssz = localStorage.getItem("sanmount");
    document.getElementById("ssam").innerHTML =ssz;

    let ssy = localStorage.getItem("ssn");
    document.getElementById("stsando").innerHTML = ssy;

    let ssw = localStorage.getItem("ssp");
    document.getElementById("sstt").innerHTML = ssw;

    let bbz = localStorage.getItem("bingmount");
    document.getElementById("bingam").innerHTML =bbz;

    let bby = localStorage.getItem("bingn");
    document.getElementById("stbing").innerHTML = bby;

    let bbw = localStorage.getItem("bingp");
    document.getElementById("bingtt").innerHTML = bbw;

    let llz = localStorage.getItem("latmount");
    document.getElementById("latteam").innerHTML =llz;

    let lly = localStorage.getItem("latn");
    document.getElementById("stlatte").innerHTML = lly;

    let llw = localStorage.getItem("latp");
    document.getElementById("lattett").innerHTML = llw;

    let mmz = localStorage.getItem("milkmount");
    document.getElementById("milkam").innerHTML =mmz;

    let mmy = localStorage.getItem("mn");
    document.getElementById("stmilk").innerHTML = mmy;

    let mmw = localStorage.getItem("mp");
    document.getElementById("milktt").innerHTML = mmw;

    let ppz = localStorage.getItem("parfmount");
    document.getElementById("yogurtam").innerHTML =ppz;

    let ppy = localStorage.getItem("parfn");
    document.getElementById("yogurt").innerHTML = ppy;

    let ppw = localStorage.getItem("parfp");
    document.getElementById("yogurttt").innerHTML = ppw;
}
