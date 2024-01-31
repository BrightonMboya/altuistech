import React from "react";
import { Pressable, TextInput, TouchableOpacity, View } from "react-native";
import { useSignIn } from "@clerk/clerk-expo";

import { Button } from "../ui";
import P from "../ui/Text";

export default function SignInScreen({
  setShowSignIn,
}: {
  setShowSignIn: any;
}) {
  const { signIn, setActive, isLoaded } = useSignIn();

  const [emailAddress, setEmailAddress] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [error, setError] = React.useState("");
  const onSignInPress = async () => {
    if (!isLoaded) {
      return;
    }

    try {
      const completeSignIn = await signIn.create({
        identifier: emailAddress,
        password,
      });
      // This is an important step,
      // This indicates the user is signed in
      await setActive({ session: completeSignIn.createdSessionId });
    } catch (err: any) {
      console.log(err);
      setError(err.errors[0].longMessage);
    }
  };
  return (
    <View className="">
      <P style="text-2xl font-bold text-white text-center">Welcome Back</P>
      <P style="pt-1 text-center text-[18px] font-light text-white">
        Enter your credentials to continue
      </P>

      <View className="mt-10">
        <TextInput
          autoCapitalize="none"
          value={emailAddress}
          placeholder="j.doe@alustudent.com"
          placeholderTextColor="#fff"
          className="mt-2 w-full border-b-[1px] border-white py-2 text-[18px] text-white"
          onChangeText={(email) => setEmailAddress(email)}
        />
      </View>

      <View className="mt-1">
        <TextInput
          value={password}
          placeholder="Password..."
          placeholderTextColor="#fff"
          secureTextEntry={true}
          className="mt-5 w-full border-b-[1px] border-white py-2 text-[18px] text-white"
          onChangeText={(password) => setPassword(password)}
        />
      </View>

      {error && (
        <View>
          <P style="mt-5 font-medium text-red-500">{error}</P>
        </View>
      )}
      <View className="mt-5 flex flex-row items-center">
        <P style="text-white text-[17px]">Don't have an account?,</P>
        <Pressable onPress={() => setShowSignIn(false)}>
          <P style="font-medium text-indigo-500 pl-3 text-lg">Sign Up</P>
        </Pressable>
      </View>

      <Button className="bg-green mt-[30px]" onPress={onSignInPress}>
        Sign In
      </Button>
    </View>
  );
}
