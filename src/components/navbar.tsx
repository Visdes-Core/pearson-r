import React from "react";
import Link from "next/link";

import { UUID } from "crypto";


function NavBar({userId} : {userId : UUID}) {

    return (

        <section className="flex justify-between items-center mb-10 text-lg w-[80%] mt-[56px]">
            <p className="text-3xl">MATCH<br/><span className='font-bold'>MAJOR</span></p>
            <div className="flex gap-32">
                <Link href={'/matching'}>
                    <button>Match</button>
                </Link>

                <Link href={'/chat'}>
                    <button>Pesan</button>
                </Link>

                <Link href={`/profile/?id=${userId}`}>
                    <button>Profile</button>
                </Link>
            </div>
            <p className='font-semibold text-red-500'>Log out</p>
        </section>
    );
}

export default NavBar;