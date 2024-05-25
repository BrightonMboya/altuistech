import { Dispatch, useState, type SetStateAction } from "react";
import {
  Platform,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import OTP from "../forgot-password/OTP";
import SendOTP from "../forgot-password/send-otp";

interface ForgotPasswordProps {
  setShowLoginScreen: Dispatch<SetStateAction<boolean>>;
  setShowForgotPassword: Dispatch<SetStateAction<boolean>>;
}

export default function ForgotPassword({
  setShowLoginScreen,
  setShowForgotPassword,
}: ForgotPasswordProps) {
  const [successfulCreation, setSuccessfulCreation] = useState(false);

  return (
    <>
      <SafeAreaView className="relative mx-5 h-screen pl-5">
        {successfulCreation ? <OTP /> : <SendOTP setSuccessfulCreation={setSuccessfulCreation} />}
      </SafeAreaView>
    </>
  );
}
