import React, { type Dispatch, type SetStateAction } from "react";
import { Image, StyleSheet, View, useWindowDimensions } from "react-native";
import { type SharedValue } from "react-native-reanimated";
import { useRouter } from "expo-router";

import CustomText from "~/components/ui/CustomText";
import H1 from "../../ui/Heading";
import { OnboardingData } from "./data";

type Props = {
  item: OnboardingData;
  index: number;
  x: SharedValue<number>;
  setShowOnboarding: Dispatch<SetStateAction<boolean>>;
  setShowLogin: Dispatch<SetStateAction<boolean>>;
};

const RenderItem = ({ item, setShowOnboarding, setShowLogin }: Props) => {
  const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = useWindowDimensions();
  const router = useRouter();

  return (
    <View
      style={[
        styles.itemContainer,
        {
          width: SCREEN_WIDTH,
          backgroundColor: item.backgroundColor,
        },
      ]}
      className="h-[500px] pt-10 "
    >
      <View className=" w-[90%]">
        <View className="flex h-[48px] flex-row items-center">
          {item.text.map((text, index) => (
            <View className="flex flex-row items-center" key={index}>
              <H1
                styling={`text-[18px] flex-wrap ${
                  text.type === "accent" && "text-[#1960F2]"
                }`}
              >
                {text.word}
              </H1>
            </View>
          ))}
        </View>
        <CustomText styling="text-[16px] tracking-[0.14px] pt-[1px] leading-[18.9px] text-[#505050] ">
          {item.caption}
        </CustomText>
      </View>

      <Image
        source={item.image}
        className="mt-[60px]  w-[300px] object-cover"
      />
    </View>
  );
};

export default RenderItem;

const styles = StyleSheet.create({
  itemContainer: {
    // flex: 1,
    alignItems: "center",
    // paddingTop: 40,
  },
});
