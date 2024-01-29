import { useState } from "react";
import { ScrollView, TextInput, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Stack } from "expo-router";

import ResourceGrid from "~/components/resources/ResourceGrid";
import {
  meditationVideos,
  mentalRelaxationVideos,
  motivationalVideos,
} from "~/components/resources/data";

export default function Page() {
  const [searchItem, setSearchItem] = useState("");
  return (
    <SafeAreaView className="pl-5">
      <ScrollView>
        <Stack.Screen
          options={{
            title: "",
            headerShown: false,
          }}
        />
        <TextInput
          className="h-[50px] w-[90%] rounded-lg border-[1px] border-[#b8b8b8]  px-5 "
          placeholder="Search Resources"
          onChangeText={(text) => setSearchItem(text)}
          defaultValue={searchItem}
        />
        <View className="flex flex-col space-y-5">
          <ResourceGrid title="Meditation Videos" data={meditationVideos} />
          <ResourceGrid title="Motivation Videos" data={motivationalVideos} />
          <ResourceGrid
            title="Mental Relaxation Videos"
            data={mentalRelaxationVideos}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
