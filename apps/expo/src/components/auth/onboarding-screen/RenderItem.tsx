import React from "react";
import {
  Image,
  StyleSheet,
  TouchableOpacity,
  View,
  useWindowDimensions,
} from "react-native";
import { useRouter } from "expo-router";

import H1 from "../../ui/Heading";
import P from "../../ui/Text";
import { OnboardingData } from "./data";

type Props = {
  item: OnboardingData;
};

const RenderItem = ({ item }: Props) => {
  const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = useWindowDimensions();
  const router = useRouter();
  return (
    <View
      style={[
        styles.itemContainer,
        {
          width: SCREEN_WIDTH,
          height: SCREEN_HEIGHT,
          backgroundColor: item.backgroundColor,
        },
      ]}
      className="pt-10"
    >
      {/* <H1  styling="text-xl">
        {item.text}
      </H1> */}

      <View className=" w-[90%]">
        <P style="text-xl " textType="medium">
          {item.text}
        </P>
        <P style="text-base pt-3 ">{item.caption}</P>
      </View>

      <Image source={item.image} className="mt-10" />

      <TouchableOpacity
        className="mt-10 h-12 w-[350px] rounded-md bg-[#1960F2]"
        onPress={() => {
          router.push("/");
        }}
      >
        <P style="text-xl tracking-wide text-white pt-2 text-center">
          Create an Account
        </P>
      </TouchableOpacity>

      <P style="text-lg text-blue pt-5">I already have an account</P>
    </View>
  );
};

export default RenderItem;

const styles = StyleSheet.create({
  itemContainer: {
    flex: 1,
    alignItems: "center",
    paddingTop: 40,
  },
});
