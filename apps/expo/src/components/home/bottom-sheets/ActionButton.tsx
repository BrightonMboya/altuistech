import {View, TouchableOpacity} from "react-native";
import H1 from "~/components/ui/Heading";
import {useRouter} from "expo-router";

export default function ActionButton() {
    const router = useRouter();
    return (
      <View className="md:flex md:flex-row">
            <TouchableOpacity
              className="mt-5 h-12 w-[350px] rounded-md border-[2px] border-[#1960F2] bg-blue  md:ml-5 "
              onPress={() => {
                router.push("/tests/panas");
              }}
            >
              <H1 styling="text-lg tracking-wide text-[#1960F2] pt-2 text-center text-white md:text-xl">
               Get mood breakdown
              </H1>
            </TouchableOpacity>
            <TouchableOpacity
              className="mt-5 h-12 w-[350px] rounded-md border-[2px] border-[#1960F2] bg-white  md:ml-5 "
              onPress={() => {
                router.push("/");
              }}
            >
              <H1 styling="text-lg tracking-wide text-[#1960F2] pt-2 text-center md:text-xl">
               Journal your feeling
              </H1>
            </TouchableOpacity>
          </View>   
    )
}