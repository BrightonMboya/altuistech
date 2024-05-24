import { Image, TouchableOpacity, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

import CustomText from "../ui/CustomText";
import H1 from "../ui/Heading";
import { OnboardingScreenProps } from "./index";

export default function Screen1(props: OnboardingScreenProps) {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1, backgroundColor: "#E4EDFF" }}>
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <Image
            source={require("../../../assets/imgs/onboarding/people-onboarding.png")}
            // style={{ width: 300, height: 300 }}
            resizeMode="cover"
          />
          <View>
            <H1 styling="text-center pt-[48px] text-[16px]">
              Let’s know you a little bit better{" "}
            </H1>
            <CustomText styling="pt-[12px] text-[14px] text-center">
              To provide the best possible support for your emotional
              well-being, Emotion asks a few quick questions to personalize your
              experience.{" "}
            </CustomText>

            <View className="mx-auto my-[8px] mt-[32px] flex h-[32px] w-[248px] justify-center rounded-[8px] bg-white px-[24px]">
              <H1 styling="text-center text-blue text-[14px]">
                It takes less than 3 minutes
              </H1>
            </View>

            <TouchableOpacity
              className="mx-auto mt-[40px] flex h-[30px] w-[300px] justify-center rounded-lg bg-blue"
              onPress={() => props.setPage(2)}
            >
              <H1 styling="text-white text-center text-[16px]">Continue</H1>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
