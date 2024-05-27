import { useState } from "react";
import { Image, Pressable, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { Stack, useRouter } from "expo-router";

import { alcoholTest } from "~/components/tests/data";
import H1 from "~/components/ui/Heading";
import P from "~/components/ui/Text";

export default function Page() {
  const [questionIndex, setQuestionIndex] = useState(0);

  const [currentScore, setCurrentScore] = useState(0);
  const currentQuestion = alcoholTest[questionIndex];

  const router = useRouter();

  const handleNextQuestion = (ans: string) => {
    setQuestionIndex(questionIndex + 1);

    if (questionIndex === 0 && ans === "No") {
      router.push("/resources");
    } else {
      setCurrentScore(questionIndex + 1);
    }

    if (questionIndex >= 1 && questionIndex <= 6 && ans === "Yes") {
      setQuestionIndex(7);
    }
    if (questionIndex >= 1 && questionIndex <= 6 && ans === "No") {
      router.push("/resources");
    }

    if (questionIndex > 6) {
      router.push("/sessions/available-proffesionals");
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
          <H1 styling="text-xl pl-5 text-white md:text-2xl">
            Alcohol/Non-Prescribed Drug Test
          </H1>
        </View>

        <H1 styling="text-white text-xl pt-3 md:text-2xl">{`Question ${questionIndex}/${alcoholTest.length}`}</H1>
      </TouchableOpacity>
      <View className="mt-5 min-h-[400px] w-[100%] rounded-md bg-white p-5 shadow-sm">
        <View>
          <P style="text-[#505050] text-lg md:text-2xl" textType="medium">
            {currentQuestion?.shortTitle}
          </P>
          <H1 styling="text-lg pt-2 md:text-2xl">
            {currentQuestion?.question}
          </H1>

          <View className="flex flex-row items-center justify-center gap-5 pt-10">
            {questionIndex <= 6 &&
              currentQuestion?.answers.map((ans) => (
                <Pressable
                  key={ans.id}
                  onPress={() => {
                    setCurrentScore(currentScore + ans.value);
                    handleNextQuestion(ans.ans);
                  }}
                  className=" flex  h-[100px] flex-row items-center rounded-md border-[1px] border-[#b8b8b8] px-5 py-2 md:w-[350px] md:justify-center"
                >
                  {ans.ans.toLowerCase() === "yes" ? (
                    <Image
                      source={require(`../../../../assets/imgs/emojis/yes.png`)}
                    />
                  ) : (
                    <Image
                      source={require(`../../../../assets/imgs/emojis/no.png`)}
                    />
                  )}

                  <H1 styling="text-center text-lg text-[#505050] uppercase tracking-wide pl-5 md:text-xl">
                    {ans.ans}
                  </H1>
                </Pressable>
              ))}
          </View>
          <View>
            {questionIndex === 7 && (
              <>
                <P style="text-[#505050] md:text-lg" textType="medium">
                  {alcoholTest[6]?.shortTitle}
                </P>
                <H1 styling="text-base pt-2 md:text-xl">
                  {alcoholTest[6]?.question}
                </H1>
                {alcoholTest[6]?.answers.map((ans) => (
                  <>
                    <Pressable
                      key={ans.id}
                      onPress={() => {
                        setCurrentScore(currentScore + ans.value);
                        handleNextQuestion(ans.ans);
                      }}
                      style={({ pressed }) => [
                        {
                          backgroundColor: pressed ? "#FFF2EB" : "white",
                          marginTop: 10,
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
                          } text-lg px-2 uppercase tracking-wide text-center md:text-xl`}
                        >
                          {ans.ans}
                        </H1>
                      )}
                    </Pressable>
                  </>
                ))}
              </>
            )}
          </View>
        </View>

        {/* <TouchableOpacity
          className="mt-5 rounded-md bg-blue"
          onPress={handleNextQuestion}
        >
          <H1 styling="text-xl tracking-wide text-white p-3 text-center md:text-2xl">Next</H1>
        </TouchableOpacity> */}
      </View>
    </SafeAreaView>
  );
}
