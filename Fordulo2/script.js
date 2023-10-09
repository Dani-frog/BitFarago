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

function Main(){
    TablaGen();
}

Main();



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