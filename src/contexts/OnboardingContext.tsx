'use client'
import {
    useState,
    createContext,
    useContext,
    ReactNode,
    useEffect,
} from "react"

import axios from "axios"

import { useRouter } from "next/navigation"
import Cookies from "js-cookie"

type OnboardingContextValue = {
    roleSiswa: (data: {
        nama: String
        kelas: String
        preferensi_jurusan: String[]
    }) => void
    roleMahasiswa: (data : {
        nama : String
        asal_universitas : String
        angkatan : String
        jurusan: String
        minat: String[]
        organisasi: {
            organisasi : String
            jabatan : String
            awalMasaJabatan : String
            akhirMasaJabatan : String
        }[]
        pencapaian: {
            prestasi: String
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

            router.push('/profile')
        })
        .catch(function (error) {
            console.log(error);
        });
    }

    const roleMahasiswa = async (data: {
        nama : String
        asal_universitas : String
        angkatan : String
        jurusan: String
        minat: String[]
        organisasi: {
            organisasi : String
            jabatan : String
            awalMasaJabatan : String
            akhirMasaJabatan : String
        }[]
        pencapaian: {
            prestasi: String
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

            router.push('/profile')
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
