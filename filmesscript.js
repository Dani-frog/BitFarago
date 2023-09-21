var filmek =[
    {id:1,cim:"Flash",ev:"2023",kategoria:"humor",boritoid:1},
    {id:2,cim:"Bambi",ev:"1942",kategoria:"gyerekfilm",boritoid:1},
    {id:3,cim:"Avatár",ev:"2009",kategoria:"scifi",boritoid:1},
    {id:4,cim:"A Gyűrűk Ura",ev:"2001",kategoria:"fantasy",boritoid:1},
    /*
    {id:5,cim:"Gru",ev:"2010",kategoria:"gyerekfilm",boritoid:1},
    {id:6,cim:"Narnia Krónikái",ev:"2005",kategoria:"Fantasy",boritoid:1},
    {id:7,cim:"Star Wars IV",ev:"1977",kategoria:"scifi",boritoid:1},
    {id:8,cim:"Nagyfiúk",ev:"2010",kategoria:"humor",boritoid:1}*/
    /*
    {id:9,cim:"",ev:"",kategoria:"",boritoid:5},
    {id:10,cim:"",ev:"",kategoria:"",boritoid:5},
    {id:11,cim:"",ev:"",kategoria:"",boritoid:5},
    {id:12,cim:"",ev:"",kategoria:"",boritoid:5},
    {id:13,cim:"",ev:"",kategoria:"",boritoid:5},
    {id:14,cim:"",ev:"",kategoria:"",boritoid:5},
    {id:15,cim:"",ev:"",kategoria:"",boritoid:5},
    {id:16,cim:"",ev:"",kategoria:"",boritoid:5},
    {id:17,cim:"",ev:"",kategoria:"",boritoid:5},
    {id:18,cim:"",ev:"",kategoria:"",boritoid:5},
    {id:19,cim:"",ev:"",kategoria:"",boritoid:5},
    {id:20,cim:"",ev:"",kategoria:"",boritoid:5},*/
];

const teszt = document.getElementById("teszt");   


for (let i = 0; i < filmek.length; i++) {
    

    
    var filmtarolo = document.createElement("div");
    var kep = document.createElement("img")
    kep.src="plakatok/"+ (filmek[i].boritoid)+".png";
    kep.classList.add("plakat");
    filmtarolo.innerText = (filmek[i].cim);
    filmtarolo.innerHTML+= "<br>";
    filmtarolo.appendChild(kep);
    teszt.appendChild(filmtarolo);
    if(i%3==0){
        var sor = document.createElement("div");
    }
    
} ;
