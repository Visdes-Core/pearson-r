import { AuthWrapperContextProvider } from "@/contexts/AuthWrapperContext";
import OnboardingModule from "@/modules/OnboardingModule";

export default function Onboarding() {
  return (
    <AuthWrapperContextProvider>
        <OnboardingModule />
    </AuthWrapperContextProvider>
  );
}