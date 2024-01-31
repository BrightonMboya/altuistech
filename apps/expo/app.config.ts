import type { ExpoConfig } from "@expo/config";




const defineConfig = (): ExpoConfig => ({
  name: "altuistech",
  slug: "altuistech",
  scheme: "expo",
  version: "1.0.0",
  orientation: "portrait",
  icon: "./assets/icon.png",
  userInterfaceStyle: "light",
  // splash: {
  //   image: "./assets/icon.png",
  //   resizeMode: "contain",
  //   backgroundColor: "#f6f6f6",
  // },
  updates: {
    fallbackToCacheTimeout: 0,
  },
  assetBundlePatterns: ["**/*"],
  ios: {
    supportsTablet: true,
    bundleIdentifier: "your.bundle.identifier",
  },
  android: {
    package: "com.mboya.altuistech",
    versionCode: 1,
    // adaptiveIcon: {
    //   foregroundImage: "./assets/icon.png",
    //   backgroundColor: "#f6f6f6",
    // },
  },
  extra: {
    eas: {
      projectId: "12fcf8c5-b32c-4899-9cf8-4d49a15be14d",
      clerkPublishableKey: process.env.CLERK_PUBLISHABLE_KEY,
    },
  },
  plugins: ["./expo-plugins/with-modify-gradle.js"],
});

export default defineConfig;