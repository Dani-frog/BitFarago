const jatekTer = document.getElementById("jatekTer");
var gombokDiv = document.getElementById("gombokDiv");
var Mezok = [[" "," "," "," "," "," "," "," "],
            [" ","q"," "," "," "," "," "," "],
            [" "," "," "," "," "," "," "," "],
            [" "," "," "," "," "," "," "," "],
            [" "," "," "," "," "," "," "," "],
            [" "," "," "," "," "," "," "," "],
            [" "," "," "," "," "," "," "," "],
            [" "," "," "," "," "," "," "," "],
            [" "," "," "," "," "," "," "," "],
            [" "," "," "," "," "," "," "," "],
            [" ","Q"," "," "," "," "," "," "],
            [" "," "," "," "," "," "," "," "]];

            /*["b","l","f","q","k","f","l","b"],
            ["p","p","p","p","p","p","p","p"]
            ["P","P","P","P","P","P","P","P"],
            ["B","L","F","K","Q","F","L","B"]*/ 
var korokSzama = 0;
var feherPont = 0;
var feketePont = 0;
var kiJelolt;
var feherLep = true;
var feherParasztLe = true;
var FeketeParasztFel = true;
var duplaLepesAktiv = false;
var feherDuplaElhasznalt = false;
var feketeDuplaElhasznalt = false;
var jokerAktiv = false;
var feherJokerElhasznalt = false;
var feketeJokerElhasznalt = false;


var jokerlepes1,jokerlepes2,duplalepes1,duplalepes2=true;//joker egy figura egy másik kiválasztott figura lépésével léphet. duplalepes meg egy jatekos kettőször lép.
//Gyalog 1, Futó 2, Huszár 2, Király 2, Bástya 3, Vezér 5 pontok 
var korbeDiv;
function Main(){
    if(document.getElementById("korbeInp").value != '' &&  Math.abs(parseInt(document.getElementById("korbeInp").value))>0){
        korokSzama = Math.abs(parseInt(document.getElementById("korbeInp").value));
        document.getElementById("GombokNak").removeChild(korbeDiv)
        TablaGen();
    }else{
        document.getElementById("korbeInp").placeholder = "Adj meg számot!";
    }
    
}
function KorValaszto(){
    korbeDiv = document.createElement("div");
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
    document.getElementById("GombokNak").appendChild(korbeDiv);
    
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
            if(Mezok[i][j] == "p"){
                cella.dataset.Le = true;
                cella.dataset.ertek = 1;
            }else if(Mezok[i][j] == "P"){
                cella.dataset.Le = false;
                cella.dataset.ertek = 1;
            }else if(Mezok[i][j] == "b" || Mezok[i][j] == "B"){
                cella.dataset.ertek = 3;
            }else if(Mezok[i][j] == "l" || Mezok[i][j] == "L"){
                cella.dataset.ertek = 2;
            }else if(Mezok[i][j] == "f" || Mezok[i][j] == "F"){
                cella.dataset.ertek = 2;
            }else if(Mezok[i][j] == "k" || Mezok[i][j] == "K"){
                cella.dataset.ertek = 2;
            }else if(Mezok[i][j] == "q" || Mezok[i][j] == "Q"){
                cella.dataset.ertek = 5;
            }
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
    SzuperGombok();
}

function SzuperGombok(){
    gombokDiv.innerHTML = "";
    DuplalepGomb();
    JokerLep();
}

function JokerLep(){
    let gomb = document.createElement("button");
    gomb.id = "JokerGomb;"
    gomb.textContent = "Joker lépés";
    gomb.classList.add("ExtraGombok");
    if(feherLep){
        if(!feherJokerElhasznalt){
            gomb.setAttribute("onclick","JokerGombraKatt(this)");
            gomb.classList.add("GombElerheto");
        }else{
            gomb.removeAttribute("onclick");
            gomb.classList.add("GombNemElerheto");
        }
    }else{
        if(!feketeJokerElhasznalt){
            gomb.setAttribute("onclick","JokerGombraKatt(this)");
            gomb.classList.add("GombElerheto");
        }else{
            gomb.removeAttribute("onclick");
            gomb.classList.add("GombNemElerheto");
        }
    }
    gombokDiv.appendChild(gomb);
}

