import { Dimensions, Image, TouchableOpacity, View } from "react-native";
import { useRouter } from "expo-router";

import H1 from "~/components/ui/Heading";
import P from "~/components/ui/Text";
import BottomSheetScrollView from "./BottomSheetScrollView";

export default function Component({ calmBottomRef }: { calmBottomRef: any }) {
  const router = useRouter();
  const screen_width = Dimensions.get("screen").width;

  return (
    // @ts-ignore
    <BottomSheetScrollView
      ref={calmBottomRef}
      // snapTo={"90%"}
      snapTo={screen_width > 700 ? "55%" : "90%"}
      backgroundColor={"white"}
      backDropColor={"black"}
    >
      <View className="flex flex-col items-center pt-5">
        <View>
          <View className="w-[335px] rounded-md border-[1px] border-[#B8B8B8] bg-white pb-5 pl-5 pt-5 shadow-sm md:w-[700px]">
            <Image
              source={require("../../../../assets/imgs/lightning.png")}
              className="h-[56px] w-[56px] object-cover"
            />

            <H1 styling="text-lg pt-2 md:text-2xl">
              Embrace the Peace, Recharge, and Renew.
            </H1>
            <P style="pt-3 pr-[2px] text-base text-[#505050] md:text-xl">
              Enjoy this feeling of calm! Take some time to appreciate the
              present moment and recharge your energy. Do something that brings
              you inner peace.
            </P>
          </View>
          <P style="text-lg mt-5 text-[#505050] md:text-xl">
            Here are some ideas:
          </P>

          <View className="md:flex md:flex-row">
            <TouchableOpacity
              className="mt-5 h-12 w-[350px] rounded-md bg-[#1960F2]"
              onPress={() => {
                router.push("/");
              }}
            >
              <H1 styling="text-lg tracking-wide text-white pt-2 text-center md:text-xl">
                Read a Book
              </H1>
            </TouchableOpacity>
            <TouchableOpacity
              className="mt-5 h-12 md:ml-5 w-[350px] rounded-md border-[2px] border-[#1960F2]  bg-white "
              onPress={() => {
                router.push("/");
              }}
            >
              <H1 styling="text-lg tracking-wide text-[#1960F2] pt-2 text-center md:text-xl">
                Practice Yoga
              </H1>
            </TouchableOpacity>
          </View>

          <View className="mt-5 flex flex-row items-center  ">
            <View className="w-[150px] md:w-[340px] border-[1px] border-[#989898]"></View>
            <P style="px-2 text-[#989898] md:text-lg">or</P>
            <View className="w-[150px] border-[1px]  border-[#989898] md:w-[340px]"></View>
          </View>
          <View className="mt-5  w-[350px] rounded-md bg-[#F2E8FF]  md:w-[700px]">
            <P style="text-center px-4 py-5 text-base text-[#505050] md:text-xl">
              Practice yoga, Read a good book, Take a nap, or Spend time in
              nature.
            </P>
          </View>
        </View>
      </View>
    </BottomSheetScrollView>
  );
}
