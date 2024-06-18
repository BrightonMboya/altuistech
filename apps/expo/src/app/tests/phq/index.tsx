import { ScrollView, TouchableOpacity, Image } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import H1 from "~/components/ui/Heading";
import { Stack } from "expo-router";
import { useRouter } from "expo-router";

export default function Page() {
    const router = useRouter();
    return (
        <SafeAreaProvider className="bg-white">
            <SafeAreaView style={{ flex: 1 }}
            className="flex flex-col items-center"
            >
                <Stack.Screen
        options={{
          title: "",
          headerShown: false,
        }}
      />
                <ScrollView>
                    <H1 styling="text-center pt-[60px] text-[16px] max-w-[350px]  ">Take a quick 2-minute check-in. Understand your well-being with the PHQ-2 test.</H1>
                 <Image
                    source={require("../../../../assets/imgs/emojis.png")}
                    className="mt-[100px] h-[300px] w-[300px] object-cover"
                    resizeMode="cover"
                    />
                       <TouchableOpacity
              className="mt-[50px] h-12 w-[350px] rounded-md border-[2px] border-[#1960F2] bg-blue  md:ml-5 "
              onPress={() => {
                router.push("/tests/phq/test");
              }}
            >
              <H1 styling="text-lg tracking-wide text-[#1960F2] pt-2 text-center text-white md:text-xl">
               Start Test
              </H1>
              </TouchableOpacity>
                </ScrollView>
            </SafeAreaView>
        </SafeAreaProvider>
    )
}