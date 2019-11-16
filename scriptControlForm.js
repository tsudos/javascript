function check() {
var nom = document.Fcontact.lenom.value;
var email = document.Fcontact.Email.value;
var taille = email.length;


if (nom == "" && email =="") {
    alert("vous n'avez pas remplis votre nom et votre email ! ");
    document.Fcontact.lenom.focus();
    return false;
}
else if (nom == "")
{
    alert("vous n'avez pas remplis votre nom ! ");
    document.Fcontact.lenom.focus();
    return false;
}
else if (email==""){
    alert("vous n'avez pas remplis votre email");
    document.Fcontact.Email.focus();
    return false;
}
else if ((taille < 8) ){
    alert("erreur dans la saisie de votre mail" ); 
    document.Fcontact.lenom.focus();
    return false;
}
else if ((e1=email.indexOf("@")) == - 1) {
    alert("Votre mail ne comporte pas de '@' " );
    document.Fcontact.lenom.focus(); 
    return false;
}

else if ((e2=email.indexOf(".")) == -1) {
    alert("Votre mail ne comporte pas de '.' " ); 
    document.Fcontact.lenom.focus();
    return false;
}
else if (e1>e2) {
    alert("erreur dans la logique '@' -> '.' " ); 
    document.Fcontact.lenom.focus();
    return false;
}

else return true;


}