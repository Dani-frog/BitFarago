
var idozito;
IdoKiiratas();
idozito = setInterval(IdoKiiratas,1000);

function IdoKiiratas(){
    let Ma = new Date();
    let Most=Ma.toLocaleString();
    document.getElementById("Time").innerHTML = Most;
}

var i = 0;

function Kepmutat()
{
    let t = ["Kep1","Kep2","Kep3"];
    
    document.getElementById(t[i++]).style.display="block";
    if (i==t.length) {
        
    }
   
}