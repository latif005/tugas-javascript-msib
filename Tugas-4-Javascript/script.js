// Membuat class Pelanggan
class Pelanggan {
    constructor(nama, nomorTelepon) {
        this.nama = nama;
        this.nomorTelepon = nomorTelepon;
        this.kendaraanDisewa = null;
    }

    // Method untuk mencatat transaksi penyewaan
    sewaKendaraan(kendaraan) {
        this.kendaraanDisewa = kendaraan;
    }

    // Method untuk menampilkan data pelanggan
    tampilkanData() {
        return `
            <div class="pelanggan">
                <h3>${this.nama}</h3>
                <p>Nomor Telepon: ${this.nomorTelepon}</p>
                <p>Kendaraan Disewa: ${this.kendaraanDisewa}</p>
            </div>
        `;
    }
}

// Membuat objek pelanggan
const pelanggan1 = new Pelanggan("Budi", "081234567890");
const pelanggan2 = new Pelanggan("Andi", "082345678901");
const pelanggan3 = new Pelanggan("Siti", "083456789012");

// Mencatat transaksi penyewaan kendaraan
pelanggan1.sewaKendaraan("Toyota Avanza");
pelanggan2.sewaKendaraan("Honda Brio");
pelanggan3.sewaKendaraan("Yamaha NMAX");

// Memasukkan semua pelanggan ke dalam array
const daftarPelanggan = [
    pelanggan1,
    pelanggan2,
    pelanggan3
];

// Menampilkan daftar pelanggan
const container = document.getElementById("daftarPelanggan");

daftarPelanggan.forEach(function(pelanggan) {
    container.innerHTML += pelanggan.tampilkanData();
});