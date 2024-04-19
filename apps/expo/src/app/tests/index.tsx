import React, { useCallback, useRef } from "react";
import { Image, ScrollView, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Stack } from "expo-router";

import { BottomSheetMethods } from "~/components/home/bottom-sheets/BottomSheet";
import AlcoholBottomSheet from "~/components/home/bottom-sheets/alcohol-test";
import PTSDSheet from "~/components/home/bottom-sheets/ptsd-sheet";
import TestCard from "~/components/tests/test-card";
import H1 from "~/components/ui/Heading";
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
        <H1 styling="text-xl md:text-2xl">Mental Health Test</H1>
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

          <TouchableOpacity
            onPress={() => {
              bottomSheetHandler();
            }}
          >
            <View
              className={`mt-5 flex h-[88px] w-[90%] flex-row justify-between overflow-hidden rounded-md bg-[#E4EDFF] p-5 md:h-[150px] md:pr-0  `}
            >
              <H1 styling="w-[200px] text-base md:text-xl">
                Alcohol/Non-Prescribed Drug Test
              </H1>
              <Image
                source={require("../../../assets/imgs/tests/alcohol.png")}
                className="h-[80px] translate-y-[-15px] md:h-[150px]"
              />
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => ptsdSheetHandler()}>
            <View
              className={`mt-5 flex h-[88px] w-[90%] flex-row justify-between overflow-hidden rounded-md bg-[#F2E8FF] p-5 md:h-[150px] md:pr-0  `}
            >
              <H1 styling="w-[200px] text-base md:text-xl">
                Post-traumatic disorder Test
              </H1>
              <Image
                source={require("../../../assets/imgs/tests/ptsd.png")}
                className="h-[80px] translate-y-[-15px] md:h-[150px]"
              />
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
      <AlcoholBottomSheet bottomRef={bottomSheetRef} />

      <PTSDSheet bottomRef={ptsdSheetRef} />
    </SafeAreaView>
  );
}
