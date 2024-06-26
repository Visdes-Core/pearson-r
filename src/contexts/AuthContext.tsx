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
    error: String
  }
  
  const AuthContext = createContext({} as AuthContextValue)
  
  export const useAuthContext = () => useContext(AuthContext)
  
  export const AuthContextProvider = ({ children }: { children: ReactNode }) => {
    const [userId, setUserId] = useState<UUID>("00000000-0000-0000-0000-000000000000")
    const [error, setError] = useState<String>("")
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

            if (response.status !== 200) {
                setError(response.data)
            }

            Cookies.set("token", response.data.token)

            const decodedToken = jwtDecode<{ userId: UUID }>(response.data.token);

            setUserId(decodedToken.userId)
            router.push(`/profile?id=${decodedToken.userId}`)
        })
        .catch(function (error) {
            console.log(error.response.data.error);
            setError(error.response.data.error)
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
            console.log(((error.response.data.details == undefined ) ? false : 
                error.response.data.details[0].message)|| 
                error.response.data.error || 
                error.response.data.message);
            setError(((error.response.data.details == undefined ) ? false : 
                error.response.data.details[0].message)|| 
                error.response.data.error || 
                error.response.data.message)
        });
    }

    const logout = () => {
        setUserId("00000000-0000-0000-0000-000000000000")
        Cookies.remove("token")
    }

    useEffect(() => {
        const token = Cookies.get("token")
    
        if (token && token !== "undefined") {
            const decodedToken = jwtDecode<{ userId: UUID }>(token);
            setUserId(decodedToken.userId)
        }
    }, [])
  
    const value = {
      userId,
      login,
      signup,
      logout,
      error
    }
  
    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
  }
  