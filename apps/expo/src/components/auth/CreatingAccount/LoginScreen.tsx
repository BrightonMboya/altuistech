import { useState } from "react";
import { TextInput, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useSignIn } from "@clerk/clerk-expo";

import H1 from "~/components/ui/Heading";

export default function LoginScreen() {
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
    <SafeAreaView className="pl-5">
      <H1 styling="text-lg">Login</H1>

      <View className="gap-5 pt-10">
        <View>
          <H1 styling="text-lg">Email</H1>
          <TextInput
            autoCapitalize="none"
            value={emailAddress}
            placeholder="john@gmail.com"
            placeholderTextColor="#989898"
            className="mt-2 w-[80%] rounded-md border-[1px] border-[#989898] p-2 text-[18px] text-[#505050]"
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
            className="mt-2 w-[80%] rounded-md border-[1px] border-[#989898] p-2 text-[18px] text-[#505050]"
            onChangeText={(text) => setPassword(text)}
          />
        </View>

        {error && (
          <View>
            <H1 styling="mt-5 text-red-500">{error}</H1>
          </View>
        )}

        <TouchableOpacity
          className="mt-10 h-12 w-[80%] rounded-md bg-[#1960F2]"
          onPress={() => onSignInPress()}
        >
          <H1 styling="text-xl tracking-wide text-white pt-2 text-center">
            Login
          </H1>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
