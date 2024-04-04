import React, { useCallback } from "react";
import { StyleSheet, Text, TextComponent, TextProps } from "react-native";
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
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "~/utils";

const customTextVariants = cva("", {
  variants: {
    variant: {
      default: "",
    },
  },
  defaultVariants: {},
});

interface CustomeTextProps
  extends TextProps,
    VariantProps<typeof customTextVariants> {
  asChild?: boolean;
  textType?: "regular" | "medium" | "semiBold" | "bold" | "extraBold" | "light";
}
export const CustomText = React.forwardRef<TextComponent, CustomeTextProps>(
  ({ className, variant, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Text : "Text";
    let textStyle: {};
    switch (props.textType) {
      case "regular":
        textStyle = styles.regular;
        break;
      case "bold":
        textStyle = styles.bold;
        break;
      case "light":
        textStyle = styles.light;
        break;
      default:
        textStyle = styles.regular;
        break;
    }

    const [fontsLoaded] = useFonts({
      regular: Poppins_400Regular,
      medium: Poppins_500Medium,
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
      <Text
        className={cn(customTextVariants({ variant, className }))}
        {...props}
        style={{
          fontFamily: "regular",
        }}
      >
        {props.children}
      </Text>
    );
  },
);

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
});
