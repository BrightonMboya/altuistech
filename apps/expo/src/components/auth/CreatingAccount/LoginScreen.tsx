import { useState } from "react";
import { TextInput, TouchableOpacity, View } from "react-native";

import H1 from "~/components/ui/Heading";

export default function LoginScreen() {
  const [emailAddress, setEmailAddress] = useState("");
  const [password, setPassword] = useState("");
  return (
    <>
      <H1 styling="text-lg">Login</H1>

      <View className="gap-5 pt-10">
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
          onPress={() => {}}
        >
          <H1 styling="text-xl tracking-wide text-white pt-2 text-center">
            Login
          </H1>
        </TouchableOpacity>
      </View>
    </>
  );
}
