function table () {
var n=document.FTableM.nombre1.value;
var t=document.FTableM.nombre2.value;
var resultat ;
document.write("   <h1 font-size = 20px>TABLE DE MULTIPLICATION</h1>");

    for (i=1; i<=t ; i++){
        resultat=n*i;
        document.write(n+" x "+i+" = "+n*i+"<br>");
    } 

    document.write("<button id='refresh' onclick='document.location.reload(false)'> Rafraichir </button>");
}


    
