export default function Hero() {
    return (
        <div className="flex h-screen justify-between items-center self-stretch px-48 py-40 gap-8">
            <div className="flex flex-col justify-center items-start gap-[39px] flex-[1_0_0] p-2">
                <div className='text-[color:var(--Dark-Blue,#243F73)] text-[36.118px] not-italic font-normal leading-[normal] tracking-[0.722px] font-family: Gotham;'>
                    MATCH 
                    <br/>
                    <span className='text-[color:var(--Dark-Blue,#243F73)] text-[36.118px] not-italic font-medium leading-[normal] tracking-[0.722px] font-family: Gotham Black'>
                        MAJOR
                    </span>
                </div>
                <div className="flex flex-col gap-[8px]">
                    <div className="text-[color:var(--Dark-Blue,#243F73)] text-5xl not-italic font-bold leading-[80px] font-family: Poppins;">Bingung Milih Jurusan?</div>
                    <div className="text-[color:var(--Darkest-Blue,#1A202C)] text-base not-italic font-medium leading-6 font-family: Poppins;">Gak perlu ragu lagi buat milih jurusan! Gabung MATCHMAJOR dan tanya langsung ke kakak mahasiswa di jurusan yang kamu minati!</div>
                </div>
                <div className="transition ease-in-out cursor-pointer hover:scale-[1.03] flex h-[45px] justify-center items-center gap-[12.022px] shrink-0 shadow-[0px_3.005px_3.005px_0px_rgba(255,255,255,0.40)_inset] px-[36.065px] py-[13px] rounded-[15025.717px] border-[1.503px] border-solid border-[#292929] bg-[#243f73]">
                    <span className="text-white text-lg not-italic font-medium leading-[normal] font-family: Poppins;">Mulai tanya kakak tingkat!</span>
                </div>
            </div>
            <div className="w-[630px] h-[360px] bg-[#E4EDFF]">

            </div>
        </div>
    )
}