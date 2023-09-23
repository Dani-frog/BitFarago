
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
    const leirasok=["A Kéményseprők V2 egyik fő tagja: Tóth Dániel János, Ceglédi SZC Közgazdasági és Informatikai Technikum tanulója,\nKedvenc programozási nyelve a Python: 'A Python olyan mint minden kezdő gyorstalpalója, és emiatt csak jó gondolataim vannak róla, én magam is a Python programozási nyelvel kezdtem a kódolást!'\nKedvenc állata: Macska ≽^•⩊•^≼\nÁltalában Optimista, pozitív hozzáállású ember.\nÉrdekli a Filozófia, 3D Dizájnolás és Zene alkotás.",
                    "A Kéményseprők V2 egyik fő tagja: Jakab Botond, Ceglédi SZC Közgazdasági és Informatikai Technikum tanulója,\nKedvenc programozási nyelve a Python 'A Python olyan mint mindennek a kezdete és emiatt csak jó gondolataim vannak róla, én magam is a Python programozási nyelvel kezdtem a kódolást!'\nKedvenc állata: Macska ≽^•⩊•^≼\nÁltalában Optimista, pozitív hozzáállású ember.\nÉrdekli a Filozófia, 3D Dizájnolás és Zene alkotás.", 
                    "A Kéményseprők V2 egyik fő tagja: Havasi Alex Márton, Ceglédi SZC Közgazdasági és Informatikai Technikum tanulója,\nKedvenc programozási nyelve a Python 'A Python olyan mint mindennek a kezdete és emiatt csak jó gondolataim vannak róla, én magam is a Python programozási nyelvel kezdtem a kódolást!'\nKedvenc állata: Macska ≽^•⩊•^≼\nÁltalában Optimista, pozitív hozzáállású ember.\nÉrdekli a Filozófia, 3D Dizájnolás és Zene alkotás.",
                    "A Kéményseprők V2 egyik felkészítő tanárja: Szabó Emánuel, Ceglédi SZC Közgazdasági és Informatikai Technikum tanára,\nPreferált programozási nyelve a Python, pár gondolata erről: 'Könnyű, érthető nyelv, egyik legérthetőbb szintaxissal rendelkező nyelv.'\nKedvenc állata: Béka ≽^•⩊•^≼\nLaza,de egyben szigorú tanár, informatika diákok kedvenc tanárainak egyike.\nÉrdekli a Filozófia, 3D Dizájnolás és Zene alkotás.",
                    "A Kéményseprők V2 egyik felkészítő tanárja: Szabó Dániel, Ceglédi SZC Közgazdasági és Informatikai Technikum tanára\nPreferált programozási nyelve a C#, pár gondolata erről: 'Gyors és organizált nyelv, amit könnyen lehet olvasni és érteni is.'\nKedvenc állata: Kutya ≽^•⩊•^≼\nDiák orientált tanár, aki a tanítványainak a fejlődésére törekszik, informatika diákok kedvenc tanárainak egyike.\nÉrdekli a Filozófia, 3D Dizájnolás és Zene alkotás.",]; 
                    
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