import { useCallback } from "react";
import { Image, TouchableOpacity, View } from "react-native";
import { useRouter } from "expo-router";

import P from "~/components/ui/Text";
import BottomSheet from "./BottomSheet";

export default function Component({ bottomRef }: { bottomRef: any }) {
  const router = useRouter();

  const closeBottomSheet = useCallback(() => {
    bottomRef.current?.close();
  }, []);

  return (
    // @ts-ignore
    <BottomSheet
      ref={bottomRef}
      snapTo={"80%"}
      backgroundColor={"white"}
      backDropColor={"black"}
    >
      <View className="flex flex-col items-center pt-5">
        <P style="text-lg text-[#121212] pl-3 w-[90%]" textType="medium">
          Have you ever experienced any of the below?
        </P>
      </View>
      <View className="mt-[16px] flex flex-col gap-2 pl-5">
        <View className="flex flex-row items-center">
          <Image
            source={require("../../../../assets/imgs/tests/fire.png")}
            className=" pt-3"
          />
          <P style="pl-3">a serious accident or fire.</P>
        </View>
        <View className="flex flex-row items-center">
          <Image
            source={require("../../../../assets/imgs/tests/assault.png")}
            className="pt-3"
          />
          <P style="pl-3">a physical or sexual assault or abuse.</P>
        </View>
        <View className="flex flex-row items-center">
          <Image
            source={require("../../../../assets/imgs/tests/earthquake.png")}
            className="pt-3"
          />
          <P style="pl-3">an earthquake or flood.</P>
        </View>
        <View className="flex flex-row items-center">
          <Image
            source={require("../../../../assets/imgs/tests/war.png")}
            className=" pt-3"
          />
          <P style="pl-3">a war.</P>
        </View>
        <View className="flex flex-row items-center">
          <Image
            source={require("../../../../assets/imgs/tests/injured.png")}
            className="pt-3"
          />
          <P style="pl-3">seeing someone be killed or seriously injured.</P>
        </View>
        <View className="flex flex-row items-center">
          <Image
            source={require("../../../../assets/imgs/tests/suicide.png")}
            className=" object-cover pt-3"
          />
          <P style="pl-3">
            having a loved one die through homicide or suicide.
          </P>
        </View>
      </View>

      <View className="flex flex-col items-center">
        <TouchableOpacity
          className=" mt-[48px] h-12 w-[350px] rounded-md bg-[#1960F2]"
          onPress={() => {
            router.push("/tests/ptsd");
          }}
        >
          <P
            style="text-lg tracking-wide text-white pt-2 text-center"
            textType="medium"
          >
            Yes, I have
          </P>
        </TouchableOpacity>

        <TouchableOpacity
          className="mt-5 h-12 w-[350px] rounded-md border-[2px] border-[#1960F2]  bg-white "
          onPress={() => {
            closeBottomSheet();
          }}
        >
          <P
            style="text-lg tracking-wide text-[#1960F2] pt-2 text-center"
            textType="medium"
          >
            No, I have not
          </P>
        </TouchableOpacity>
      </View>
    </BottomSheet>
  );
}
