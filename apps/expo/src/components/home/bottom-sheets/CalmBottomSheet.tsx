import { Image, TouchableOpacity, View } from "react-native";
import { useRouter } from "expo-router";

import P from "~/components/ui/Text";
import BottomSheetScrollView from "./BottomSheetScrollView";

export default function Component({ calmBottomRef }: { calmBottomRef: any }) {
  const router = useRouter();

  return (
    // @ts-ignore
    <BottomSheetScrollView
      ref={calmBottomRef}
      snapTo={"90%"}
      backgroundColor={"white"}
      backDropColor={"black"}
    >
      <View className="flex flex-col items-center pt-5">
        <View>
          <View className="w-[335px] rounded-md border-[1px] border-[#B8B8B8] bg-white pb-5 pl-5 pt-5 shadow-sm">
            <Image
              source={require("../../../../assets/imgs/lightning.png")}
              className="h-[56px] w-[56px] object-cover"
            />

            <P style="text-lg" textType="medium">
              Embrace the Peace, Recharge, and Renew.
            </P>
            <P style="pt-3 pr-[2px] text-base">
              Enjoy this feeling of calm! Take some time to appreciate the
              present moment and recharge your energy. Do something that brings
              you inner peace.
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
              Read a Book
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
              Practice Yoga
            </P>
          </TouchableOpacity>

          <View className="mt-5 flex flex-row items-center  ">
            <View className="w-[150px] border-[1px] border-[#989898]"></View>
            <P style="px-2 text-[#989898]">or</P>
            <View className="w-[150px] border-[1px]  border-[#989898]"></View>
          </View>
          <View className="mt-5  w-[350px] rounded-md bg-[#F2E8FF]">
            <P style="text-center px-4 py-5 text-base text-[#505050]">
              Practice yoga, Read a good book, Take a nap, or Spend time in
              nature.
            </P>
          </View>
        </View>
      </View>
    </BottomSheetScrollView>
  );
}
