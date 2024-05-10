'use client'

import React from "react";
import OnboardingPelajarModule from "@/modules/OnboardingPelajarModule";
import { AuthWrapperContextProvider } from "@/contexts/AuthWrapperContext";

function OnboardingPelajar() {
  return (
    <AuthWrapperContextProvider>
      <OnboardingPelajarModule />
    </AuthWrapperContextProvider>
)};

export default OnboardingPelajar;
