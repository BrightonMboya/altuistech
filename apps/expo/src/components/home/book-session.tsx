import { Image, View } from "react-native";

export default function BookSession() {
  return (
    <View className="mt-6">
      <Image
        source={require("../../../assets/imgs/bookSession.png")}
        className="h-[106px] w-[90%] object-cover"
      />
    </View>
  );
}
