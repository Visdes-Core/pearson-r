import  { useRouter } from "next/navigation";
import React, { useState } from "react";
import axios from "axios";

function SignUpModule() {
    const router = useRouter()

    const [usernameValue, setUsernameValue] = useState('');
    const [emailValue, setEmailValue] = useState('');
    const [passwordValue, setPasswordValue] = useState('');
    const [reenterPasswordValue, setReenterPasswordValue] = useState('');

    const signup = () => {
        axios.post(process.env.NEXT_PUBLIC_URL + '/auth/signup', {
            email: emailValue,
            password: passwordValue,
            reenter_password: reenterPasswordValue
        })
        .then(function (response) {
            router.push('/login')
            console.log(response.data);
        })
        .catch(function (error) {
            console.log(error.response.data);
        });
    }

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
            <form onSubmit={e => {e.preventDefault() ; signup()}} className="w-full flex flex-col gap-5 font-semibold">
                <div className="flex flex-col gap-2">
                    <label htmlFor="email">Email</label>
                    <input onChange={e => { setEmailValue(e.currentTarget.value); }} type="text" id="email" className="w-full p-2 border rounded-lg font-normal px-3" placeholder="Email"/>
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="username">Username</label>
                    <input onChange={e => { setUsernameValue(e.currentTarget.value); }} type="text" id="username" className="w-full p-2 border rounded-lg font-normal px-3" placeholder="Username"/>
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="password">Password</label>
                    <input onChange={e => { setPasswordValue(e.currentTarget.value); }} type="password" id="password" className="w-full p-2 border rounded-lg font-normal px-3" placeholder="Password"/>
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="password">Reenter Password</label>
                    <input onChange={e => { setReenterPasswordValue(e.currentTarget.value); }} type="password" id="reenter_password" className="w-full p-2 border rounded-lg font-normal px-3" placeholder="Reenter Password"/>
                </div>
                <button className="transition ease-in-out cursor-pointer hover:scale-[1.03] flex h-[45px] justify-center items-center gap-[12.022px] shrink-0 shadow-[0px_3.005px_3.005px_0px_rgba(255,255,255,0.40)_inset] px-[36.065px] py-[13px] rounded-[15025.717px] border-[1.503px] border-solid border-[#292929] bg-[#243f73]">
                    <span className="text-white text-lg not-italic font-medium leading-[normal] font-family: Poppins;">Daftar</span>
                </button>
            </form>
            <p className="mt-5">Udah punya akun? <span onClick={() => {router.push('/login')}} className="text-[#3469C8] cursor-pointer hover:underline">Masuk</span></p>
        </div>
        </div>
    </div>;
    }

export default SignUpModule;
