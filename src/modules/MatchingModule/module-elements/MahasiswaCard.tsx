import React, { useEffect, useState } from "react";
import { Triangle, GraduationCap, Users, Award, MessageCircleHeart, Clock, CircleUserRound } from 'lucide-react';
import { MahasiswaType, UserType } from "../interface";
import 'react-toastify/dist/ReactToastify.css';

function MahasiswaCard({user} : {user:UserType}) {
  const [isOpen, setOpen] = useState(false);
  const toggleOpen = () => {
    setOpen(!isOpen)
  }

  return (
    <div>
      <div className="flex flex-col text-black rounded-2xl w-[650px] relative shadow-xl">
        <div className="bg-blue-300 rounded-t-2xl h-28 px-6 py-3 flex justify-end">
          {/* <p className="max-w-[110px] text-left">Universitas Indonesia</p> */}
        </div>
        <div className="bg-[#EFEFEF] relative p-6 z-20 flex gap-7 shadow-xl rounded-b-2xl">
          <div className="relative w-2/5">
            {/* <div className="w-32 h-32 bg-gray-400 absolute top-[-80px]"></div> */}
            <CircleUserRound size={140} className="text-white bg-gray-400 absolute top-[-80px]"/>
          </div>
          <div className="flex flex-col justify-start gap-3">
            <div>
              <div className="flex gap-6 items-center">
                <p className="text-blue-600 font-bold text-xl">{user.mahasiswa?.nama}</p>
                <p className="px-2 text-white text-sm bg-blue-300 rounded-3xl">{user.mahasiswa?.angkatan}</p>
              </div>
              <div className="flex gap-6 items-center">
                <p className="font-bold text-blue-300">{user.email}</p>
                <p className="text-xs text-gray-500">
                  <div className="flex gap-1 items-center "><Clock size={15} className="text-blue-300"/><p>Terakhir aktif 4j lalu</p></div>
                </p>
              </div>
            </div>
            <p className="text-sm text-blue-600">{`${user.mahasiswa?.asal_universitas} - ${user.mahasiswa?.jurusan}`}</p>
            <p className="text-sm">Cek kumpulan bio Instagram aesthetic bahasa Inggris singkat dan artinya, romantis, lucu, dan Islami terbaru 2023.</p>
            <div className="flex justify-end w-full">
              <div className="rounded-3xl">
                <Triangle className={`text-blue-300 hover:cursor-pointer ${isOpen ? "": "rotate-180"}`}
                onClick={toggleOpen}/>
              </div>
            </div>
          </div>
        </div>
      </div>
      { isOpen && (<div className="px-10 py-6 flex justify-between w-[650px] absolute -bottom-[160px] text-sm bg-[#EFEFEF] shadow-xl rounded-b-2xl">
        <div className="flex flex-col gap-3 max-w-[30%]">
          <div className="flex flex-col gap-1">
            <div className="text-blue-600 flex items-center gap-2 font-semibold">
              <GraduationCap size={20}/>
              <p>Alumni SMA</p>
            </div>
            <p className="text-xs">{`SMAN 2 Cibinong`}</p>
          </div>
          <div className="flex flex-col gap-1">
            <div className="text-blue-600 flex items-center gap-2 font-semibold">
              <MessageCircleHeart size={20}/>
              <p>Minat</p>
            </div>
            <ul className="list-disc list-inside text-xs">
            {user.mahasiswa?.minat_mahasiswa.map((minat, index) => (
              <li key={index}>
                {minat.minat}
              </li>
            ))}
            </ul>
          </div>
        </div>
        <div className="flex flex-col gap-3 max-w-[30%]">
          <div className="flex flex-col gap-1">
            <div className="text-blue-600 flex items-center gap-2 font-semibold">
              <Award size={20}/>
              <p>Prestasi</p>
            </div>
            <ul className="list-disc list-inside text-xs">
            {user.mahasiswa?.pencapaian_mahasiswa.map((prestasi, index) => (
              <li key={index}>
                {prestasi.nama_pencapaian} {prestasi.tahun}
              </li>
            ))}
            </ul>
          </div>
        </div>
        <div className="flex flex-col gap-3 max-w-[30%]">
          <div className="flex flex-col gap-1">
            <div className="text-blue-600 flex items-center gap-2 font-semibold">
              <Users size={20}/>
              <p>Organisasi</p>
            </div>
            <ul className="list-disc list-inside text-xs">
            {user.mahasiswa?.organisasi_mahasiswa.map((organisasi, index) => (
              <li key={index}>
                {organisasi.jabatan} {organisasi.nama_organisasi} {organisasi.mulai_masa_jabatan}
              </li>
            ))}
            </ul>
          </div>
        </div>
      </div>)}
    </div>
  );
}

export default MahasiswaCard;
