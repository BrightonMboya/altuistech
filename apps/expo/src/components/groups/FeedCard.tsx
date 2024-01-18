import { Image, View } from "react-native";

import P from "../ui/Text";

export default function FeedCard() {
  return (
    <View className="pl-5 w-[360px] bg-white py-5 rounded-md shadow-sm">
      <View className="flex flex-row items-start gap-[8px]">
        <Image
          source={{
            uri: "https://images.unsplash.com/photo-1676749511580-03d132efa840?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDE4fHRvd0paRnNrcEdnfHxlbnwwfHx8fHw%3D",
          }}
          className="h-[64px] w-[64px] rounded-full"
        />

        <View>
          <P style="text-lg" textType="medium">
            Laura Meier
          </P>
          <View className="flex flex-row items-center ">
            <P style="text-[#505050]">Parent Therapy</P>
            <View className="mx-2 h-1 w-1 rounded-full bg-gray" />
            <P style="text-[#505050]">20 April at 11:45</P>
          </View>
        </View>

      </View>
        <P style="pt-2">
          Hello guys, It’s been a really tough year, but I finally got the
          chance to go to the beach, and it was refreshing 🏂.
        </P>
    </View>
  );
}
