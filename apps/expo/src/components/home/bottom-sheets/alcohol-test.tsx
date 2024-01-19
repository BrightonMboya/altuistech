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
      snapTo={"60%"}
      backgroundColor={"white"}
      backDropColor={"black"}
    >
      <Image
        source={require("../../../../assets/imgs/tests/alcohol.png")}
        className="pt-3"
      />
      <View className="flex flex-col items-center pt-5">
        <P style="text-lg text-[#121212] pl-3 w-[90%]" textType="medium">
          Do you take Alcohol Or Any Non-Prescribed Drug Substance?{" "}
        </P>
        <View className="mt-[10px] w-[90%] rounded-md bg-[#FFF2EB]">
          <P style="py-[32px] pr-[2px] text-base text-center px-4 text-[#505050]">
            You don’t need to take this test if you don’t take alcohol or
            Non-Prescribed drugs.
          </P>
        </View>

        <TouchableOpacity
          className=" mt-[48px] h-12 w-[350px] rounded-md bg-[#1960F2]"
          onPress={() => {
            router.push("/tests/alcohol");
          }}
        >
          <P
            style="text-lg tracking-wide text-white pt-2 text-center"
            textType="medium"
          >
            Yes I do
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
            No I don’t
          </P>
        </TouchableOpacity>
      </View>
    </BottomSheet>
  );
}
