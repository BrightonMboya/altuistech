import React, { useCallback } from "react";
import { StyleSheet, Text } from "react-native";
import { useFonts } from "expo-font";
// import { SplashScreen } from "expo-router";

import * as SplashScreen from "expo-splash-screen";

//prevents splash screen from auto hiding fonts
SplashScreen.preventAutoHideAsync();

interface Props {
  children: any;
  style?: string;
  textType?:
    | "regular"
    | "medium"
    | "semiBold"
    | "bold"
    | "extraBold"
    | "light"
    | "heading";
}

const P = ({ children, style, textType }: Props) => {
  let textStyle: {};
  switch (textType) {
    case "regular":
      textStyle = styles.heading;
      break;

    case "heading":
      textStyle = styles.heading;
      break;

    default:
      textStyle = styles.regular;
      break;
  }
  const [fontsLoaded, fontError] = useFonts({
    "ClashDisplay-Bold": require("../../../assets/fonts/ClashDisplay-Bold.otf"),
    "ClashDisplay-Regular": require("../../../assets/fonts/ClashDisplay-Regular.otf"),
  });

  // after the fonts are loaded we have to remove the splash screen
  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      console.log("fonts loaded");
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    console.log("No fonts loaded, on txt componet");
    return null;
  }
  return (
    <Text className={`${style}`} style={textStyle} onLayout={onLayoutRootView}>
      {children}
    </Text>
  );
};

export default P;

const styles = StyleSheet.create({
  heading: {
    fontFamily: "ClashDisplay-Bold",
  },
  regular: {
    fontFamily: "ClashDisplay-Regular",
  },
});
