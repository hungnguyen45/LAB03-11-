function kiemTraThongTin() {

    var ten = document.getElementById("ten").value.trim();
    var diaChi = document.getElementById("diaChi").value.trim();
    var soDienThoai = document.getElementById("soDienThoai").value.trim();
    var tinhThanhPho = document.getElementById("tinhThanhPho").value.trim();
    var quanHuyen = document.getElementById("quanHuyen").value.trim();
    var phuongXa = document.getElementById("phuongXa").value.trim();

    var hopLe = true;

    document.getElementById("errTen").innerText = "";
    document.getElementById("errDiaChi").innerText = "";
    document.getElementById("errSoDienThoai").innerText = "";
    document.getElementById("errTinhThanhPho").innerText = "";
    document.getElementById("errQuanHuyen").innerText = "";
    document.getElementById("errPhuongXa").innerText = "";

    if (ten === "") {
        document.getElementById("errTen").innerText =
            "Tên không được để trống";
        hopLe = false;
    }

    if (diaChi === "") {
        document.getElementById("errDiaChi").innerText =
            "Địa chỉ không được để trống";
        hopLe = false;
    }

    if (soDienThoai === "") {
        document.getElementById("errSoDienThoai").innerText =
            "Số điện thoại không được để trống";
        hopLe = false;
    }
    else if (!/^\d{10,}$/.test(soDienThoai)) {
        document.getElementById("errSoDienThoai").innerText =
            "Số điện thoại phải từ 10 số trở lên";
        hopLe = false;
    }

    if (tinhThanhPho === "") {
        document.getElementById("errTinhThanhPho").innerText =
            "Tỉnh / thành phố không được để trống";
        hopLe = false;
    }

    if (quanHuyen === "") {
        document.getElementById("errQuanHuyen").innerText =
            "Quận / huyện không được để trống";
        hopLe = false;
    }

    if (phuongXa === "") {
        document.getElementById("errPhuongXa").innerText =
            "Phường / xã không được để trống";
        hopLe = false;
    }

    return hopLe;
}


document.getElementById("btnVanPhong").addEventListener("click", function () {

    document.getElementById("thongBaoLoai").innerText =
        "Bạn chọn giao hàng tại văn phòng";

});


document.getElementById("btnNhaRieng").addEventListener("click", function () {

    document.getElementById("thongBaoLoai").innerText =
        "Bạn chọn giao hàng tại nhà riêng";

});


document.getElementById("btnLuu").addEventListener("click", function () {

    if (kiemTraThongTin()) {

        alert("Lưu thông tin thành công");

    }
    else {

        alert("Thông tin nhập không hợp lệ");

    }

});