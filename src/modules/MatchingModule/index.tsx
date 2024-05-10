import React, { useEffect, useState } from 'react'
import MahasiswaCard from "./module-elements/MahasiswaCard";
import TinderCard from 'react-tinder-card'
import Link from 'next/link';
import axios from 'axios';
import { MahasiswaType, UserType } from './interface';
import { ToastContainer, toast } from 'react-toastify';
import { UserRoundCheck } from 'lucide-react';
import NavBar from '@/components/navbar';
import { useAuthContext } from '@/contexts/AuthContext';

function MatchingModule() {
  const [lastDirection, setLastDirection] = useState<string>()
  const [users, setUsers] = useState<UserType[]>([]);

  const { userId  } = useAuthContext();
  
  const notify = (swipedUsername: string) => toast.info("You swiped " + swipedUsername + "!", {
    icon: ({theme, type}) =>  <UserRoundCheck />
  });

  useEffect(() => {
    async function fetchUsers() {
      try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_URL}/user/get/list`);
        const data: UserType[] = response.data
        const result = data.filter((user) => user.mahasiswa!==null); 
        setUsers(result);
      } catch (error: any) {
        console.error('Error fetching users:', error.message);
      }
    }

    fetchUsers();
  }, []);
  console.log(users)

  const swiped = (direction:string, name:string) => {
    if(direction == 'up') {
      notify(name)
    }
    setLastDirection(direction)
  }

  const outOfFrame = (name:string) => {
    console.log(name + ' left the screen!')
  }
  return (
    <div className='flex flex-col items-center text-black w-full px-10 text-blue-900'>
        <NavBar userId={userId}></NavBar>

      
      <div className="flex justify-center mt-[128px]">
        {users.map((user: UserType, index) => (
          <TinderCard
            key={index}
            className='absolute'
            onSwipe={(dir) => swiped(dir, user.email)}
            onCardLeftScreen={() => outOfFrame(user.email)}
            preventSwipe={['right', 'left']}
          >
            <MahasiswaCard user={user} /> {/* Pastikan MahasiswaCard menerima prop user */}
          </TinderCard>
        ))}
      </div>
      <ToastContainer/>
    </div>
);
}

export default MatchingModule;
