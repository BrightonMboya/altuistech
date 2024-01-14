import { View } from "react-native";
import { Stack } from "expo-router";
import { MotiView } from "moti";

import P from "./Text";

function Spinner({ size }: { size: number }) {
  return (
    <MotiView
      from={{
        width: size,
        height: size,
        borderRadius: size / 2,
        borderWidth: 0,
        shadowOpacity: 0.5,
      }}
      animate={{
        width: size + 20,
        height: size + 20,
        borderRadius: (size + 20) / 2,
        borderWidth: size / 10,
        shadowOpacity: 1,
      }}
      transition={{
        type: "timing",
        duration: 1000,
        loop: true,
      }}
      style={{
        height: size,
        width: size,
        borderRadius: size / 2,
        borderWidth: size / 10,
        borderColor: "#CCB801",
        shadowColor: "#CCB801",
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 1,
        shadowRadius: 10,
        backgroundColor: "#fff",
      }}
    />
  );
}

export default function LoadingScreen() {
  return (
    <View className="h-screen flex-1 items-center justify-center bg-white">
      <Stack.Screen
        options={{
          title: "",
          headerShown: false,
          headerStyle: {
            backgroundColor: "#1a401f",
          },
        }}
      />
      <Spinner size={70} />
      <P style="mt-3 text-lg">Loading ...</P>
    </View>
  );
}
