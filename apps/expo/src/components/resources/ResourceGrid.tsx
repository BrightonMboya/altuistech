import { useRef } from "react";
import { FlatList, Image, View } from "react-native";
import { A } from "@expo/html-elements";

import { Card, data } from "~/components/home/Resources";
import H1 from "../ui/Heading";
import P from "../ui/Text";

interface Props {
  id: number;
  link: string;
  thumbNail: string;
  label: string;
}

function VideoCard({ link, thumbNail, label }: Props) {
  return (

    <A href={link} className="h-[150px] w-[120px] md:h-[270px] md:w-[350px] ">
      <View className="mt-1 h-[150px] w-[120px] overflow-hidden md:h-[270px] md:w-[350px]   ">
        <Image
          source={{
            uri: thumbNail,
          }}
          className="h-[120px] w-[120px] rounded-md md:h-[200px] md:w-[350px]"
        />
        <H1 styling="md:text-xl mt-2">{label}</H1>
      </View>
    </A>
  );
}

export default function ResourceGrid({
  data,
  title,
}: {
  data: Props[];
  title: string;
}) {
  return (
    <View className="mt-5 max-h-[270px] md:max-h-[300px] ">
      <H1 styling="text-xl tracking-[0.32px]">{title}</H1>
      <FlatList
        data={data}
        renderItem={({ item }) => <VideoCard {...item} />}
        keyExtractor={(_, index) => index.toString()}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          gap: 5,
          // marginTop: 10,
        }}
        horizontal={true}
      />
    </View>
  );
}
