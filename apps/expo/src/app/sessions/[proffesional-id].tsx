import { FlatList, Image, TouchableOpacity, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { Stack, useRouter } from "expo-router";
import { useUser } from "@clerk/clerk-expo";

import H1 from "~/components/ui/Heading";
import P from "~/components/ui/Text";

const expertise = [
  {
    id: 1,
    name: "Emergency Nursing",
  },
  {
    id: 2,
    name: "Hospice Nursing",
  },
  {
    id: 3,
    name: "Community Health",
  },
  {
    id: 4,
    name: "Oncology",
  },
];

export default function Page() {
  const router = useRouter();
  const { user } = useUser();
  return (
    <SafeAreaView className="pl-5">
      <Stack.Screen
        options={{
          title: "",
          headerShown: false,
        }}
      />
      <ScrollView>
        <TouchableOpacity
          onPress={() => {
            router.push("/sessions");
          }}
        >
          <View className="flex flex-row items-center">
            <FontAwesome name="long-arrow-left" size={30} />
          </View>
        </TouchableOpacity>
        <View>
          <Image
            source={{
              uri: "https://images.unsplash.com/photo-1704189125621-55e8c6cfd166?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHx8",
            }}
            className="mt-10 h-[80px] w-[80px] rounded-full"
          />
          <H1 styling="text-xl mt-5 md:text-2xl">{user?.username}</H1>
          <P style="text-lg md:text-2xl">Mental Therapist</P>

          <View className="mt-10 ">
            <H1 styling="text-lg md:text-2xl">About</H1>
            <P style="pt-1 pr-[20px] text-base md:text-xl md:w-[90%]">
              My journey in the field of respiratory therapy began with a strong
              desire to make a positive impact on individuals with respiratory
              conditions. Over the years, I have honed my skills in assessing,
              diagnosing, and treating a wide range of respiratory disorders.
            </P>
          </View>

          <View className="mt-10 ">
            <H1 styling="text-lg md:text-2xl">Expertise</H1>

            <FlatList
              data={expertise}
              renderItem={({ item }) => (
                <View
                  className="mr-10 h-4 min-w-[150px] rounded-md bg-[#893b3b] py-5"
                  style={{
                    backgroundColor: "#f9f9f9",
                    marginRight: 10,
                    padding: 5,
                  }}
                >
                  <P style="md:text-xl">{item.name}</P>
                </View>
              )}
              numColumns={2}
              contentContainerStyle={{
                gap: 5,
                marginTop: 5,
              }}
            />
          </View>
          <TouchableOpacity
            className="mt-5 h-12 w-[350px] rounded-md bg-[#1960F2]"
            onPress={() => {
              router.push("/sessions/available-proffesionals");
            }}
          >
            <H1 styling="text-xl tracking-wide text-white p-3 md:pt-2 md:text-2xl text-center">
              Book Appointment
            </H1>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
