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
    questions : any
    upVote : (data: { questionId: UUID;}) => Promise<void>
  }
  
  const ProfileContext = createContext({} as ProfileContextValue)
  
  export const useProfileContext = () => useContext(ProfileContext)
  
  export const ProfileContextProvider = ({ children }: { children: ReactNode }) => {
    const searchParams = useSearchParams()
    const router = useRouter()
    const userId : UUID = searchParams.get('id') as UUID;
    
    const [user, setUser] = useState(null)
    const [questions, setQuestions] = useState(null)
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
        })
    }

    const fetchQuestions = async (data: {
        userId : UUID
    }) => {
        await axios.get(
            process.env.NEXT_PUBLIC_URL + `/question/${data.userId}`,
            {
            headers: {
                Authorization: `Bearer ${Cookies.get("token")}`,
            },
            }
        ).then (function (response) {
            setQuestions(response.data);
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

    const upVote = async (data: {
        questionId : UUID
    }) => {
        await axios.get(
            process.env.NEXT_PUBLIC_URL + `/question/upvote/${data.questionId}`,
            {
            headers: {
                Authorization: `Bearer ${Cookies.get("token")}`,
            },
            }
        )
    }

    useEffect(() => {
        const fetchData = async () => {
            try {
                const role = await roleCheck();
                if (role === 'unenrolled') {
                    router.push(`/onboarding`);
                } else {
                    await fetchQuestions({userId: userId})
                    await fetchUser({userId: userId})
                    setIsLoading(false)
                }

            } catch (error) {
                console.error("Error fetching user data:", error);
            }
        };
    
        fetchData();
    }, []);
    console.log(questions)

    const value = {
      isLoading,
      user,
      questions,
      upVote
    }
  
    return <ProfileContext.Provider value={value}>{children}</ProfileContext.Provider>
  }
  