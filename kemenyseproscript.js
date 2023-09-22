
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
        GombokInaktiv(x);
    }
    else{
        megnyitva=false;
        document.getElementById("Leiras").innerHTML="";
        GombokAktiv(x);
    }

}

function GombokAktiv(x){
    for(let i = 1;i<6;i++){
        if(i!=x){
            if(i<4){
                document.getElementById("gomb"+i+"").classList = "csapattagokOszlopGomb";
                document.getElementById("gomb"+i+"").setAttribute("onclick","Leiras("+i+")");
                
            }
            else{
                document.getElementById("gomb"+i+"").classList = "tanarokOszlopGomb";
                document.getElementById("gomb"+i+"").setAttribute("onclick","Leiras("+i+")");
            }
            
        }
    }
}

function GombokInaktiv(x){
    for(let i = 1;i<6;i++){
        if(i!=x){
            if(i<4){
                document.getElementById("gomb"+i+"").classList = "csapattagokOszlopGombInaktiv";
                document.getElementById("gomb"+i+"").removeAttribute("onclick");
            }
            else{
                document.getElementById("gomb"+i+"").classList = "tanarokOszlopGombInaktiv";
                document.getElementById("gomb"+i+"").removeAttribute("onclick");
            }
            
        }
    }
}

var i = 0;
function KoviKep()
{
    let t =["Kepek/Tajkepek/tajkep1.png","Kepek/Tajkepek/tajkep2.png","Kepek/Tajkepek/tajkep3.png",
            "Kepek/Tajkepek/tajkep4.png","Kepek/Tajkepek/tajkep5.png","Kepek/Tajkepek/tajkep6.png"];

    document.getElementById("Slideshow").innerHTML = "<img src="+t[i++]+" class="+"SlideShowalap"+"></img>"
    if (i==t.length)
        i = 0;
}