import { useState } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from "react-native-confirmation-code-field";
import { useSignIn } from "@clerk/clerk-expo";

import CustomText from "~/components/ui/CustomText";
import H1 from "~/components/ui/Heading";
import { BackIcon } from "~/components/ui/icons";

export default function OTP() {
  const { signIn, setActive } = useSignIn();
  const [value, setValue] = useState("");
  const CELL_COUNT = 6;
  const ref = useBlurOnFulfill({ value, cellCount: CELL_COUNT });
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });
  const [newPassword, setNewPassword] = useState("");
  const [error, setError] = useState("");
  const [showNewPasswordForm, setShowNewPasswordForm] = useState(false);

  const resetPassword = async () => {
    if (!newPassword || !value) {
      return;
    }
    const res = await signIn
      ?.attemptFirstFactor({
        strategy: "reset_password_email_code",
        code: value,
        password: newPassword,
      })
      .then((res) => {
        if (res.status === "complete") {
          setActive({ session: res.createdSessionId });
          setError("");
        } else {
          console.log(JSON.stringify(res));
        }
      })
      .catch((err) => {
        setError(err.errors[0].longMessage);
      });
    console.log(JSON.stringify(res));
  };
  return (
    <View>
      <View className="flex pt-[24px]">
        {!showNewPasswordForm && (
          <View className="">
            <TouchableOpacity>
              <BackIcon />
            </TouchableOpacity>
            <H1 styling="text-xl pl-3">Forget Password</H1>
            <CustomText styling="pt-[8px]">
              Enter the six digit code sent to your email.
            </CustomText>
            {/* @ts-ignore */}
            <CodeField
              ref={ref}
              {...props}
              // Use `caretHidden={false}` when users can't paste a text value, because context menu doesn't appear
              value={value}
              onChangeText={setValue}
              cellCount={CELL_COUNT}
              rootStyle={styles.codeFieldRoot}
              keyboardType="number-pad"
              textContentType="oneTimeCode"
              autoComplete={Platform.select({
                android: "sms-otp",
                default: "one-time-code",
              })}
              testID="my-code-input"
              renderCell={({ index, symbol, isFocused }) => (
                <Text
                  key={index}
                  style={[styles.cell, isFocused && styles.focusCell]}
                  onLayout={getCellOnLayoutHandler(index)}
                >
                  {symbol || (isFocused ? <Cursor /> : null)}
                </Text>
              )}
            />
            <TouchableOpacity
              className="mt-[30px] flex  h-[40px]   items-center justify-center rounded-md bg-[#1960F2] "
              onPress={() => {
                setShowNewPasswordForm(true);
              }}
            >
              <H1 styling="text-[16px] tracking-wide text-white ">
                Verify OTP
              </H1>
            </TouchableOpacity>
          </View>
        )}
      </View>

      {showNewPasswordForm && (
        <View className="mt-[24px] pl-3">
            <H1 styling="text-xl ">Create New Password</H1>
            <CustomText styling="pt-[8px]">Set a strong password to keep secure your account.</CustomText>
          <H1 styling="text-[14px] mt-[24px]">New Password</H1>
          <TextInput
            autoCapitalize="none"
            value={newPassword}
            placeholder="Enter your password"
            placeholderTextColor="#989898"
            className="mt-5  w-full rounded-md border-[1px] border-[#989898] py-[10px] pl-[20px] text-[14px] text-[#505050]"
            onChangeText={(text) => setNewPassword(text)}
          />
          <TouchableOpacity
            className="mt-[30px] flex  h-[40px]   items-center justify-center rounded-md bg-[#1960F2] "
            onPress={resetPassword}
          >
            <H1 styling="text-[16px] tracking-wide text-white ">
              Reset Password
            </H1>
          </TouchableOpacity>
        </View>
      )}
      {error && (
        <View>
          <H1 styling="mt-5 text-red-500">{error}</H1>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  root: { flex: 1, padding: 20 },
  title: { textAlign: "center", fontSize: 30 },
  codeFieldRoot: { marginTop: 20 },
  cell: {
    width: 54,
    height: 54,
    borderRadius: 8,
    lineHeight: 38,
    fontSize: 24,
    borderWidth: 1,
    borderColor: "#b8b8b8",
    textAlign: "center",
  },
  focusCell: {
    borderColor: "#1960F2",
  },
});
