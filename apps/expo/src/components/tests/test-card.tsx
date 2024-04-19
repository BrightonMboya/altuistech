import { Image, TouchableOpacity, View } from "react-native";
import { useRouter } from "expo-router";

import H1 from "../ui/Heading";


export default function TestCard({ backgroundColor, name, img, href }: any) {
  const router = useRouter();
  return (
    <TouchableOpacity
      onPress={() => {
        href && router.push(href);
        console.log("I got triggered here as well")
      }}
    >
      <View
        className={`h-[88px] md:h-[150px] w-[90%] bg-[${backgroundColor}] mt-5 flex flex-row justify-between overflow-hidden rounded-md p-5 md:pr-0  `}
      >
        <H1 styling="w-[200px] text-base md:text-xl">{name}</H1>
        <Image source={img} className="h-[80px] md:h-[150px] translate-y-[-15px]" />
      </View>
    </TouchableOpacity>
  );
}
