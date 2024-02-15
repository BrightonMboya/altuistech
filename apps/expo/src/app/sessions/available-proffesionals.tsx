import { Image, ScrollView, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { Stack, useRouter } from "expo-router";
import { A } from "@expo/html-elements";

import H1 from "~/components/ui/Heading";
import P from "~/components/ui/Text";

const data = [
  {
    id: 1,
    name: "Abdul Karim Jela",
    img: "https://images.unsplash.com/photo-1705250984940-02b32024d182?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzOHx8fGVufDB8fHx8fA%3D%3D",
    occupation: "Mental Therapist",
    calLink: "https://cal.com/abdul-karim-sesay",
  },
  {
    id: 2,
    name: "Gabriel Oke",
    img: "https://images.unsplash.com/photo-1705179910410-023d32f4613b?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0NHx8fGVufDB8fHx8fA%3D%3D",
    occupation: "Mental Proffesional",
    calLink: "https://cal.com/gabriel-oke-5uvurl",
  },
];

function Card({
  img,
  name,
  occupation,
  calLink,
}: {
  img: string;
  name: string;
  occupation: string;
  calLink: string;
}) {
  return (
    <A
      className="mt-5 flex h-[100px] w-[335px] flex-row bg-[#f5f8fe] p-3 md:h-[150px] md:w-[700px]"
      href={calLink}
    >
      <Image
        source={{
          uri: img,
        }}
        className="h-[80px] w-[80px] rounded-md object-cover md:h-[120px] md:w-[120px]"
      />

      <View className="pl-5">
        <H1 styling="text-lg md:text-2xl">{name}</H1>
        <P style="md:text-xl">{occupation}</P>
        <Image
          source={require("../../../assets/imgs/stars.png")}
          className="mt-2 md:h-[20px] md:w-[150px]"
        />
      </View>
    </A>
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
            <H1 styling="text-xl pl-5 md:text-2xl">Available</H1>
          </View>
        </TouchableOpacity>
        <View className="mt-10 flex flex-col">
          {data.map((proffesional) => (
            // <TouchableOpacity
            //   onPress={() => {
            //     router.push("/sessions/id");
            //   }}
            //   key={proffesional.id}
            // >
            <Card
              img={proffesional.img}
              name={proffesional.name}
              occupation={proffesional.occupation}
              calLink={proffesional.calLink}
            />
            // </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Index;
