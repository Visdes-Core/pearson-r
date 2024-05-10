export interface SiswaType {
    nama: string;
    kelas: string;
    preferensi_jurusan_siswa: { preferensi_jurusan: string }[];
}

export interface MahasiswaType {
    nama: string;
    jurusan: string;
    angkatan: number;
    minat_mahasiswa: { minat: string }[];
    asal_universitas: string;
    organisasi_mahasiswa: {
        jabatan: string;
        nama_organisasi: string;
        akhir_masa_jabatan: number;
        mulai_masa_jabatan: number;
    }[];
    pencapaian_mahasiswa: {
        tahun: number;
        deskripsi: string;
        nama_pencapaian: string;
    }[];
}

export interface UserType {
    id: string;
    email: string;
    mahasiswa: MahasiswaType | null;
    siswa: SiswaType | null;
}