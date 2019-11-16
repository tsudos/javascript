
/*function tableR() {
var nb = 1;
var n='n';

var J= n+nb;
var R = n+(nb+1);
    document.write("bien joué " + R);}*/

function comparer (a, b) {
            return a-b;
        }


function tableR() {

    var n1=document.FTableR.nombre1.value;
    var n2=document.FTableR.nombre2.value;
    var n3=document.FTableR.nombre3.value;
    var n4=document.FTableR.nombre4.value;
    var n5=document.FTableR.nombre5.value;
    var n6=document.FTableR.nombre6.value;
    var n7=document.FTableR.nombre7.value;
    var n8=document.FTableR.nombre8.value;
    var n9=document.FTableR.nombre9.value;
    var n10=document.FTableR.nombre10.value;
    var tableN = [n1,n2,n3,n4,n5,n6,n7,n8,n9,n10];


    //tab 1
    document.writeln("<h2>tableau de notes non-triées</h2>" + "<table border='2'><caption>tableau des notes non-triées</caption><thead><tr><th>N° note</th><th>Note</th><tbody>");

    for (var i=0; i<10 ; i++) {
                
        document.write("<tr><td> " + i + " </td><td> " + tableN[i] + " </td></tr>");
    }


    document.writeln("</tbody></table>");



    // tri
    tableN.sort(comparer);



    //tab2
    document.writeln("<h2>tableau de notes triées</h2>" + "<table border='2'><caption>tableau des notes</caption><thead><tr><th>N° note</th><th>Note</th><tbody>");

    for (var i=0; i<10 ; i++) {
                
        document.write("<tr><td> " + i + " </td><td> " + tableN[i] + " </td></tr>");
    }


    document.writeln("</tbody></table>");






}

