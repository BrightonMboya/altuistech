import React, { useCallback } from "react";
import { StyleSheet, Text } from "react-native";
import * as SplashScreen from "expo-splash-screen";
import { useFonts } from "expo-font";

//prevents splash screen from auto hiding fonts
SplashScreen.preventAutoHideAsync();

export interface Props {
  children: React.ReactNode;
  styling?: string;
  textFontStyle?: "regular" | "heading";
}

const H1 = ({ children, styling }: Props) => {
  const [fontsLoaded] = useFonts({
    "clashDisplay-Medium": require("../../../assets/fonts/ClashDisplay-Medium.otf"),
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
    <Text
      className={`${styling} `}
      style={{ fontFamily: "clashDisplay-Medium" }}
      onLayout={onLayoutRootView}
    >
      {/* @ts-ignore */}
      {children}
    </Text>
  );
};

export default H1;

const styles = StyleSheet.create({});
