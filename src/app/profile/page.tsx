"use client";

import { AuthWrapperContextProvider } from "@/contexts/AuthWrapperContext";
import { ProfileContextProvider } from "@/contexts/ProfileContext";
import ProfileModule from "@/modules/ProfileModule";

export default function Profile() {

  return (
    <ProfileContextProvider>
        <AuthWrapperContextProvider>
            <ProfileModule/>
        </AuthWrapperContextProvider>
    </ProfileContextProvider>

  );
}