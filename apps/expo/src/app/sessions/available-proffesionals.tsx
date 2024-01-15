import { Image, ScrollView, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { Stack, useRouter } from "expo-router";

import P from "~/components/ui/Text";

const data = [
  {
    id: 1,
    name: "Guy Hawkins",
    img: "https://images.unsplash.com/photo-1705250984940-02b32024d182?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzOHx8fGVufDB8fHx8fA%3D%3D",
    occupation: "Mental Therapist",
  },
  {
    id: 2,
    name: "Guy Hawkins",
    img: "https://images.unsplash.com/photo-1705179910410-023d32f4613b?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0NHx8fGVufDB8fHx8fA%3D%3D",
    occupation: "Mental Therapist",
  },
  {
    id: 3,
    name: "Guy Hawkins",
    img: "https://images.unsplash.com/photo-1705250984940-02b32024d182?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzOHx8fGVufDB8fHx8fA%3D%3D",
    occupation: "Mental Therapist",
  },
  {
    id: 4,
    name: "Guy Hawkins",
    img: "https://images.unsplash.com/photo-1705232497551-d0fbd6554801?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1M3x8fGVufDB8fHx8fA%3D%3D",
    occupation: "Mental Therapist",
  },
  {
    id: 5,
    name: "Guy Hawkins",
    img: "https://images.unsplash.com/photo-1705250984940-02b32024d182?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzOHx8fGVufDB8fHx8fA%3D%3D",
    occupation: "Mental Therapist",
  },
];

function Card({
  img,
  name,
  occupation,
}: {
  img: string;
  name: string;
  occupation: string;
}) {
  return (
    <View className="mt-5 flex h-[100px] w-[335px] flex-row bg-[#f5f8fe] p-3">
      <Image
        source={{
          uri: img,
        }}
        className="h-[80px] w-[80px] rounded-md object-cover"
      />

      <View className="pl-5">
        <P style="text-lg" textType="medium">
          {name}
        </P>
        <P>{occupation}</P>
        <Image
          source={require("../../../assets/imgs/stars.png")}
          className="mt-2"
        />
      </View>
    </View>
  );
}

const Index = () => {
  const router = useRouter();
  return (
    <SafeAreaView className="relative min-h-screen bg-white pl-5 pt-5 ">
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
            <P style="text-lg pl-5 " textType="medium">
              Available
            </P>
          </View>
        </TouchableOpacity>
        <View className="flex flex-col">
          {data.map((proffesional) => (
            <TouchableOpacity
              onPress={() => {
                router.push("/sessions/id");
              }}
              key={proffesional.id}
            >
              <Card
                img={proffesional.img}
                name={proffesional.name}
                occupation={proffesional.occupation}
              />
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Index;
