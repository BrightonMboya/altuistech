import "react-native-gesture-handler";
import { registerRootComponent } from "expo";
import { ExpoRoot } from "expo-router";

// Must be exported or Fast Refresh won't update the context
export function App() {
  const ctx = require.context("./src/app");
  // @ts-ignore
  return <ExpoRoot context={ctx} />;
}

registerRootComponent(App);
