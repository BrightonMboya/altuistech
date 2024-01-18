import { ScrollView, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Stack } from "expo-router";

import { tests } from "~/components/tests/data";
import TestCard from "~/components/tests/test-card";
import P from "~/components/ui/Text";

export default function Page() {
  return (
    <SafeAreaView className="min-h-screen bg-white pl-5 pt-5">
      <Stack.Screen
        options={{
          headerShown: false,
        }}
      />
      <ScrollView>
        <P style="text-xl" textType="medium">
          Mental Health Test
        </P>
        <P style="text-base pt-1 text-[#505050] w-[90%]">
          Pls select the type of mental health test you will like to take.
        </P>

        <View className="">
          {tests.map((test) => (
            <TestCard {...test} key={test.id} />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
