window.onload = function () {

    // Liken van een verhaal
    var likeIcon = document.querySelectorAll(".like");

    if (likeIcon[0]) {
        for (var i = 0; i < likeIcon.length; i++) {
            likeIcon[i].addEventListener("click", function () {
                var that = this,
                    counter = that.querySelector("span"),
                    aantal = parseInt(counter.innerHTML);

                aantal += 1;
                counter.innerHTML = aantal;
                counter.classList.add("expand");
                setTimeout(function () {
                    counter.classList.remove("expand");
                }, 300);
                this.classList.add("selected");
            });
        }
    }

    // Verhalen in mijn leeslijst "plaatsen" 
    var lijstIcon = document.querySelectorAll(".opslaan");

    if (lijstIcon[0]) {
        for (var i = 0; i < lijstIcon.length; i++) {
            lijstIcon[i].addEventListener("click", function () {
                var saved = document.getElementById("saved");
                this.classList.add("lijstSelected");

                saved.classList.add("opgeslagen");
                setTimeout(function () {
                    saved.classList.remove("opgeslagen");
                }, 2000);
            })
        }
    }


    // Achievement in laten faden door een class toe te voegen
    setTimeout(function () {
        var achieve = document.querySelector(".achieve");
        achieve.classList.add("inkomen");
        setTimeout(function () {
            achieve.classList.remove("inkomen");
        }, 4000);
    }, 2000);
};

// Ik heb lang lopen hangen, omdat hij met mijn selector niet het object wilden pakken (getElementsByClassName). Ik heb bij een medestudent de oplossing gevonden door gebruik te maken van querySelectorAll. Bedankt daar voor :)