import { useState } from "react";

import CreateAccountScreen from "./CreatingAccount/CreateAccountScreen";
import OnboardingScreen from "./onboarding-screen/OnboardingScreen";

export default function AuthScreen() {
  const [showOnboarding, setShowOnboarding] = useState(true);

  if (showOnboarding) {
    return <OnboardingScreen setShowOnboarding={setShowOnboarding} />;
  } else {
    return <CreateAccountScreen />;
  }
}
