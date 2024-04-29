import Image from 'next/image';

import locationIcon from '../assets/location-icon.svg';
import igIcon from '../assets/ig-icon.svg';
import xIcon from '../assets/x-icon.svg';
import linkedinIcon from '../assets/linkedin-icon.svg';
import lineIcon from '../assets/line-icon.svg';
import mediumIcon from '../assets/medium-icon.svg';

const icons = [
  { src: igIcon, alt: 'Ig Icon', width: 24, height: 24 },
  { src: xIcon, alt: 'X Icon', width: 24, height: 24 },
  { src: linkedinIcon, alt: 'LinkedIn Icon', width: 24, height: 24 },
  { src: lineIcon, alt: 'Line Icon', width: 24, height: 24 },
  { src: mediumIcon, alt: 'Medium Icon', width: 24, height: 24 },
];

export default function Footer() {
  return (
    <div className='flex flex-row h-[269px] bg-[#E4EDFF] justify-center items-center px-[96px] gap-[62px]'>
        <div className='w-[212px] h-[195px] flex flex-col justify-center items-start gap-[26px] p-[8px]'> 
            <div className='text-[color:var(--Dark-Blue,#243F73)] text-[36.118px] not-italic font-normal leading-[normal] tracking-[0.722px] font-family: Gotham;'>
                MATCH 
                <br/>
                <span className='text-[color:var(--Dark-Blue,#243F73)] text-[36.118px] not-italic font-medium leading-[normal] tracking-[0.722px] font-family: Gotham Black'>
                    MAJOR
                </span>
            </div>
            <div className='text-[color:var(--Darkest-Blue,#1A202C)] text-sm not-italic font-normal leading-[140%] font-family: Poppins'>
                © 2024 MatchMajor
            </div>
        </div>

        <div className='w-[580px] h-[195px] flex flex-col justify-center items-start gap-[20px] p-[8px]'>
            <div className='flex flex-row items-center gap-[9px]'>
                <Image src={locationIcon} alt='Location Icon' width={11} height={15} />
                <div className='text-[color:var(--Darkest-Blue,#1A202C)] text-sm not-italic font-semibold leading-[140%] font-family: Poppins;'>
                    MatchMajor, Jakarta
                </div>
            </div>
            <div className='text-[color:var(--Dark-Blue,#243F73)] text-sm not-italic font-medium leading-[140%] font-family: Poppins'>
                MATCH<span className='text-[color:var(--Dark-Blue,#243F73)] text-sm not-italic font-bold leading-[140%] font-family: Poppins'>MAJOR</span> adalah 
                aplikasi penghubung pelajar yang ingin mencari tahu tentang jurusan dengan mahasiswa yang bersedia berbagi pengalaman mereka di jurusan tertentu.
            </div>
        </div>

        <div className='w-[330px] h-[195px] flex flex-col justify-center items-start gap-[20px] p-[8px]'>
            <div className='text-[color:var(--Darkest-Blue,#1A202C)] text-sm not-italic font-semibold leading-[140%] font-family: Poppins;'>
                Contact us (Email): 
                <br/>
                <span className='text-[color:var(--Darkest-Blue,#1A202C)] text-sm not-italic font-normal leading-[140%] font-family: Poppins;'>
                    contact@matchmajor.com
                </span>
            </div>
            <div className='flex flex-row gap-[32px]'>
                {icons.map((icon, index) => (
                    <Image key={index} src={icon.src} alt={icon.alt} width={icon.width} height={icon.height} />
                ))}
            </div>
        </div>
    </div>
  );
}
