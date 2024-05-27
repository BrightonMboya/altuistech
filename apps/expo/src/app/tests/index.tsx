import { useState } from "react";
import { Pressable, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import Svg, { Path } from "react-native-svg";
import { Stack, useRouter } from "expo-router";

import { mentalHealthQuestions } from "~/components/tests/data";
import CustomText from "~/components/ui/CustomText";
import H1 from "~/components/ui/Heading";

export default function Page() {
  const [questionIndex, setQuestionIndex] = useState(0);
  const [currentScore, setCurrentScore] = useState(0);
  const currentQuestion = mentalHealthQuestions[questionIndex];

  const router = useRouter();
  const handleNextQuestion = () => {
    setQuestionIndex(questionIndex + 1);
    if (currentScore < 3 && questionIndex === 1) {
      router.push("/resources");
    }

    if (questionIndex === mentalHealthQuestions.length - 1) {
      if (currentScore < 7) {
        router.push("/resources");
      } else {
        router.push("/sessions/available-proffesionals");
      }
    }
  };
  return (
    <SafeAreaProvider className="h-screen bg-blue" style={{ flex: 1 }}>
      <SafeAreaView className="min-h-screen  p-5">
        <Stack.Screen
          options={{
            headerShown: false,
          }}
        />
        <Pressable onPress={() => router.back()}>
          <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <Path
              d="M4.24991 12.2743L19.2499 12.2743"
              stroke="white"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <Path
              d="M10.3002 18.2988C10.3002 18.2988 4.2502 15.0378 4.2502 12.2758C4.2502 9.51176 10.3002 6.24976 10.3002 6.24976"
              stroke="white"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </Svg>
        </Pressable>
        <H1 styling="text-xl md:text-2xl text-white pt-[32px]">{`Question ${questionIndex + 1}/${mentalHealthQuestions.length}`}</H1>
        <View className="mt-5 min-h-[500px] w-[100%] rounded-md bg-white p-5 shadow-sm">
          <View>
            <CustomText styling="text-[#505050] md:text-lg text-[14px]">
              {currentQuestion?.shortTitle}
            </CustomText>
            <H1 styling="text-[16px] pt-[8px] md:text-lg">
              {currentQuestion?.question}
            </H1>
            <CustomText styling="text-[#505050] pt-[8px] text-[14px]">
              {currentQuestion?.shortQuestion}
            </CustomText>

            {currentQuestion?.answers.map((ans) => (
              <Pressable
                key={ans.id}
                onPress={() => {
                  setCurrentScore(currentScore + ans.value);
                  handleNextQuestion();
                }}
                style={({ pressed }) => [
                  {
                    backgroundColor: pressed ? "#FFF2EB" : "white",
                    marginTop: 32,
                    borderWidth: 1,
                    borderRadius: 5,
                    paddingVertical: 8,
                    borderColor: pressed ? "#F3AB33" : "#b8b8b8",
                  },
                ]}
              >
                {({ pressed }) => (
                  <H1
                    styling={`${
                      pressed ? "text-[#F3AB33]" : "text-[#505050]"
                    } text-lg uppercase tracking-wide text-center md:text-xl`}
                  >
                    {ans.ans}
                  </H1>
                )}
              </Pressable>
            ))}
          </View>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
