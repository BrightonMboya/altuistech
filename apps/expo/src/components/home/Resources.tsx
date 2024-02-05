import { FlatList, Image, View } from "react-native";

import H1 from "../ui/Heading";

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
    <View className="md:mb-10">
      <H1 styling="text-2xl mt-10">Resources for You</H1>

      <FlatList
        data={data}
        renderItem={({ item }) => <Card {...item} />}
        keyExtractor={(_, index) => index.toString()}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          // paddingHorizontal: 10,
     
          gap: 5,
          marginTop: 5,
        }}
        horizontal={true}
      />
    </View>
  );
}
