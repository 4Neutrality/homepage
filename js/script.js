$(document).ready(function() {
    $("#dropdown").accordion({ 
                        collapsible: true,
                        active: false,
                        heightStyle: "content"
     });

    $("#pen_hover").hover(function() {
            $(this).attr("src", "images/big_tux_invert.png");
            }, function() {
            $(this).attr("src", "images/big_tux.png");
    });

    $("#dropdown h3").hover(function() {
            $(this).css("color", "white");
            }, function() {
            $(this).css("color", "#B2B2FF");
    });
});
