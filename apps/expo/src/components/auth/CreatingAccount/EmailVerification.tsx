import { Dispatch, useState, type SetStateAction } from "react";
import {
  Platform,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from "react-native-confirmation-code-field";
import { useSignUp, useUser } from "@clerk/clerk-expo";

import CustomText from "~/components/ui/CustomText";
import H1 from "~/components/ui/Heading";

export default function EmailVerification() {
  const [value, setValue] = useState("");
  const CELL_COUNT = 6;
  const ref = useBlurOnFulfill({ value, cellCount: CELL_COUNT });
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });
  const [verifyEmailError, setVerifyEmailError] = useState("");

  const { isLoaded, signUp, setActive } = useSignUp();

  // This verifies the user using email code that is delivered.
  const onPressVerify = async () => {
    if (!isLoaded) {
      return;
    }

    try {
      const completeSignUp = await signUp.attemptEmailAddressVerification({
        code: value,
      });

      await setActive({ session: completeSignUp.createdSessionId });

      // console.log(JSON.stringify(completeSignUp, null, 2));
    } catch (err: any) {
      // console.error(JSON.stringify(err, null, 2));
      console.error(
        "<<<<<<<<<<<",
        JSON.stringify(err, null, 2),
        ">>>>>>>>>>>>",
      );
      setVerifyEmailError(err.errors[0].longMessage);
    }
  };

  return (
    <>
      <SafeAreaView className="relative mx-5 h-screen pl-5">
        <View className="flex flex-row pt-[24px]">
          <H1 styling="text-xl">Email Verification</H1>
        </View>
        <CustomText styling="pt-[8px]">
          Enter the code we sent to your email to verify your account
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
          onPress={() => onPressVerify()}
        >
          <H1 styling="text-[16px] tracking-wide text-white ">Verify</H1>
        </TouchableOpacity>
      </SafeAreaView>
    </>
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
