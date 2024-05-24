import { useState, type Dispatch, type SetStateAction } from "react";
import { Image, TextInput, TouchableOpacity, View } from "react-native";
import { useSignUp } from "@clerk/clerk-expo";

import CustomText from "~/components/ui/CustomText";
import H1 from "~/components/ui/Heading";
import { AuthScreenProps } from "../onboarding-screen/OnboardingScreen";

interface Props extends AuthScreenProps {
  setPendingVerification: Dispatch<SetStateAction<boolean>>;
}

export default function CreateAccountForm(props: Props) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const { isLoaded, signUp, setActive } = useSignUp();

  // start the sign up process.
  const onSignUpPress = async () => {
    if (!isLoaded) {
      return;
    }

    try {
      await signUp.create({
        firstName,
        lastName,
        username: `${firstName.toLowerCase()}_${lastName.toLowerCase()}`,
        emailAddress,
        password,
      });

      // send the email.
      await signUp.prepareEmailAddressVerification({ strategy: "email_code" });
      props.setPendingVerification(true);

    } catch (err: any) {
      console.error(
        "<<<<<<<<<<<",
        JSON.stringify(err, null, 2),
        ">>>>>>>>>>>>",
      );
      setError(err.errors[0].longMessage);
    }
  };

  return (
    <View className="pt-5">
      <View className="flex flex-col items-center justify-center">
        <Image
          source={require("../../../../assets/adaptive-icon.png")}
          className="h-[40px] w-[200px] object-cover"
        />
        <H1 styling=" text-xl pt-[20px]">Create an account to get started</H1>
        <TouchableOpacity
          onPress={() => {
            props.setShowLogin(true);
            props.setShowOnboarding(false);
            props.setSignWithEmail(false);
          }}
          className=" my-3"
        >
          <View className="flex flex-row ">
            <CustomText styling="">Already have an </CustomText>
            <CustomText styling="text-[#505050]" textFontStyle="heading">
              emotions
            </CustomText>
            <CustomText> account? </CustomText>

            <CustomText styling="text-blue" textFontStyle="heading">
              Log in
            </CustomText>
          </View>
        </TouchableOpacity>
      </View>

      <View className="gap-5 px-3 pt-10 ">
        <View>
          <H1 styling="text-[14px]">First Name</H1>
          <TextInput
            autoCapitalize="none"
            value={firstName}
            placeholder="Enter your first name"
            placeholderTextColor="#989898"
            className="mt-2 w-full rounded-md border-[1px] border-[#989898] py-[10px] pl-[20px] text-[14px] text-[#505050]"
            onChangeText={(text) => setFirstName(text)}
          />
        </View>

        <View>
          <H1 styling="text-[14px]">Last Name</H1>
          <TextInput
            autoCapitalize="none"
            value={lastName}
            placeholder="Enter your last name"
            placeholderTextColor="#989898"
            className="mt-2  w-full rounded-md border-[1px] border-[#989898] py-[10px] pl-[20px] text-[14px] text-[#505050]"
            onChangeText={(text) => setLastName(text)}
          />
        </View>

        <View>
          <H1 styling="text-[14px]">Email</H1>
          <TextInput
            autoCapitalize="none"
            value={emailAddress}
            placeholder="Enter your email "
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
        </View>

        <H1 styling="text-red-500 pl-5 mt-5">{error}</H1>
        <TouchableOpacity
          className="mt-[30px] flex  h-[40px] items-center justify-center rounded-md bg-[#1960F2]"
          onPress={() => onSignUpPress()}
        >
          <H1 styling="text-[16px] tracking-wide text-white ">
            Create an Account
          </H1>
        </TouchableOpacity>
      </View>

      <View className="flex flex-row flex-wrap justify-center pt-[12px] ">
        <CustomText>By continuing, you agree to our </CustomText>
        <CustomText styling="text-blue" textFontStyle="heading">
          Terms and Conditions
        </CustomText>
        <CustomText>and </CustomText>
        <CustomText styling="text-blue" textFontStyle="heading">
          Privacy Policy.
        </CustomText>
      </View>
    </View>
  );
}
