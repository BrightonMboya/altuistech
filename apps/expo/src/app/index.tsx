import { useState } from "react";
import { Image, ScrollView, TextInput, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler"
import { SafeAreaView } from "react-native-safe-area-context";
import { Stack, useRouter } from "expo-router";

import { api, type RouterOutputs } from "~/utils/api";
import P from "~/components/DesignSys/Text";
import SideBar from "~/components/SideBar";

const Index = () => {
  const [search, setSearch] = useState<string>("");
  const postQuery = api.post.all.useQuery();
  const router = useRouter();

  return (
    <SafeAreaView className="relative min-h-screen bg-[#f2f2f2]">
      <ScrollView>
        <Stack.Screen
          options={{
            title: "",
          }}
        />

        <View className=" flex flex-col items-center justify-center space-y-5 ">
          <TextInput
            className="h-[50px] w-[300px] rounded-md border-[1px] border-[#ddd] px-5 "
            placeholder="Search for your favourite profiles"
            onChangeText={(text) => setSearch(text)}
            defaultValue={search}
          />

          
        </View>
        <View className="mt-5 h-10" />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Index;
