function popupParfum() {

    var form = document.querySelectorAll("input[type=radio]:checked");
    formlength = form.length;
    for (i = 0; i < formlength; i++) {
        alert("Votre parfum préféré est " + form[i].value);
    }
}