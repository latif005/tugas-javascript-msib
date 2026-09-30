// Data pegawai
let nama = "Dodi Prayodi";
let umur = 25;
let jabatan = "Manajer";
let status = "Menikah";

// Menentukan gaji pokok berdasarkan jabatan
let gajiPokok;

if (jabatan == "Manajer") {
    gajiPokok = 15000000;
} else if (jabatan == "Asisten Manajer") {
    gajiPokok = 10000000;
} else if (jabatan == "Staff") {
    gajiPokok = 5000000;
}

// Menghitung tunjangan jabatan
let tunjanganJabatan = 15 / 100 * gajiPokok;

// Menghitung BPJS
let bpjs = 10 / 100 * gajiPokok;

// Menghitung tunjangan keluarga menggunakan ternary
let tunjanganKeluarga = status == "Menikah" 
    ? 20 / 100 * gajiPokok 
    : 0;

// Menghitung total gaji
let totalGaji = gajiPokok + tunjanganJabatan + bpjs + tunjanganKeluarga;

// Menampilkan data ke tabel
document.getElementById("dataPegawai").innerHTML = `
    <tr>
        <td>${nama}</td>
        <td>${umur} tahun</td>
        <td>${jabatan}</td>
        <td>${status}</td>
        <td>Rp ${gajiPokok.toLocaleString("id-ID")}</td>
        <td>Rp ${tunjanganJabatan.toLocaleString("id-ID")}</td>
        <td>Rp ${bpjs.toLocaleString("id-ID")}</td>
        <td>Rp ${tunjanganKeluarga.toLocaleString("id-ID")}</td>
    </tr>
`;

// Menampilkan total gaji
document.getElementById("totalGaji").innerHTML =
    "Rp " + totalGaji.toLocaleString("id-ID");