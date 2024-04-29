import Image from 'next/image'

import cardIllustration from '../assets/card-illustration.svg'

import siswaIcon from '../assets/siswa-icon.svg'
import mahasiswaIcon from '../assets/mahasiswa-icon.svg'
import CountUp from "react-countup";
import { useEffect, useRef, useState } from 'react';


export default function Numbers() {

    const siswaRef = useRef<HTMLInputElement>(null);
    const mahasiswaRef = useRef<HTMLInputElement>(null);
    const [isSiswaVisible, setSiswaIsVisible] = useState(false);
    const [isMahasiswaVisible, setMahasiswaIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {

            if (siswaRef.current) {
                const siswaRect = siswaRef.current!.getBoundingClientRect();
                const isSiswaVisible = (
                    siswaRect.top >= 0 &&
                    siswaRect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
                );
                if (isSiswaVisible) setSiswaIsVisible(true);
            }

            if (mahasiswaRef.current) {
               const mahasiswaRect = mahasiswaRef.current!.getBoundingClientRect();
                const isMahasiswaVisible = (
                    mahasiswaRect.top >= 0 &&
                    mahasiswaRect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
                );
                if (isMahasiswaVisible) setMahasiswaIsVisible(true);
            }
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll();

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className="flex flex-row h-[720px] items-center gap-[72px] justify-center self-stretch p-24">
            <Image src={cardIllustration} alt='Location Icon' width={609} height={649} />
            <div className='flex flex-col justify-center items-start gap-[47px]'>

                <div className='flex w-[599px] h-[277px] flex-col items-start gap-[32px] rounded-[36px] bg-[#e4edff] p-[40px]'>
                    <div className='flex flex-row gap-[19px] items-center'>
                        <Image src={siswaIcon} alt='Location Icon' width={45} height={45} />
                        <div className='text-[color:var(--Blue,#8EB5EB)] text-xl not-italic font-bold leading-7 font-family: Poppins;'>
                            Jumlah Siswa
                        </div>
                    </div>
                    <div className='flex flex-col gap-[12px]'>
                        <div ref={siswaRef} className='text-[color:var(--Dark-Blue,#243F73)] text-6xl not-italic font-extrabold leading-[60px] font-family: Poppins;'>
                            <CountUp end={isSiswaVisible ? 1000 : 0} separator="." suffix="++" />
                        </div>
                        <div className='text-[color:var(--Darkest-Blue,#1A202C)] text-base not-italic font-normal leading-6 font-family: Poppins;'>
                            Lebih dari 1.000 siswa di Indonesia mempercayai MATCHMAJOR sebagai media untuk menjelajahi jurusan yang mereka minati!
                        </div>
                    </div>
                </div>

                <div className='flex w-[599px] h-[277px] flex-col items-start gap-[32px] rounded-[36px] bg-[#e4edff] p-[40px]'>
                    <div className='flex flex-row gap-[19px] items-center'>
                        <Image src={mahasiswaIcon} alt='Location Icon' width={74} height={45} />
                        <div className='text-[color:var(--Blue,#8EB5EB)] text-xl not-italic font-bold leading-7 font-family: Poppins;'>
                            Jumlah Mahasiswa
                        </div>
                    </div>
                    <div className='flex flex-col gap-[12px]'>
                        <div ref={mahasiswaRef} className='text-[color:var(--Dark-Blue,#243F73)] text-6xl not-italic font-extrabold leading-[60px] font-family: Poppins;'>
                            <CountUp end={isMahasiswaVisible ? 300 : 0} separator="." suffix="++" />
                        </div>
                        <div className='text-[color:var(--Darkest-Blue,#1A202C)] text-base not-italic font-normal leading-6 font-family: Poppins;'>
                            Lebih dari 300 mahasiswa di kampus favorit telah menceritakan pengalaman berkuliah di jurusannya di MATCHMAJOR                        
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}