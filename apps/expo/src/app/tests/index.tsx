import React, { useCallback, useRef } from "react";
import { ScrollView, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import { Stack } from "expo-router";
import H1 from "~/components/ui/Heading";
import { BottomSheetMethods } from "~/components/home/bottom-sheets/BottomSheet";
import AlcoholBottomSheet from "~/components/home/bottom-sheets/alcohol-test";
import PTSDSheet from "~/components/home/bottom-sheets/ptsd-sheet";
import TestCard from "~/components/tests/test-card";
import P from "~/components/ui/Text";

export default function Page() {
  const bottomSheetRef = useRef<BottomSheetMethods>(null);
  const ptsdSheetRef = useRef<BottomSheetMethods>(null);

  const bottomSheetHandler = useCallback(() => {
    bottomSheetRef.current?.expand();
  }, []);

  const ptsdSheetHandler = useCallback(() => {
    ptsdSheetRef.current?.expand();
  }, []);
  return (
    <SafeAreaView className="min-h-screen bg-white pl-5 pt-5">
      <Stack.Screen
        options={{
          headerShown: false,
        }}
      />
      <ScrollView>
        <H1 styling="text-xl md:text-2xl" >
          Mental Health Test
        </H1>
        <P style="text-base pt-1 text-[#505050] w-[90%] md:text-lg">
          Pls select the type of mental health test you will like to take.
        </P>

        <View className="">
          <TestCard
            name="Anxiety Test"
            href="/tests/anxiety"
            img={require("../../../assets/imgs/tests/anxiety.png")}
            backgroundColor="#E4EDFF"
          />
          <TestCard
            name="Depression Test"
            href="/tests/depression"
            img={require("../../../assets/imgs/tests/depression.png")}
            backgroundColor="#FFEFC6"
          />
          <TouchableOpacity onPress={() => bottomSheetHandler()}>
            <TestCard
              name="Alcohol/Non-Prescribed Drug Test"
              href=""
              img={require("../../../assets/imgs/tests/alcohol.png")}
              backgroundColor="#E4EDFF"
            />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => ptsdSheetHandler()}>
            <TestCard
              name="Post-traumatic disorder Test"
              href=""
              img={require("../../../assets/imgs/tests/ptsd.png")}
              backgroundColor="#F2E8FF"
            />
          </TouchableOpacity>
        </View>
      </ScrollView>
      <AlcoholBottomSheet bottomRef={bottomSheetRef} />
      <PTSDSheet bottomRef={ptsdSheetRef} />
    </SafeAreaView>
  );
}
