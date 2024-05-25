import { useState, type Dispatch, type SetStateAction } from "react";
import {
  Image,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { useSignIn } from "@clerk/clerk-expo";

import CustomText from "~/components/ui/CustomText";
import H1 from "~/components/ui/Heading";

export default function SendOTP(props: {
  setSuccessfulCreation: Dispatch<SetStateAction<boolean>>;
}) {
  const [emailAddress, setEmailAddress] = useState("");
  const [error, setError] = useState("");
  const { signIn } = useSignIn();

  const SendOTP = async () => {
    if (!emailAddress) {
      setError("Please enter your email address");
      return;
    }
    try {
      await signIn
        ?.create({
          identifier: emailAddress,
          strategy: "reset_password_email_code",
        })
        .then((_) => {
          setError("");
          props.setSuccessfulCreation(true);
        })
        .catch((err) => {
          console.error("error", err.errors[0].longMessage);
          setError(err.errors[0].longMessage);
        });
    } catch (err: any) {
      console.log(err);
      setError(err.errors[0].longMessage);
    }
  };

  return (
    <SafeAreaView className="">
      <View className="flex flex-col items-center justify-center">
        <Image
          source={require("../../../../assets/adaptive-icon.png")}
          className="h-[40px] w-[200px] object-cover"
        />
        <H1 styling=" text-xl pt-[24px]">Reset your Password</H1>
        <TouchableOpacity className=" my-3">
          <View className="flex flex-row">
            <CustomText styling="">
              Enter your email address and we will send instructions
            </CustomText>
          </View>
        </TouchableOpacity>
      </View>

      <View className="">
        <View className=" pt-10">
          <View>
            <H1 styling="text-[14px]">Email</H1>
            <TextInput
              autoCapitalize="none"
              value={emailAddress}
              placeholder="Enter your email"
              placeholderTextColor="#989898"
              className="mt-2  w-full rounded-md border-[1px] border-[#989898] py-[10px] pl-[20px] text-[14px] text-[#505050]"
              onChangeText={(text) => setEmailAddress(text)}
            />
          </View>

          {error && (
            <View>
              <H1 styling="mt-5 text-red-500">{error}</H1>
            </View>
          )}
          <View className="flex flex-row items-center pt-[32px] text-center">
            <TouchableOpacity
              className="flex  h-[40px]  w-full items-center justify-center rounded-md bg-blue"
              onPress={SendOTP}
            >
              <H1 styling="text-[16px] tracking-wide text-white ">Log In</H1>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