function JokerGombraKatt(gomb){
    gomb.classList.add("GombNemElerheto");
    jokerAktiv = true;
    if(feherLep){
        if(!feherJokerElhasznalt){
            feherJokerElhasznalt = true;
        }
    }else{
        if(!feketeJokerElhasznalt){
            feketeJokerElhasznalt = true;
        }
    }
}

function DuplalepGomb(){
    let gomb = document.createElement("button");
    gomb.id = "DuplaGomb";
    gomb.textContent = "Dupla lépés";
    gomb.classList.add("ExtraGombok");
    if(feherLep){
        if(!feherDuplaElhasznalt){
            gomb.setAttribute("onclick","DuplaGombraKatt(this)");
            gomb.classList.add("GombElerheto");
        }else{
            gomb.removeAttribute("onclick");
            gomb.classList.add("GombNemElerheto");
        }
    }else{
        if(!feketeDuplaElhasznalt){
            gomb.setAttribute("onclick","DuplaGombraKatt(this)");
            gomb.classList.add("GombElerheto");
        }else{
            gomb.removeAttribute("onclick");
            gomb.classList.add("GombNemElerheto");
        }
    }
    gombokDiv.appendChild(gomb);
}

function DuplaGombraKatt(gomb){
    gomb.classList.add("GombNemElerheto");
    duplaLepesAktiv = true;
    if(feherLep){
        if(!feherDuplaElhasznalt){
            feherDuplaElhasznalt = true;
        }
    }else{
        if(!feketeDuplaElhasznalt){
            feketeDuplaElhasznalt = true;
        }
    }
}

function Kattint(div){
    if(Mezok[div.dataset.sor][div.dataset.oszlop] != " "){
        if(feherLep){
            if(Mezok[div.dataset.sor][div.dataset.oszlop] == Mezok[div.dataset.sor][div.dataset.oszlop].toLowerCase()){
                ClassTorles();
                LehetsegesLepesek(div);
                kiJelolt = div;
            }
            else if(Mezok[div.dataset.sor][div.dataset.oszlop] == Mezok[div.dataset.sor][div.dataset.oszlop].toUpperCase() && div.classList.contains("lephet")){
                Leut(div);
                Lepes(div);
            }
        }else{
            if(Mezok[div.dataset.sor][div.dataset.oszlop] == Mezok[div.dataset.sor][div.dataset.oszlop].toUpperCase()){
                ClassTorles();
                LehetsegesLepesek(div);
                kiJelolt = div;
            }
            else if(Mezok[div.dataset.sor][div.dataset.oszlop] == Mezok[div.dataset.sor][div.dataset.oszlop].toLowerCase() && div.classList.contains("lephet")){
                Leut(div);
                Lepes(div);
            }
        }
    }else{
        if(div.classList.contains("lephet")){
            Lepes(div);
        }
    }
}

function Leut(div){
    if(feherLep && div.dataset.ertek != undefined){
        feherPont+=parseInt(div.dataset.ertek);
    }else if(!feherLep && div.dataset.ertek != undefined){
        feketePont+=parseInt(div.dataset.ertek);
    }
}
function Lepes(div){

    if(!duplaLepesAktiv){
        feherLep = !feherLep;
    }
    else{
        duplaLepesAktiv = !duplaLepesAktiv;
    }
    if(jokerAktiv){
        jokerAktiv = !jokerAktiv;
    }
    if(kiJelolt.dataset.Le != undefined){
        div.dataset.Le = kiJelolt.dataset.Le;
        delete kiJelolt.dataset.Le;
    }
    if(kiJelolt.dataset.ertek != undefined){
        div.dataset.ertek = kiJelolt.dataset.ertek;
        delete kiJelolt.dataset.ertek;
    }
    let temp = kiJelolt.innerHTML;
    kiJelolt.innerHTML = "";
    div.innerHTML = temp;
    let Mtemp = Mezok[kiJelolt.dataset.sor][kiJelolt.dataset.oszlop];
    Mezok[kiJelolt.dataset.sor][kiJelolt.dataset.oszlop] = " ";
    Mezok[div.dataset.sor][div.dataset.oszlop] = Mtemp;
    ClassTorles();
    SzuperGombok();
    if(feherLep){
        korokSzama--;
    }
    JatekVege();
}

