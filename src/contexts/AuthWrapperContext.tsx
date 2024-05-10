"use client"
import {
    createContext,
    useContext,
    ReactNode,
    useEffect,
  } from "react"
  
import Cookies from "js-cookie"
import { useRouter } from "next/navigation";

const AuthWrapperContext = createContext({})

export const useAuthWrapperContext = () => useContext(AuthWrapperContext)
export const AuthWrapperContextProvider = ({ children }: { children: ReactNode }) => {

    const router = useRouter();

    useEffect(() => {
        const tokenFromCookie = Cookies.get("token");
            if (!tokenFromCookie) {
                router.push("/login");
            }
        }, []);

return <AuthWrapperContext.Provider value={{}}>{children}</AuthWrapperContext.Provider>
}