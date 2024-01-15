import { FlatList, Image, View } from "react-native";

import P from "../ui/Text";
import H1 from "../ui/Heading";

export function Card({ title, imgSrc }: { title: string; imgSrc: string }) {
  return (
    <View className="w-[200px] overflow-hidden mt-1">
      <Image
        source={{
          uri: imgSrc,
        }}
        className="h-[180px] w-[200px] rounded-md"
      />
      <P style="pt-2">{title}</P>
    </View>
  );
}

export const data = [
  {
    id: 1,
    title: "Secret to a long distance relationships",
    imgSrc:
      "https://images.unsplash.com/photo-1512236393941-3d6da97e56bc?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fGJyaWdodCUyMG1vZGVsc3xlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 2,
    title: "Secret to a long distance relationships",
    imgSrc:
      "https://images.unsplash.com/photo-1633294580267-6743bbe90b04?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDN8fGJyaWdodCUyMG1vZGVsc3xlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 3,
    title: "Secret to a long distance relationships",
    imgSrc:
      "https://images.unsplash.com/photo-1517241938558-898c3afe02c8?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGJyaWdodCUyMG1vZGVsc3xlbnwwfHwwfHx8MA%3D%3D",
  },
];

export default function Resources() {
  return (
    <View>
      <H1 styling="text-2xl mt-5">Resources for You</H1>

      <FlatList
        data={data}
        renderItem={({ item }) => <Card {...item} />}
        keyExtractor={(_, index) => index.toString()}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          // paddingHorizontal: 10,
          gap: 5,
          marginTop: 5
        }}
        horizontal={true}
      />
    </View>
  );
}