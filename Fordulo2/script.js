const jatekTer = document.getElementById("jatekTer");
var Mezok = [["b","l","f","q","k","f","l","b"],
            ["p","p","p","p","p","p","p","p"],
            [" "," "," "," "," "," "," "," "],
            [" "," "," "," "," "," "," "," "],
            [" "," "," "," "," "," "," "," "],
            [" "," "," "," "," "," "," "," "],
            [" "," "," "," "," "," "," "," "],
            [" "," "," "," "," "," "," "," "],
            [" "," "," "," "," "," "," "," "],
            [" "," "," "," "," "," "," "," "],
            ["P","P","P","P","P","P","P","P"],
            ["B","L","F","K","Q","F","L","B"]];
var feherLep = true;
var feherParasztLe = true;
var FeketeParasztFel = true;


function Main(){
    if(document.getElementById("korbeInp").value != ''){
        jatekTer.innerHTML = "";
        TablaGen();
    }else{
        document.getElementById("korbeInp").placeholder = "Adj meg számot!";
    }
    
}
function KorValaszto(){
    let korbeDiv = document.createElement("div");
    korbeDiv.id = "korbeDiv"
    let korbeKero = document.createElement("input");
    korbeKero.id = "korbeInp";
    korbeKero.type = "number";
    korbeKero.min = 1;
    let felirat = document.createElement("h2");
    felirat.textContent = "Add meg a körszámot: ";
    let gomb = document.createElement("button");
    gomb.textContent = "Start";
    gomb.setAttribute("onclick","Main()")
    korbeDiv.appendChild(felirat);
    korbeDiv.appendChild(korbeKero);
    korbeDiv.innerHTML += "</br>";
    korbeDiv.appendChild(gomb);
    jatekTer.appendChild(korbeDiv);
    
}

KorValaszto();

function TablaGen() {
    let tablaDiv = document.createElement("div");
    tablaDiv.id = "tabla";
    tablaDiv.classList = "tabla";
    jatekTer.appendChild(tablaDiv);
    let feher = false;
    for (let i = 0; i < 12; i++) {
        feher = !feher;
        for (let j = 0; j < 8; j++) {
            const cella = document.createElement("div");
            cella.classList.add("cella");
            cella.classList.add((feher) ? "feher" : "fekete");
            feher = !feher;
            cella.dataset.sor = i;
            cella.dataset.oszlop = j;
            cella.setAttribute("onclick", "Kattint(this)");
            if(Mezok[i][j]!=" "){
                let kep = document.createElement("img");
                kep.classList.add("kep");
                kep.src="Kepek/"+((Mezok[i][j] == Mezok[i][j].toUpperCase()) ? (Mezok[i][j].toLowerCase())+"2" : Mezok[i][j])+".png"
                cella.appendChild(kep);
            }
            document.getElementById("tabla").appendChild(cella);
        }
    } 
}

function Kattint(div){
    if(Mezok[div.dataset.sor][div.dataset.oszlop] != " "){
        if(feherLep){
            if(Mezok[div.dataset.sor][div.dataset.oszlop] == Mezok[div.dataset.sor][div.dataset.oszlop].toLowerCase()){
                LehetsegesLepesek(div);
            }
        }else{
            if(Mezok[div.dataset.sor][div.dataset.oszlop] == Mezok[div.dataset.sor][div.dataset.oszlop].toUpperCase()){
                LehetsegesLepesek(div);
            }
        }
    }else{
        if(div.classList().includes("Kivalasztott")){
            Lepes();
        }
    }
}

function LehetsegesLepesek(div){
    if(Mezok[div.dataset.sor][div.dataset.oszlop] == "p"){
        FeherParasztLepes(div);
    }
    else if(Mezok[div.dataset.sor][div.dataset.oszlop] == "P"){
        FeketeParasztLepes(div);
    }
    else if(Mezok[div.dataset.sor][div.dataset.oszlop].toLowerCase() == "b"){
        BastyaLepes(div);
    }
    else if(Mezok[div.dataset.sor][div.dataset.oszlop].toLowerCase() == "l"){
        LoLepes(div);
    }
    else if(Mezok[div.dataset.sor][div.dataset.oszlop].toLowerCase() == "f"){
        FutoLepes(div);
    }
    else if(Mezok[div.dataset.sor][div.dataset.oszlop].toLowerCase() == "k"){
        KiralyLepes(div);
    }
    else if(Mezok[div.dataset.sor][div.dataset.oszlop].toLowerCase() == "q"){
        KiralynoLepes(div);
    }
}

function FeherParasztLepes(div){
    console.log("feherparaszt");
}
function FeketeParasztLepes(div){
    console.log("feketeparaszt");
}
function BastyaLepes(div){
    console.log("bastya");
}
function LoLepes(div){
    console.log("lo");
}
function FutoLepes(div){
    console.log("futo");
}
function KiralyLepes(div){
    console.log("kiraly");
}
function KiralynoLepes(div){
    console.log("kiralyno");
}
