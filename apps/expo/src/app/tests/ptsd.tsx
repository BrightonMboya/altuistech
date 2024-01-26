import { useState } from "react";
import { Image, Pressable, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { Stack, useRouter } from "expo-router";
import H1 from "~/components/ui/Heading";
import { ptsdTest } from "~/components/tests/data";
import P from "~/components/ui/Text";

export default function Page() {
  const [questionIndex, setQuestionIndex] = useState(0);
  const [currentScore, setCurrentScore] = useState(0);
  const currentQuestion = ptsdTest[questionIndex];

  const router = useRouter();

  const handleNextQuestion = () => {
    if (questionIndex === ptsdTest.length - 1) {
      router.push({
        pathname: "/tests/results",
        params: {
          test: "Post-traumatic Disorder ",
          score: currentScore,
          showWarning: true,
        },
      });
    } else {
      setQuestionIndex(questionIndex + 1);
    }
  };
  return (
    <SafeAreaView className="min-h-screen bg-blue p-5">
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
          <H1 styling="text-xl pl-5 text-white">
            Post-traumatic Disorder
          </H1>
        </View>
      </TouchableOpacity>
      <H1
        styling="text-white text-xl pt-3"
      >{`Question ${questionIndex}/${ptsdTest.length}`}</H1>
      {/* <View className="mt-5 h-2 rounded-md bg-[#b8b8b8]">
        <View
          className={`bg-[#F3AB33] h-2 rounded-md w-[${`${Math.ceil(Math.round((questionIndex / anxietyTest.length) * 100) / 10) * 10}%`}]`}
        />
      </View> */}
      <View className="mt-5 min-h-[500px] w-[100%] rounded-md bg-white p-5 shadow-sm">
        <View>
          <P style="text-[#505050] text-base" textType="medium">
            {currentQuestion?.shortTitle}
          </P>
          <H1 styling="text-lg pt-2">
            {currentQuestion?.question}
          </H1>
          <View className="flex flex-row items-center justify-center gap-5 pt-10">
            {currentQuestion?.answers.map((ans) => (
              <Pressable
                key={ans.id}
                onPress={() => {
                  setCurrentScore(currentScore + ans.value);
                  handleNextQuestion();
                }}
                className=" flex  h-[100px] flex-row items-center rounded-md border-[1px] border-[#b8b8b8] px-5 py-2"
              >
                {ans.ans.toLowerCase() === "yes" ? (
                  <Image
                    source={require(`../../../assets/imgs/emojis/yes.png`)}
                  />
                ) : (
                  <Image
                    source={require(`../../../assets/imgs/emojis/no.png`)}
                  />
                )}

                <H1 styling="text-center text-lg text-[#505050] uppercase tracking-wide pl-5">
                  {ans.ans}
                </H1>
              </Pressable>
            ))}
          </View>
        </View>

        <TouchableOpacity
          className="mt-5 rounded-md bg-blue"
          onPress={handleNextQuestion}
        >
          <H1 styling="text-xl tracking-wide text-white p-3 text-center">Next</H1>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
