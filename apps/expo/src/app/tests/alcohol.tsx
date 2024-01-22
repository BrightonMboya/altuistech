import { useState } from "react";
import { Image, TouchableOpacity, View, Pressable } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { Stack, useRouter } from "expo-router";

import { alcoholTest } from "~/components/tests/data";
import P from "~/components/ui/Text";

export default function Page() {
  const [questionIndex, setQuestionIndex] = useState(0);
  const [endQns, setEndQns] = useState(false);
  const currentQuestion = alcoholTest[questionIndex];

  const router = useRouter();

  const handleNextQuestion = () => {
    if (questionIndex === alcoholTest.length - 1) {
      setEndQns(true);
    } else {
      setQuestionIndex(questionIndex + 1);
    }
  };
  return (
    <SafeAreaView className="min-h-screen bg-blue  p-5">
      <Stack.Screen
        options={{
          headerShown: false,
        }}
      />
      <TouchableOpacity
        onPress={() => {
          router.push("/tests/");
        }}
      >
        <View className="flex flex-row items-center">
          <FontAwesome name="long-arrow-left" size={30} color="#fff" />
          <P style="text-xl pl-5 text-white" textType="medium">
            Alcohol/Non-Prescribed Drug Test
          </P>
        </View>

        <P
          style="text-white text-xl pt-3"
          textType="medium"
        >{`Question ${questionIndex}/${alcoholTest.length}`}</P>
      </TouchableOpacity>
      <View className="mt-5 min-h-[500px] w-[100%] rounded-md bg-white p-5 shadow-sm">
        {endQns ? (
          <P>The end of the qn</P>
        ) : (
          <View>
            <P style="text-[#505050]" textType="medium">
              {currentQuestion?.shortTitle}
            </P>
            <P style="text-base pt-2" textType="medium">
              {currentQuestion?.question}
            </P>

            <View className="pt-10 flex flex-row items-center justify-center gap-5">
              {currentQuestion?.answers.map((ans) => (
                <TouchableOpacity
                  key={ans.id}
                  style={
                    {
                      // backgroundColor: "red"
                    }
                  }
                  className=" h-[100px]  rounded-md border-[1px] border-[#b8b8b8] py-2 flex flex-row items-center px-5"
                >
                  {ans.ans.toLowerCase() === 'yes' ? (

                    <Image
                      source={require(`../../../assets/imgs/emojis/yes.png`)}
                    />
                  ) : (
                     <Image
                      source={require(`../../../assets/imgs/emojis/no.png`)}
                    />
                  )}
                  <P style="text-center text-lg text-[#505050] uppercase tracking-wide pl-5">
                    {ans.ans}
                  </P>
                </TouchableOpacity>
              ))}
            </View>
          </View>
        )}
        <TouchableOpacity
          className="mt-5 rounded-md bg-blue"
          disabled={endQns}
          onPress={handleNextQuestion}
        >
          <P style="text-xl tracking-wide text-white p-3 text-center">Next</P>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
