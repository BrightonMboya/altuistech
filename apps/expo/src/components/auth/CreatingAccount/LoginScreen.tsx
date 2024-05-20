import { SetStateAction, useState } from "react";

import { AuthScreenProps } from "../onboarding-screen/OnboardingScreen";
import ForgotPassword from "./ForgotPassword";
import LoginScreen from "./LoginComponent";

export default function LoginScreenPage(props: AuthScreenProps) {
  const [showForgotPassword, setShowForgotPassword] = useState(false);
  const [showLoginScreen, setShowLoginScreen] = useState(true);
  return (
    <>
      {showLoginScreen && (
        <LoginScreen
          setShowForgotPassword={setShowForgotPassword}
          setShowOnboarding={props.setShowOnboarding}
          setSignWithEmail={props.setSignWithEmail}
          setShowLoginScreen={setShowLoginScreen}
          setShowLogin={props.setShowLogin}
        />
      )}
      {showForgotPassword && (
        <ForgotPassword
          setShowLoginScreen={setShowLoginScreen}
          setShowForgotPassword={setShowForgotPassword}
        />
      )}
    </>
  );
}
