import { Image, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useRouter } from "expo-router";

import P from "../ui/Text";

interface Props {
  img: string;
  title: string;
  description: string;
}

export const groupsData = [
  {
    id: 1,
    title: "Parent Therapy",
    img: "https://images.unsplash.com/photo-1677741448486-b13c90bc8d73?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDJ8dG93SlpGc2twR2d8fGVufDB8fHx8fA%3D%3D",
    description:
      "A community of mental health enthusiasts who are eager to learn and promote mental health programs",
  },
  {
    id: 2,
    title: "Under 18",
    img: "https://images.unsplash.com/photo-1679025907297-75a26689313c?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDF8dG93SlpGc2twR2d8fGVufDB8fHx8fA%3D%3D",
    description:
      "A community of mental health enthusiasts who are eager to learn and promote mental health programs",
  },
  {
    id: 3,
    title: "Life in School",
    img: "https://images.unsplash.com/photo-1669442458571-d13cd471e307?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDd8dG93SlpGc2twR2d8fGVufDB8fHx8fA%3D%3D",
    description:
      "A community of mental health enthusiasts who are eager to learn and promote mental health programs",
  },
  {
    id: 4,
    title: "Global Achievers",
    img: "https://images.unsplash.com/photo-1684318551812-63d888cce300?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDE2fHRvd0paRnNrcEdnfHxlbnwwfHx8fHw%3D",
    description:
      "A community of mental health enthusiasts who are eager to learn and promote mental health programs",
  },
  {
    id: 5,
    title: "Mental Enthusiasts",
    img: "https://images.unsplash.com/photo-1672021759892-cf18be94705d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDIzfHRvd0paRnNrcEdnfHxlbnwwfHx8fHw%3D",
    description:
      "A community of mental health enthusiasts who are eager to learn and promote mental health programs",
  },
];
export default function Card({ img, title, description }: Props) {
  const router = useRouter();
  return (
    <View className="mt-10 flex flex-row items-start">
      <Image
        source={{
          uri: img,
        }}
        className="h-full w-[64px]  rounded-md"
      />
      <View className="h-[70px] w-[200px] pl-4">
        <P style="text-lg" textType="medium">
          {title}
        </P>
        <P style="overflow-x-hidden ">{description}</P>
      </View>
      <TouchableOpacity
        className="mt-5 h-12 ml-3 rounded-lg border-[2px] border-[#1960F2]  bg-white "
        onPress={() => {
          router.push("/");
        }}
      >
        <P style="text-lg tracking-wide text-[#1960F2] px-1 py-2 text-center">
          Join a Group
        </P>
      </TouchableOpacity>
    </View>
  );
}
