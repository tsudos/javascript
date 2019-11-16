function change_valeur() {
    list = document.getElementById("select_age");
    list.addEventListener('change', choix);



    function choix() {
        alert(list.options[list.selectedIndex].innerHTML)
    }

}