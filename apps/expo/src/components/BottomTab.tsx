import React from "react";
import { TouchableHighlight, TouchableOpacity, View } from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";
import IoniIcons from "react-native-vector-icons/Ionicons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { usePathname, useRouter } from "expo-router";

import P from "./ui/Text";

const BottomTab: React.FC = () => {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <>
      <View className="] absolute bottom-0 flex h-[60px] w-full flex-row items-center justify-around border-t-[1px] border-[#ddd] bg-white">
        <TouchableOpacity
          onPress={() => {
            router.push("/");
          }}
        >
          <View className="flex flex-col items-center">
            <AntDesign
              name="home"
              size={25}
              color={pathname === "/" ? "#1960F2" : "#ddd"}
            />
            <P style={`${pathname === "/" ? "text-[#1960F2]" : "text-[#ddd]"}`}>
              Home
            </P>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            router.push("/resources");
          }}
        >
          <View className="flex flex-col items-center">
            <AntDesign
              name="pluscircleo"
              size={25}
              color={pathname === "/resources" ? "#1960F2" : "#ddd"}
            />
            <P
              style={`${
                pathname === "/resources" ? "text-[#1960F2]" : "text-[#ddd]"
              }`}
            >
              Resources
            </P>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            router.push("/bottom");
          }}
        >
          <MaterialCommunityIcons
            name="briefcase-edit-outline"
            size={25}
            color={pathname === "/bottom" ? "#000" : "#ddd"}
          />
        </TouchableOpacity>
        <TouchableHighlight
          onPress={() => {
            router.push("/profile");
          }}
        >
          <AntDesign
            name="mail"
            size={25}
            color={pathname === "/profile" ? "#000" : "#ddd"}
          />
        </TouchableHighlight>
      </View>
    </>
  );
};

export default BottomTab;
