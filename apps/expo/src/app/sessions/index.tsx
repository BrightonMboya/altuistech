import { Image, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { Stack, useRouter } from "expo-router";

import P from "~/components/ui/Text";

const Index = () => {
  const router = useRouter();
  return (
    <SafeAreaView className="relative min-h-screen bg-white pl-5 pt-5 ">
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
      >
        <View className="flex flex-row items-center">
          <FontAwesome name="long-arrow-left" size={30} />
          <P style="text-lg pl-5 " textType="medium">
            Book 1-on-1 Session
          </P>
        </View>
      </TouchableOpacity>

      <View className="mt-20 flex flex-col items-center justify-center ">
        <P style="text-center px-2">
          We’ve sent an appointment request to the professional. If they accept,
          you will receive confirmation and a calendar invite.
        </P>

        <Image
          source={require("../../../assets/imgs/emojis/avatar.png")}
          className="mt-[20px] h-[300px] w-[300px] object-cover"
          resizeMode="cover"
        />

        <TouchableOpacity
          className="h-12 w-[350px] rounded-md bg-[#1960F2]"
          onPress={() => {
            router.push("/sessions/available-proffesionals");
          }}
        >
          <P style="text-xl tracking-wide text-white p-3 text-center">
            Check Available Proffesionals
          </P>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Index;
