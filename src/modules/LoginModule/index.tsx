import axios from "axios";
import { log } from "console";
import { useRouter } from "next/navigation";
import { Button } from "@/components/button";
import React, { useState } from "react";

function LoginModule() {
    const router = useRouter()
    
    const [emailValue, setEmailValue] = useState('');
    const [passwordValue, setPasswordValue] = useState('');

    const login = () => {
        axios.post(process.env.NEXT_PUBLIC_URL + '/auth/login', {
            email: emailValue,
            password: passwordValue
        })
        .then(function (response) {
            window.localStorage.setItem('token', response.data.token);
            router.push('/onboarding') // temporarily
            console.log(response.data);
        })
        .catch(function (error) {
            console.log(error.response.data);
        });
    }

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
          <form onSubmit={e => {e.preventDefault() ; login()}} className="w-full flex flex-col gap-5 font-semibold">
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
    </div>);
}

export default LoginModule;
