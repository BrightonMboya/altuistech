import { TouchableOpacity } from "react-native";
import H1 from "~/components/ui/Heading";
import { IconGoogle } from "~/components/ui/icons";
import * as WebBrowser from "expo-web-browser";
import { useOAuth } from "@clerk/clerk-expo";
import { useWarmUpBrowser } from "~/hooks/useWarmupBrowser";
import * as React from "react";

WebBrowser.maybeCompleteAuthSession();

export default function SignUpWithGoogle() {
     // Warm up the android browser to improve UX
  // https://docs.expo.dev/guides/authentication/#improving-user-experience
  useWarmUpBrowser();

  const { startOAuthFlow } = useOAuth({ strategy: "oauth_google" });
  console.log(JSON.stringify(startOAuthFlow), "google signing in")

  const onPress = React.useCallback(async () => {
    try {
      console.log("I have started the oauth flow")
      const { createdSessionId, signIn, signUp, setActive } =
        await startOAuthFlow();
        console.log("I am in the oauth flow rn")

      if (createdSessionId) {
        setActive({ session: createdSessionId });
        console.log("session is set bro")
      } else {
        console.log("I am in the else block")
        console.log(JSON.stringify(startOAuthFlow), "google signing in")
        // Use signIn or signUp for next steps such as MFA
      }
    } catch (err) {
      console.error("OAuth error", err);
    }
  }, []);
    return (
         <TouchableOpacity
            className="mt-10 flex h-12 w-[350px] flex-row items-center justify-center rounded-md border-2 border-solid border-[#1960F2]"
            // onPress={() => {
            //   setShowOnboarding(false);
            // }}
            onPress={onPress}
          >
            <IconGoogle />

            <H1 styling="text-lg tracking-wide text-[#1960F2]  text-center pl-2">
              Sign Up with Google
            </H1>
          </TouchableOpacity>
    )
}