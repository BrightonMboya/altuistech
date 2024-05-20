import React from "react";
import { Text } from "react-native";
import { DMSans_400Regular, useFonts } from "@expo-google-fonts/dm-sans";

import { Props } from "./Heading";

export default function CustomText({ children, styling }: Props) {
  let [fontsLoaded, fontError] = useFonts({
    DMSans_400Regular,
  });

  if (!fontsLoaded && !fontError) {
    return null;
  }
  return (
    <Text
      className={`${styling}`}
      style={{
        fontFamily: "DMSans_400Regular",
      }}
    >
      {children}
    </Text>
  );
}
