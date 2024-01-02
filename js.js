// function tampilkanPesan(callback) {
//     const nama = prompt('Masukan nama:');
//     callback(nama);
// }
// tampilkanPesan(nama => alert(`halo ${nama}`));

//function halo(nama) {
//   alert(`Selamat pagi ${nama}`);
//}

// var mhs = [
//     { "name": 'Object1', "property": 'Value1' },
//     { "name": 'Object2', "property": 'Value2' },
//     { "name": 'Object3', "property": 'Value3' }
// ];

// // Initializing the variable with an array containing three objects
// mhs.forEach(m => console.log(m.name));

// Accessing and printing the contents of the variable
// function getDataSiswa(url, success, error) {

//     let xhr = new XMLHttpRequest();
//     xhr.onreadystatechange = function () {
//         if (xhr.readyState === 4) {
//             if (xhr.status === 200) {
//                 success(xhr.response);
//             } else if (xhr.status === 404) {
//                 error();
//             }
//         }
//     }
//     xhr.open('get', url);
//     xhr.send();
// }

// getDataSiswa('data/siswa.json', results => {
//     const swa = JSON.parse(results);
//     const sis = swa.students;
//     var p = document.getElementById('siswa');

//     sis.forEach(s => {
//         p.innerHTML += `<p>Name: ${s.name}<br> Class: ${s.class} <br>
//         Absen:${s.Absen}
//         </p>`;
//         console.log(s);
//     });


// }, () => {

// });

// function loadDoc() {
//     const xhttp = new XMLHttpRequest();
//     xhttp.onload = function () {
//         document.getElementById("demo").innerHTML = this.responseText;
//     }
//     xhttp.open("GET", "data/siswa.json");
//     xhttp.send();
// }
// var a = '1';
// var b = '3';
// var t = parseInt(a) + parseInt(b);
console.log('mulai');
$.ajax({
    url: 'data/siswa.json',
    success: (ss) => {

        ss.students.forEach(s => console.log(s.name));

    }, error: () => {

    }
});
console.log('selesai');