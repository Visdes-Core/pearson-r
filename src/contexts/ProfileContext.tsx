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
    const userId : UUID = searchParams.get('id') as UUID;
    
    const [user, setUser] = useState(null)
    const [isLoading, setIsLoading] = useState(true)
  
    const fetchUser = (data: {
        userId : UUID
    }) => {
        axios.get(
            process.env.NEXT_PUBLIC_URL + `/user/${data.userId}`,
            {
            headers: {
                Profileorization: `Bearer ${Cookies.get("token")}`,
            },
            }
        ).then (function (response) {
            setUser(response.data);
            setIsLoading(false)
        })
    }

    useEffect(() => {
        fetchUser({userId : userId});
    }, []);

    const value = {
      isLoading,
      user
    }
  
    return <ProfileContext.Provider value={value}>{children}</ProfileContext.Provider>
  }
  