import { useCallback } from "react";
import { Image, TouchableOpacity, View } from "react-native";
import { Path, Svg } from "react-native-svg";
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
       
        <View className="flex flex-row items-start rounded-md bg-[#FFF2EB] p-4 w-[90%] mt-5">
          <Svg width="20" height="20" viewBox="0 0 16 16" fill="none">
            <Path
              d="M8.00016 15.1667C4.04683 15.1667 0.833496 11.9533 0.833496 8C0.833496 4.04667 4.04683 0.833333 8.00016 0.833333C11.9535 0.833333 15.1668 4.04667 15.1668 8C15.1668 11.9533 11.9535 15.1667 8.00016 15.1667ZM8.00016 1.83333C4.60016 1.83333 1.8335 4.6 1.8335 8C1.8335 11.4 4.60016 14.1667 8.00016 14.1667C11.4002 14.1667 14.1668 11.4 14.1668 8C14.1668 4.6 11.4002 1.83333 8.00016 1.83333Z"
              fill="#FF2525"
            />
            <Path
              d="M8 9.16667C7.72667 9.16667 7.5 8.94 7.5 8.66667V5.33333C7.5 5.06 7.72667 4.83333 8 4.83333C8.27333 4.83333 8.5 5.06 8.5 5.33333V8.66667C8.5 8.94 8.27333 9.16667 8 9.16667Z"
              fill="#FF2525"
            />
            <Path
              d="M8.00016 11.3333C7.9135 11.3333 7.82683 11.3133 7.74683 11.28C7.66683 11.2467 7.5935 11.2 7.52683 11.14C7.46683 11.0733 7.42016 11.0067 7.38683 10.92C7.3535 10.84 7.3335 10.7533 7.3335 10.6667C7.3335 10.58 7.3535 10.4933 7.38683 10.4133C7.42016 10.3333 7.46683 10.26 7.52683 10.1933C7.5935 10.1333 7.66683 10.0867 7.74683 10.0533C7.90683 9.98667 8.0935 9.98667 8.2535 10.0533C8.3335 10.0867 8.40683 10.1333 8.4735 10.1933C8.5335 10.26 8.58016 10.3333 8.6135 10.4133C8.64683 10.4933 8.66683 10.58 8.66683 10.6667C8.66683 10.7533 8.64683 10.84 8.6135 10.92C8.58016 11.0067 8.5335 11.0733 8.4735 11.14C8.40683 11.2 8.3335 11.2467 8.2535 11.28C8.1735 11.3133 8.08683 11.3333 8.00016 11.3333Z"
              fill="#FF2525"
            />
          </Svg>
          <P style="text-[#505050] pl-[10px]">
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
