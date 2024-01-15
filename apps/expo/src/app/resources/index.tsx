import { ScrollView, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Stack } from "expo-router";

import ResourceGrid from "~/components/resources/ResourceGrid";
import P from "~/components/ui/Text";

export default function Page() {
  return (
    <SafeAreaView>
      <ScrollView>
        <Stack.Screen
          options={{
            title: "",
            headerShown: false,
          }}
        />
        <View className="flex flex-col space-y-5">
          <ResourceGrid title="General" />
          <ResourceGrid title="Anxiety" />
          <ResourceGrid title="Depression" />
          <ResourceGrid title="Non-Prescribed Drugs" />
          <ResourceGrid title="Post Traumatic Disorder" />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
