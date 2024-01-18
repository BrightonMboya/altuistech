import { FlatList, View } from "react-native";

import { Card } from "../home/Resources";
import P from "../ui/Text";
import { groupsData } from "./join-group-card";


export default function GroupsView() {
  return (
    <View className="pl-5">
        <P style="text-xl pt-5" textType="medium">Your Groups</P>
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
