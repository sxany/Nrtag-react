// Gunakan database (jika belum ada, otomatis dibuat)
use("beritaDB");

// Buat koleksi "news"
db.createCollection("news");

// Tambahkan data berita
db.news.insertMany([
    { id: "1", title: "Judul Berita 1", content: "Isi berita pertama...", image: "/images/mumbai.jpg" },
    { id: "2", title: "Judul Berita 2", content: "Isi berita kedua...", image: "/images/mumbai.jpg" },
    { id: "3", title: "Judul Berita 3", content: "Isi berita ketiga...", image: "/images/mumbai.jpg" },
    { id: "4", title: "Judul Berita 4", content: "Isi berita keempat...", image: "/images/mumbai.jpg" }
]);

// Konfirmasi data berhasil ditambahkan
db.news.find();
