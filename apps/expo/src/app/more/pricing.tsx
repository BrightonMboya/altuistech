import { Image, ScrollView, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { Stack, useRouter } from "expo-router";

import PricingCard from "~/components/more/PricingCard";
import H1 from "~/components/ui/Heading";
import P from "~/components/ui/Text";

export default function Page() {
  const router = useRouter();
  return (
    <SafeAreaView className="relative min-h-screen bg-white  pt-5 ">
      <Stack.Screen
        options={{
          title: "",
          headerShown: false,
        }}
      />
      <ScrollView className="relative">
        <TouchableOpacity
          onPress={() => {
            router.push("/more");
          }}
          className="pl-5"
        >
          <View className="flex flex-row items-center">
            <FontAwesome name="long-arrow-left" size={30} />
            <H1 styling="text-xl pl-5 ">Pricing</H1>
          </View>
        </TouchableOpacity>

        <View className="bg-[#F5F8FE] w-full h-[40px] mt-5">
            <View className="flex flex-row items-center justify-center pt-2">
                <P style="text-base">Currently on</P>
                <H1 styling="text-blue text-base pl-1 uppercase">free plan</H1>
            </View>
        </View>

        <P style="text-base text-[#505050] mt-[20px] pl-5">
          Explore our pricing options designed to cater to a range of
          requirements.
        </P>

        <View className="pl-5">
          <PricingCard
            imgUrl={require("../../../assets/imgs/emojis/premium.png")}
            title="Premium"
            price="10"
          />

          <PricingCard
            imgUrl={require("../../../assets/imgs/emojis/standard.png")}
            title="Standard"
            price="5"
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
