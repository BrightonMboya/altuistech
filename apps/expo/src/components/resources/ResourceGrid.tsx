import { FlatList, View } from "react-native";

import { Card, data } from "~/components/home/Resources";
import H1 from "../ui/Heading";

export default function ResourceGrid({ title }: { title: string }) {
  return (
    <View className="mt-5">
      {/* <P style="text-xl leading-[1.2em]" textType="heading">{title}</P> */}
     <H1 styling="text-xl tracking-[0.32px]">{title}</H1>
      <FlatList
        data={data}
        renderItem={({ item }) => <Card {...item} />}
        keyExtractor={(_, index) => index.toString()}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          // paddingHorizontal: 10,
          gap: 5,
          marginTop: 10
        }}
        horizontal={true}
      />
    </View>
  );
}
