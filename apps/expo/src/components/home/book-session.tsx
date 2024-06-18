import { Image, TouchableOpacity, View } from "react-native";
import { Link, useRouter } from "expo-router";

export default function BookSession() {
  const router = useRouter();
  return (
    <TouchableOpacity
      onPress={() => {
        router.push("/tests/phq");
      }}
    >
      <View className="mt-6">
        <Image
          source={require("../../../assets/imgs/test-img.png")}
          className="h-[106px] w-[90%] md:h-[150px] object-cover"
        />

      </View>
    </TouchableOpacity>
  );
}
