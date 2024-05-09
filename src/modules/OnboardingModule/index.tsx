import { Button } from "@/components/button";
import Link from "next/link";
import React from "react";

function OnboardingModule() {
  return (
  <div className="flex min-h-screen justify-center items-center bg-[#F8F8F8]">
    <div className="text-black flex flex-col w-[80%] text-blue-900 min-h-[75vh]">
        <div className="text-3xl flex justify-center md:justify-start items-center w-full h-full">
            <p>
                MATCH <br /> <span className="font-bold">MAJOR</span>
            </p>
        </div>
        <div className="flex flex-col py-10 gap-10 items-center w-full">
            <h2 className="text-center text-xl font-semibold">Aku mau bergabung sebagai...</h2>
            <Link href={'/onboarding/pelajar'} className="w-full md:w-2/5">
                <Button className="w-full">
                    Pelajar
                </Button>
            </Link>
            <Link href={'/onboarding/mahasiswa'} className="w-full md:w-2/5">
                <Button className="w-full">
                    Mahasiswa
                </Button>
            </Link>
        </div>
    </div>
</div>);
}

export default OnboardingModule;
