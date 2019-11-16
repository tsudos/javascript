
var A = 15;
var B = 10;
var H = "Hello";
var X = A + B;
var Y = H + B;
var Z = H + H;
var X1 = A+B==B+A; 
var C = parseFloat(prompt('entrer une donnée : '));
//si on veut etre sure que l'on prenne un interger
var D = parseFloat(prompt('entrer une donnée : '));
//pop-up
alert(A  + " + " + B +" = "+ X + " type du resultat : "+ typeof X);
alert(H  + " + " + B +" = "+ Y + " type du resultat : "+ typeof Y);
alert(H  + " + " + H +" = "+ Z + " type du resultat : "+ typeof Z);
alert(X1 + " type du resultat : "+ typeof X1);
//dans le document
document.write("multiplication de : " + C + " et " + D + " = " + parseFloat (C*D));
document.write("<br/>soustraction de : " + C + " et " + D + " = " + C-D);