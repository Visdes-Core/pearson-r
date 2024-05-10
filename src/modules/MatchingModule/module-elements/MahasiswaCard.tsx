import React, { useEffect, useState } from "react";
import { Triangle, GraduationCap, Users, Award, MessageCircleHeart } from 'lucide-react';

function MahasiswaCard() {
  const [isOpen, setOpen] = useState(false);
  const toggleOpen = () => {
    setOpen(!isOpen)
  }

  return (
    <div>
      <div className="flex flex-col text-black rounded-2xl w-[650px] relative shadow-xl">
        <div className="bg-blue-300 rounded-t-2xl h-28 px-6 py-3 flex justify-end">
          <p className="max-w-[110px] text-left">Universitas Indonesia</p>
        </div>
        <div className="bg-[#EFEFEF] relative p-6 z-20 flex gap-7 shadow-xl rounded-b-2xl">
          <div className="relative w-2/5">
            <div className="w-32 h-32 bg-gray-400 absolute top-[-80px]"></div>
          </div>
          <div className="flex flex-col justify-start gap-3">
            <div>
              <div className="flex gap-6 items-center">
                <p className="text-blue-600 font-bold text-xl">Azmy Naufal Athailah</p>
                <p className="px-2 text-white text-sm bg-blue-300 rounded-3xl">2022</p>
              </div>
              <div className="flex gap-6 items-center">
                <p className="font-bold text-blue-300">azmynaufal</p>
                <p className="text-xs text-gray-500">Terakhir aktif 4j lalu</p>
              </div>
            </div>
            <p className="text-sm text-blue-600">Universitas Indonesia - Ilmu Komputer</p>
            <p className="text-sm">Cek kumpulan bio Instagram aesthetic bahasa Inggris singkat dan artinya, romantis, lucu, dan Islami terbaru 2023.</p>
            <div className="flex justify-end w-full">
              <div className="rounded-3xl">
                <Triangle className={`text-blue-300 hover:cursor-pointer ${isOpen ? "rotate-180": ""}`}
                onClick={toggleOpen}/>
              </div>
            </div>
          </div>
        </div>
      </div>
      { isOpen && (<div className="px-10 py-6 flex justify-between w-[650px] absolute -bottom-36 text-sm bg-[#EFEFEF] shadow-xl rounded-b-2xl">
        <div className="flex flex-col gap-3 max-w-[30%]">
          <div className="flex flex-col gap-1">
            <div className="text-blue-600 flex items-center gap-2 font-semibold">
              <GraduationCap size={20}/>
              <p>Alumni SMA</p>
            </div>
            <p className="text-xs">SMA Pradita Dirgantara</p>
          </div>
          <div className="flex flex-col gap-1">
            <div className="text-blue-600 flex items-center gap-2 font-semibold">
              <MessageCircleHeart size={20}/>
              <p>Minat</p>
            </div>
            <ul className="list-disc list-inside text-xs">
              <li>Kamu</li>
              <li>Bahasa Perancis</li>
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
              <li>Juara 1 Hackathon FindIT UGM</li>
              <li>Runner Up Data Analytics Dash COMPFEST 2023</li>
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
              <li>Ketua BEM Fakultas Ilmu Komputer UI 2019</li>
              <li>PIC Event COMPFEST 2020</li>
            </ul>
          </div>
        </div>
      </div>)}
    </div>
  );
}

export default MahasiswaCard;
