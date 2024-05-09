import React from "react";

function MahasiswaCard() {
  return (
    <div className="flex flex-col text-black rounded-2xl overflow-hidden w-[650px] relative shadow-xl">
      <div className="bg-blue-300 h-28 px-6 py-3 flex justify-end">
        <p className="max-w-[110px] text-left">Universitas Indonesia</p>
      </div>
      <div className="bg-[#EFEFEF] relative p-6 flex gap-7">
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
            <div className="w-5 h-5 bg-blue-300"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MahasiswaCard;
