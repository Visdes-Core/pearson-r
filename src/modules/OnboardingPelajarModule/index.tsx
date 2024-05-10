import { Button } from "@/components/button";
import { useAuthContext } from "@/contexts/AuthContext";
import { useOnboardingContext } from "@/contexts/OnboardingContext";
import { UUID } from "crypto";
import React, { useState } from "react";

function OnboardingPelajarModule() {
  const [nameValue, setNameValue] = useState('');
  const [kelasValue, setKelasValue] = useState('');
  const [majors, setMajors] = useState<string[]>([])

  const handleSelectChange = (event: { target: { value: string; }; }) => {
    const selectedValue:string = event.target.value;
    if (selectedValue !== "" && !majors.includes(selectedValue)) {
      setMajors([...majors, selectedValue]);
    }
  };

  const removeMajor = (indexToRemove: number) => {
    setMajors(majors.filter((_, index) => index !== indexToRemove));
  };

  const { roleSiswa } = useOnboardingContext();
  const { userId } = useAuthContext();

  return (
    <div className="flex min-h-screen justify-center items-center bg-[#F8F8F8]">
        <div className="text-black flex flex-col w-full md:w-[80%] text-blue-900 min-h-[75vh]">
        <div className="text-3xl flex justify-center md:justify-start items-center w-full h-full">
            <p>
                MATCH <br /> <span className="font-bold">MAJOR</span>
            </p>
        </div>
        <div className="md:px-6 w-full md:w-3/5 py-10 mx-auto flex flex-col items-center justify-center">
          <h2 className="font-bold text-center text-2xl mb-10">Lengkapin profil kamu dulu yuk!</h2>
          <form onSubmit={ e => {e.preventDefault() ; roleSiswa({id : userId, nama : nameValue, kelas: kelasValue, preferensi_jurusan: majors})}} className="w-4/5 flex flex-col gap-5 font-semibold">
            <div className="flex flex-col gap-2">
              <label htmlFor="nama">Nama</label>

              <input onChange={e => { setNameValue(e.currentTarget.value); }} type="text" id="nama" className="w-full p-2 border rounded-lg font-normal px-3" placeholder="Nama"/>
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="kelas">Kelas</label>
              <select onChange={e => { setKelasValue(e.currentTarget.value); }} name="kelas" id="kelas" className="w-full p-2 border rounded-lg font-normal px-3">
                <option value="">Pilih</option>
                <option value="12">12</option>
                <option value="11">11</option>
                <option value="10">10</option>
                <option value="Lainnya">Lainnya</option>
              </select>
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="jurusan">Preferensi Jurusan</label>
              <select required name="jurusan" id="jurusan" className="w-full p-2 border rounded-lg font-normal px-3"
              onChange={handleSelectChange} defaultValue={""}>
                <option value="">Pilih Jurusan</option>
                <option value="Ilmu Komputer">Ilmu Komputer</option>
                <option value="Sistem Informasi">Sistem Informasi</option>
                <option value="Ilmu Politik">Ilmu Politik</option>
                <option value="Sastra Perancis">Sastra Perancis</option>
              </select>
            </div>
            <div className="flex gap-2 flex-wrap">
                {majors.map((major, index) => (
                    <div key={index} className="bg-[#3469C8] flex gap-3 w-max py-2 px-4 text-md text-white font-medium rounded-2xl"
                    onClick={() => removeMajor(index)}>
                        <span>{major}</span>
                        <span>
                            X
                        </span>
                    </div>
                ))}
            </div>
            <div className="flex justify-end w-full">
                <Button>
                    Simpan
                </Button>
            </div>
          </form>
        </div>
    </div>
    </div>
  );
}

export default OnboardingPelajarModule;
