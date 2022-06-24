let keuze = document.getElementById("spel")
let pc = document.getElementById("pckeuze")
let winnaar = document.getElementById("winnaar")

let opties = ["blad", "steen", "schaar"]
let puntenU = 0;
let puntenPC = 0;

function uitslag(){
    let pckeuze = Math.round(Math.random()*2)
    console.log(opties[pckeuze])
//blad wint van steen
//steen wint van schaar
//schaar wint van blad
//ofwel geen winnaar ofwel jij wint ofwel jij verliest

}


console.log(keuze.value)