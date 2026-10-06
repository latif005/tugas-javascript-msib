// Elemen untuk menampilkan data
const tempatData = document.getElementById("tempatData");
const inputEmail = document.getElementById("emailHapus");

// Fungsi melihat data menggunakan map()
function lihatData() {
    tempatData.innerHTML = dataMahasiswa.map((mahasiswa, index) => {
        return `
            <tr>
                <td>${index + 1}</td>
                <td>${mahasiswa.nama}</td>
                <td>${mahasiswa.umur}</td>
                <td>${mahasiswa.alamat}</td>
                <td>${mahasiswa.email}</td>
            </tr>
        `;
    }).join("");
}

// Fungsi menambah dua data menggunakan push()
function tambahData() {
    dataMahasiswa.push(
        {
            nama: "Kiki Ananda",
            umur: 21,
            alamat: "Bekasi",
            email: "kiki@gmail.com"
        },
        {
            nama: "Lina Marlina",
            umur: 20,
            alamat: "Bogor",
            email: "lina@gmail.com"
        }
    );
    lihatData();

    alert("Berhasil menambahkan 2 data!");
}

// Fungsi Menghapus data berdasarkan email 
function hapusData() {
    const email = inputEmail.value.trim();

    if (email === "") {
        alert("Silahkan masukkan email yang ingin dihapus!");
        return;
    }

    const index = dataMahasiswa.findIndex(
        mahasiswa => mahasiswa.email === email
    );

    if (index !== -1) {
        dataMahasiswa.splice(index, 1);

        lihatData();

        alert("Data berhasil dihapus!");
        inputEmail.value = "";
    } else {
        alert("Data dengan email tersebut tidak ditemukan!");
    }
}

// Menampilkan data saat halaman pertama kali dimuat
lihatData();