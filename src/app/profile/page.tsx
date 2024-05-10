"use client";

import { Suspense } from 'react'
import { AuthWrapperContextProvider } from "@/contexts/AuthWrapperContext";
import { ProfileContextProvider } from "@/contexts/ProfileContext";
import ProfileModule from "@/modules/ProfileModule";

export default function Profile() {

  return (
    <Suspense>
        <ProfileContextProvider>
            <AuthWrapperContextProvider>
                <ProfileModule/>
            </AuthWrapperContextProvider>
        </ProfileContextProvider>
    </Suspense>
  );
}