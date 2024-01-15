import { ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Stack } from "expo-router";

import ProfileCard from "~/components/home/ProfileCard";
import Resources from "~/components/home/Resources";
import Services from "~/components/home/services";
import Feelings from "~/components/home/feelings";

const Index = () => {
  return (
    <SafeAreaView className="relative min-h-screen bg-white pl-5 pt-5">
      <ScrollView>
        <Stack.Screen
          options={{
            title: "",
            headerShown: false,
          }}
        />
        <ProfileCard />
        <Feelings/>
        <Services />
        <Resources />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Index;
