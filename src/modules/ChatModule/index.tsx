'use client'
import React, { useEffect, useState } from "react";
import {Send} from 'lucide-react'
import Link from "next/link";
import NavBar from "@/components/navbar";
import { useAuthContext } from "@/contexts/AuthContext";

function ChatModule() {
    const [showChat, setShowChat] = useState(false)
    const projectID = "2748c78a-420c-4055-9ed3-22d92afbcb67"
    const username = "azmynaufal"
    const secret = "juara1finditUGM"

    const { userId  } = useAuthContext();

  return (
    <div className='h-screen flex flex-col justify-start items-center w-full px-10 mx-10 text-blue-900'>
        <NavBar userId={userId}></NavBar>

      <section className="h-full w-full flex bg-[#F8F8F8] rounded-t-xl overflow-hidden">
        <div className="bg-blue-950 w-1/3 h-full text-white">
            <div className="p-5 flex items-center gap-5 bg-blue-300/[0.5] relative">
                <div className="bg-black w-12 h-12 rounded-[50%]"></div>
                <div>
                  <p className="font-semibold">Azmy Naufal Athailah</p>
                  <p className="text-sm">Haii salam kenal 🙆‍♀️</p>
                </div>
                <p className="text-xs text-gray-400 absolute top-4 right-10">1j lalu</p>
            </div>
            <div className="p-5 flex items-center gap-5 hover:bg-blue-300/[0.5] relative">
                <div className="bg-black w-12 h-12 rounded-[50%]"></div>
                <div>
                  <p className="font-semibold">Lorem ipsum</p>
                  <p className="text-sm">bolee bangett</p>
                </div>
                <p className="text-xs text-gray-400 absolute top-4 right-10">1j lalu</p>
            </div>
        </div>
        <div className="w-2/3 h-full text-black">
            <div className="flex-none p-5 flex w-full items-center gap-5 bg-gray-200">
                <div className="bg-black w-12 h-12 rounded-[50%]"></div>
                <div>
                  <p className="font-semibold text-blue-800">Azmy Naufal Athailah</p>
                </div>
            </div>
            <div className="flex flex-col gap-3 p-5 h-[425px]">
              <div className="flex flex-col gap-3 items-start">
                <div className="bg-gray-300 w-64 h-20 rounded-3xl rounded-es-none"></div>
                <div className="bg-gray-300 w-64 h-10 rounded-3xl rounded-es-none"></div>
              </div>
              <div className="flex flex-col gap-3 items-end">
                <div className="bg-blue-300 w-64 h-20 rounded-3xl rounded-ee-none"></div>
                <div className="bg-blue-300 w-64 h-10 rounded-3xl rounded-ee-none"></div>
              </div>
            </div>
            <div className="flex-none p-5 flex w-full items-center gap-5">
                <input type="text" className="rounded-xl bg-white text-black w-full p-3" placeholder="Ketik pesan..."/>
                <div className="bg-blue-900 text-white p-3 rounded-xl hover:-translate-y-1 hover:bg-blue-800/[0.8] duration-200 hover:cursor-pointer">
                  <Send />
                </div>
            </div>
        </div>
      </section>
    </div>);
}

export default ChatModule;
