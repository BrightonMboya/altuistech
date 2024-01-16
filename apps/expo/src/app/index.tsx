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
import HappyBottomSheet from "~/components/home/bottom-sheets/HappyBottomSheet";
import Lorem from "~/components/home/bottom-sheets/Lorem";
import Feelings from "~/components/home/feelings";
import Services from "~/components/home/services";

const BottomSheetScreenScroll = () => {
  const bottomSheetRef = useRef<BottomSheetMethods>(null);
  const bottomSheetRef2 = useRef<BottomSheetMethods>(null);
  const bottomSheetRef3 = useRef<BottomSheetMethods>(null);
  const bottomSheetRef4 = useRef<BottomSheetMethods>(null);

  const pressHandler = useCallback(() => {
    bottomSheetRef.current?.expand();
  }, []);
  const pressHandler2 = useCallback(() => {
    bottomSheetRef2.current?.expand();
  }, []);
  const pressHandler3 = useCallback(() => {
    bottomSheetRef3.current?.expand();
  }, []);
  const pressHandler4 = useCallback(() => {
    bottomSheetRef4.current?.expand();
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
            <Feelings happyHandler={pressHandler2} />
            <Services />
            <Resources />
          </ScrollView>
        </SafeAreaView>
        <HappyBottomSheet happyBottomRef={bottomSheetRef2} />
        {/* <BottomSheet
          ref={bottomSheetRef}
          snapTo={"80%"}
          backgroundColor={"white"}
          backDropColor={"black"}
        />
        <BottomSheet
          ref={bottomSheetRef2}
          snapTo={"80%"}
          backgroundColor={"#ffe7cf"}
          backDropColor={"black"}
        >
          <Lorem />
        </BottomSheet> */}
        {/* <BottomSheetScrollView
          ref={bottomSheetRef3}
          snapTo={"50%"}
          backgroundColor={"white"}
          backDropColor={"black"}
        >
          <Lorem />
        </BottomSheetScrollView> */}
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
