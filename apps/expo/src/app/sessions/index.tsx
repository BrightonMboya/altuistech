import { Image, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { Stack, useRouter } from "expo-router";

import P from "~/components/ui/Text";
import H1 from "~/components/ui/Heading";

const Index = () => {
  const router = useRouter();
  return (
    <SafeAreaView className="relative min-h-screen bg-white pt-5 ">
      <Stack.Screen
        options={{
          title: "",
          headerShown: false,
        }}
      />

      <TouchableOpacity
        onPress={() => {
          router.push("/");
        }}
        className="pl-5"
      >
        <View className="flex flex-row items-center">
          <FontAwesome name="long-arrow-left" size={30} />
          <H1 styling="text-lg pl-5 md:text-2xl ">
            Book 1-on-1 Session
          </H1>
        </View>
      </TouchableOpacity>

      <View className="mt-20 flex flex-col items-center justify-center md:min-h-screen ">
        <P style="text-center text-[#505050] text-base md:text-2xl">
          We’ve sent an appointment request to the professional. If they accept,
          you will receive confirmation and a calendar invite.
        </P>

        <Image
          source={require("../../../assets/imgs/emojis/avatar.png")}
          className="mt-[20px] h-[300px] w-[300px] object-cover"
          resizeMode="cover"
        />

        <TouchableOpacity
          className="h-12 w-[350px] md:h-[60px] md:w-[400px] rounded-md bg-[#1960F2]"
          onPress={() => {
            router.push("/sessions/available-proffesionals");
          }}
        >
          <H1 styling="text-xl tracking-wide text-white p-3 md:pt-3 text-center md:text-2xl">
            Check Available Proffesionals
          </H1>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Index;
