let chieudai,chieurong,dientich;
function nhap() {
    chieudai = Number(prompt('Chieu dai=  '));
    chieurong=Number(prompt('Chieu rong=  '));
}
nhap();
dientich=chieudai*chieurong;
document.write("Dien tich= ",dientich);