import { useState } from "react";
import { FlatList, TextInput, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { Stack, useRouter } from "expo-router";

import GroupForm from "~/components/groups/create-group-form";
import P from "~/components/ui/Text";

export default function Page() {
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
            Create a group
          </P>
        </View>
      </TouchableOpacity>
      <GroupForm />
    </SafeAreaView>
  );
}
