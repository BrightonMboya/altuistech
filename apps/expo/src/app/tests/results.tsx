import { Image, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Path, Svg } from "react-native-svg";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { Stack, useLocalSearchParams, useRouter } from "expo-router";

import P from "~/components/ui/Text";

const Index = () => {
  const router = useRouter();
  const params = useLocalSearchParams();

  return (
    <View className="relative min-h-screen bg-white ">
      <Stack.Screen
        options={{
          title: "",
          headerShown: false,
        }}
      />

      <View className="absolute top-0 h-[400px] w-full bg-blue" />
      <View className="pt-[60px]">
        <TouchableOpacity
          onPress={() => {
            router.push("/tests");
          }}
          className="pl-5"
        >
          <View className="flex flex-row items-center">
            <FontAwesome name="long-arrow-left" size={30} color="white" />
            <P style="text-lg pl-5 text-white" textType="medium">
              Results
            </P>
          </View>
        </TouchableOpacity>

        <View className="mt-20 flex flex-col items-center justify-center ">
          <P style="text-center px-2 text-white text-lg">{`Your ${params.test} test score is`}</P>
          <P
            style="text-[#F3AB33] pt-1 text-2xl"
            textType="medium"
          >{`${params.score}%`}</P>

          <View className="mt-[50px] flex w-[90%] flex-col items-center rounded-md border-[1px] border-[#b8b8b8] bg-white pb-5">
            <View className=" flex  flex-row rounded-md pl-10 pt-5 shadow-md">
              <Image
                source={require("../../../assets/imgs/emojis/file.png")}
                className="h-8 w-8 rounded-md object-cover"
                style={{
                  resizeMode: "contain",
                }}
              />
              <View className="pl-3">
                <P style="text-lg " textType="medium">
                  Results
                </P>
                <P style="pr-10 text-base">
                  {`Your scores indicate elevated levels of ${params.test} and difficulty controlling worry. This suggests there might be a significant impact on your well-being. Seeking professional help from therapist or counselor is highly recommended.
               `}
                </P>
              </View>
            </View>

            {params.showWarning && (
              <View className="flex flex-row items-start rounded-md bg-[#FFF2EB] p-4">
                <Svg width="16" height="16" viewBox="0 0 16 16" fill="none">
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
                  Book appointment with a mental health professional as soon as
                  possible.
                </P>
              </View>
            )}
          </View>
          <TouchableOpacity
            className="mt-20 h-12 w-[350px] rounded-md bg-[#1960F2]"
            onPress={() => {
              router.push("/sessions/available-proffesionals");
            }}
          >
            <P style="text-xl tracking-wide text-white p-3 text-center">
              Book Appointment
            </P>
          </TouchableOpacity>

          <TouchableOpacity
            className="mt-5 h-12 w-[350px] rounded-md border-[2px] border-[#1960F2]  bg-white "
            onPress={() => {
              router.push("/resources");
            }}
          >
            <P
              style="text-lg tracking-wide text-[#1960F2] pt-2 text-center"
              textType="medium"
            >
              Visit Resource Center
            </P>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Index;
