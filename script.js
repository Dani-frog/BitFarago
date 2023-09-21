
var idozito;
IdoKiiratas();
idozito = setInterval(IdoKiiratas,1000);

function IdoKiiratas(){
    let Ma = new Date();
    let Most=Ma.toLocaleString();
    document.getElementById("Time").innerHTML = Most;
}

var i = 0;
function KoviKep()
{
    let t = ["Kepek/Dani.png","Kepek/Boti.png","Kepek/Alex.png"];
    document.getElementById("Slideshow").innerHTML = "<img src="+t[i++]+" class="+"SlideShow"+"></img>"
    if (i==t.length)
        i = 0;
}