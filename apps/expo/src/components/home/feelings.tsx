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
  angryHandler: () => void;
  sadHandler: () => void;
}
export default function Feelings({
  happyHandler,
  calmHandler,
  worriedHandler,
  angryHandler,
  sadHandler,
}: bottomSheetRefProps) {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
        <View className="mt-5 h-[144px] md:h-full w-[380px] md:w-[90%] rounded-md border-2 border-[#E4EDFF] bg-[#f5f8fe] p-4">
          <P style="text-lg md:text-xl">How are you feeling today?</P>

          <View className="mt-5 flex flex-row space-x-5 md:justify-between md:w-[90%] md:space-x-0 ">
            <TouchableOpacity
              className="flex flex-col items-center"
              onPress={() => happyHandler()}
            >
              <Image
                source={require("../../../assets/imgs/emojis/happy.png")}
                className="h-12 w-12 md:h-[60px] md:w-[60px] object-cover"
                style={{
                  resizeMode: "contain",
                }}
              />
              <P style="md:text-base">Happy</P>
            </TouchableOpacity>
            <TouchableOpacity
              className="flex flex-col items-center"
              onPress={() => calmHandler()}
            >
              <Image
                source={require("../../../assets/imgs/emojis/calm.png")}
                className="h-12 w-12  md:h-[60px] md:w-[60px] object-cover"
                style={{
                  resizeMode: "contain",
                }}
              />
              <P style="md:text-base">Calm</P>
            </TouchableOpacity>

            <TouchableOpacity
              className="flex flex-col items-center"
              onPress={() => worriedHandler()}
            >
              <Image
                source={require("../../../assets/imgs/emojis/worried.png")}
                className="h-12 w-12  md:h-[60px] md:w-[60px] object-cover"
                style={{
                  resizeMode: "contain",
                }}
              />
              <P style="md:text-base">Worried</P>
            </TouchableOpacity>

            <TouchableOpacity
              className="flex flex-col items-center"
              onPress={() => angryHandler()}
            >
              <Image
                source={require("../../../assets/imgs/emojis/angry.png")}
                className="h-12 w-12  md:h-[60px] md:w-[60px] object-cover"
                style={{
                  resizeMode: "contain",
                }}
              />
              <P style="md:text-base">Angry</P>
            </TouchableOpacity>

            <TouchableOpacity
              className="flex flex-col items-center"
              onPress={() => sadHandler()}
            >
              <Image
                source={require("../../../assets/imgs/emojis/sad.png")}
                className="h-12 w-12  md:h-[60px] md:w-[60px] object-cover"
                style={{
                  resizeMode: "contain",
                }}
              />
              <P style="md:text-base">Sad</P>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
