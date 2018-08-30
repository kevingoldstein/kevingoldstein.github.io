var ima = document.getElementsByClassName("plaatje");

function verander() {
    if ($(window).width() >= 0 && $(window).width() <= 400) {
        $(".plaatje").attr("src", "/img2/CockM.png");
    } else if ($(window).width() > 400 && $(window).width() <= 768) {
        $(".plaatje").attr("src", "/img2/CockT.png");
    }
});

window.onresize = verander;