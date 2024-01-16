import React, { useCallback, useRef } from "react";
import { Image, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

import P from "../ui/Text";

function Card({ title, img }: { title: string; img: string }) {
  return (
    <View>
      <Image source={{ uri: img }} className="h-12 w-12 object-cover" />
      <P>{title}</P>
    </View>
  );
}

interface bottomSheetRefProps {
  happyHandler: () => void;
  calmHandler: () => void;
  worriedHandler: () => void;
}
export default function Feelings({
  happyHandler,
  calmHandler,
  worriedHandler,
}: bottomSheetRefProps) {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
        <View className="mt-5 h-[144px] w-[380px] rounded-md border-2 border-[#E4EDFF] bg-[#f5f8fe] p-4">
          <P style="text-lg">How are you feeling today?</P>

          <View className="mt-5 flex flex-row space-x-5">
            <TouchableOpacity
              className="flex flex-col items-center"
              onPress={() => happyHandler()}
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
            <TouchableOpacity
              className="flex flex-col items-center"
              onPress={() => calmHandler()}
            >
              <Image
                source={require("../../../assets/imgs/emojis/calm.png")}
                className="h-12 w-12 object-cover"
                style={{
                  resizeMode: "contain",
                }}
              />
              <P>Calm</P>
            </TouchableOpacity>

            <TouchableOpacity
              className="flex flex-col items-center"
              onPress={() => worriedHandler()}
            >
              <Image
                source={require("../../../assets/imgs/emojis/worried.png")}
                className="h-12 w-12 object-cover"
                style={{
                  resizeMode: "contain",
                }}
              />
              <P>Worried</P>
            </TouchableOpacity>

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
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
