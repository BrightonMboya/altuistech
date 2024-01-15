import React, { useCallback, useRef } from "react";
import { Image, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

import P from "../ui/Text";
import BottomSheet, { BottomSheetMethods } from "./bottom-sheets/BottomSheet";
import BottomSheetScrollView from "./bottom-sheets/BottomSheetScrollView";
import Lorem from "./bottom-sheets/Lorem";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

const data = [
  {
    id: 2,
    name: "Calm",
    img: "../../../assets/imgs/emojis/calm.png",
  },
  {
    id: 3,
    name: "Worried",
    img: "../../../assets/imgs/emojis/worried.png",
  },
  {
    id: 4,
    name: "Angry",
    img: "../../../assets/imgs/emojis/angry.png",
  },
  {
    id: 5,
    name: "Sad",
    img: "../../../assets/imgs/emojis/sad.png",
  },
];

function Card({ title, img }: { title: string; img: string }) {
  return (
    <View>
      <Image source={{ uri: img }} className="h-12 w-12 object-cover" />
      <P>{title}</P>
    </View>
  );
}

export default function Feelings() {
  const bottomSheetRef = useRef<BottomSheetMethods>(null);
  const pressHandler = useCallback(() => {
    bottomSheetRef.current?.expand();
  }, []);
  return (
    <SafeAreaProvider>
      <SafeAreaView  style={{flex: 1, backgroundColor: 'white'}}>
    <View className="mt-5 h-[144px] w-[380px] rounded-md border-2 border-[#E4EDFF] bg-[#f5f8fe] p-4">
      <P style="text-lg">How are you feeling today?</P>

      <View className="mt-5 flex flex-row space-x-5">
        <TouchableOpacity
          className="flex flex-col items-center"
          onPress={() => pressHandler()}
        >
          <Image
            source={require("../../../assets/imgs/emojis/happy.png")}
            className="h-12 w-12 object-cover"
            style={{
              resizeMode: "contain",
            }}
          />
          <P>Happy</P>
        </TouchableOpacity>
        <View className="flex flex-col items-center">
          <Image
            source={require("../../../assets/imgs/emojis/calm.png")}
            className="h-12 w-12 object-cover"
            style={{
              resizeMode: "contain",
            }}
          />
          <P>Calm</P>
        </View>

        <View className="flex flex-col items-center">
          <Image
            source={require("../../../assets/imgs/emojis/worried.png")}
            className="h-12 w-12 object-cover"
            style={{
              resizeMode: "contain",
            }}
          />
          <P>Worried</P>
        </View>

        <View className="flex flex-col items-center">
          <Image
            source={require("../../../assets/imgs/emojis/angry.png")}
            className="h-12 w-12 object-cover"
            style={{
              resizeMode: "contain",
            }}
          />
          <P>Angry</P>
        </View>

        <View className="flex flex-col items-center">
          <Image
            source={require("../../../assets/imgs/emojis/sad.png")}
            className="h-12 w-12 object-cover"
            style={{
              resizeMode: "contain",
            }}
          />
          <P>Sad</P>
        </View>
      </View>

      <BottomSheetScrollView
        ref={bottomSheetRef}
        snapTo={"70%"}
        backgroundColor={"white"}
        backDropColor={"black"}
      >
       <P>Helo World</P>
      </BottomSheetScrollView>

    </View>
    </SafeAreaView>
    </SafeAreaProvider>
  );
}
