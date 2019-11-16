var i = 0
    //ouveture fermeture panneau social barre
$(document).ready(function() {
    $("#socialbar").click(function() {
        $("#social-network").toggle(1000)
        i = i + 1;
        if (mod == 1) {
            $("#socialbar").html("<img src='images/arrow-1.png' class='arrow' /> Cliquez pour réduire cette barre");
        } else if (mod == 0) {
            $("#socialbar").html("<img src='images/arrow-2.png' class='arrow'/>Cliquez pour agrandir cette barre");
        };
    });
});