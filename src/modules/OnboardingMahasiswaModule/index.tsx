import { Button } from "@/components/button";
import Link from "next/link";
import React, { useState } from "react";
import ModalOrganisasi from "./module-elements/ModalOrganisasi";

function OnboardingMahasiswaModule() {
  const [interests, setInterests] = useState<string[]>([])
  const [isShown, setShown] = useState('')

  const toggleModalOrganisasi = () => {
    setShown('O')
  }

  const toggleModalPencapaian = () => {
    setShown('P')
  }

  const handleSelectChange = (event: { target: { value: string; }; }) => {
    const selectedValue:string = event.target.value;
    if (selectedValue !== "" && !interests.includes(selectedValue)) {
      setInterests([...interests, selectedValue]);
    }
  };
  const removeInterest = (indexToRemove: number) => {
    setInterests(interests.filter((_, index) => index !== indexToRemove));
  };
  return (
    <div className="flex min-h-screen justify-center items-center text-[#243F73] bg-[#F8F8F8] py-10">
        <div className="text-black flex flex-col w-full md:w-[80%] text-[#243F73] min-h-[75vh]">
        <div className="text-3xl flex justify-center md:justify-start items-center w-full h-full">
            <p>
                MATCH <br /> <span className="font-bold">MAJOR</span>
            </p>
        </div>
        <div className="md:px-6 w-full md:w-3/5 py-10 mx-auto flex flex-col items-center justify-center">
          <h2 className="font-bold text-center text-2xl mb-10">Lengkapin profil kamu dulu yuk!</h2>
          <form action="" className="w-4/5 flex flex-col gap-5 font-semibold">
            <div className="flex flex-col gap-2">
              <label htmlFor="nama">Nama</label>
              <input type="text" id="nama" className="w-full p-2 border rounded-lg font-normal px-3" placeholder="Nama"/>
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="univ">Asal Universitas</label>
              <input type="text" id="univ" className="w-full p-2 border rounded-lg font-normal px-3" placeholder="Asal Universitas"/>
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="angkatan">Angkatan</label>
              <select name="angkatan" id="angkatan" className="w-full p-2 border rounded-lg font-normal px-3">
                <option value="">Pilih</option>
                <option value="2023">2023</option>
                <option value="2022">2022</option>
                <option value="2021">2021</option>
                <option value="2020">2020</option>
              </select>
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="jurusan">Jurusan</label>
              <select name="jurusan" id="jurusan" className="w-full p-2 border rounded-lg font-normal px-3" defaultValue={""}>
                <option value="">Pilih Jurusan</option>
                <option value="Ilmu Komputer">Ilmu Komputer</option>
                <option value="Sistem Informasi">Sistem Informasi</option>
                <option value="Ilmu Politik">Ilmu Politik</option>
                <option value="Sastra Perancis">Sastra Perancis</option>
              </select>
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="minat">Minat</label>
              <select name="minat" id="minat" className="w-full p-2 border rounded-lg font-normal px-3"
              onChange={handleSelectChange} defaultValue={""}>
                <option value="">Pilih hal-hal yang kamu minati</option>
                <option value="Computer">Computer</option>
                <option value="Football">Football</option>
                <option value="Music">Music</option>
                <option value="Reading">Reading</option>
              </select>
            </div>
            <div className="flex gap-2 flex-wrap">
                {interests.map((major, index) => (
                    <div key={index} className="bg-[#3469C8] flex gap-3 w-max py-2 px-4 text-md text-white font-medium rounded-2xl"
                    onClick={() => removeInterest(index)}>
                        <span>{major}</span>
                        <span className="hover:cursor-pointer">
                            X
                        </span>
                    </div>
                ))}
            </div>
            <div className="flex flex-col px-3 bg-white rounded-md border p-2">
                <div className="flex justify-between w-full items-center">
                    <p>Organisasi</p>
                    <p className="text-blue-800 text-2xl hover:cursor-pointer"
                    onClick={toggleModalOrganisasi}>+</p>
                </div>
            </div>
            <div className="flex flex-col px-3 bg-white rounded-md border p-2">
                <div className="flex justify-between w-full items-center">
                    <p>Pencapaian</p>
                    <p className="text-blue-800 text-2xl hover:cursor-pointer"
                    onClick={toggleModalPencapaian}>+</p>
                </div>
            </div>
            <div className="flex justify-end w-full">
                <Link href={'/'}>
                    <Button>
                        Simpan
                    </Button>
                </Link>
            </div>
          </form>
        </div>
    </div>

    {/* MODAL*/}
    <div className={`fixed top-0 bottom-0 left-0 right-0 flex justify-center items-center ${isShown.length == 0 && 'hidden'}`}
    >
        <div className="absolute w-full h-full bg-black/[0.6]" onClick={() => setShown('')}></div>
        <div className="bg-white w-11/12 md:w-2/5 p-10 flex flex-col items-center rounded-xl min-h-[250px] z-10">
            {/* ORGANISASI */}
            {isShown == 'O' && (
                <div className="w-full">
                    <h2 className="text-lg font-semibold text-center mb-7">
                        Masukin pengalaman organisasi kamu disini 👇
                    </h2>
                    <div className="w-full flex flex-col gap-5">
                        <div className="flex flex-col gap-2">
                            <label htmlFor="namaOrganisasi">Nama Organisasi</label>
                            <input type="text" id="namaOrganisasi" className="w-full p-2 border text-sm rounded-lg font-normal px-3" placeholder="BEM FISIP UI"/>
                        </div>
                        <div className="flex flex-col gap-2">
                            <label htmlFor="jabatan">Jabatan</label>
                            <input type="text" id="jabatan" className="w-full p-2 border text-sm rounded-lg font-normal px-3" placeholder="Ketua Departemen Seni dan Budaya"/>
                        </div>
                        <div className="flex flex-col gap-2">
                            <label htmlFor="masaJabatan">Masa Jabatan</label>
                            <input type="text" id="masaJabatan" className="w-full p-2 border text-sm rounded-lg font-normal px-3" placeholder="2022 - 2023"/>
                        </div>
                        <div className="w-full flex justify-end">
                            <Button>
                                Tambah
                            </Button>
                        </div>
                    </div>
                </div>
            )}

            {/* PENCAPAIAN */}
            {isShown == 'P' && (
                <div className="w-full">
                    <h2 className="text-lg font-semibold text-center mb-7">
                        Masukin prestasi kamu disini 👇
                    </h2>
                    <div className="w-full flex flex-col gap-5">
                        <div className="flex flex-col gap-2">
                            <label htmlFor="namaPrestasi">Nama Prestasi</label>
                            <input type="text" id="namaPrestasi" className="w-full p-2 border text-sm rounded-lg font-normal px-3"
                             placeholder="Juara 1 Hackathon FindIT"/>
                        </div>
                        <div className="flex flex-col gap-2">
                            <label htmlFor="tahun">Tahun</label>
                            <input type="text" id="tahun" className="w-full p-2 border text-sm rounded-lg font-normal px-3"
                             placeholder="2024"/>
                        </div>
                        <div className="flex flex-col gap-2">
                            <label htmlFor="deskripsi">Deskripsi</label>
                            <textarea id="deskripsi" className="w-full p-2 border text-sm rounded-lg font-normal px-3"
                             placeholder="Membuat aplikasi MatchMajor sebagai solusi pelajar yang takut salah jurusan"/>
                        </div>
                        <div className="w-full flex justify-end">
                            <Button>
                                Tambah
                            </Button>
                        </div>
                    </div>
                </div>
            )}
            
        </div>
    </div>
    {/* MODAL ORGANISASI END */}
    </div>
  );
}

export default OnboardingMahasiswaModule;
