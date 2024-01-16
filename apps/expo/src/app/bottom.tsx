import React, { useCallback, useRef } from "react";
import { Button, ScrollView, StyleSheet } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

import ProfileCard from "~/components/home/ProfileCard";
import Resources from "~/components/home/Resources";
import BookSession from "~/components/home/book-session";
import BottomSheet, {
  BottomSheetMethods,
} from "~/components/home/bottom-sheets/BottomSheet";
import BottomSheetScrollView from "~/components/home/bottom-sheets/BottomSheetScrollView";
import Lorem from "~/components/home/bottom-sheets/Lorem";
import Feelings from "~/components/home/feelings";
import Services from "~/components/home/services";

function ExampleButton({ pressHandler2 }: { pressHandler2: () => void }) {
  return <Button title="Example" onPress={() => pressHandler2()} />;
}

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
        <SafeAreaView style={styles.container} className="pl-5">
          <ScrollView>
            <ProfileCard />
            <BookSession />
            {/* <Button title="Blank" onPress={() => pressHandler()} />
          <ExampleButton pressHandler2={pressHandler2} />
          <Button title="ScrollView" onPress={() => pressHandler3()} />
          <Button title="Flatlist" onPress={() => pressHandler4()} /> */}
            <Feelings happyHandler={pressHandler2} />
            <Services />
            <Resources />
           
          </ScrollView>
        </SafeAreaView>

         <BottomSheet
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
            </BottomSheet>
            <BottomSheetScrollView
              ref={bottomSheetRef3}
              snapTo={"50%"}
              backgroundColor={"white"}
              backDropColor={"black"}
            >
              <Lorem />
            </BottomSheetScrollView>
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
