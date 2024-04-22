import { FlatList, Image, View } from "react-native";

import H1 from "../ui/Heading";
import { groupsData } from "./join-group-card";

export function Card({ title, imgSrc }: { title: string; imgSrc: string }) {
  return (
    <View className="mt-1 h-[150px] w-[120px] overflow-hidden md:h-full  md:w-[250px]">
      <Image
        source={{
          uri: imgSrc,
        }}
        className="h-[120px] w-[120px] rounded-md md:h-[200px]  md:w-[250px]"
      />
      <H1 styling="pt-2 md:text-xl">{title}</H1>
    </View>
  );
}

export default function GroupsView() {
  return (
    <View className="pl-5">
      <H1 styling="text-xl pt-5 md:text-2xl">Your Groups</H1>
      <FlatList
        data={groupsData}
        renderItem={({ item }) => <Card imgSrc={item.img} title={item.title} />}
        showsHorizontalScrollIndicator={false}
        horizontal={true}
        contentContainerStyle={{
          gap: 5,
          marginTop: 3,
        }}
      />
    </View>
  );
}
