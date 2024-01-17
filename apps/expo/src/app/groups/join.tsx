import { useState } from "react";
import { FlatList, TextInput, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { Stack, useRouter } from "expo-router";

import Card, { groupsData } from "~/components/groups/join-group-card";
import P from "~/components/ui/Text";

export default function Page() {
  const [searchItem, setSearchItem] = useState("");
  const router = useRouter();

  return (
    <SafeAreaView>
      <Stack.Screen
        options={{
          headerShown: false,
        }}
      />
      <TouchableOpacity
        onPress={() => {
          router.push("/groups");
        }}
        className="pl-5 pt-5"
      >
        <View className="flex flex-row items-center">
          <FontAwesome name="long-arrow-left" size={30} />
          <P style="text-lg pl-5 " textType="medium">
            Join a group
          </P>
        </View>
      </TouchableOpacity>

      <View className="flex flex-col items-center mt-10">
        <TextInput
          className="h-[50px] w-[90%] rounded-lg border-[1px] border-[#b8b8b8]  px-5 "
          placeholder="Search Groups"
          onChangeText={(text) => setSearchItem(text)}
          defaultValue={searchItem}
        />
        <FlatList
          data={groupsData}
          keyExtractor={(_, index) => index.toString()}
          renderItem={({ item }) => <Card {...item} />}
          contentContainerStyle={{
            gap: 5,
            flex: 1,
          }}
        />
      </View>
    </SafeAreaView>
  );
}
