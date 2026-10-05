// Data produk awal
let produk = [
    {
        id: 1,
        nama: "Laptop",
        harga: 7000000,
        stok: 5
    },
    {
        id: 2,
        nama: "Mouse",
        harga: 200000,
        stok: 10
    },
    {
        id: 3,
        nama: "Keyboard",
        harga: 350000,
        stok: 7
    },
    {
        id: 4,
        nama: "Headset",
        harga: 450000,
        stok: 6
    },
    {
        id: 5,
        nama: "Webcam",
        harga: 600000,
        stok: 4
    },
];

// Rest parameter
function buatProduk(...produkBaru) {
    const [id, nama, harga, stok] = produkBaru;

    return {
        id: id,
        nama: nama,
        harga: harga,
        stok: stok
    };
}

// Menampilkan semua produk
function tampilkanProduk() {

    const listProduk = document.getElementById("listProduk");

    listProduk.innerHTML = "";

    produk.forEach((item) => {
        // Destructuring
        const { id, nama, harga, stok } = item;

        const div = document.createElement("div");
        div.classList.add("produk");

        div.innerHTML = `
            <div>
                <h3>${nama}</h3>
                <p>Harga: Rp ${harga.toLocaleString("id-ID")}</p>
                <p>Stok: ${stok}</p>
            </div>

            <button class="btn-hapus" onclick="hapusProduk(${id})" >
            Hapus
            </button>

        `;
        listProduk.appendChild(div);
    });
}

// Menambahkan produk 
function tambahProduk() {
    const nama = document.getElementById("namaProduk").value;
    const harga = Number(document.getElementById("hargaProduk").value);
    const stok = Number(document.getElementById("stokProduk").value);

    if (nama === "" || harga === 0 || stok === 0) {
        alert("Semua data produk harus diisi!");
        return;
    }

    const idBaru = produk.length + 1;

    const produkBaru = buatProduk(
        idBaru,
        nama,
        harga,
        stok   
    );

    // Spread operator
    produk = [...produk, produkBaru];

    tampilkanProduk();

    document.getElementById("namaProduk").value = "";
    document.getElementById("hargaProduk").value = "";
    document.getElementById("stokProduk").value = "";
}

// Menghapus produk
function hapusProduk(id) {

    produk = produk.filter((item) => item.id !== id);

    tampilkanProduk();
}

// Event listener
document.getElementById("btnTambah").addEventListener("click", tambahProduk);

// Menampilkan produk saat halaman dimuat
tampilkanProduk();
