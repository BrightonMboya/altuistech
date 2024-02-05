import { FlatList, View } from "react-native";

import { Card } from "../home/Resources";
import { groupsData } from "./join-group-card";
import H1 from "../ui/Heading";


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
