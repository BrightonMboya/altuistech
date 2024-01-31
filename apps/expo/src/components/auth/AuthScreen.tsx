import { useState } from "react";

import CreateAccountScreen from "./CreatingAccount/CreateAccountScreen";
import LoginScreen from "./CreatingAccount/LoginScreen";
import OnboardingScreen from "./onboarding-screen/OnboardingScreen";

export default function AuthScreen() {
  const [showOnboarding, setShowOnboarding] = useState(true);
  const [showLogin, setShowLogin] = useState(false);

  console.log("login is", showLogin, "showOnboarding is", showOnboarding);

  if (showOnboarding) {
    return (
      <OnboardingScreen
        setShowOnboarding={setShowOnboarding}
        setShowLogin={setShowLogin}
      />
    );
  }
  if (showLogin) {
    return <LoginScreen />;
  } else {
    return <CreateAccountScreen />;
  }
}
