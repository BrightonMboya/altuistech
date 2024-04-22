import { Image, TouchableOpacity, View } from "react-native";
import { useRouter } from "expo-router";

import H1 from "../ui/Heading";
import P from "../ui/Text";

function Card({
  title,
  imgSrc,
  caption,
}: {
  title: string;
  imgSrc: string;
  caption: string;
}) {
  return (
    <View className="h-[158px] w-[162px] overflow-hidden bg-[#FFEFC6]">
      <Image
        source={{
          uri: imgSrc,
        }}
        className="h-48 w-48 rounded-md"
        alt="gell"
      />
      <H1 styling="pt-2">{title}</H1>
      <P>{caption}</P>
    </View>
  );
}

export default function Services() {
  const router = useRouter();
  return (
    <View className="mt-5">
      <H1 styling="text-2xl mt-5 md:pt-5">Services for You</H1>

      <View className="space-y-5 pt-5 md:flex-col">
        <TouchableOpacity
          className="h-[180px] w-[350px] overflow-hidden rounded-md  bg-[#FFF2EB] p-3 md:h-full md:w-[180px]"
          onPress={() => router.push("/resources")}
        >
          <Image
            source={require("../../../assets/imgs/emojis/file.png")}
            className="h-12 w-12 rounded-md object-cover"
            style={{
              resizeMode: "contain",
            }}
          />
          <H1 styling="pt-2 text-xl">Resource Centers</H1>
          <P style="pt-2 text-lg">
            Engage in different resources to gauge the status of your mental
            health
          </P>
        </TouchableOpacity>

        <TouchableOpacity
          className="h-[180px] w-[350px] overflow-hidden rounded-md bg-[#E4EDFF] p-3 md:h-full md:w-[180px]"
          onPress={() => router.push("/tests")}
        >
          <Image
            source={require("../../../assets/imgs/emojis/star.png")}
            className="h-12 w-12 rounded-md object-cover"
            style={{
              resizeMode: "contain",
            }}
          />
          <H1 styling="pt-2 text-xl">Health Screening</H1>
          <P style="pt-1 text-lg md:text-base">
            See how you diagnose on different mental health status
          </P>
        </TouchableOpacity>

        <View className="h-[180px] w-[350px] overflow-hidden rounded-md bg-[#FFEFC6] p-3 md:h-full md:w-[180px]">
          <Image
            source={require("../../../assets/imgs/emojis/avatar.png")}
            className="h-12 w-12 rounded-md object-cover"
            style={{
              resizeMode: "contain",
            }}
          />
          <H1 styling="pt-2 text-xl">Assistant</H1>
          <P style="pt-1 text-lg md:text-base">
            Reach out to us and we will assist you with your query
          </P>
        </View>

        <TouchableOpacity
          className="h-[180px] w-[350px] overflow-hidden rounded-md bg-[#F2E8FF] p-3 md:h-full md:w-[180px]"
          onPress={() => router.push("/sessions")}
        >
          <Image
            source={require("../../../assets/imgs/emojis/message.png")}
            className="h-12 w-12 rounded-md object-cover"
            style={{
              resizeMode: "contain",
            }}
          />
          <H1 styling="pt-2 text-xl">Consultations</H1>
          <P style="pt-1 text-lg md:text-base ">
            Self diagnose yourself on the different mental health issues
          </P>
        </TouchableOpacity>
      </View>
    </View>
  )
}