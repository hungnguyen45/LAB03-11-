function hienThiGio() {

    var now = new Date();

    var gio = now.getHours();
    var phut = now.getMinutes();
    var giay = now.getSeconds();

    var ampm = gio >= 12 ? "PM" : "AM";

    gio = gio % 12;

    if (gio === 0) {
        gio = 12;
    }

    gio = gio < 10 ? "0" + gio : gio;
    phut = phut < 10 ? "0" + phut : phut;
    giay = giay < 10 ? "0" + giay : giay;

    document.getElementById("time").innerText =
        gio + ":" + phut + ":" + giay + " " + ampm;
}

hienThiGio();

setInterval(hienThiGio, 1000);