function JatekVege() {
    if (korokSzama<1 || Nincskicsi() || Nincsnagy()) {
        setTimeout(Kinyert(),1000);
    }
}

function Kinyert()
{
    alert("anyá22");
    document.getElementById("fo").innerHTML="";
    if (feherPont>feketePont) {
        document.getElementById("fo").innerHTML+="Fehér nyeert";
    }
    else {document.getElementById("fo").innerHTML+="Fekter nyeert";}
}

function Nincskicsi() {
    for (let i = 0; i < 12; i++) {
        for (let j = 0; j < 8; j++) {
            if (Mezok[i][j]=="p" || Mezok[i][j]=="b" || Mezok[i][j]=="l" || Mezok[i][j]=="f" || Mezok[i][j]=="k" || Mezok[i][j]=="q") {
                return false;
            }
            
        }
    }
    return true;
}

function Nincsnagy() {
    for (let i = 0; i < 12; i++) {
        for (let j = 0; j < 8; j++) {
            if (Mezok[i][j]=="P" || Mezok[i][j]=="B" || Mezok[i][j]=="L" || Mezok[i][j]=="F" || Mezok[i][j]=="K" || Mezok[i][j]=="Q") {
                return false;
            }
            
        }
    }
    return true;
}

function Urestabla()
{
    var mennyiures=0;
    for (let i = 0; i < 12; i++) {
        for (let j = 0; j < 8; j++) {
            if (Mezok[i][j]==" ") {
                mennyiures++;
            }
            if (mennyiures==(8*12)) {
                return true;
            }
        }
    }
    return false;
}

function ClassTorles(){
    let t = document.getElementsByClassName("cella");
    for(let i = 0;i<t.length;i++){
        t[i].classList.remove("lephet");
        t[i].classList.remove("Kivalasztott");
    }
}

