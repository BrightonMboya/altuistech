import { useRef } from "react";
import { FlatList, Image, View } from "react-native";
import { A } from "@expo/html-elements";
import P from "../ui/Text";
import { Card, data } from "~/components/home/Resources";
import H1 from "../ui/Heading";

interface Props {
  id: number;
  link: string;
  thumbNail: string;
  label: string;
}

function VideoCard({ link, thumbNail, label }: Props) {
  return (
    <A href={link} className="h-[150px] w-[120px]">
      <View className="mt-1 h-[150px] w-[120px] overflow-hidden">
        <Image
          source={{
            uri: thumbNail,
          }}
          className="h-[120px] w-[120px] rounded-md"
        />
        <P style="pt-2">{label}</P>
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
    <View className="mt-5 max-h-[250px]">
      {/* <P style="text-xl leading-[1.2em]" textType="heading">{title}</P> */}
      <H1 styling="text-xl tracking-[0.32px]">{title}</H1>
      <FlatList
        data={data}
        renderItem={({ item }) => <VideoCard {...item} />}
        keyExtractor={(_, index) => index.toString()}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          gap: 5,
          marginTop: 10,
        }}
        horizontal={true}
      />
    </View>
  );
}
