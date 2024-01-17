import { TouchableOpacity, View } from "react-native";

import P from "../ui/Text";

export default function Button({
  bottomSheetHandler,
}: {
  bottomSheetHandler: () => void;
}) {
  return (
    <View className="flex flex-col items-center">
      <TouchableOpacity
        className="sticky  bottom-10 h-12  w-[350px] rounded-md bg-[#1960F2]"
        onPress={() => {
          bottomSheetHandler();
        }}
      >
        <P style="text-xl tracking-wide text-white p-3 text-center">
          + Create/ Join Groups
        </P>
      </TouchableOpacity>
    </View>
  );
}
