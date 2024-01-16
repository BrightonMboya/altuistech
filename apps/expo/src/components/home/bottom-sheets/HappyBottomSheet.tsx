import { Image, TouchableOpacity, View } from "react-native";
import { useRouter } from "expo-router";

import P from "~/components/ui/Text";
import BottomSheetScrollView from "./BottomSheetScrollView";

export default function Component({ happyBottomRef }: { happyBottomRef: any }) {
  const router = useRouter();

  return (
    // @ts-ignore
    <BottomSheetScrollView
      ref={happyBottomRef}
      snapTo={"90%"}
      backgroundColor={"white"}
      backDropColor={"black"}
    >
      <View className="flex flex-col items-center pt-5">
        <View>
          <View className="w-[335px] rounded-md border-[1px] border-[#B8B8B8] bg-white pb-5 pl-5 pt-5 shadow-sm">
            <Image
              source={require("../../../../assets/imgs/moon.png")}
              className="h-[56px] w-[56px] object-cover"
            />

            <P style="text-lg" textType="medium">
              Keep Shining! Celebrate Your Happiness.
            </P>
            <P style="pt-3 pr-[2px] text-base">
              Feeling great is awesome! Savor this positive mood and share it
              with others. Remember to take care of yourself and keep doing
              things that bring you joy.
            </P>
          </View>
          <P style="text-lg mt-5">Here are some ideas:</P>
          <TouchableOpacity
            className="mt-5 h-12 w-[350px] rounded-md bg-[#1960F2]"
            onPress={() => {
              router.push("/");
            }}
          >
            <P
              style="text-lg tracking-wide text-white p-3 text-center"
              textType="medium"
            >
              Watch a Video
            </P>
          </TouchableOpacity>
          <TouchableOpacity
            className="mt-5 h-12 w-[350px] rounded-md border-[2px] border-[#1960F2]  bg-white "
            onPress={() => {
              router.push("/");
            }}
          >
            <P
              style="text-lg tracking-wide text-[#1960F2] p-3 text-center"
              textType="medium"
            >
              Write down your feeling
            </P>
          </TouchableOpacity>

          <View className="flex flex-row items-center mt-5  ">
            <View className="w-[150px] border-[1px] border-[#989898]"></View>
            <P style="px-2 text-[#989898]">or</P>
            <View className="w-[150px] border-[1px]  border-[#989898]"></View>
          </View>
          <View className="mt-5 h-[150px] w-[350px] rounded-md bg-[#E4EDFF]">
            <P style="text-center px-4 pt-5 text-base text-[#505050]">
              Spend time with loved ones, Do something you're passionate about,
              Practice gratitude, or go for a walk in nature.
            </P>
          </View>
        </View>
      </View>
    </BottomSheetScrollView>
  );
}
