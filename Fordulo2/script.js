var tabla=[["b","h","f","q","k","f","h","b"],
            ["g","g","g","g","g","g","g","g"],
            ["","","","","","","",""],
            ["","","","","","","",""],
            ["","","","","","","",""],
            ["","","","","","","",""],
            ["","","","","","","",""],
            ["","","","","","","",""],
            ["","","","","","","",""],
            ["","","","","","","",""],
            ["G","G","G","G","G","G","G"],
            ["B","H","F","K","Q","F","H","B"]];

            function Jatekeleje()
            {
            
                document.getElementById("tabla").style.opacity="100%";
                document.getElementById("korongok").style.opacity="100%";
                document.getElementById("pontok").style.opacity="100%";
                Jatekveg = false;
                var tabla = document.getElementById("tabla");
                korongok = document.getElementById("korongok");
                pontok = document.getElementById("pontok");
                mozoghatkarika=document.getElementById("mozoghatkarika");
                matrix =[
                    [0,0,0,0,0,0,0,0],
                    [0,0,0,0,0,0,0,0],
                    [0,0,0,0,0,0,0,0],
                    [0,0,0,2,1,0,0,0],
                    [0,0,0,1,2,0,0,0],
                    [0,0,0,0,0,0,0,0],
                    [0,0,0,0,0,0,0,0],
                    [0,0,0,0,0,0,0,0]
                ];
                Tablazat();
                megjelenito();
                karikamegjelenito();
                pontokvalt();
                document.getElementById("Kezdogomb").style.zIndex=2;
                document.getElementById("Kezdogomb").style.display="none";
                var gyozelemszamlalo = document.getElementById("osszeseredmeny");
                pont = document.createElement("p");
                pont.innerHTML = "Fekete győzelmek:"+eredmeny[0]+" Fehér győzelmek:"+eredmeny[1];
                gyozelemszamlalo.appendChild(pont);
                if (lefutott) {
                    document.getElementById("nyert").parentNode.removeChild(document.getElementById("nyert"));
                }
                
                
               
            }
            