function LehetsegesLepesek(div){
    if(jokerAktiv){
        JokerLepes(div);
    }else{
        if(Mezok[div.dataset.sor][div.dataset.oszlop].toLowerCase() == "p"){
            ParasztLepes(div);
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
}

function JoDivMegtalal(sor,oszlop){
    let t = document.getElementsByClassName("cella");
    for(let i = 0;i<t.length;i++){
        if(t[i].dataset.sor == sor && t[i].dataset.oszlop == oszlop){
            return t[i];
        }
    }
}

function JokerLepes(div){
    const sor = parseInt(div.dataset.sor);
    const oszlop = parseInt(div.dataset.oszlop);
    LoLepesek(sor,oszlop);
    KiralynoLepes(div);
}

function ParasztLepes(div){
    if(div.dataset.sor == 0){
        div.dataset.Le = true;
    }
    else if(div.dataset.sor == 11){
        div.dataset.Le = false;
    }
    div.classList.add("Kivalasztott");
    if(div.dataset.Le == 'true'){
        const sor = parseInt(div.dataset.sor);
        const oszlop = parseInt(div.dataset.oszlop);
        if(feherLep){
            if(sor+1 <= 11 && oszlop+1 <= 7 && Mezok[sor+1][oszlop+1] != " " && Mezok[sor+1][oszlop+1] == Mezok[sor+1][oszlop+1].toUpperCase()){
                JoDivMegtalal(sor+1,oszlop+1).classList.add("lephet");
            }  
            if(sor+1 <= 11 && oszlop-1 >= 0 && Mezok[sor+1][oszlop-1] != " " && Mezok[sor+1][oszlop-1] == Mezok[sor+1][oszlop-1].toUpperCase()){
                JoDivMegtalal(sor+1,oszlop-1).classList.add("lephet");
            }
        }else{
            if(sor+1 <= 11 && oszlop+1 <= 7 && Mezok[sor+1][oszlop+1] != " " && Mezok[sor+1][oszlop+1] == Mezok[sor+1][oszlop+1].toLowerCase()){
                JoDivMegtalal(sor+1,oszlop+1).classList.add("lephet");
            }  
            if(sor+1 <= 11 && oszlop-1 >= 0 && Mezok[sor+1][oszlop-1] != " " && Mezok[sor+1][oszlop-1] == Mezok[sor+1][oszlop-1].toLowerCase()){
                JoDivMegtalal(sor+1,oszlop-1).classList.add("lephet");
            }
        }
        let x = 1;
        for(let i = div.dataset.sor; i<12;i++){
            if((sor+x <12) && x<4 && Mezok[sor+x][oszlop] == " "){
                JoDivMegtalal(sor+x,oszlop).classList.add("lephet");
            }else{
                break;
            }
            x++;
        }
    }
    else if(div.dataset.Le == 'false'){
        const sor = parseInt(div.dataset.sor);
        const oszlop = parseInt(div.dataset.oszlop);
        if(feherLep){
            if(sor-1 >= 0 && oszlop+1 <= 7 && Mezok[sor-1][oszlop+1] != " " && Mezok[sor-1][oszlop+1] == Mezok[sor-1][oszlop+1].toUpperCase()){
                JoDivMegtalal(sor-1,oszlop+1).classList.add("lephet");
            }  
            if(sor-1 >= 0 && oszlop-1 >= 0 && Mezok[sor-1][oszlop-1] != " " && Mezok[sor-1][oszlop-1] == Mezok[sor-1][oszlop-1].toUpperCase()){
                JoDivMegtalal(sor-1,oszlop-1).classList.add("lephet");
            }
        }else{
            if(sor-1 >= 0 && oszlop+1 <= 7 && Mezok[sor-1][oszlop+1] != " " && Mezok[sor-1][oszlop+1] == Mezok[sor-1][oszlop+1].toLowerCase()){
                JoDivMegtalal(sor-1,oszlop+1).classList.add("lephet");
            }  
            if(sor-1 >= 0 && oszlop-1 >= 0 && Mezok[sor-1][oszlop-1] != " " && Mezok[sor-1][oszlop-1] == Mezok[sor-1][oszlop-1].toLowerCase()){
                JoDivMegtalal(sor-1,oszlop-1).classList.add("lephet");
            }
        }
        let x = 1;
        for(let i = div.dataset.sor; i>0;i--){
            if(x<4 && Mezok[sor-x][oszlop] == " "){
                JoDivMegtalal(sor-x,oszlop).classList.add("lephet");
            }else{
                break;
            }
            x++;
        }
    }
}
function BastyaLepes(div) {
    div.classList.add("Kivalasztott");
    const sor = parseInt(div.dataset.sor);
    const oszlop = parseInt(div.dataset.oszlop);
    BastyaLepesek(sor,oszlop,false);
}
function BastyaLepesek(sor,oszlop,kiralye){
    let x = 0;
    for(let i = sor-1; i>=0;i--){
        if(Mezok[i][oszlop]==" "){
            JoDivMegtalal(i,oszlop).classList.add("lephet");
        }
        if(Mezok[i][oszlop]!=" "){
            if(feherLep){
                if(Mezok[i][oszlop] == Mezok[i][oszlop].toUpperCase()){
                    JoDivMegtalal(i,oszlop).classList.add("lephet");
                }
            }else{
                if(Mezok[i][oszlop] == Mezok[i][oszlop].toLowerCase()){
                    JoDivMegtalal(i,oszlop).classList.add("lephet");
                }
            }
            break;
        }
        if(++x>1 && kiralye){
            break;
        }
    }
    x = 0;
    for(let i = sor+1; i<12;i++){
        if(Mezok[i][oszlop]==" "){
            JoDivMegtalal(i,oszlop).classList.add("lephet");
        }
        if(Mezok[i][oszlop]!=" "){
            if(feherLep){
                if(Mezok[i][oszlop] == Mezok[i][oszlop].toUpperCase()){
                    JoDivMegtalal(i,oszlop).classList.add("lephet");
                }
            }else{
                if(Mezok[i][oszlop] == Mezok[i][oszlop].toLowerCase()){
                    JoDivMegtalal(i,oszlop).classList.add("lephet");
                }
            }
            break;
        }
        if(++x>1 && kiralye){
            break;
        }
    }
    x = 0;
    for(let i = oszlop+1; i<8;i++){
        if(Mezok[sor][i]==" "){
            JoDivMegtalal(sor,i).classList.add("lephet");
        }
        if(Mezok[sor][i]!=" "){
            if(feherLep){
                if(Mezok[sor][i] == Mezok[sor][i].toUpperCase()){
                    JoDivMegtalal(sor,i).classList.add("lephet");
                }
            }else{
                if(Mezok[sor][i] == Mezok[sor][i].toLowerCase()){
                    JoDivMegtalal(sor,i).classList.add("lephet");
                }
            }
            break;
        }
        if(++x>1 && kiralye){
            break;
        }
    }
    x = 0;
    for(let i = oszlop-1; i>=0;i--){
        if(Mezok[sor][i]==" "){
            JoDivMegtalal(sor,i).classList.add("lephet");
        }
        if(Mezok[sor][i]!=" "){
            if(feherLep){
                if(Mezok[sor][i] == Mezok[sor][i].toUpperCase()){
                    JoDivMegtalal(sor,i).classList.add("lephet");
                }
            }else{
                if(Mezok[sor][i] == Mezok[sor][i].toLowerCase()){
                    JoDivMegtalal(sor,i).classList.add("lephet");
                }
            }
            break;
        }
        if(++x>1 && kiralye){
            break;
        }
    }
}
function LoLepes(div){
    div.classList.add("Kivalasztott");
    const sor = parseInt(div.dataset.sor);
    const oszlop = parseInt(div.dataset.oszlop);
    LoLepesek(sor,oszlop);
}
function LoLepesek(sor,oszlop){
    const lepesek = [[-2, -1], [-2, 1], [-1, -2], [-1, 2],[1, -2], [1, 2], [2, -1], [2, 1]];
    for(let i = 0;i<lepesek.length;i++) {
        let lehx = sor + lepesek[i][0];
        let lehy = oszlop + lepesek[i][1];
        if(lehx >= 0 && lehx < 12 && lehy >= 0 && lehy < 8){
            if(Mezok[lehx][lehy]==" "){
                JoDivMegtalal(lehx,lehy).classList.add("lephet");
            }
            if(Mezok[lehx][lehy]!=" "){
                if(feherLep){
                    if(Mezok[lehx][lehy] == Mezok[lehx][lehy].toUpperCase()){
                        JoDivMegtalal(lehx,lehy).classList.add("lephet");
                    }
                }else{
                    if(Mezok[lehx][lehy] == Mezok[lehx][lehy].toLowerCase()){
                        JoDivMegtalal(lehx,lehy).classList.add("lephet");
                    }
                }
            }
        }
    }
}

function FutoLepes(div){
    div.classList.add("Kivalasztott");
    const sor = parseInt(div.dataset.sor);
    const oszlop = parseInt(div.dataset.oszlop);
    FutoLepesek(sor,oszlop,false);
}
function FutoLepesek(sor,oszlop,kiralye){
    let x = 0;
    for (let i = 1; sor - i >= 0 && oszlop - i >= 0; i++) {
        if(Mezok[sor-i][oszlop-i]==" "){
            JoDivMegtalal(sor-i,oszlop-i).classList.add("lephet");
        }
        if(Mezok[sor-i][oszlop-i]!=" "){
            if(feherLep){
                if(Mezok[sor-i][oszlop-i] == Mezok[sor-i][oszlop-i].toUpperCase()){
                    JoDivMegtalal(sor-i,oszlop-i).classList.add("lephet");
                }
            }else{
                if(Mezok[sor-i][oszlop-i] == Mezok[sor-i][oszlop-i].toLowerCase()){
                    JoDivMegtalal(sor-i,oszlop-i).classList.add("lephet");
                }
            }
            break;
        }
        if(++x>1 && kiralye){
            break;
        }
    }
    x = 0;
    for (let i = 1; sor - i >= 0 && oszlop + i <= 7; i++) {
        if(Mezok[sor-i][oszlop+i]==" "){
            JoDivMegtalal(sor-i,oszlop+i).classList.add("lephet");
        }
        if(Mezok[sor-i][oszlop+i]!=" "){
            if(feherLep){
                if(Mezok[sor-i][oszlop+i] == Mezok[sor-i][oszlop+i].toUpperCase()){
                    JoDivMegtalal(sor-i,oszlop+i).classList.add("lephet");
                }
            }else{
                if(Mezok[sor-i][oszlop+i] == Mezok[sor-i][oszlop+i].toLowerCase()){
                    JoDivMegtalal(sor-i,oszlop+i).classList.add("lephet");
                }
            }
            break;
        }
        if(++x>1 && kiralye){
            break;
        }
    }
    x = 0;
    for (let i = 1; sor + i <= 11 && oszlop - i >= 0; i++) {
        if(Mezok[sor+i][oszlop-i]==" "){
            JoDivMegtalal(sor+i,oszlop-i).classList.add("lephet");
        }
        if(Mezok[sor+i][oszlop-i]!=" "){
            if(feherLep){
                if(Mezok[sor+i][oszlop-i] == Mezok[sor+i][oszlop-i].toUpperCase()){
                    JoDivMegtalal(sor+i,oszlop-i).classList.add("lephet");
                }
            }else{
                if(Mezok[sor+i][oszlop-i] == Mezok[sor+i][oszlop-i].toLowerCase()){
                    JoDivMegtalal(sor+i,oszlop-i).classList.add("lephet");
                }
            }
            break;
        }
        if(++x>1 && kiralye){
            break;
        }
    }
    x = 0;
    for (let i = 1; sor + i <= 11 && oszlop + i <= 7; i++) {
        if(Mezok[sor+i][oszlop+i]==" "){
            JoDivMegtalal(sor+i,oszlop+i).classList.add("lephet");
        }
        if(Mezok[sor+i][oszlop+i]!=" "){
            if(feherLep){
                if(Mezok[sor+i][oszlop+i] == Mezok[sor+i][oszlop+i].toUpperCase()){
                    JoDivMegtalal(sor+i,oszlop+i).classList.add("lephet");
                }
            }else{
                if(Mezok[sor+i][oszlop+i] == Mezok[sor+i][oszlop+i].toLowerCase()){
                    JoDivMegtalal(sor+i,oszlop+i).classList.add("lephet");
                }
            }
            break;
        }
        if(++x>1 && kiralye){
            break;
        }
    }
}

function KiralyLepes(div){
    div.classList.add("Kivalasztott");
    const sor = parseInt(div.dataset.sor);
    const oszlop = parseInt(div.dataset.oszlop);
    FutoLepesek(sor,oszlop,true);
    BastyaLepesek(sor,oszlop,true);
}
function KiralynoLepes(div){
    div.classList.add("Kivalasztott");
    const sor = parseInt(div.dataset.sor);
    const oszlop = parseInt(div.dataset.oszlop);
    FutoLepesek(sor,oszlop,false);
    BastyaLepesek(sor,oszlop,false);
}
