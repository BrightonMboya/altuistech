import { FlatList, View } from "react-native";
import P from "../ui/Text";
const data = [
  {
    id: 1,
    name: "Happy",
  },
  {
    id: 2,
    name: "Calm",
  },
  {
    id: 3,
    name: "Worried",
  },
  {
    id: 4,
    name: "Angry",
  },
  {
    id: 5,
    name: "Sad",
  },
];

function Card({ title }: { title: string }) {
  return (
    <View>
      <P>{title}</P>
    </View>
  );
}

export default function Feelings() {
  return (
    <View className="bg-[#F5F8FE] w-[300px] rounded-md h-[100px] p-3 mt-5">
        <P style="text-lg">How are you feeling today?</P>
          <FlatList
        data={data}
        renderItem={({ item }) => <Card title={item.name} />}
        keyExtractor={(_, index) => index.toString()}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          // paddingHorizontal: 10,
          marginTop: 10,
          gap: 5,
        }}
        horizontal={true}
      />
      <View></View>
    </View>
  );
}
