import { Dispatch, SetStateAction, useState } from "react";
import { Image, TextInput, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useSignIn } from "@clerk/clerk-expo";

import CustomText from "~/components/ui/CustomText";
import H1 from "~/components/ui/Heading";
import { IconGoogle } from "~/components/ui/icons";
import { AuthScreenProps } from "../onboarding-screen/OnboardingScreen";

interface LoginComponentProps extends AuthScreenProps {
  setShowForgotPassword: Dispatch<SetStateAction<boolean>>;
  setShowLoginScreen: Dispatch<SetStateAction<boolean>>;
}

export default function LoginScreen(props: LoginComponentProps) {
  const { signIn, setActive, isLoaded } = useSignIn();

  const [emailAddress, setEmailAddress] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const onSignInPress = async () => {
    if (!isLoaded) {
      return;
    }
    try {
      const completeSignIn = await signIn.create({
        identifier: emailAddress,
        password,
      });
      await setActive({ session: completeSignIn.createdSessionId });
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
        <H1 styling=" text-xl pt-[24px]">Log In to continue using the app</H1>
        <TouchableOpacity
          onPress={() => {
            props.setShowLogin(false);
            props.setShowOnboarding(false);
            props.setSignWithEmail(true);
          }}
          className=" my-3"
        >
          <View className="flex flex-row">
            <CustomText styling="">Dont have an </CustomText>
            <CustomText styling="text-[#505050]" textFontStyle="heading">
              emotions
            </CustomText>
            <CustomText> account? </CustomText>

            <CustomText styling="text-blue" textFontStyle="heading">
              Create account
            </CustomText>
          </View>
        </TouchableOpacity>
      </View>

      <View className="px-5">
        <TouchableOpacity className="mt-[32px] flex  w-full items-center justify-center rounded-[8px] border-[1px] border-blue py-[10px]">
          <View className="flex flex-row">
            <IconGoogle />
            <H1 styling="text-blue text-[14px] tracking-[0.28px] leading-[19px] pl-3">
              Log in with Google
            </H1>
          </View>
        </TouchableOpacity>

        <View className="flex flex-row items-center justify-center text-center  ">
          <View className="flex flex-row items-center pt-[32px]  text-center  ">
            <View className="h-[1px] w-[30%] bg-[#b8b8b8]" />
            <CustomText styling="text-sm text-[#505050] w-[130px] border-2 mx-[5px] ">
              or login with email
            </CustomText>
            <View className="h-[1px] w-[30%] bg-[#b8b8b8]" />
          </View>
        </View>

        <View className="gap-[16px] pt-10">
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

          <View>
            <H1 styling="text-[14px]">Password</H1>
            <TextInput
              autoCapitalize="none"
              value={password}
              placeholder="Enter your password"
              placeholderTextColor="#989898"
              className="mt-2  w-full rounded-md border-[1px] border-[#989898] py-[10px] pl-[20px] text-[14px] text-[#505050]"
              onChangeText={(text) => setPassword(text)}
            />
            <TouchableOpacity
              onPress={() => {
                props.setShowForgotPassword(true);
                props.setShowLoginScreen(false);
              }}
            >
              <H1 styling="text-blue pt-2">Forgot Password?</H1>
            </TouchableOpacity>
          </View>

          {error && (
            <View>
              <H1 styling="mt-5 text-red-500">{error}</H1>
            </View>
          )}
          <View className="flex flex-row items-center pt-[32px] text-center">
            <TouchableOpacity
              className="flex  h-[40px]  w-full items-center justify-center rounded-md bg-blue"
              onPress={() => onSignInPress()}
            >
              <H1 styling="text-[16px] tracking-wide text-white ">Log In</H1>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
