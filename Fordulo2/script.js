var jatekTer = [["b","l","f","q","k","f","l","b"],
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

var jokerlepes1,jokerlepes2,duplalepes1,duplalepes2=true;//joker egy figura egy másik kiválasztott figura lépésével léphet. duplalepes meg egy jatekos kettőször lép.
//Gyalog 1, Futó 2, Huszár 2, Király 2, Bástya 3, Vezér 5 pontok 

function Main(){
    TablaGen();
}

Main();

function Korvege() {
    //Jatekvege1: minden kör elején megnézi a fekete meg feher babuk darabszámát és ha egyiknek száma kevesebb mint egy akkor az vesztett(másik nyer). 
    //Jatekvege2: Ha a megadott körszámok számát eléri a játék a leütött bábúk pontjai alapján legyen nyertes(megnézni mien bábúk nincsenek és azok pont összege szerint).
}

function TablaGen() {
    let feher = false;
    for (let i = 0; i < 12; i++) {
        feher = !feher;
        for (let j = 0; j < 8; j++) {
            const cella = document.createElement("div");
            cella.classList.add("cella");
            cella.classList.add((feher) ? "feher" : "fekete");
            feher = !feher;
            cella.dataset.row = i;
            cella.dataset.col = j;
            cella.setAttribute("onclick", "Kattint(this)");
            document.getElementById("tabla").appendChild(cella);
        }
    }
}

 function Kattint(){

 }