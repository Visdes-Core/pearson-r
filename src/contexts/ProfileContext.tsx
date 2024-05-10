'use client'
  import {
    createContext,
    useContext,
    ReactNode,
    useState,
    useEffect,
  } from "react"
  
  import { useRouter, useSearchParams } from "next/navigation"
  import { UUID } from "crypto"
  import Cookies from "js-cookie"
  import axios from "axios"

  type ProfileContextValue = {
    isLoading : boolean
    user : any
  }
  
  const ProfileContext = createContext({} as ProfileContextValue)
  
  export const useProfileContext = () => useContext(ProfileContext)
  
  export const ProfileContextProvider = ({ children }: { children: ReactNode }) => {
    const searchParams = useSearchParams()
    const router = useRouter()
    const userId : UUID = searchParams.get('id') as UUID;
    
    const [user, setUser] = useState(null)
    const [isLoading, setIsLoading] = useState(true)
  
    const fetchUser = async (data: {
        userId : UUID
    }) => {
        await axios.get(
            process.env.NEXT_PUBLIC_URL + `/user/get/${data.userId}`,
            {
            headers: {
                Authorization: `Bearer ${Cookies.get("token")}`,
            },
            }
        ).then (function (response) {
            setUser(response.data);
            setIsLoading(false)
        })
    }


    const roleCheck = async () => {

        let role = ''
        await axios.get(
            process.env.NEXT_PUBLIC_URL + `/role/rolecheck`,
            {
            headers: {
                Authorization: `Bearer ${Cookies.get("token")}`,
            },
            }
        ).then (function (response) {
            role = response.data.role;
        })

        return role
    }

    useEffect(() => {
        const fetchData = async () => {
            try {
                const role = await roleCheck(); // Call roleCheck to get the role
                if (role === 'unenrolled') {
                    router.push(`/onboarding`);
                } else {
                    fetchUser({userId: userId});
                }
            } catch (error) {
                console.error("Error fetching user data:", error);
            }
        };
    
        fetchData();
    }, []);
    

    const value = {
      isLoading,
      user
    }
  
    return <ProfileContext.Provider value={value}>{children}</ProfileContext.Provider>
  }
  