import { useState } from "react";
import { Pressable, TextInput, TouchableOpacity, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

import CustomText from "../ui/CustomText";
import H1 from "../ui/Heading";
import { BackIcon } from "../ui/icons";
import { OnboardingScreenProps } from "./index";

export default function Screen5(props: OnboardingScreenProps) {
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
              Step 4 of 6
            </CustomText>
          </View>
          <CustomText styling="text-[14px] pt-[24px]">
            Let’s get to know you
          </CustomText>
          <H1 styling="text-[16px] pt-[12px]" textFontStyle="heading">
            What is the reason for your inquiry?
          </H1>
          <View className="pt-[40px]">
            <Pressable className="mx-auto flex h-[48px] w-full justify-center rounded-lg border-[1px] border-blue bg-[#E4EDFF]">
              <H1 styling="text-center text-[#505050]">Depression</H1>
            </Pressable>
            <Pressable className="mx-auto mt-[16px] flex h-[48px] w-full justify-center rounded-lg border-[1px] border-blue bg-[#E4EDFF]">
              <H1 styling="text-center text-[#505050]">Anxiety</H1>
            </Pressable>
            <Pressable className="mx-auto mt-[16px] flex h-[48px] w-full justify-center rounded-lg border-[1px] border-blue bg-[#E4EDFF]">
              <H1 styling="text-center text-[#505050]">Post Traumatic Stress Disorder</H1>
            </Pressable>
             <Pressable className="mx-auto mt-[16px] flex h-[48px] w-full justify-center rounded-lg border-[1px] border-blue bg-[#E4EDFF]">
              <H1 styling="text-center text-[#505050]">Alcohol/Non-Prescribed Drug</H1>
            </Pressable>
          </View>
          <TouchableOpacity
            className="mx-auto mt-[40px] flex h-[48px] w-full justify-center rounded-lg bg-blue"
            onPress={() => props.setPage(6)}
          >
            <H1 styling="text-white text-center text-[16px]">Next</H1>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
