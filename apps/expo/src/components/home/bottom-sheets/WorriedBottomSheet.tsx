import { Dimensions, Image, View } from "react-native";
import H1 from "~/components/ui/Heading";
import P from "~/components/ui/Text";
import BottomSheetScrollView from "./BottomSheetScrollView";
import ActionButton from "./ActionButton";

export default function Component({
  worriedBottomRef,
}: {
  worriedBottomRef: any;
}) {
  const screen_width = Dimensions.get("screen").width;

  return (
    // @ts-ignore
    <BottomSheetScrollView
      ref={worriedBottomRef}
      snapTo={screen_width > 700 ? "55%" : "90%"}
      backgroundColor={"white"}
      backDropColor={"black"}
    >
      <View className="flex flex-col items-center pt-5">
        <View>
          <View className="w-[335px] rounded-md border-[1px] border-[#B8B8B8]  bg-white pb-5 pl-5 pt-5 shadow-sm md:w-[700px]">
            <Image
              source={require("../../../../assets/imgs/fire.png")}
              className="h-[56px] w-[56px] object-cover"
            />

            <H1 styling="text-lg pt-2 md:text-2xl">
              Take a Breath, You've Got This.
            </H1>
            <P style="pt-3 pr-[2px] text-base text-[#505050] md:text-xl">
              Worrying is normal, but it can be overwhelming. Try relaxation
              techniques like deep breathing or meditation. Focus on what you
              can control and remember to be kind to yourself.
            </P>
          </View>
          <P style="text-lg mt-5 text-[#505050] md:text-xl">
            Here are some ideas:
          </P>

         <ActionButton/>

          <View className="mt-5 flex flex-row items-center  ">
            <View className="w-[150px] border-[1px] border-[#989898] md:w-[340px]"></View>
            <P style="px-2 text-[#989898] md:text-lg">or</P>
            <View className="w-[150px] border-[1px]  border-[#989898] md:w-[340px]"></View>
          </View>
          <View className="mt-5  w-[350px] rounded-md bg-[#FFEFC6] md:w-[700px]">
            <P style="text-center px-4 py-5 text-base text-[#505050] md:text-xl">
              Try progressive muscle relaxation, Practice mindfulness exercises,
              Listen to calming music, or Talk to someone you trust.
            </P>
          </View>
        </View>
      </View>
    </BottomSheetScrollView>
  );
}
