import { useState } from "react";
import { ScrollView } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

import { AuthScreenProps } from "../onboarding-screen/OnboardingScreen";
import EmailVerification from "./EmailVerification";
import LoginScreen from "./LoginScreen";
import CreateAccountForm from "./createAccountForm";

export default function CreateAccountScreen(props: AuthScreenProps) {
  const [showSignIn, setShowSignIn] = useState(false);
  const [pendingVerification, setPendingVerification] = useState(false);
  return (
    <SafeAreaProvider>
      <SafeAreaView className="flex min-h-screen flex-col items-center bg-white">
        <ScrollView className="w-[90%]">
          {!pendingVerification && !showSignIn && (
            <CreateAccountForm
              {...props}
              setPendingVerification={setPendingVerification}
            />
          )}
          {showSignIn && <LoginScreen />}
          {pendingVerification && <EmailVerification />}
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
