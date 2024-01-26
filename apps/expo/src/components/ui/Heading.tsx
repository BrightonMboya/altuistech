import React, { useCallback } from "react";
import { StyleSheet, Text } from "react-native";
import * as SplashScreen from "expo-splash-screen";
import { useFonts } from "@expo-google-fonts/poppins";

//prevents splash screen from auto hiding fonts
SplashScreen.preventAutoHideAsync();

const H1: React.FC<{
  children: React.ReactNode;
  styling: string;
}> = ({ children, styling }) => {
  const [fontsLoaded] = useFonts({
    "clashDisplay-Bold": require("../../../assets/fonts/ClashDisplay-Bold.otf"),
    "clashDisplay-Regular": require("../../../assets/fonts/ClashDisplay-Regular.otf"),
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
    >
      {children}
    </Text>
  );
};

export default H1;

const styles = StyleSheet.create({});
