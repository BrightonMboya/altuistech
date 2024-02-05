import { TouchableOpacity, View } from "react-native";
import H1 from "../ui/Heading";

export default function Button({
  bottomSheetHandler,
}: {
  bottomSheetHandler: () => void;
}) {
  return (
    <View className="flex flex-col items-center">
      <TouchableOpacity
        className="sticky  bottom-10 h-12 md:h-14  w-[350px] rounded-md bg-[#1960F2]"
        onPress={() => {
          bottomSheetHandler();
        }}
      >
        <H1 styling="text-xl tracking-wide text-white p-3 text-center md:text-2xl">
          +   Create/ Join Groups
        </H1>
      </TouchableOpacity>
    </View>
  );
}
