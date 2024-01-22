import { useCallback, useRef, useState } from "react";
import { Pressable, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { Stack, useRouter } from "expo-router";

import { BottomSheetMethods } from "~/components/home/bottom-sheets/BottomSheet";
import TestBottomSheet from "~/components/home/bottom-sheets/test-bottom-sheet";
import { depressionTest } from "~/components/tests/data";
import P from "~/components/ui/Text";

export default function Page() {
  const [questionIndex, setQuestionIndex] = useState(0);
  const [currentScore, setCurrentScore] = useState(0);
  const currentQuestion = depressionTest[questionIndex];

  const bottomSheetRef = useRef<BottomSheetMethods>(null);
  const bottomSheetHandler = useCallback(() => {
    bottomSheetRef.current?.expand();
  }, []);

  const closeBottomSheet = useCallback(() => {
    bottomSheetRef.current?.close();
  }, []);

  const router = useRouter();

  const handleNextQuestion = () => {
    if (questionIndex === depressionTest.length - 1) {
      router.push({
        pathname: "/tests/results",
        params: { test: "depression", score: currentScore, showWarning: true },
      });
    }
    if (currentScore <= 3 && questionIndex === 2) {
      router.push({
        pathname: "/tests/results",
        params: { test: "depression", score: currentScore },
      });
    }
    if (currentScore > 3 && questionIndex === 2) {
      bottomSheetHandler();
      setQuestionIndex(questionIndex + 1);
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
            Depression Test
          </P>
        </View>

        <P
          style="text-white text-xl pt-3"
          textType="medium"
        >{`Question ${questionIndex}/${depressionTest.length}`}</P>
      </TouchableOpacity>
      <View className="mt-5 min-h-[500px] w-[100%] rounded-md bg-white p-5 shadow-sm">
        <View>
          <P style="text-[#505050]" textType="medium">
            {currentQuestion?.shortTitle}
          </P>
          <P style="text-base pt-2" textType="medium">
            {currentQuestion?.question}
          </P>

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
                <P
                  style={`${
                    pressed ? "text-[#F3AB33]" : "text-[#505050]"
                  } text-lg uppercase tracking-wide text-center`}
                >
                  {ans.ans}
                </P>
              )}
            </Pressable>
          ))}
        </View>

        <TouchableOpacity
          className="mt-5 rounded-md bg-blue"
          onPress={handleNextQuestion}
        >
          <P style="text-xl tracking-wide text-white p-3 text-center">Next</P>
        </TouchableOpacity>
      </View>
      <TestBottomSheet
        bottomRef={bottomSheetRef}
        testName="Depression"
        testScore={currentScore}
        nextQuestionHandler={closeBottomSheet}
      />
    </SafeAreaView>
  );
}
