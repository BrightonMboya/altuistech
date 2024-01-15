import { FlatList, Image, View } from "react-native";

import P from "../ui/Text";

const data = [
  // {
  //   id: 1,
  //   name: "Happy",
  // },
  {
    id: 2,
    name: "Calm",
    img: "../../../assets/imgs/emojis/calm.png",
  },
  {
    id: 3,
    name: "Worried",
    img: "../../../assets/imgs/emojis/worried.png",
  },
  {
    id: 4,
    name: "Angry",
    img: "../../../assets/imgs/emojis/angry.png",
  },
  {
    id: 5,
    name: "Sad",
    img: "../../../assets/imgs/emojis/sad.png",
  },
];

function Card({ title, img }: { title: string; img: string }) {
  return (
    <View>
      <Image source={{ uri: img }} className="h-12 w-12 object-cover" />
      <P>{title}</P>
    </View>
  );
}

export default function Feelings() {
  return (
    <View className="mt-5 h-[144px] w-[380px] rounded-md bg-[#f5f8fe] p-4 border-2 border-[#E4EDFF]">
      <P style="text-lg">How are you feeling today?</P>

      <View className="flex flex-row space-x-5 mt-5">
         <View className="flex flex-col items-center">
          <Image
            source={require("../../../assets/imgs/emojis/happy.png")}
            className="h-12 w-12 object-cover"
            style={{
              resizeMode: "contain",
            }}
          />
          <P>Happy</P>
        </View>
        <View className="flex flex-col items-center">
          <Image
            source={require("../../../assets/imgs/emojis/calm.png")}
            className="h-12 w-12 object-cover"
            style={{
              resizeMode: "contain",
            }}
          />
          <P>Calm</P>
        </View>

        <View className="flex flex-col items-center">
          <Image
            source={require("../../../assets/imgs/emojis/worried.png")}
            className="h-12 w-12 object-cover"
            style={{
              resizeMode: "contain",
            }}
          />
          <P>Worried</P>
        </View>

        <View className="flex flex-col items-center">
          <Image
            source={require("../../../assets/imgs/emojis/angry.png")}
            className="h-12 w-12 object-cover"
            style={{
              resizeMode: "contain",
            }}
          />
          <P>Angry</P>
        </View>

        <View className="flex flex-col items-center">
          <Image
            source={require("../../../assets/imgs/emojis/sad.png")}
            className="h-12 w-12 object-cover"
            style={{
              resizeMode: "contain",
            }}
          />
          <P>Sad</P>
        </View>
      </View>

      {/* <FlatList
        data={data}
        renderItem={({ item }) => <Card title={item.name} img={item.img} />}
        keyExtractor={(_, index) => index.toString()}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          // paddingHorizontal: 10,
          marginTop: 10,
          gap: 5,
        }}
        horizontal={true}
      /> */}
      <View></View>
    </View>
  );
}
