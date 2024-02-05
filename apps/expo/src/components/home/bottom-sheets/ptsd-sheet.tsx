import { useCallback } from "react";
import { Dimensions, Image, TouchableOpacity, View } from "react-native";
import { useRouter } from "expo-router";

import H1 from "~/components/ui/Heading";
import P from "~/components/ui/Text";
import BottomSheet from "./BottomSheet";

export default function Component({ bottomRef }: { bottomRef: any }) {
  const router = useRouter();

  const closeBottomSheet = useCallback(() => {
    bottomRef.current?.close();
  }, []);

  const screenWidth = Dimensions.get("screen").width;

  return (
    // @ts-ignore
    <BottomSheet
      ref={bottomRef}
      snapTo={screenWidth > 700 ? "55%" : "70%"}
      backgroundColor={"white"}
      backDropColor={"black"}
    >
      <View className="flex flex-col items-center pt-5">
        <H1 styling="text-lg text-[#121212] pl-3 w-[90%] md:text-2xl">
          Have you ever experienced any of the below?
        </H1>
      </View>
      <View className="mt-[16px] flex flex-col gap-2 pl-5 pt-6">
        <View className="flex flex-row items-center">
          <Image
            source={require("../../../../assets/imgs/tests/fire.png")}
            className=" pt-3 md:pt-5"
          />
          <P style="pl-3 md:text-xl md:pt-5">a serious accident or fire.</P>
        </View>
        <View className="flex flex-row items-center">
          <Image
            source={require("../../../../assets/imgs/tests/assault.png")}
            className="pt-3 md:pt-5"
          />
          <P style="pl-3 md:text-xl md:pt-5">a physical or sexual assault or abuse.</P>
        </View>
        <View className="flex flex-row items-center">
          <Image
            source={require("../../../../assets/imgs/tests/earthquake.png")}
            className="pt-3 md:pt-5"
          />
          <P style="pl-3 md:text-xl md:pt-5">an earthquake or flood.</P>
        </View>
        <View className="flex flex-row items-center">
          <Image
            source={require("../../../../assets/imgs/tests/war.png")}
            className=" pt-3 md:pt-5"
          />
          <P style="pl-3 md:text-xl md:pt-5">a war.</P>
        </View>
        <View className="flex flex-row items-center">
          <Image
            source={require("../../../../assets/imgs/tests/injured.png")}
            className="pt-3 md:pt-5"
          />
          <P style="pl-3 md:text-xl md:pt-5">seeing someone be killed or seriously injured.</P>
        </View>
        <View className="flex flex-row items-center">
          <Image
            source={require("../../../../assets/imgs/tests/suicide.png")}
            className=" object-cover pt-3 md:pt-5"
          />
          <P style="pl-3 md:text-xl md:pt-5">
            having a loved one die through homicide or suicide.
          </P>
        </View>
      </View>

      <View className="flex flex-col items-center md:flex-row md:mt-10 md:pl-5">
        <TouchableOpacity
          className=" mt-[48px] md:mt-0 h-12 w-[350px] rounded-md bg-[#1960F2]"
          onPress={() => {
            router.push("/tests/ptsd");
          }}
        >
          <H1 styling="text-lg tracking-wide text-white pt-2 text-center md:text-2xl">
            Yes, I have
          </H1>
        </TouchableOpacity>

        <TouchableOpacity
          className="mt-5 md:ml-5 md:mt-0 h-12 w-[350px] rounded-md border-[2px] border-[#1960F2]   bg-white "
          onPress={() => {
            closeBottomSheet();
          }}
        >
          <H1 styling="text-lg tracking-wide text-[#1960F2] pt-2 text-center md:text-2xl">
            No, I have not
          </H1>
        </TouchableOpacity>
      </View>
    </BottomSheet>
  );
}
