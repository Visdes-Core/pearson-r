"use client"
import { useProfileContext } from '@/contexts/ProfileContext';

function ProfileModule() {

    const { isLoading, user } = useProfileContext();

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

    return (        
        <div className="flex flex-col min-h-screen justify-center items-center bg-[#F8F8F8] text-[#000000]">
            <div>
                <p>id :  {user.id}</p>
                <p>email : {user.email}</p>

                {(user.mahasiswa != null) ? 
                    (
                        <div>
                            <p>nama : {user.mahasiswa.nama}</p>
                            <p>jurusan : {user.mahasiswa.jurusan}</p>
                            <p>angkatan : {user.mahasiswa.angkatan}</p>
                        </div>
                    ) : null}

                {(user.siswa != null) ? 
                    (
                        <div>
                            <p>nama : {user.siswa.nama}</p>
                            <p>kelas : {user.siswa.kelas}</p>
                        </div>
                    ) : null
                }
            </div>
        </div>
    )
}

export default ProfileModule;
