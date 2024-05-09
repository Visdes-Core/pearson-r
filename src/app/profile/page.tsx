"use client";

import { useAuthContext } from "@/contexts/AuthContext";

export default function SignUp() {

    const { token } = useAuthContext();

  return (
    <div className="flex min-h-screen justify-center items-center bg-[#F8F8F8] text-[#000000]">
      {token}
    </div>
  );
}