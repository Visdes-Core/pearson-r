import { useRouter } from "next/navigation";
import { Button } from "@/components/button";
import React, { useEffect, useState } from "react";
import { useAuthContext } from "@/contexts/AuthContext";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function LoginModule() {

    const router = useRouter()

    const [emailValue, setEmailValue] = useState('');
    const [passwordValue, setPasswordValue] = useState('');

    const { login, error} = useAuthContext();

    useEffect(()=>{
        if (error != '')
        toast(error, {hideProgressBar:true});
    },[error])

    return (
    <div className="text-black flex justify-between w-[80%] text-blue-900 min-h-[75vh]">
      <div className="text-3xl w-[40%] hidden md:flex">
        <div className="bg-[#E4EDFF] flex justify-center items-center w-full h-full">
          <p>
             MATCH <br /> <span className="font-bold">MAJOR</span>
          </p>
        </div>
      </div>
      <div className="w-full md:w-[55%] flex flex-col items-center md:justify-center">
        <div className="md:px-6 w-11/12 flex flex-col items-center justify-center">
          <h2 className="font-bold text-2xl mb-10">Masuk</h2>
          <form onSubmit={e => {e.preventDefault() ; login({email : emailValue, password: passwordValue})}} className="w-full flex flex-col gap-5 font-semibold">
            <div className="flex flex-col gap-2">
                <label htmlFor="email">Email</label>
                <input onChange={e => { setEmailValue(e.currentTarget.value); }} type="text" id="email" className="w-full p-2 border rounded-lg font-normal px-3" placeholder="Email"/>
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="password">Password</label>
              <input onChange={e => { setPasswordValue(e.currentTarget.value); }} type="password" id="password" className="w-full p-2 border rounded-lg font-normal px-3" placeholder="Password"/>
            </div>
            <Button>
              Masuk
            </Button>
          </form>
          <p className="mt-5">Belum punya akun?  <span onClick={() => {router.push('/signup')}} className="text-[#3469C8] cursor-pointer hover:underline">Register</span></p>
        </div>
      </div>
      <ToastContainer hideProgressBar/>
    </div>);
}

export default LoginModule;
