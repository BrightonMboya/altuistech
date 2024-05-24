import { useState } from "react";
import { TextInput, TouchableOpacity, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

import CustomText from "../ui/CustomText";
import H1 from "../ui/Heading";
import { BackIcon } from "../ui/icons";
import { OnboardingScreenProps } from "./index";

export default function Screen2(props: OnboardingScreenProps) {
  const [age, setAge] = useState("");
  return (
    <SafeAreaProvider>
      <SafeAreaView className="relative h-screen bg-white px-5">
        <View className="pt-5">
          <BackIcon />

          <View className="mt-[16px] h-[33px] w-[93px] rounded-[200px] bg-[#EBF2FF]">
            <CustomText
              styling="text-center py-[8px] text-blue"
              textFontStyle="heading"
            >
              Step 1 of 6
            </CustomText>
          </View>
          <CustomText styling="text-[14px] pt-[24px]">
            Let’s get to know you
          </CustomText>
          <H1 styling="text-[16px] pt-[12px]" textFontStyle="heading">
            What is your age?
          </H1>
          <View>
            <TextInput
              autoCapitalize="none"
              value={age}
              placeholder="Enter your age"
              placeholderTextColor="#989898"
              className="mt-2 w-full rounded-md border-[1px] border-blue py-[10px] pl-[20px] text-[14px] text-[#505050]"
              onChangeText={(text) => setAge(text)}
            />
          </View>
          <TouchableOpacity
            className="mx-auto mt-[40px] flex h-[48px] w-full justify-center rounded-lg bg-blue"
            onPress={() => props.setPage(3)}
          >
            <H1 styling="text-white text-center text-[16px]">Next</H1>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
