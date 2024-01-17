import React, { useCallback, useRef } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { Stack } from "expo-router";

import Button from "~/components/groups/create-group-button";
import JoinGroupBottomSheet from "~/components/groups/join-group-bottom-sheet";
import { BottomSheetMethods } from "~/components/home/bottom-sheets/BottomSheet";

export default function Page() {
  const joinGroupRef = useRef<BottomSheetMethods>(null);

  const joinGroupBottomSheetHandler = useCallback(() => {
    joinGroupRef.current?.expand();
  }, []);

  return (
    <SafeAreaProvider>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <SafeAreaView className="relative min-h-screen">
          <Stack.Screen
            options={{
              headerShown: false,
            }}
          />

          <ScrollView className=""></ScrollView>
          <Button bottomSheetHandler={joinGroupBottomSheetHandler} />
        </SafeAreaView>
        <JoinGroupBottomSheet joinGroupRef={joinGroupRef} />
      </GestureHandlerRootView>
    </SafeAreaProvider>
  );
}
