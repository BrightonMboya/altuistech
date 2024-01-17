import { TouchableOpacity, View } from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";
import MaterialIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { useRouter } from "expo-router";

import P from "~/components/ui/Text";
import { BottomSheet } from "../home/bottom-sheets";

export default function JoinGroupBottomSheet({
  joinGroupRef,
}: {
  joinGroupRef: any;
}) {
  const router = useRouter();

  return (
    // @ts-ignore
    <BottomSheet
      ref={joinGroupRef}
      snapTo={"30%"}
      backgroundColor={"white"}
      backDropColor={"black"}
    >
      <View className="flex flex-col justify-center px-10 pt-10">
        <View>
          <TouchableOpacity
            className="flex flex-row items-center justify-between "
            onPress={() => router.push("/groups/create-group")}
          >
            <View className="flex flex-row items-center">
              <AntDesign name="pluscircleo" size={30} color="#1960F2" />
              <P style="pl-3 text-xl">Create a group</P>
            </View>
            <MaterialIcons name="chevron-right" size={35} color="#505050" />
          </TouchableOpacity>

          <TouchableOpacity
            className="mt-10 flex flex-row items-center justify-between"
            onPress={() => {
              router.push("/groups/join");
            }}
          >
            <View className="flex flex-row items-center">
              <MaterialIcons
                name="format-horizontal-align-right"
                size={30}
                color="#1960F2"
              />
              <P style="pl-5 text-xl">Join a group</P>
            </View>
            <MaterialIcons name="chevron-right" size={35} color="#505050" />
          </TouchableOpacity>
        </View>
      </View>
    </BottomSheet>
  );
}
