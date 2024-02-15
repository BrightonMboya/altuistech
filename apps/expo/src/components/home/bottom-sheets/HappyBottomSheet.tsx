import { Dimensions, Image, TouchableOpacity, View } from "react-native";
import { useRouter } from "expo-router";
import { A } from "@expo/html-elements";

import H1 from "~/components/ui/Heading";
import P from "~/components/ui/Text";
import BottomSheetScrollView from "./BottomSheetScrollView";

export default function Component({ happyBottomRef }: { happyBottomRef: any }) {
  const router = useRouter();
  const screen_width = Dimensions.get("screen").width;

  return (
    // @ts-ignore
    <BottomSheetScrollView
      ref={happyBottomRef}
      // snapTo={"90%"}
      snapTo={screen_width > 700 ? "55%" : "90%"}
      backgroundColor={"white"}
      backDropColor={"black"}
    >
      <View className="flex flex-col items-center pt-5">
        <View>
          <View className="w-[335px] rounded-md border-[1px] border-[#B8B8B8] bg-white pb-5 pl-5 pt-5 shadow-sm md:w-[700px]">
            <Image
              source={require("../../../../assets/imgs/moon.png")}
              className="h-[56px] w-[56px] object-cover"
            />

            <H1 styling="text-lg pt-2 md:text-2xl">
              Keep Shining! Celebrate Your Happiness.
            </H1>
            <P style="pt-3 pr-[2px] text-base text-[#505050] md:text-xl">
              Feeling great is awesome! Savor this positive mood and share it
              with others. Remember to take care of yourself and keep doing
              things that bring you joy.
            </P>
          </View>
          <P style="text-lg mt-5 text-[#505050] md:text-xl">
            Here are some ideas:
          </P>
          <View className="md:flex md:flex-row">
            <TouchableOpacity
              className="mt-5 h-12 w-[350px] rounded-md bg-[#1960F2]"
              // onPress={() => {
              //   router.push("/");
              // }}
            >
              <A
                href="https://www.youtube.com/watch?v=HT_ZvD94_kE"
                className="mt-3"
              >
                <H1 styling="text-lg tracking-wide text-white pt-2 text-center md:text-xl">
                  Watch a Video
                </H1>
              </A>
            </TouchableOpacity>
            <TouchableOpacity
              className="mt-5 h-12 w-[350px] rounded-md border-[2px] border-[#1960F2] bg-white  md:ml-5 "
              onPress={() => {
                router.push("/");
              }}
            >
              <H1 styling="text-lg tracking-wide text-[#1960F2] pt-2 text-center md:text-xl">
                Write down your feeling
              </H1>
            </TouchableOpacity>
          </View>

          <View className="mt-5 flex flex-row items-center  ">
            <View className="w-[150px] border-[1px] border-[#989898] md:w-[340px]"></View>
            <P style="px-2 text-[#989898] md:text-lg">or</P>
            <View className="w-[150px] border-[1px]  border-[#989898] md:w-[340px]"></View>
          </View>
          <View className="mt-5  w-[350px] rounded-md bg-[#E4EDFF] md:w-[700px]">
            <P style="text-center px-4 py-5 text-base text-[#505050] md:text-xl">
              Spend time with loved ones, Do something you're passionate about,
              Practice gratitude, or go for a walk in nature.
            </P>
          </View>
        </View>
      </View>
    </BottomSheetScrollView>
  );
}
