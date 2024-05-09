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
  
  type AuthContextValue = {
    token: String
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
    const [token, setToken] = useState<String>("")
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

            setToken(response.data.token)
            console.log(response.data);

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

    useEffect(() => {
        const tokenFromCookie = Cookies.get("token");

        if (tokenFromCookie) {
            setToken(tokenFromCookie);
        } else {
            // Redirect to login page if token is not found
            router.push("/login");
        }
        
      }, []);

    const logout = () => {
        setToken("")
        Cookies.remove("token")
    }
  
    const value = {
      token,
      login,
      signup,
      logout
    }
  
    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
  }
  