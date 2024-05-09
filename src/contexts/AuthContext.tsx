'use client'
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
  
  type AuthContextValue = {
    userId: String
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
    const [userId, setUserId] = useState<String>("")
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

            const decodedToken = jwtDecode<{ userId: string }>(response.data.token);

            setUserId(decodedToken.userId)
            console.log(decodedToken.userId)

            router.push('/onboarding')
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
            console.log(response.data);
        })
        .catch(function (error) {
            console.log(error);
        });
    }

    const logout = () => {
        setUserId("")
        Cookies.remove("token")
    }

    useEffect(() => {
        const token = Cookies.get("token")

        if (!token || token === "undefined") {
            throw new Error()
        } else {
            const decodedToken = jwtDecode<{ userId: string }>(token);
            setUserId(decodedToken.userId)
        }
    }),[]
  
    const value = {
      userId,
      login,
      signup,
      logout
    }
  
    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
  }
  