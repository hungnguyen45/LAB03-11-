var progress1 = document.getElementById("progress1");
var progress2 = document.getElementById("progress2");
var progress3 = document.getElementById("progress3");


function chayProgress(element, target) {

    var value = 0;

    var timer = setInterval(function () {

        if (value >= target) {

            clearInterval(timer);

            return;
        }

        value++;

        element.style.width = value + "%";
        element.innerText = value + "%";

    }, 20);

}


chayProgress(progress1, 60);
chayProgress(progress2, 30);
chayProgress(progress3, 53);