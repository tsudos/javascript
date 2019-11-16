function affiche_date() {

    var maintenant = new Date();
    // methode get date : renvoi un nb entier correspondant au nbr du jours
    var jour = maintenant.getDate();

    // methode getFullYear
    var annee = maintenant.getFullYear();




    //methode getday reetourne un chiffre compris entre 0 et 6
    var jSemaine = maintenant.getDay();

    var strjSemaine = "";

    // autre façons de faire
    var jours = ["dimanche", "lindi", "mardi", "mercredi", "jeudi", "vendredi", "samedi"];

    var strjSemaine = jours[jSemaine];






    // methode getMonth
    var nbMois = new Date().getMonth();

    var mois = ["janvier", "février", "mars", "avril", "mai", "juin", "juillet", "août", "septembre", "octobre", "novembre", "décembre"];

    var strMois = mois[nbMois]


    document.writeln(strjSemaine + " " + jour + " " + strMois + " " + annee);
}


//citation
function hasard(nMax) {
    return Math.floor(Math.random() * nMax);
}


maxCitations = 6;

function maCitation() {
    var n = hasard(maxCitations);
    var cit = "";
    switch (n) {
        case 0:
            cit = "L'admiration commence où finit la compréhension";
            break;
        case 1:
            cit = "Aucun être ne peut en sauver un autre. Il faut se";
            break;
        case 2:
            cit = "L'avenir, c'est du passé en préparation.";
            break;
        case 3:
            cit = "Le secret d'ennuyer est celui de tout dire.";
            break;
        case 4:
            cit = "JavaScript POUR LES NULLOS !";
            break;
        case 5:
            cit = "Le secret de Javascript est dans son langage ! ";
            break;
    }

    return cit;
}

//ChangeColorPDP
function setupListeners() {
    PDP = document.getElementById("footer");
    PDP.addEventListener('click', action1);
}




function action1() {
    PDP = document.getElementById("footer");
    PDP.style.backgroundColor = "black";
    PDP.style.color = "white";
}