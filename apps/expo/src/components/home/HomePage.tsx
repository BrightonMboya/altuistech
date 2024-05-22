import React, { useCallback, useRef } from "react";
import { ScrollView, StyleSheet } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { Stack } from "expo-router";

import ProfileCard from "~/components/home/ProfileCard";
import BookSession from "~/components/home/book-session";
import {
  AngryBottomSheet,
  CalmBottomSheet,
  HappyBottomSheet,
  SadBottomSheet,
  WorriedBottomSheet,
} from "~/components/home/bottom-sheets";
import { BottomSheetMethods } from "~/components/home/bottom-sheets/BottomSheet";
import Feelings from "~/components/home/feelings";
import Services from "~/components/home/services";
import ResourceGrid from "~/components/resources/ResourceGrid";
import { motivationalVideos } from "~/components/resources/data";

const BottomSheetScreenScroll = () => {
  const happyBottomSheetRef = useRef<BottomSheetMethods>(null);
  const calmBottomSheetRef = useRef<BottomSheetMethods>(null);
  const worriedBottomSheetRef = useRef<BottomSheetMethods>(null);
  const angryBottomSheetRef = useRef<BottomSheetMethods>(null);
  const sadBottomSheetRef = useRef<BottomSheetMethods>(null);

  const happyBottomSheetHandler = useCallback(() => {
    happyBottomSheetRef.current?.expand();
  }, []);

  const calmBottomSheetHandler = useCallback(() => {
    calmBottomSheetRef.current?.expand();
  }, []);

  const worriedBottomSheetHandler = useCallback(() => {
    worriedBottomSheetRef.current?.expand();
  }, []);
  const angryBottomSheetHandler = useCallback(() => {
    angryBottomSheetRef.current?.expand();
  }, []);
  const sadBottomSheetHandler = useCallback(() => {
    sadBottomSheetRef.current?.expand();
  }, []);

  return (
    <SafeAreaProvider>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <SafeAreaView style={styles.container} className=" pl-5 pt-5">
          <Stack.Screen
            options={{
              headerShown: false,
            }}
          />
          <ScrollView className="mb-[50px]">
            <ProfileCard />
            <BookSession />
            <Feelings
              happyHandler={happyBottomSheetHandler}
              calmHandler={calmBottomSheetHandler}
              worriedHandler={worriedBottomSheetHandler}
              angryHandler={angryBottomSheetHandler}
              sadHandler={sadBottomSheetHandler}
            />
            <Services />
            <ResourceGrid data={motivationalVideos} title="Resources for You" />
          </ScrollView>
        </SafeAreaView>
        <HappyBottomSheet happyBottomRef={happyBottomSheetRef} />
        <CalmBottomSheet calmBottomRef={calmBottomSheetRef} />
        <WorriedBottomSheet worriedBottomRef={worriedBottomSheetRef} />
        <AngryBottomSheet angryBottomRef={angryBottomSheetRef} />
        <SadBottomSheet sadBottomRef={sadBottomSheetRef} />
      </GestureHandlerRootView>
    </SafeAreaProvider>
  );
};

export default BottomSheetScreenScroll;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
});
