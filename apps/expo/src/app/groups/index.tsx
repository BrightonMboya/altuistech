import React, { useCallback, useRef, useState } from "react";
import { ScrollView, StyleSheet, TextInput, View } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { Stack } from "expo-router";

import Button from "~/components/groups/create-group-button";
import GroupsView from "~/components/groups/groups-view";
import JoinGroupBottomSheet from "~/components/groups/join-group-bottom-sheet";
import { BottomSheetMethods } from "~/components/home/bottom-sheets/BottomSheet";

export default function Page() {
  const joinGroupRef = useRef<BottomSheetMethods>(null);

  const joinGroupBottomSheetHandler = useCallback(() => {
    joinGroupRef.current?.expand();
  }, []);

  const [searchItem, setSearchItem] = useState("");

  return (
    <SafeAreaProvider>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <SafeAreaView className="relative min-h-screen">
          <Stack.Screen
            options={{
              headerShown: false,
            }}
          />
          <TextInput
            className="mt-3p ml-5 h-[50px] w-[90%] rounded-lg border-[1px] border-[#b8b8b8]  px-5 "
            placeholder="Search Groups"
            onChangeText={(text) => setSearchItem(text)}
            defaultValue={searchItem}
          />
          <GroupsView />
          <ScrollView className=""></ScrollView>
          <Button bottomSheetHandler={joinGroupBottomSheetHandler} />
        </SafeAreaView>
        <JoinGroupBottomSheet joinGroupRef={joinGroupRef} />
      </GestureHandlerRootView>
    </SafeAreaProvider>
  );
}
