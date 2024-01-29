import { useState } from "react";
import { ScrollView, TextInput, TouchableOpacity, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

import EmailVerification from "./EmailVerification";
import LoginScreen from "./LoginScreen";
import CreateAccountForm from "./createAccountForm";

export default function CreateAccountScreen() {
  const [showSignIn, setShowSignIn] = useState(false);
  const [pendingVerification, setPendingVerification] = useState(false);
  return (
    <SafeAreaProvider>
      <SafeAreaView className="flex min-h-screen flex-col items-center bg-white">
        <ScrollView className="w-[80%]">
          {!pendingVerification && !showSignIn && (
            <CreateAccountForm
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
