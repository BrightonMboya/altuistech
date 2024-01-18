import { Image, TouchableOpacity, View } from "react-native";
import { useRouter } from "expo-router";

import P from "../ui/Text";

export default function TestCard({ backgroundColor, name, img, href }: any) {
  const router = useRouter();
  return (
    <TouchableOpacity
      onPress={() => {
        router.push(href);
      }}
    >
      <View
        className={`h-[88px] w-[90%] bg-[${backgroundColor}] mt-5 flex flex-row justify-between overflow-hidden rounded-md p-5  `}
      >
        <P style="w-[200px] text-base" textType="medium">
          {name}
        </P>
        <Image source={img} className="h-[80px] translate-y-[-15px]" />
      </View>
    </TouchableOpacity>
  );
}
