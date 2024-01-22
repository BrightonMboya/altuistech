import { Image, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
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
            router.push(`/tests/${params.test?.toString()}`);
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
          <View className="mt-[50px] flex w-[90%] flex-row rounded-md bg-white p-4 shadow-md">
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
