import React from "react";
import { TouchableHighlight, TouchableOpacity, View } from "react-native";
import Svg, { Circle, Path, Rect } from "react-native-svg";
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
            <Svg width="25" height="25" viewBox="0 0 25 25" fill="none">
              <Path
                d="M12.5 19.25C12.09 19.25 11.75 18.91 11.75 18.5V15.5C11.75 15.09 12.09 14.75 12.5 14.75C12.91 14.75 13.25 15.09 13.25 15.5V18.5C13.25 18.91 12.91 19.25 12.5 19.25Z"
                fill={pathname === "/" ? "#1960F2" : "#ddd"}
              />
              <Path
                d="M18.1 23.06H6.9C5.08 23.06 3.42 21.66 3.12 19.87L1.79 11.9C1.57 10.66 2.18 9.07001 3.17 8.28001L10.1 2.73001C11.44 1.65001 13.55 1.66001 14.9 2.74001L21.83 8.28001C22.81 9.07001 23.41 10.66 23.21 11.9L21.88 19.86C21.58 21.63 19.88 23.06 18.1 23.06ZM12.49 3.43001C11.96 3.43001 11.43 3.59001 11.04 3.90001L4.11 9.46001C3.55 9.91001 3.15 10.95 3.27 11.66L4.6 19.62C4.78 20.67 5.83 21.56 6.9 21.56H18.1C19.17 21.56 20.22 20.67 20.4 19.61L21.73 11.65C21.84 10.95 21.44 9.89001 20.89 9.45001L13.96 3.91001C13.56 3.59001 13.02 3.43001 12.49 3.43001Z"
                fill={pathname === "/" ? "#1960F2" : "#ddd"}
              />
            </Svg>
            <P style={`${pathname === "/" ? "text-[#1960F2]" : "text-[#ddd]"}`}>
              Home
            </P>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            router.push("/groups");
          }}
        >
          <View className="flex flex-col items-center">
            <Svg width="24" height="25" viewBox="0 0 24 25" fill="none">
              <Path
                d="M17.8877 11.3967C19.2827 11.2007 20.3567 10.0047 20.3597 8.5557C20.3597 7.1277 19.3187 5.9437 17.9537 5.7197"
                stroke="#989898"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
                fill={pathname.startsWith("/groups") ? "#1960F2" : "#ddd"}
              />
              <Path
                d="M19.7285 14.7503C21.0795 14.9523 22.0225 15.4253 22.0225 16.4003C22.0225 17.0713 21.5785 17.5073 20.8605 17.7813"
                stroke="#989898"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
                fill={pathname.startsWith("/groups") ? "#1960F2" : "#ddd"}
              />
              <Path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M11.8867 15.1638C8.67269 15.1638 5.92769 15.6508 5.92769 17.5958C5.92769 19.5398 8.65569 20.0408 11.8867 20.0408C15.1007 20.0408 17.8447 19.5588 17.8447 17.6128C17.8447 15.6668 15.1177 15.1638 11.8867 15.1638Z"
                stroke="#989898"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
                fill={pathname.startsWith("/groups") ? "#1960F2" : "#ddd"}
              />
              <Path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M11.8867 12.3879C13.9957 12.3879 15.7057 10.6789 15.7057 8.56891C15.7057 6.45991 13.9957 4.74991 11.8867 4.74991C9.7777 4.74991 8.06767 6.45991 8.06767 8.56891C8.0597 10.6709 9.7567 12.3809 11.8587 12.3879H11.8867Z"
                stroke="#989898"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
                fill={pathname.startsWith("/groups") ? "#1960F2" : "#ddd"}
              />
              <Path
                d="M5.8848 11.3967C4.4888 11.2007 3.4158 10.0047 3.4128 8.5557C3.4128 7.1277 4.4538 5.9437 5.8188 5.7197"
                stroke="#989898"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
                fill={pathname.startsWith("/groups") ? "#1960F2" : "#ddd"}
              />
              <Path
                d="M4.04389 14.7503C2.69289 14.9523 1.74989 15.4253 1.74989 16.4003C1.74989 17.0713 2.19389 17.5073 2.91189 17.7813"
                stroke="#989898"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
                fill={pathname.startsWith("/groups") ? "#1960F2" : "#ddd"}
              />
            </Svg>
            <P
              style={`${
                pathname.startsWith("/groups")
                  ? "text-[#1960F2]"
                  : "text-[#ddd]"
              }`}
            >
              Groups
            </P>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            router.push("/tests");
          }}
        >
          <View className="flex flex-col items-center">
            <Svg width="25" height="25" viewBox="0 0 25 25" fill="none">
              <Path
                d="M15.5 22.5C15.09 22.5 14.75 22.16 14.75 21.75V3.25C14.75 2.84 15.09 2.5 15.5 2.5C15.91 2.5 16.25 2.84 16.25 3.25V21.75C16.25 22.16 15.91 22.5 15.5 22.5Z"
                fill={pathname.startsWith("/tests") ? "#1960F2" : "#ddd"}
              />
              <Path
                d="M18.5 20.5H15.5V4.5H18.5C20.71 4.5 22.5 6.29 22.5 8.5V16.5C22.5 18.71 20.71 20.5 18.5 20.5Z"
                fill={pathname.startsWith("/tests") ? "#1960F2" : "#ddd"}
              />
              <Path
                d="M6.5 4.5C4.29 4.5 2.5 6.29 2.5 8.5V16.5C2.5 18.71 4.29 20.5 6.5 20.5H11.5C12.05 20.5 12.5 20.05 12.5 19.5V5.5C12.5 4.95 12.05 4.5 11.5 4.5H6.5ZM8.25 16C8.25 16.41 7.91 16.75 7.5 16.75C7.09 16.75 6.75 16.41 6.75 16V9C6.75 8.59 7.09 8.25 7.5 8.25C7.91 8.25 8.25 8.59 8.25 9V16Z"
                fill={pathname.startsWith("/tests") ? "#1960F2" : "#ddd"}
              />
            </Svg>
            <P
              style={`${
                pathname === "/tests" ? "text-[#1960F2]" : "text-[#ddd]"
              }`}
            >
              Tests
            </P>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            router.push("/resources");
          }}
        >
          <View className="flex flex-col items-center">
            <Svg
              width="24"
              height="25"
              viewBox="0 0 24 25"
              fill={`${pathname.startsWith("/resources") ? "#1960F2" : "#ddd"}`}
            >
              <Path
                d="M15.81 20.68C15.55 20.68 15.28 20.67 14.99 20.64C14.47 20.6 13.88 20.5 13.27 20.35L11.59 19.95C6.98001 18.86 5.47001 16.42 6.55001 11.82L7.53001 7.63001C7.75001 6.68002 8.01001 5.91002 8.33001 5.27002C10.05 1.72002 13.34 2.04001 15.68 2.59001L17.35 2.98001C19.69 3.53001 21.17 4.40001 22 5.73002C22.82 7.06002 22.95 8.77001 22.4 11.11L21.42 15.29C20.56 18.95 18.77 20.68 15.81 20.68ZM13.12 3.75001C11.45 3.75001 10.39 4.44002 9.68001 5.92002C9.42001 6.46002 9.19001 7.13001 8.99001 7.97001L8.01001 12.16C7.12001 15.94 8.15001 17.59 11.93 18.49L13.61 18.89C14.15 19.02 14.66 19.1 15.12 19.14C17.84 19.41 19.19 18.22 19.95 14.95L20.93 10.77C21.38 8.84002 21.32 7.49002 20.72 6.52001C20.12 5.55001 18.94 4.89002 17 4.44002L15.33 4.05001C14.5 3.85001 13.76 3.75001 13.12 3.75001Z"
                fill={`${
                  pathname.startsWith("/resources") ? "#1960F2" : "#ddd"
                }`}
              />
              <Path
                d="M8.32999 22.75C5.75999 22.75 4.11999 21.21 3.06999 17.96L1.78999 14.01C0.369991 9.60999 1.63999 7.12999 6.01999 5.70999L7.59999 5.19999C8.11999 5.03999 8.50999 4.92999 8.85999 4.86999C9.14999 4.80999 9.42999 4.91999 9.59999 5.14999C9.76999 5.37999 9.79999 5.67999 9.67999 5.93999C9.41999 6.46999 9.18999 7.13999 8.99999 7.97999L8.01999 12.17C7.12999 15.95 8.15999 17.6 11.94 18.5L13.62 18.9C14.16 19.03 14.67 19.11 15.13 19.15C15.45 19.18 15.71 19.4 15.8 19.71C15.88 20.02 15.76 20.34 15.5 20.52C14.84 20.97 14.01 21.35 12.96 21.69L11.38 22.21C10.23 22.57 9.22999 22.75 8.32999 22.75ZM7.77999 6.71999L6.48999 7.13999C2.91999 8.28999 2.06999 9.96999 3.21999 13.55L4.49999 17.5C5.65999 21.07 7.33999 21.93 10.91 20.78L12.49 20.26C12.55 20.24 12.6 20.22 12.66 20.2L11.6 19.95C6.98999 18.86 5.47999 16.42 6.55999 11.82L7.53999 7.62999C7.60999 7.30999 7.68999 6.99999 7.77999 6.71999Z"
                fill={`${
                  pathname.startsWith("/resources") ? "#1960F2" : "#ddd"
                }`}
              />
              <Path
                d="M14.56 14.39C14.5 14.39 14.44 14.38 14.37 14.37L11.46 13.63C11.06 13.53 10.82 13.12 10.92 12.72C11.02 12.32 11.43 12.08 11.83 12.18L14.74 12.92C15.14 13.02 15.38 13.43 15.28 13.83C15.2 14.17 14.9 14.39 14.56 14.39Z"
                fill={`${
                  pathname.startsWith("/resources") ? "#1960F2" : "#ddd"
                }`}
              />
            </Svg>
            <P
              style={`${
                pathname.startsWith("/resources")
                  ? "text-[#1960F2]"
                  : "text-[#ddd]"
              }`}
            >
              Resources
            </P>
          </View>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default BottomTab;
