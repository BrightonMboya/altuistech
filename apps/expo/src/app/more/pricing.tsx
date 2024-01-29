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
    <SafeAreaView className="relative min-h-screen bg-white pl-5 pt-5 ">
      <Stack.Screen
        options={{
          title: "",
          headerShown: false,
        }}
      />
      <ScrollView>
        <TouchableOpacity
          onPress={() => {
            router.push("/more");
          }}
        >
          <View className="flex flex-row items-center">
            <FontAwesome name="long-arrow-left" size={30} />
            <H1 styling="text-xl pl-5 ">Pricing</H1>
          </View>
        </TouchableOpacity>

        <P style="text-base text-[#505050]">
          Explore our pricing options designed to cater to a range of
          requirements.
        </P>

        <View className="">
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
