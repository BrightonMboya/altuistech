import { useState } from "react";
import { Pressable, ScrollView, TouchableOpacity, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

import CustomText from "../ui/CustomText";
import H1 from "../ui/Heading";
import { BackIcon } from "../ui/icons";
import { OnboardingScreenProps } from "./index";

export default function Screen6(props: OnboardingScreenProps) {
  const [age, setAge] = useState("");
  return (
    <SafeAreaProvider>
      <SafeAreaView className="relative h-screen bg-white px-5">
        <ScrollView>
          <View className="">
            <BackIcon />

            <View className="mt-[16px] h-[33px] w-[93px] rounded-[200px] bg-[#EBF2FF]">
              <CustomText
                styling="text-center py-[8px] text-blue"
                textFontStyle="heading"
              >
                Step 5 of 6
              </CustomText>
            </View>
            <CustomText styling="text-[14px] pt-[24px]">
              Let’s get to know you
            </CustomText>
            <H1 styling="text-[16px] pt-[12px]" textFontStyle="heading">
              What’s your current relationship status?
            </H1>
            <View className="pt-[40px]">
              <Pressable className="mx-auto flex h-[48px] w-full justify-center rounded-lg border-[1px] border-blue bg-[#E4EDFF]">
                <H1 styling="text-center text-[#505050]">Single</H1>
              </Pressable>
              <Pressable className="mx-auto mt-[16px] flex h-[48px] w-full justify-center rounded-lg border-[1px] border-blue bg-[#E4EDFF]">
                <H1 styling="text-center text-[#505050]">
                  Married or in a relationship
                </H1>
              </Pressable>
              <Pressable className="mx-auto mt-[16px] flex h-[48px] w-full justify-center rounded-lg border-[1px] border-blue bg-[#E4EDFF]">
                <H1 styling="text-center text-[#505050]">Complicated</H1>
              </Pressable>
              <Pressable className="mx-auto mt-[16px] flex h-[48px] w-full justify-center rounded-lg border-[1px] border-blue bg-[#E4EDFF]">
                <H1 styling="text-center text-[#505050]">
                  Divorced or seperated
                </H1>
              </Pressable>
              <Pressable className="mx-auto mt-[16px] flex h-[48px] w-full justify-center rounded-lg border-[1px] border-blue bg-[#E4EDFF]">
                <H1 styling="text-center text-[#505050]">Widow/er</H1>
              </Pressable>
              <Pressable className="mx-auto mt-[16px] flex h-[48px] w-full justify-center rounded-lg border-[1px] border-blue bg-[#E4EDFF]">
                <H1 styling="text-center text-[#505050]">
                  I don’t want to say it
                </H1>
              </Pressable>
            </View>
            <TouchableOpacity
              className="mx-auto mt-[40px] flex h-[48px] w-full justify-center rounded-lg bg-blue"
              onPress={() => props.setPage(7)}
            >
              <H1 styling="text-white text-center text-[16px]">Next</H1>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
