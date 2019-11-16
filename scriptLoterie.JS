function Loterie(){

var n1, n2, n3, i=0;

document.write("<button id='refresh' onclick='document.location.reload(false)'> Rafraichir </button>");
document.writeln("<table border='2' id='tabLot' ><caption>Loterie du jour</caption><thead><tr><th>essai</th><th>Nombre 1</th><th>Nombre 2</th><th>Nombre 3</th></tr></thead><tbody>");


do{
i++
n1=Math.floor((Math.random()*100)+1);
//floor arrondi inferieur  / round arrondi le plus proche 1.4->1 1.6->2 / ceil arrondi superieur
n2=Math.floor((Math.random()*100)+1);
n3=Math.floor((Math.random()*100)+1);
document.write("<tr><td> " + i + " </td><td> " + n1 + " </td><td> " + n2 + " </td><td> " + n3 + " </td></tr> ");




}while (n1%2==1 || n2%2==0 || n3%2==0);
//}while (n1%2!==0 || n2%2!==1 || n3%2!==1);

document.writeln("</tbody></table>");
if (i==1){
document.writeln("resultat Paire/Impaire/Impaire en "+i+" essai")}
else document.writeln("resultat Paire/Impaire/Impaire en "+i+" essais")



}   




