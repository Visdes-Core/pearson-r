'use client'
import {
    createContext,
    useContext,
    ReactNode,
} from "react"

import axios from "axios"

import { useRouter } from "next/navigation"
import Cookies from "js-cookie"
import { UUID } from "crypto"

type OnboardingContextValue = {
    roleSiswa: (data: {
        id : UUID,
        nama: String
        kelas: String
        preferensi_jurusan: String[]
    }) => void
    roleMahasiswa: (data : {
        id : UUID,
        nama : String
        asal_universitas : String
        angkatan : String
        jurusan: String
        minat: String[]
        organisasi: {
            nama_organisasi : String
            jabatan : String
            mulai_masa_jabatan : String
            akhir_masa_jabatan : String
        }[]
        pencapaian: {
            nama_pencapaian: String
            tahun: String
            deskripsi: String
        }[]
    }) => void
}

const OnboardingContext = createContext({} as OnboardingContextValue)

export const useOnboardingContext = () => useContext(OnboardingContext)

export const OnboardingContextProvider = ({ children }: { children: ReactNode }) => {

    const router = useRouter()

    const roleSiswa = async (data: {
        id : UUID,
        nama: String
        kelas: String
        preferensi_jurusan: String[]
    }) => {
        const body = {
            nama : data.nama,
            kelas : data.kelas,
            preferensi_jurusan : data.preferensi_jurusan
        }

        axios.post(
            process.env.NEXT_PUBLIC_URL + '/role/siswa',
            body,
            {
            headers: {
                Authorization: `Bearer ${Cookies.get("token")}`,
            },
            }
        )
        .then(function (response) {
            console.log(response.data);

            router.push(`/profile?id=${data.id}`)
        })
        .catch(function (error) {
            console.log(error);
        });
    }

    const roleMahasiswa = async (data: {
        id : UUID,
        nama : String
        asal_universitas : String
        angkatan : String
        jurusan: String
        minat: String[]
        organisasi: {
            nama_organisasi : String
            jabatan : String
            mulai_masa_jabatan : String
            akhir_masa_jabatan : String
        }[]
        pencapaian: {
            nama_pencapaian: String
            tahun: String
            deskripsi: String
        }[]
    }) => {
        const body = {
            nama : data.nama,
            asal_universitas : data.asal_universitas,
            angkatan : data.angkatan,
            jurusan : data.jurusan,
            minat: data.minat,
            organisasi: data.organisasi,
            pencapaian: data.pencapaian
        }

        axios.post(
            process.env.NEXT_PUBLIC_URL + '/role/mahasiswa',
            body,
            {
            headers: {
                Authorization: `Bearer ${Cookies.get("token")}`,
            },
            }
        )
        .then(function (response) {
            console.log(response.data);

            router.push(`/profile?id=${data.id}`)
        })
        .catch(function (error) {
            console.log(error);
        });
    }

    const value = {
        roleSiswa,
        roleMahasiswa
    }

return <OnboardingContext.Provider value={value}>{children}</OnboardingContext.Provider>
}
