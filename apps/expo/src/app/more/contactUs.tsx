import { ScrollView, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Svg, { Path } from "react-native-svg";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import * as Linking from "expo-linking";
import { Stack, useRouter } from "expo-router";

import H1 from "~/components/ui/Heading";
import P from "~/components/ui/Text";

export default function Page() {
  const router = useRouter();
  return (
    <SafeAreaView className="relative min-h-screen bg-white  pl-5  pt-5">
      <Stack.Screen
        options={{
          title: "",
          headerShown: false,
        }}
      />
      <ScrollView className="relative">
        <TouchableOpacity
          onPress={() => {
            router.push("/more");
          }}
        >
          <View className="flex flex-row items-center">
            <FontAwesome name="long-arrow-left" size={30} />
            <H1 styling="text-xl pl-5 ">Need Help?</H1>
          </View>
          <P style="text-base text-[#505050]">We’d love to hear from you.</P>
        </TouchableOpacity>

        <View className="mt-2 flex  w-[90%] flex-col rounded-md border-2 border-[#f9f9f9] bg-[#f9f9f9] p-5">
          <View>
            <View className="flex flex-row items-center ">
              <Svg width="16" height="17" viewBox="0 0 16 17" fill="none">
                <Path
                  d="M8 8.50016C9.84095 8.50016 11.3333 7.00778 11.3333 5.16683C11.3333 3.32588 9.84095 1.8335 8 1.8335C6.15905 1.8335 4.66667 3.32588 4.66667 5.16683C4.66667 7.00778 6.15905 8.50016 8 8.50016Z"
                  fill="#1960F2"
                />
                <Path
                  d="M8 10.1665C4.66 10.1665 1.94 12.4065 1.94 15.1665C1.94 15.3532 2.08667 15.4998 2.27333 15.4998H13.7267C13.9133 15.4998 14.06 15.3532 14.06 15.1665C14.06 12.4065 11.34 10.1665 8 10.1665Z"
                  fill="#1960F2"
                />
              </Svg>

              <P style="text-[#505050] text-lg pl-[12px]">Phone Number</P>
            </View>

            <View className="flex flex-row items-center justify-between">
              <View className=" items-cente flex w-[200px] flex-row rounded-xl">
                <P style="bg-[#E4EDFF] px-[8px] py-[4px] text-base ">
                  +250792525821
                </P>
              </View>

              <TouchableOpacity
                className="h-12 w-[100px] rounded-md bg-[#1960F2]"
                onPress={() => Linking.openURL("sms:+250780321731")}
              >
                <H1 styling="text-white text-center pt-2 text-lg">Call Now</H1>
              </TouchableOpacity>
            </View>
          </View>

          <View className="mt-10">
            <View className="flex flex-row items-center ">
              <Svg width="16" height="17" viewBox="0 0 16 17" fill="none">
                <Path
                  d="M8 8.50016C9.84095 8.50016 11.3333 7.00778 11.3333 5.16683C11.3333 3.32588 9.84095 1.8335 8 1.8335C6.15905 1.8335 4.66667 3.32588 4.66667 5.16683C4.66667 7.00778 6.15905 8.50016 8 8.50016Z"
                  fill="#1960F2"
                />
                <Path
                  d="M8 10.1665C4.66 10.1665 1.94 12.4065 1.94 15.1665C1.94 15.3532 2.08667 15.4998 2.27333 15.4998H13.7267C13.9133 15.4998 14.06 15.3532 14.06 15.1665C14.06 12.4065 11.34 10.1665 8 10.1665Z"
                  fill="#1960F2"
                />
              </Svg>

              <P style="text-[#505050] text-lg pl-[12px]">Email</P>
            </View>

            <View className="flex flex-row items-center justify-between">
              <View className=" items-cente flex w-[200px] flex-row rounded-xl">
                <P style="bg-[#E4EDFF] px-[8px] py-[4px] ">
                  support@altruhealth.com
                </P>
              </View>

              <TouchableOpacity
                className="h-12 w-[100px] rounded-md bg-blue"
                onPress={() => Linking.openURL("mailto:support@expo.dev")}
              >
                <H1 styling="text-white text-center pt-2 text-lg">Email Us</H1>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
