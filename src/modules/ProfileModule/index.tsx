
import { useAuthContext } from "@/contexts/AuthContext";

function ProfileModule() {

    const { userId } = useAuthContext();
    
    return (
        <div className="flex min-h-screen justify-center items-center bg-[#F8F8F8] text-[#000000]">
            {userId}
        </div>
    )
}

export default ProfileModule;
