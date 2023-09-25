
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
    const leirasok=["-A Kéményseprők V2 egyik fő tagja: Tóth Dániel János, Ceglédi SZC Közgazdasági és Informatikai Technikum tanulója,\n-Kedvenc programozási nyelve a Python: 'A Python olyan mint minden kezdő gyorstalpalója, és emiatt csak jó gondolataim vannak róla, én magam is a Python programozási nyelvel kezdtem a kódolást!'\n-Kedvenc állata: Macska ≽^•⩊•^≼\n-Általában Optimista, pozitív hozzáállású ember, az élet nagyságos, bizánci dolgaiban keresi a végtelen gyönyörűséget.\nÉrdekli a Filozófia, amelyben a humán lélek titkait próbálja felfedezni, a 3D Dizájnolás, amelyben pedig a humán fizikai szépségeket akarja ábrázolni és Zene alkotás ahol a lelket egy ritmusra rakja a melódia megszólaltatásával.",
                    "-A Kéményseprők V2 egyik fő tagja: Jakab Botond, a kéményseprők lelkes zöldfülűje! A Ceglédi SZC Közgazdasági és Informatikai Technikum tanulója,\n-Kedvenc programozási nyelve a Javascript 'Azért a kedvencem a javascript, mert hasonlít a C#-ra de kicsit szabadabban lehet használni a rendelkezésünkre álló adottságokat.'\n-Kedvenc állata: Kutya (❍ᴥ❍ʋ) \n-Általában Pesszimista, negatív hozzáállású ember, ámde egyedül, gyorsan végzi el a rászabott feladatokat.\nÉrdekli a természet, szeret a szabadban kampalyogni, felfedezni a világ adta csodákat. Viszont amikor nem a vad világban tölti perceit, szeret fenségeset aludni a nap bármely időpontjában és el csalinkázni az álmok világában. Szabad idejében magának teremti meg a betevő falatot, isteni finom ételekkel elégíti ki éhinségi vágyait.", 
                    "-A Kéményseprők V2 egyik fő tagja: Havasi Alex Márton, Ceglédi SZC Közgazdasági és Informatikai Technikum tanulója,\n-Kedvenc programozási nyelve a C# melyet lankadhatatlan lelkesedéssel próbál elsajátítani.\n-Kedvenc állata: Elefánt ૮₍  ˶•⤙•˶ ₎ა \n-Általában Optimista hozzáállássa segítségével vészeli át a nehéz időket a közgázban.  \n-Érdekli a nyelvtanulás, a gasztronómia és a történelem. Az érdekeltségéből való előnye okán gyakran végez korrepetálást osztálytársain. Egyszerű vidéki gazdálkodó ember, aki neveltetéséből és életkörülményeiből adódóan sok időt tölt a kertben és a természetben ahol művészien élvezi a természet, néha puszta csiripeléssel félbeszakított, varázslatos csendjét.",
                    "-A Kéményseprők V2 egyik felkészítő tanárja: Szabó Emánuel, Ceglédi SZC Közgazdasági és Informatikai Technikum tanára,\n-Preferált programozási nyelve a Javascript és C++. \n-Kedvenc állata: Béka  _(°︿°)_\n-Laza,de néha szigorú tanár, mindent meg lehet vele beszélni, a diákok kedvenc tanára.\n-Szereti a logikán alapuló játékokat.",
                    "-A Kéményseprők V2 egyik felkészítő tanárja: Szabó Dániel, Ceglédi SZC Közgazdasági és Informatikai Technikum tanára\n-Preferált programozási nyelve a C#. \n-Kedvenc állata: Kutya (❍ᴥ❍ʋ)\n-Diák orientált tanár, aki a tanítványainak a fejlődésére törekszik, a diákok kedvenc tanára.\n-Szereti a kódolási kihívásokat, amivel újabb szintre emelheti magát.",]; 
                    
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