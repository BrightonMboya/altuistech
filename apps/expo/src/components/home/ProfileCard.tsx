import { Image, View } from "react-native";

import H1 from "../ui/Heading";
import P from "../ui/Text";

export default function ProfileCard() {
  return (
    <View className="flex flex-row gap-5">
      <Image
        source={{
          uri: "https://images.unsplash.com/photo-1704189125621-55e8c6cfd166?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHx8",
        }}
        className="h-[80px] w-[80px] rounded-full"
      />
      <View>
        <P style="text-base">Good Morning,</P>
        <H1 styling="text-xl">Adediwura</H1>
      </View>
    </View>
  );
}
