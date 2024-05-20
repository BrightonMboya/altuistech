import { useState } from "react";
import { View } from "react-native";

import H1 from "../ui/Heading";
import CreateAccountScreen from "./CreatingAccount/CreateAccountScreen";
import LoginScreen from "./CreatingAccount/LoginScreen";;
import OnboardingScreen from "./onboarding-screen/OnboardingScreen";

export default function AuthScreen() {
  const [showOnboarding, setShowOnboarding] = useState(true);
  const [showLogin, setShowLogin] = useState(false);
  const [signWithEmail, setSignWithEmail] = useState(false);

  return (
    <View>
      {signWithEmail ? (
        <CreateAccountScreen
          setShowLogin={setShowLogin}
          setShowOnboarding={setShowOnboarding}
          setSignWithEmail={setSignWithEmail}
        />
      ) : null}
      {showOnboarding ? (
        <OnboardingScreen
          setShowLogin={setShowLogin}
          setShowOnboarding={setShowOnboarding}
          setSignWithEmail={setSignWithEmail}
        />
      ) : null}
      {showLogin ? <LoginScreen /> : null}
    </View>
  );

  // if (showLogin) {
  //   return <LoginScreen />;
  // } else {
  //   return <CreateAccountScreen />;
  // }
}
