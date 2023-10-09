const jatekTer = document.getElementById("jatekTer");
var Mezok = [["b","l","f","q","k","f","l","b"],
            ["p","p","p","p","p","p","p"," "],
            [" "," "," "," "," "," "," ","b"],
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
        ClassTorles();
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
        if(div.classList.includes("Kivalasztott")){
            Lepes();
        }
    }
}

function ClassTorles(){
    let t = document.getElementsByClassName("cella");
    for(let i = 0;i<t.length;i++){
        t[i].classList.remove("lephet");
        t[i].classList.remove("Kivalasztott");
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

function JoDivMegtalal(sor,oszlop){
    let t = document.getElementsByClassName("cella");
    for(let i = 0;i<t.length;i++){
        if(t[i].dataset.sor == sor && t[i].dataset.oszlop == oszlop){
            return t[i];
        }
    }
}

function FeherParasztLepes(div){
    div.classList.add("Kivalasztott");
    if(feherParasztLe){
        const sor = parseInt(div.dataset.sor);
        const oszlop = parseInt(div.dataset.oszlop);
        if(sor+1 <= 11 && oszlop+1 <= 7 && Mezok[sor+1][oszlop+1] != " " && Mezok[sor+1][oszlop+1] == Mezok[sor+1][oszlop+1].toUpperCase()){
            JoDivMegtalal(sor+1,oszlop+1).classList.add("lephet");
        }  
        else if(sor+1 <= 11 && oszlop-1 >= 0 && Mezok[sor+1][oszlop-1] != " " && Mezok[sor+1][oszlop-1] == Mezok[sor+1][oszlop-1].toUpperCase()){
            JoDivMegtalal(sor+1,oszlop-1).classList.add("lephet");
        }
        let x = 1;
        for(let i = div.dataset.sor; i<12;i++){
            if(x<4 && Mezok[sor+x][oszlop] == " "){
                JoDivMegtalal(sor+x,oszlop).classList.add("lephet");
            }else{
                break;
            }
            x++;
        }
    }
}
function FeketeParasztLepes(div){
    div.classList.add("Kivalasztott");
    console.log("feketeparaszt");
}
function BastyaLepes(div) {
    div.classList.add("Kivalasztott");
    let i = 1;
    const sor = parseInt(div.dataset.sor);
    const oszlop = parseInt(div.dataset.oszlop);

    while (sor + i < 12 && Mezok[sor + i][oszlop] === " ") {
        JoDivMegtalal(sor+i,oszlop).classList.add("lephet");
        i++;
    }

    i = 1;
    while (sor - i >= 0 && Mezok[sor - i][oszlop] === " ") {
        JoDivMegtalal(sor-i,oszlop).classList.add("lephet");
        i++;
    }

    i = 1;
    while (oszlop + i < 8 && Mezok[sor][oszlop + i] === " ") {
        JoDivMegtalal(sor,oszlop+i).classList.add("lephet");
        i++;
    }

    i = 1;
    while (oszlop - i >= 0 && Mezok[sor][oszlop - i] === " ") {
        JoDivMegtalal(sor,oszlop-i).classList.add("lephet");
        i++;
    }
}

function LoLepes(div){
    div.classList.add("Kivalasztott");
    console.log("lo");
}
function FutoLepes(div){
    div.classList.add("Kivalasztott");
    console.log("futo");
}
function KiralyLepes(div){
    div.classList.add("Kivalasztott");
    console.log("kiraly");
}
function KiralynoLepes(div){
    div.classList.add("Kivalasztott");
    console.log("kiralyno");
}
