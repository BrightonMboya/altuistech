import React from "react";
import { Text, StyleSheet } from "react-native";
import { DMSans_400Regular, useFonts, DMSans_500Medium } from "@expo-google-fonts/dm-sans";

import { Props } from "./Heading";

export default function CustomText({ children, styling, textFontStyle }: Props) {
  let [fontsLoaded, fontError] = useFonts({
    DMSans_400Regular,
    DMSans_500Medium,
  });

//  let textFont: {};
//  switch (textFontStyle) {
//    case "regular":
//      textFont = DMSans_400Regular;
//      break;
//    case "heading":
//      textFont = DMSans_500Medium;
//      break;
//    default:
//      textFont = DMSans_400Regular;
//  }
  if (!fontsLoaded && !fontError) {
    return null;
  }
  const textFont = textFontStyle === "heading" ? "DMSans_500Medium" : "DMSans_400Regular";
  return (
    <Text
      className={`${styling} `}
      style={{
        fontFamily: textFont,
      }}
    // style={[
     
    //   textFontStyle === "heading" && styles.heading,
    //   textFontStyle === "regular" && styles.regular,
    // ]}
    >
      {children}
    </Text>
  );
}

const styles = StyleSheet.create({
  heading: {
    fontFamily: "DMSans_500Medium",
  },
  regular: {
    fontFamily: "DMSans_400Regular",
  },
});
