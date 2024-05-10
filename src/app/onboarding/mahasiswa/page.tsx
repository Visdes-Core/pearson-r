'use client'
import React from "react";
import OnboardingMahasiswaModule from "@/modules/OnboardingMahasiswaModule";
import { AuthWrapperContextProvider } from "@/contexts/AuthWrapperContext";

function OnboardingMahasiswa() {
  return (
    <AuthWrapperContextProvider>
      <OnboardingMahasiswaModule />
    </AuthWrapperContextProvider>
);
}

export default OnboardingMahasiswa;
