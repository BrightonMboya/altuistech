import { useState, type Dispatch, type SetStateAction } from "react";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { Stack } from "expo-router";

import Screen1 from "./Screen1";
import Screen2 from "./Screen2";
import Screen3 from "./Screen3";
import Screen4 from "./Screen4";
import Screen5 from "./Screen5";
import Screen6 from "./Screen6";
import Screen7 from "./Screen7";

export interface OnboardingScreenProps {
  setPage: Dispatch<SetStateAction<number>>;
}

export default function OnboardingScreen() {
  const [page, setPage] = useState(1);
  const DataCollectionForm = () => {
    switch (page) {
      case 1:
        return <Screen1 setPage={setPage} />;
      case 2:
        return <Screen2 setPage={setPage} />;
      case 3:
        return <Screen3 setPage={setPage} />;
      case 4:
        return <Screen4 setPage={setPage} />;
      case 5:
        return <Screen5 setPage={setPage} />;
      case 6:
        return <Screen6 setPage={setPage} />;
      case 7:
        return <Screen7 setPage={setPage} />;
      default:
        return <></>;
    }
  };
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1 }}>
        <Stack.Screen
          options={{
            headerShown: false,
          }}
        />
        <DataCollectionForm />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
