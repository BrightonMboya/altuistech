import React, { useCallback, useRef } from "react";
import { ScrollView, StyleSheet } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { Stack } from "expo-router";

import ProfileCard from "~/components/home/ProfileCard";
import Resources from "~/components/home/Resources";
import BookSession from "~/components/home/book-session";
import BottomSheet, {
  BottomSheetMethods,
} from "~/components/home/bottom-sheets/BottomSheet";
import BottomSheetScrollView from "~/components/home/bottom-sheets/BottomSheetScrollView";
import CalmBottomSheet from "~/components/home/bottom-sheets/CalmBottomSheet";
import HappyBottomSheet from "~/components/home/bottom-sheets/HappyBottomSheet";
import Lorem from "~/components/home/bottom-sheets/Lorem";
import Feelings from "~/components/home/feelings";
import Services from "~/components/home/services";

const BottomSheetScreenScroll = () => {
  const happyBottomSheetRef = useRef<BottomSheetMethods>(null);
  const calmBottomSheetRef = useRef<BottomSheetMethods>(null);

  const happyBottomSheetHandler = useCallback(() => {
    happyBottomSheetRef.current?.expand();
  }, []);

  const calmBottomSheetHandler = useCallback(() => {
    calmBottomSheetRef.current?.expand();
  }, []);

  return (
    <SafeAreaProvider>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <SafeAreaView style={styles.container} className="pl-5 pt-5">
          <Stack.Screen
            options={{
              headerShown: false,
            }}
          />
          <ScrollView>
            <ProfileCard />
            <BookSession />
            <Feelings
              happyHandler={happyBottomSheetHandler}
              calmHandler={calmBottomSheetHandler}
            />
            <Services />
            <Resources />
          </ScrollView>
        </SafeAreaView>
        <HappyBottomSheet happyBottomRef={happyBottomSheetRef} />
        <CalmBottomSheet calmBottomRef={calmBottomSheetRef} />
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
