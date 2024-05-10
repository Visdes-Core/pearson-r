"use client"
import {
    useState,
    createContext,
    useContext,
    ReactNode,
    useEffect,
  } from "react"
  
  import axios from "axios"
  
  import { useRouter } from "next/navigation"
  import Cookies from "js-cookie"
  import { jwtDecode } from "jwt-decode"
  import { UUID } from "crypto"
  
  type AuthContextValue = {
    userId: UUID
    login: (data: {
      email: String
      password: String
    }) => void
    signup: (data : {
        username: String
        email: String
        password: String
        confirmPassword: String
    }) => void
    logout: () => void
  }
  
  const AuthContext = createContext({} as AuthContextValue)
  
  export const useAuthContext = () => useContext(AuthContext)
  
  export const AuthContextProvider = ({ children }: { children: ReactNode }) => {
    const [userId, setUserId] = useState<UUID>("00000000-0000-0000-0000-000000000000")
    const router = useRouter()
  
    const login = async (data: {
      email: String
      password: String
    }) => {
        axios.post(process.env.NEXT_PUBLIC_URL + '/auth/login', {
            email: data.email,
            password: data.password
        })
        .then(function (response) {
            Cookies.set("token", response.data.token)

            const decodedToken = jwtDecode<{ userId: UUID }>(response.data.token);

            setUserId(decodedToken.userId)
            router.push(`/profile?id=${decodedToken.userId}`)
        })
        .catch(function (error) {
            console.log(error);
        });
    }

    const signup = (data: {
        username: String
        email: String
        password: String
        confirmPassword: String
    }) => {
        axios.post(process.env.NEXT_PUBLIC_URL + '/auth/signup', {
            email: data.email,
            password: data.password,
            confirm_password: data.confirmPassword
        })
        .then(function (response) {
            router.push('/login')
        })
        .catch(function (error) {
            console.log(error);
        });
    }

    const logout = () => {
        setUserId("00000000-0000-0000-0000-000000000000")
        Cookies.remove("token")
    }
  
    const value = {
      userId,
      login,
      signup,
      logout
    }
  
    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
  }
  