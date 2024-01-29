import { useState, type Dispatch, type SetStateAction } from "react";
import { TextInput, TouchableOpacity, View } from "react-native";
import { useSignUp } from "@clerk/clerk-expo";

import H1 from "~/components/ui/Heading";
import P from "~/components/ui/Text";

interface Props {
  setPendingVerification: Dispatch<SetStateAction<boolean>>;
}

export default function CreateAccountForm({ setPendingVerification }: Props) {
  const [userName, setUserName] = useState("");
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
        emailAddress,
        password,
        username: userName,
      });

      // send the email.
      await signUp.prepareEmailAddressVerification({ strategy: "email_code" });
      setPendingVerification(true);

      // doing the phone number verification
      //   await signUp.preparePhoneNumberVerification({
      //     strategy: "phone_code",
      //   });
    } catch (err: any) {
      console.error(JSON.stringify(err, null, 2));
      setError(err.errors[0].longMessage);
    }
  };
  return (
    <View>
      <H1 styling=" text-xl pt-[60px]">Create an Account</H1>

      <View className="gap-5 pt-10">
        <View>
          <H1 styling="text-lg">User Name</H1>
          <TextInput
            autoCapitalize="none"
            value={userName}
            placeholder="John Doe"
            placeholderTextColor="#989898"
            className="mt-2 w-full rounded-md border-[1px] border-[#989898] p-2 text-[18px] text-[#505050]"
            onChangeText={(text) => setUserName(text)}
          />
        </View>

        <View>
          <H1 styling="text-lg">Email</H1>
          <TextInput
            autoCapitalize="none"
            value={emailAddress}
            placeholder="john@gmail.com"
            placeholderTextColor="#989898"
            className="mt-2 w-full rounded-md border-[1px] border-[#989898] p-2 text-[18px] text-[#505050]"
            onChangeText={(text) => setEmailAddress(text)}
          />
        </View>

        <View>
          <H1 styling="text-lg">Password</H1>
          <TextInput
            autoCapitalize="none"
            value={password}
            placeholder="John Doe"
            placeholderTextColor="#989898"
            className="mt-2 w-full rounded-md border-[1px] border-[#989898] p-2 text-[18px] text-[#505050]"
            onChangeText={(text) => setPassword(text)}
          />
        </View>

        <TouchableOpacity
          className="mt-10 h-12  rounded-md bg-[#1960F2]"
          onPress={onSignUpPress}
        >
          <H1 styling="text-xl tracking-wide text-white pt-2 text-center">
            Create an Account
          </H1>
        </TouchableOpacity>
      </View>
      <P style=" pt-[40px] text-base">
        By continuing, you agree to our Terms and Conditions and Privacy Policy.
      </P>
    </View>
  );
}
