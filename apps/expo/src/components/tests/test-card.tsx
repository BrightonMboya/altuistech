import { Image, TouchableOpacity, View } from "react-native";
import { useRouter } from "expo-router";

import H1 from "../ui/Heading";
import P from "../ui/Text";

export default function TestCard({ backgroundColor, name, img, href }: any) {
  const router = useRouter();
  return (
    <TouchableOpacity
      onPress={() => {
        href && router.push(href);
      }}
    >
      <View
        className={`h-[88px] w-[90%] bg-[${backgroundColor}] mt-5 flex flex-row justify-between overflow-hidden rounded-md p-5  `}
      >
        <H1 styling="w-[200px] text-base">{name}</H1>
        <Image source={img} className="h-[80px] translate-y-[-15px]" />
      </View>
    </TouchableOpacity>
  );
}
