import type { ExpoConfig } from "@expo/config";

const defineConfig = (): ExpoConfig => ({
  name: "altuistech",
  slug: "altuistech",
  scheme: "expo",
  version: "1.0.4",
  orientation: "portrait",
  icon: "./assets/adaptive-icon.png",
  userInterfaceStyle: "light",
  splash: {
    image: "./assets/icon.png",
    resizeMode: "contain",
    backgroundColor: "#ffffff",
  },
  updates: {
    fallbackToCacheTimeout: 0,
  },
  assetBundlePatterns: ["**/*"],
  ios: {
    supportsTablet: true,
    bundleIdentifier: "com.emotions.altuistech",
    buildNumber: "3",
  },
  android: {
    package: "com.mboya.altuistech",
    versionCode: 2,
    adaptiveIcon: {
      foregroundImage: "./assets/adaptive-icon.png",
      backgroundColor: "#ffffff",
    },
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
