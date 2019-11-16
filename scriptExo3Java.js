var  N = document.Fage.nombre1.value;




  


function comAge() {

    var age = document.Fage.nombre1.value;

if (isNaN(age)) {
    alert("Veuillez rentrer un NOMBRE !");
}
else if ( 1 <= age && age <= 17 ) {
    document.writeln("Vous n'êtes pas encore majeur.");
}
else if ( 18 <= age && age  <= 49){
    document.writeln("Vous êtes majeur mais pas encore senior.");
}
else if ( 50 <= age && age  <= 59){
    document.writeln("Vous êtes senior mais pas encore retraité.");
}
else if ( 60 <= age && age  <= 120){
    document.writeln("Vous êtes retraité, allez profiter !!!.");
}
else {
    document.writeln("Vous êtes sérieux, est-ce que vous nous prenez pour des benêts ?");
}

}


