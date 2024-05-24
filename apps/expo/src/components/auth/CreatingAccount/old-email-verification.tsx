import { useState } from "react";
import { TextInput, TouchableOpacity, View } from "react-native";
import { useSignUp } from "@clerk/clerk-expo";



import H1 from "~/components/ui/Heading";
import P from "~/components/ui/Text";


export default function EmailVerification() {
  const [verifyEmailError, setVerifyEmailError] = useState("");
  const [code, setCode] = useState("");
  const { isLoaded, signUp, setActive } = useSignUp();

  // This verifies the user using email code that is delivered.
  const onPressVerify = async () => {
    if (!isLoaded) {
      return;
    }

    try {
      const completeSignUp = await signUp.attemptEmailAddressVerification({
        code,
      });
      await setActive({ session: completeSignUp.createdSessionId });

     
       console.log("^^^^^^^ I am succccesful");
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
    <View className="flex flex-col items-center justify-center pt-20">
      <View>
        <H1 styling="text-lg font-bold ">
          Enter the code sent to your email address
        </H1>
        <P style="pt-5 text-center text-sm font-ligh ">
          Check your spam folder if you don't see the email.
        </P>

        {verifyEmailError && (
          <View>
            <P style="mt-5 font-medium text-red-500">{verifyEmailError}</P>
          </View>
        )}

        <View className="flex flex-row items-center justify-center gap-5 pt-[40px]">
          <TextInput
            value={code}
            placeholder="Code..."
            onChangeText={(code) => setCode(code)}
            placeholderTextColor="#505050"
            className="w-[150px] rounded-md border-[1px] border-[#505050] p-2 "
          />
          <TouchableOpacity onPress={() => onPressVerify()}>
            <View className="rounded-md bg-blue ">
              <H1 styling="px-4 py-2 text-center text-white font-medium ">
                Verify Email
              </H1>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}