document.getElementById("chuyenNganh").addEventListener("change", function () {

    var chuyenNganh = this.value;
    var soTruong = document.getElementById("soTruong");

    if (chuyenNganh === "HeThong") {
        soTruong.innerText = "Phân tích & Thiết kế";
    }
    else if (chuyenNganh === "PhanMem") {
        soTruong.innerText = "Lập trình";
    }
    else if (chuyenNganh === "Mang") {
        soTruong.innerText = "Quản lý mạng";
    }

});


var ngoaiNgu = document.querySelectorAll(
    'input[name="ngoaiNgu"]'
);

var ketQuaNgoaiNgu =
    document.getElementById("ketQuaNgoaiNgu");

ngoaiNgu.forEach(function (checkbox) {

    checkbox.addEventListener("change", function () {

        var danhSach = [];

        ngoaiNgu.forEach(function (item) {

            if (item.checked) {
                danhSach.push(item.value);
            }

        });

        ketQuaNgoaiNgu.innerText =
            danhSach.join(" và ");

    });

});


document.getElementById("btnDangKy")
    .addEventListener("click", function () {

        var maSV =
            document.getElementById("maSV").value.trim();

        var hoTen =
            document.getElementById("hoTen").value.trim();

        var tuoi =
            document.getElementById("tuoi").value;

        var errMaSV =
            document.getElementById("errMaSV");

        var errHoTen =
            document.getElementById("errHoTen");

        var errTuoi =
            document.getElementById("errTuoi");

        var thongBao =
            document.getElementById("thongBao");

        errMaSV.innerText = "";
        errHoTen.innerText = "";
        errTuoi.innerText = "";
        thongBao.innerText = "";

        if (maSV.length !== 10) {

            errMaSV.innerText =
                "Mã SV phải có 10 ký tự";

            return;
        }

        if (hoTen === "") {

            errHoTen.innerText =
                "Họ tên không được để trống";

            return;
        }

        if (hoTen.length > 30) {

            errHoTen.innerText =
                "Họ tên không quá 30 ký tự";

            return;
        }

        if (tuoi === "") {

            errTuoi.innerText =
                "Vui lòng nhập tuổi";

            return;
        }

        if (Number(tuoi) < 18) {

            errTuoi.innerText =
                "Tuổi phải từ 18 trở lên";

            return;
        }

        thongBao.innerText =
            "Bạn đã đăng ký thành công!";

        thongBao.style.color = "green";

    });