import React, { useState } from 'react'
import MahasiswaCard from "./module-elements/MahasiswaCard";
import TinderCard from 'react-tinder-card'
import Link from 'next/link';

function MatchingModule() {
  const [lastDirection, setLastDirection] = useState<string>()

  const swiped = (direction:string, nameToDelete:string) => {
    console.log('removing: ' + nameToDelete + ' to ' + direction)
    setLastDirection(direction)
  }

  const outOfFrame = (name:string) => {
    console.log(name + ' left the screen!')
  }
  return (
    <div className='flex flex-col text-black w-full px-10 text-blue-900'>
      <div className="flex justify-between items-center mb-24 text-lg">
        <p>MATCH<br/><span className='font-bold'>MAJOR</span></p>
        <div className="flex gap-32">
          <Link href={'/chat'}>
            <button>Pesan</button>
          </Link>
          <button className='font-semibold'>Match</button>
          <Link href={'/profil'}>
            <button>Profil</button>
          </Link>
        </div>
        <p className='font-semibold text-red-500'>Log out</p>
      </div>
      <div className="flex justify-center">
        <TinderCard className='absolute' onSwipe={(dir:string) => swiped(dir, 'Azmy')}
        onCardLeftScreen={() => outOfFrame('Azmy')} preventSwipe={['right', 'left']}>
          <MahasiswaCard />
        </TinderCard>
        <TinderCard className='absolute' onSwipe={(dir:string) => swiped(dir, 'Azmy')}
        onCardLeftScreen={() => outOfFrame('Azmy')} preventSwipe={['right', 'left']}>
          <MahasiswaCard />
        </TinderCard>
        <TinderCard className='absolute' onSwipe={(dir:string) => swiped(dir, 'Azmy')}
        onCardLeftScreen={() => outOfFrame('Azmy')} preventSwipe={['right', 'left']}>
          <MahasiswaCard />
        </TinderCard>
      </div>
    </div>
);
}

export default MatchingModule;
