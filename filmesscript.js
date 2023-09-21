var filmek =[
    {id:1,cim:"Flash",ev:"2023",kategoria:"humor",boritoid:1},
    {id:2,cim:"Bambi",ev:"1942",kategoria:"gyerekfilm",boritoid:2},
    {id:3,cim:"Avatár",ev:"2009",kategoria:"scifi",boritoid:3},
    {id:4,cim:"A Gyűrűk Ura",ev:"2001",kategoria:"fantasy",boritoid:4},
    {id:5,cim:"Gru",ev:"2010",kategoria:"gyerekfilm",boritoid:5},
];

var teszt = document.getElementById("teszt");       
for (let i = 0; i < filmek.length; i++) {
    var kep = document.createElement("img")
    kep.src= (i+1)+".png";
    teszt.appendChild(kep);
    teszt.innerText += (filmek[i].cim) ; 
    teszt.innerHTML+= "<br>";
}
