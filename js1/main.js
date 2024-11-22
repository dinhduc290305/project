// viet 1 ham trong js thuc hien:
// 1. tao 1 bien luu danh sach lop gom 9 phan tu la thanh vien nhom minh bao gom:
// - ho va ten
// - gioi tinh
// - noi sinh
// 2. dung js de in danh sach ra html

let person= [
    {name :" Dinh Duc ", sex: " male ", address: " HN "},
    {name :"Luu Dung", sex: "male", address: "HN"},
    {name :"Van Duong", sex: "male", address: "HN"},
    {name :"Hai Anh", sex: "male", address: "HN"},
    {name :"Khuong Khai", sex: "male", address: "HN"},
    {name :"Nguyen Linh", sex: "male", address: "HN"},
    {name :"Tuan Phong", sex: "male", address: "HN"}
];
for(let i = 0; i < person.length; i++) {
    document.write(person[i].name+" - "+ person[i].sex +" - "+  person[i].address +"<br>");
}
