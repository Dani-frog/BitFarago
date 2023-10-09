
function TablaGen() {
    let feher = true;
    for (let i = 0; i < 8; i++) {
        feher = !feher;
        for (let j = 0; j < 12; j++) {
            const cella = document.createElement("div");
            cella.classList.add("cella");
            cella.classList.add((feher) ? "feher" : "fekete");
            feher = !feher;
            cella.dataset.row = i;
            cella.dataset.col = j;
            cella.setAttribute("onclick", "Kattint()");
            document.getElementById("tabla").appendChild(cella);
        }
    }
}

 function Main(){
     TablaGen();
 }

 Main();