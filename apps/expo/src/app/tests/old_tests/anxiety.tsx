import { useCallback, useRef, useState } from "react";
import { Pressable, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { Stack, useRouter } from "expo-router";

import { BottomSheetMethods } from "~/components/home/bottom-sheets/BottomSheet";
import TestBottomSheet from "~/components/home/bottom-sheets/test-bottom-sheet";
import { anxietyTest } from "~/components/tests/data";
import H1 from "~/components/ui/Heading";
import P from "~/components/ui/Text";

export default function Page() {
  const [questionIndex, setQuestionIndex] = useState(0);
  const [currentScore, setCurrentScore] = useState(0);
  const currentQuestion = anxietyTest[questionIndex];
  const bottomSheetRef = useRef<BottomSheetMethods>(null);
  const bottomSheetHandler = useCallback(() => {
    bottomSheetRef.current?.expand();
  }, []);

  const closeBottomSheet = useCallback(() => {
    bottomSheetRef.current?.close();
  }, []);

  const router = useRouter();

  const handleNextQuestion = () => {
    setQuestionIndex(questionIndex + 1);
    if (currentScore < 3 && questionIndex === 1) {
      router.push("/resources");
    }

    if (questionIndex === anxietyTest.length - 1) {
      if (currentScore <= 8) {
        router.push("/resources");
      } else {
        router.push("/sessions/available-proffesionals");
      }
    }
  };
  return (
    <SafeAreaView className="min-h-screen bg-blue  p-5">
      <Stack.Screen
        options={{
          headerShown: false,
        }}
      />

      <TouchableOpacity onPress={() => router.push("/tests")}>
        <View className="flex flex-row items-center">
          <FontAwesome name="long-arrow-left" size={30} color="#fff" />
          <H1 styling="text-xl pl-5 text-white md:text-2xl">Anxiety Test</H1>
        </View>
      </TouchableOpacity>

      <H1 styling="text-white text-xl pt-3 md:text-2xl">{`Question ${questionIndex}/${anxietyTest.length}`}</H1>
      
      <View className="mt-5 min-h-[500px] w-[100%] rounded-md bg-white p-5 shadow-sm">
        <View>
          <P style="text-[#505050] md:text-lg" textType="medium">
            {currentQuestion?.shortTitle}
          </P>
          <H1 styling="text-base pt-2 md:text-xl">
            {currentQuestion?.question}
          </H1>

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
                  marginTop: 20,
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

        {/* <TouchableOpacity
          className="mt-5 rounded-md bg-blue"
          onPress={handleNextQuestion}
        >
          <H1 styling="text-xl tracking-wide text-white p-3 text-center md:text-2xl">
            Next
          </H1>
        </TouchableOpacity> */}
      </View>
      <TestBottomSheet
        bottomRef={bottomSheetRef}
        testName="Anxiety"
        testScore={currentScore}
        nextQuestionHandler={closeBottomSheet}
      />
    </SafeAreaView>
  );
}
