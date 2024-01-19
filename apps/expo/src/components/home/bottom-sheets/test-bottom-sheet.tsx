import { Image, TouchableOpacity, View } from "react-native";
import { useRouter } from "expo-router";



import P from "~/components/ui/Text";
import BottomSheet from "./BottomSheet";


export default function Component({
  bottomRef,
  testName,
  testScore,
  nextQuestionHandler,
}: {
  bottomRef: any;
  testName: string;
  testScore: number;
  nextQuestionHandler: () => void;
}) {
  const router = useRouter();

  return (
    // @ts-ignore
    <BottomSheet
      ref={bottomRef}
      snapTo={"50%"}
      backgroundColor={"white"}
      backDropColor={"black"}
    >
      <View className="flex flex-col items-center pt-5">
        <View className="flex w-[335px] flex-col items-center rounded-md border-[1px] border-blue bg-[#E4EDFF] pb-5 pl-5 pt-5 shadow-sm">
          <P
            style="text-center px-2 text-[#505050] text-lg"
            textType="medium"
          >{`Your ${testName} Test Score is:`}</P>
          <P
            style="text-[#F3AB33] pt-1 text-2xl "
            textType="medium"
          >{`${testScore}%`}</P>
        </View>
        <P style="py-[32px] pr-[2px] text-base text-center px-4 text-[#505050]">
          We need to know more about how you feel. Please, click the button
          below to continue the assessment.
        </P>
        <TouchableOpacity
          className=" h-12 w-[350px] rounded-md bg-[#1960F2]"
          onPress={() => {
            // bottomRef.current?.close();
            nextQuestionHandler();
          }}
        >
          <P
            style="text-lg tracking-wide text-white pt-2 text-center"
            textType="medium"
          >
            Continue Assesment
          </P>
        </TouchableOpacity>
      </View>
    </BottomSheet>
  );
}