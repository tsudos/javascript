function imgClick() {

    var texte = document.querySelectorAll("body>div>section>p");
    var textelength = texte[0].innerHTML.length;
    var textHTML = texte[0].innerHTML
    alert(textHTML.substring(0, 51));

}

//ChangeColorPDP
function setupListeners() {
    PDP = document.getElementById("footer");
    PDP.addEventListener('click', action1);
    SEC = document.getElementById("section");
    SEC.addEventListener('click', action2);
    IMG = document.getElementById("IMG");
    IMG.addEventListener('click', action3);
}




function action1() {
    PDP = document.getElementById("footer");
    PDP.style.backgroundColor = "rgba(0, 0, 255, 0.5)";
    PDP.style.border = "4px solid #290de6";
    PDP.style.color = "#290de6";
    PDP.style.fontSize = "20px;";
}

function action2() {
    SEC = document.getElementById("section");
    SEC.style.backgroundColor = "rgba(0, 0, 255, 0.5)";
    SEC.style.border = "4px solid #290de6";
    SEC.style.color = "#290de6";
    SEC.style.fontSize = "20px;";
}

function action3() {
    IMG = document.getElementById("IMG");
    IMG.style.opacity = "1";
    IMG.style.border = "6px solid Black";
}