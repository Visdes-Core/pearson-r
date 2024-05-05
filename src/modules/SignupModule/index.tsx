import { Button } from "@/components/button";
import  { useRouter } from "next/navigation";
import React from "react";

function SignUpModule() {
  const router = useRouter()

  return <div className="text-black flex justify-between w-[80%] text-[#243F73] min-h-[75vh]">
    <div className="text-3xl w-[40%] hidden md:flex">
      <div className="bg-[#E4EDFF] flex justify-center items-center w-full h-full">
        <p>
           MATCH <br /> <span className="font-bold">MAJOR</span>
        </p>
      </div>
    </div>
    <div className="w-full md:w-[55%] flex flex-col items-center justify-center">
      <div className="md:px-6 w-11/12 flex flex-col items-center justify-center">
        <h2 className="font-bold text-2xl mb-10">Daftar</h2>
        <form action="" className="w-full flex flex-col gap-5 font-semibold">
          <div className="flex flex-col gap-2">
            <label htmlFor="email">Email</label>
            <input type="text" id="email" className="w-full p-2 border rounded-lg font-normal px-3" placeholder="Email"/>
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="username">Username</label>
            <input type="text" id="username" className="w-full p-2 border rounded-lg font-normal px-3" placeholder="Username"/>
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" className="w-full p-2 border rounded-lg font-normal px-3" placeholder="Password"/>
          </div>
          <Button>
            Daftar
          </Button>
        </form>
        <p className="mt-5">Udah punya akun? <span onClick={() => {router.push('/login')}} className="text-[#3469C8] cursor-pointer hover:underline">Masuk</span></p>
      </div>
    </div>
  </div>;
}

export default SignUpModule;
