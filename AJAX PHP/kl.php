<?php
// Koneksi ke database
$koneksi = mysqli_connect("localhost", "root", "", "ajax");
$id = $_GET['id'];
$i = 1;
// Periksa koneksi
if (mysqli_connect_error()) {
    die("Koneksi database gagal: " . mysqli_connect_error());
}

// Query untuk mendapatkan data dari database
$query = "SELECT name , lang FROM userinfo WHERE id = $id";
$result = mysqli_query($koneksi, $query);

// Periksa hasil query
if (!$result) {
    die("Error dalam query: " . mysqli_error($koneksi));
}

// Loop melalui hasil query
while ($row = mysqli_fetch_assoc($result)) {
    // Menggunakan explode untuk memisahkan string berdasarkan koma

    $langArray = explode(',', $row['lang']);
    echo $row['name'];

    // Menggunakan foreach untuk mengakses elemen array di dalam kolom
    foreach ($langArray as $nilai) {
        echo "bahasa $i ", $nilai, '<br> ';
        $i++;
    }
}

// Menutup koneksi
mysqli_close($koneksi);
?>