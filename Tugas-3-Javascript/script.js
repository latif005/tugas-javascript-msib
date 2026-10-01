let produkToko = [
    {id: 1, nama: "Laptop", harga: 7000000, stok: 5 },
    {id: 2, nama: "Mouse", harga: 200000, stok: 5 },
    {id: 3, nama: "Keyboard", harga: 350000, stok: 7 }
];

function tambahProduk(nama, harga, stok) {
    let idBaru = produkToko.length + 1;

    let produkBaru = {
        id: idBaru,
        nama: nama,
        harga: harga,
        stok: stok
    };

    produkToko.push(produkBaru);

    console.log("Produk berhasil ditambahkan!");
}

function hapusProduk(id) {
    let index = produkToko.findIndex(function(produk) {
        return produk.id === id;
    });

    if (index !== -1) {
        produkToko.splice(index, 1);
        console.log("Produk berhasil dihapus!");
    } else {
        console.log("Produk dengan ID tersebut tidak ditemukan.");
    }
}

function tampilkanProduk() {
    let daftarProduk = document.getElementById("daftarProduk");

    daftarProduk.innerHTML = "";

    produkToko.forEach(function(produk) {
        daftarProduk.innerHTML += `
            <div class="produk">
                <p><strong>ID:</strong> ${produk.id}</p>
                <p><strong>Nama:</strong> ${produk.nama}</p>
                <p><strong>Harga:</strong> Rp ${produk.harga.toLocaleString()}</p>
                <p><strong>Stok:</strong> ${produk.stok}</p>
            </div>
        `;
    });
}


// Menampilkan produk awal
tampilkanProduk();

// Menambahkan produk baru
tambahProduk("Headset", 450000, 8);
tambahProduk("VGA", 50000000, 3);

// Menampilkan produk setelah ditambahkan
tampilkanProduk();

// // Menghapus produk dengan ID 2
// hapusProduk(2);

// // Menampilkan produk setelah dihapus
// tampilkanProduk();