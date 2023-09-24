//kép: 400x592
//lehetséges kategória nevek: "scifi","mese","fantasy","humor","sorozat","horror"

var filmek =[
    {id:1,cim:"Flash",ev:"2023",kategoria:"humor",boritoid:1},
    {id:2,cim:"Bambi",ev:"1942",kategoria:"mese",boritoid:2},
    {id:3,cim:"Avatár",ev:"2009",kategoria:"scifi",boritoid:3},
    {id:4,cim:"A Gyűrűk Ura",ev:"2001",kategoria:"fantasy",boritoid:4},
    {id:5,cim:"Gru",ev:"2010",kategoria:"mese",boritoid:5},
    /*
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

const kategoriak = ["scifi","mese","fantasy","humor","sorozat","horror"];
var szelektált = [];

const teszt = document.getElementById("teszt");   

/*
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
*/

function Keres(){
    szelektált = [];
    x=0;
    document.getElementById("filmekDiv").innerHTML = "";
    KategoriaKigyujt();
    Megjelenites();
}

var x = 0;
function Megjelenites(){
    for (let i = 0; i < filmek.length; i++){
        if(szelektált.includes(filmek[i].kategoria)){
            if(x%4==0){
                var filmsorDiv = document.createElement("div");
                filmsorDiv.classList.add("row");
                filmsorDiv.classList.add("filmsorDiv");
            }
            x++;
            let filmdiv = document.createElement("div");
            filmdiv.classList.add("col-sm-6");
            filmdiv.classList.add("col-lg-3");
            filmdiv.classList.add("film");

            let filmkep = document.createElement("img");
            filmkep.src = "plakatok/"+filmek[i].boritoid+".png";
            filmkep.classList.add("filmkep");

            let filmcim = document.createElement("h2");
            filmcim.innerHTML = filmek[i].cim;

            let filmev = document.createElement("h3");
            filmev.innerHTML = "Év: "+filmek[i].ev;

            filmdiv.appendChild(filmcim);
            filmdiv.appendChild(filmev);
            filmdiv.appendChild(filmkep);
            filmsorDiv.appendChild(filmdiv);
            if(x%4==3){
                document.getElementById("filmekDiv").appendChild(filmsorDiv);
            }
        }
    }
    document.getElementById("filmekDiv").appendChild(filmsorDiv);
    
}

function KategoriaKigyujt(){
    for(let i = 0; i<kategoriak.length;i++){
        if(document.getElementById(kategoriak[i]).checked){
            szelektált.push(kategoriak[i]);
        }
    }
}