import React, { useCallback } from "react";
import { StyleSheet, Text } from "react-native";
import * as SplashScreen from "expo-splash-screen";
import {
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_600SemiBold,
  Poppins_700Bold,
  Poppins_800ExtraBold,
  Poppins_900Black,
  useFonts,
} from "@expo-google-fonts/poppins";

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
      textStyle = styles.regular;
      break;
    case "bold":
      textStyle = styles.bold;
      break;

    case "heading":
      textStyle = styles.heading;
      break;
    case "light":
      textStyle = styles.light;
      break;
    case "medium":
      textStyle = styles.medium;
      break;
    case "semiBold":
      textStyle = styles.semiBold;
    default:
      textStyle = styles.regular;
      break;
  }
  const [fontsLoaded] = useFonts({
    regular: Poppins_400Regular,
    medium: Poppins_500Medium,
    "clashDisplay-Bold": require("../../../assets/fonts/ClashDisplay-Bold.otf"),
    Poppins_600SemiBold,
    Poppins_700Bold,
    Poppins_800ExtraBold,
    Poppins_900Black,
  });

  // after the fonts are loaded we have to remove the splash screen
  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }
  return (
    <Text className={`${style}`} style={textStyle}>
      {children}
    </Text>
  );
};

export default P;

const styles = StyleSheet.create({
  regular: {
    fontFamily: "regular",
  },
  bold: {
    fontFamily: "Bold",
  },
  semiBold: {
    fontFamily: "Poppins_600SemiBold",
  },
  light: {
    fontFamily: "Light",
  },
  medium: {
    fontFamily: "medium",
  },
  heading: {
    fontFamily: "ClashDisplay-Bold",
  },
});
