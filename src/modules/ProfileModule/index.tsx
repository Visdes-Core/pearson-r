"use client"
import NavBar from '@/components/navbar';
import { useAuthContext } from '@/contexts/AuthContext';
import { useProfileContext } from '@/contexts/ProfileContext';
import profile from '../../assets/svg/profile-dummy.svg'
import Image from 'next/image'
import { Button } from "@/components/button";
import { UUID } from 'crypto';


function ProfileModule() {

    const { isLoading, user, questions, upVote} = useProfileContext();
    const { userId  } = useAuthContext();

    const LoadingSpinner = () => {
        return (
            <div className="flex flex-col min-h-screen justify-center items-center bg-[#F8F8F8] text-[#000000]">
                <div>Loading...</div>
            </div>
        )
      };

      if (isLoading) {
        return <LoadingSpinner/>
      }

      console.log(user)

    return (        
        <div className="flex flex-col min-h-screen justify-start items-center bg-[#F8F8F8] text-blue-900 gap-[32px]">
            <NavBar userId={userId}></NavBar>


            {(user.siswa != null) ? 
                (
                <>
                    <div className='flex w-[60%] items-center justify-between'>
                        <Image src={profile} alt='Location Icon' width={154} height={154} />
                        <div className='flex w-[600px] flex-col items-start shrink-0'>
                            <p className='text-[color:var(--Dark-Blue,#243F73)] text-3xl not-italic font-bold leading-[normal] tracking-[0.6px]; font-family: Poppins;'>{user.siswa.nama}</p>
                            <p className='text-[color:var(--Dark-Blue,#243F73)] text-2xl not-italic font-medium leading-[normal] tracking-[0.48px];font-family: Poppins;'> Kelas {user.siswa.kelas}</p>
                        </div>
                        <Button>
                            Ubah Profil
                        </Button>
                    </div>

                    <div className='flex flex-row w-[60%] items-center justify-between'>
                    <p className='text-[color:var(--Dark-Blue,#243F73)] text-3xl not-italic font-bold leading-[normal] tracking-[0.6px];font-family: Poppins;'>Preferensi Jurusan</p>
                        <Button>
                            Ubah Preferensi
                        </Button>
                    </div>

                    <div className='flex w-[60%] items-start content-start gap-[19px] flex-wrap px-[16px]'>
                        {user.siswa.preferensi_jurusan_siswa.map((item: { preferensi_jurusan: string }, index: number) => (
                            <div className="bg-[#C5DEFF] p-[32px] rounded-[20px] font-bold" key={index}>{item.preferensi_jurusan}</div>
                        ))}
                    </div>
                </>
            ) : null}


            {(user.mahasiswa != null) ? 
                (
                <>
                    <div className='flex w-[60%] items-center justify-between'>
                        <Image src={profile} alt='Location Icon' width={154} height={154} />
                        <div className='flex w-[600px] flex-col items-start shrink-0'>
                            <p className='text-[color:var(--Dark-Blue,#243F73)] text-3xl not-italic font-bold leading-[normal] tracking-[0.6px] font-family: Poppins;'>{user.mahasiswa.nama}</p>
                        </div>
                        <Button>
                            Ubah Profil
                        </Button>
                    </div>

                    <div className='inline-flex w-[60%] justify-between rounded-[20px] flex-row items-start gap-2 shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] px-[49px] py-[25px] rounded-[25px] bg-[#efefef;]'>
                        <div className='flex flex-col items-start gap-[3px];'>
                            <p className='text-[#3469C8] text-xl not-italic font-semibold leading-[normal] tracking-[0.4px];font-family: Poppins;'>Jurusan</p>
                            <p>{user.mahasiswa.jurusan}</p>
                        </div>

                        <div className='flex flex-col items-start gap-[3px];'>
                            <p className='text-[#3469C8] text-xl not-italic font-semibold leading-[normal] tracking-[0.4px];font-family: Poppins;'>Universitas</p>
                            <p>{user.mahasiswa.asal_universitas}</p>
                        </div>

                        <div className='flex flex-col items-start gap-[3px];'>
                            <p className='text-[#3469C8] text-xl not-italic font-semibold leading-[normal] tracking-[0.4px];font-family: Poppins;'>Angkatan</p>
                            <p>{user.mahasiswa.angkatan}</p>
                        </div>
                    </div>

                    <div className='inline-flex w-[60%] justify-between rounded-[20px] flex-row items-start gap-2 px-[49px] py-[25px]'>
                        <div className='flex flex-col items-start gap-[3px];'>
                            <p className='text-[#3469C8] text-xl not-italic font-semibold leading-[normal] tracking-[0.4px];font-family: Poppins;'>Minat</p>
                                {user.mahasiswa.minat_mahasiswa.map((item: { minat: string }, index: number) => (
                                <div key={index}>{item.minat}</div>
                            ))}
                        </div>

                        <div className='flex flex-col items-start gap-[3px];'>
                            <p className='text-[#3469C8] text-xl not-italic font-semibold leading-[normal] tracking-[0.4px];font-family: Poppins;'>Prestasi</p>
                                {user.mahasiswa.pencapaian_mahasiswa.map((item: { nama_pencapaian: string, tahun: string}, index: number) => (
                                <div  key={index}> {item.nama_pencapaian} - {item.tahun}</div>
                            ))}
                        </div>

                        <div className='flex flex-col items-start gap-[3px];'>
                            <p className='text-[#3469C8] text-xl not-italic font-semibold leading-[normal] tracking-[0.4px];font-family: Poppins;'>Organisasi</p>
                                {user.mahasiswa.organisasi_mahasiswa.map((item: { nama_organisasi: string, jabatan: string }, index: number) => (
                                <div key={index}>{item.jabatan} - {item.nama_organisasi}</div>
                            ))}
                        </div>
                    </div>

                    <div className='flex flex-row w-[60%] items-center justify-between'>
                        <p className='text-[color:var(--Dark-Blue,#243F73)] text-3xl not-italic font-bold leading-[normal] tracking-[0.6px];font-family: Poppins;'>QNA Forum</p>
                    </div>

                    <div className='flex flex-col w-[100%] justify-between rounded-[20px] items-center gap-[16px] px-[49px] py-[25px]'>  
                        {questions.map((item: { id : UUID, pertanyaan: string, upvote : string}, index: number) => (
                            <div key={index} className='flex w-[60%] items-center justify-between bg-[#efefef] p-[16px] rounded-[10px] justify-between'> 
                            
                                {item.pertanyaan}
                                <div className='flex flex-row items-center gap-[16px] font-bold'>
                                    <Button onClick={() => upVote ({questionId : item.id})}>
                                        Upvote
                                    </Button>
                                    <Button onClick={() => upVote ({questionId : item.id})}>
                                        Upvote
                                    </Button>
                                    {item.upvote}
                                </div>
                            </div>
                        ))}
                    </div>
                </>
            ) : null}

        </div>
    )
}

export default ProfileModule;
