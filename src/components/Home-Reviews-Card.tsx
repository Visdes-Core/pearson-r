import { StaticImport } from 'next/dist/shared/lib/get-img-props';
import Image from 'next/image';

interface ReviewCardProps {
    photo: StaticImport;
    university: StaticImport;
    review: string;
    name: string;
    major: string;
}

export default function ReviewCard({photo, university, review, name, major} : ReviewCardProps){
    return (
        <div className="relative flex w-[392px] flex-col justify-center items-start bg-[#8EB5EB] rounded-xl shadow-[0px_0px_10px_0px_rgba(0,0,0,0.25)] overflow-hidden">

            <div className='relative p-[32px] overflow-hidden'>
                <Image src={university} className='absolute ml-[225px] mt-[-90px]' alt='University Icon' width={200} height={200} />
                <div className="text-[color:var(--Darkest-Blue,#1A202C)] text-5xl italic font-bold leading-[48px] font-family: Poppins;">
                    "
                </div>
                <div className="text-[color:var(--Darkest-Blue,#1A202C)] text-base not-italic font-medium leading-[150%] font-family: Poppins">
                    {review}
                </div>
            </div>

            <div className="flex w-full items-center h-[69px] flex-row bg-[#F0F0F0] gap-[12px] pl-[28px] rounded-b-xl">
                <Image src={photo} alt='Location Icon' width={40} height={40} />
                <div className='flex flex-col gap-[4px]'>
                    <div className='text-[color:var(--Darkest-Blue,#1A202C)] text-xs not-italic font-medium leading-[normal] font-family: Poppins;'>
                        {name}
                    </div>
                    <div className='text-[color:var(--Darkest-Blue,#1A202C)] text-xs not-italic font-bold leading-[normal] font-family: Poppins '>
                        {major}
                    </div>
                </div>
            </div>

        </div>
    )
}