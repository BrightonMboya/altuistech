import { Image, TouchableOpacity, View } from "react-native";
import { useRouter } from "expo-router";
import H1 from "~/components/ui/Heading";
import P from "~/components/ui/Text";
import BottomSheetScrollView from "./BottomSheetScrollView";

export default function Component({ sadBottomRef }: { sadBottomRef: any }) {
  const router = useRouter();

  return (
    // @ts-ignore
    <BottomSheetScrollView
      ref={sadBottomRef}
      snapTo={"80%"}
      backgroundColor={"white"}
      backDropColor={"black"}
    >
      <View className="flex flex-col items-center pt-5">
        <View>
          <View className="w-[335px] rounded-md border-[1px] border-[#B8B8B8] bg-white pb-5 pl-5 pt-5 shadow-sm">
            <Image
              source={require("../../../../assets/imgs/sun.png")}
              className="h-[56px] w-[56px] object-cover"
            />

            <H1 styling="text-lg pt-2" >
              Feeling Down? You're Not Alone.
            </H1>
            <P style="pt-3 pr-[2px] text-base text-[#505050]">
              It's okay to feel sad sometimes. Take some time for yourself, do
              something you enjoy, and remember to reach out if you need
              support.
            </P>
          </View>
          <P style="text-lg mt-5 text-[#505050]">Here are some ideas:</P>
          <TouchableOpacity
            className="mt-5 h-12 w-[350px] rounded-md bg-[#1960F2]"
            onPress={() => {
              router.push("/");
            }}
          >
            <H1
              styling="text-lg tracking-wide text-white pt-2 text-center"
            >
              Listen to calming music
            </H1>
          </TouchableOpacity>
          <TouchableOpacity
            className="mt-5 h-12 w-[350px] rounded-md border-[2px] border-[#1960F2]  bg-white "
            onPress={() => {
              router.push("/");
            }}
          >
            <H1
              styling="text-lg tracking-wide text-[#1960F2] pt-2 text-center"
            >
              Write down your feeling
            </H1>
          </TouchableOpacity>

          <View className="mt-5 flex flex-row items-center  ">
            <View className="w-[150px] border-[1px] border-[#989898]"></View>
            <P style="px-2 text-[#989898]">or</P>
            <View className="w-[150px] border-[1px]  border-[#989898]"></View>
          </View>
          <View className="mt-5  w-[350px] rounded-md bg-[#FFF2EB]">
            <P style="text-center px-4 py-5 text-base text-[#505050]">
              Take a warm bath, Call a friend, or Watch a movie
            </P>
          </View>
        </View>
      </View>
    </BottomSheetScrollView>
  );
}
