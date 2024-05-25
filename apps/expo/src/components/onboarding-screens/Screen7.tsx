
import { Pressable,  TouchableOpacity, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";
import CustomText from "../ui/CustomText";
import H1 from "../ui/Heading";
import { BackIcon } from "../ui/icons";
import { OnboardingScreenProps } from "./index";

export default function Screen7(props: OnboardingScreenProps) {
  const router = useRouter();
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
              Step 6 of 6
            </CustomText>
          </View>
          <CustomText styling="text-[14px] pt-[24px]">
            Let’s get to know you
          </CustomText>
          <H1 styling="text-[16px] pt-[12px]" textFontStyle="heading">
            Have you used any mental health software before?
          </H1>
          <View className="pt-[40px]">
            <Pressable className="mx-auto flex h-[48px] w-full justify-center rounded-lg border-[1px] border-blue bg-[#E4EDFF]">
              <H1 styling="text-center text-[#505050]">Yes</H1>
            </Pressable>
            <Pressable className="mx-auto mt-[16px] flex h-[48px] w-full justify-center rounded-lg border-[1px] border-blue bg-[#E4EDFF]">
              <H1 styling="text-center text-[#505050]">No</H1>
            </Pressable>
          </View>
          <TouchableOpacity
            className="mx-auto mt-[40px] flex h-[48px] w-full justify-center rounded-lg bg-blue"
            onPress={async () => {
              try {
                const res = await AsyncStorage.setItem("onboarded", "true");
                router.push("/");
                return res;
              } catch (e) {
                console.log(e);
              }
            }}
          >
            <H1 styling="text-white text-center text-[16px]">Next</H1>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
