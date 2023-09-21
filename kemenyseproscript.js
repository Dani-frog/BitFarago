
var idozito;
IdoKiiratas();
idozito = setInterval(IdoKiiratas,1000);
var megnyitva=false;


function IdoKiiratas(){
    let Ma = new Date();
    let Most=Ma.toLocaleString();
    document.getElementById("Time").innerHTML = Most;
}

function Leiras(x)
{
    const leirasok=["adass","adassanyad","adassapad","adasstesod","adassmamádasdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd<br>dddddddddddddddddddddddddddddddddddddddddddadassmamádasdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddadassmamádasdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddadassmamádasddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd"]; 

    if (!megnyitva) {
        megnyitva = true;
        document.getElementById("Leiras").innerHTML=leirasok[x-1];
    }
    else{
        megnyitva=false;
        document.getElementById("Leiras").innerHTML="";
    }
    
    
}

var i = 0;
function KoviKep()
{
    let t = ["Kepek/Dani.png","Kepek/Boti.png","Kepek/Alex.png"];
    document.getElementById("Slideshow").innerHTML = "<img src="+t[i++]+" class="+"SlideShow"+"></img>"
    if (i==t.length)
        i = 0;
}