"use client";

import { AuthWrapperContextProvider } from "@/contexts/AuthWrapperContext";
import ProfileModule from "@/modules/ProfileModule";

export default function Profile() {

  return (
    <AuthWrapperContextProvider>
        <ProfileModule/>
    </AuthWrapperContextProvider>
  );
}