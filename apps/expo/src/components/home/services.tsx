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
      <H1 styling="text-2xl mt-5 md:pt-5 md:text-3xl">Services for You</H1>

      <View className="space-y-5 pt-5 ">
        <View className="space-y-5 md:flex md:flex-row md:items-end md:space-y-0 ">
          <TouchableOpacity
            className="h-[180px] w-[350px] overflow-hidden rounded-md  bg-[#FFF2EB] p-3 md:h-[250px] md:w-[400px] md:p-5 "
            onPress={() => router.push("/resources")}
          >
            <Image
              source={require("../../../assets/imgs/emojis/file.png")}
              className="h-12 w-12 rounded-md object-cover md:h-[60px] md:w-[60px]"
              style={{
                resizeMode: "contain",
              }}
            />
            <H1 styling="pt-2 text-xl md:text-3xl">Resource Centers</H1>
            <P style="pt-2 text-lg md:text-2xl">
              Engage in different resources to gauge the status of your mental
              health
            </P>
          </TouchableOpacity>

          <TouchableOpacity
            className="h-[180px] w-[350px] overflow-hidden rounded-md bg-[#E4EDFF] p-3 md:ml-5 md:h-[250px] md:w-[400px] md:p-5 "
            onPress={() => router.push("/tests")}
          >
            <Image
              source={require("../../../assets/imgs/emojis/star.png")}
              className="h-12 w-12 rounded-md object-cover md:h-[60px] md:w-[60px]"
              style={{
                resizeMode: "contain",
              }}
            />
            <H1 styling="pt-2 text-xl md:text-3xl">Health Screening</H1>
            <P style="pt-1 text-lg md:text-2xl">
              See how you diagnose on different mental health status
            </P>
          </TouchableOpacity>
        </View>

        <View className="space-y-5 md:flex md:flex-row md:items-end md:space-y-0 ">
          <View className="h-[180px] w-[350px] overflow-hidden rounded-md bg-[#FFEFC6] p-3 md:h-[250px] md:w-[400px] md:p-5">
            <Image
              source={require("../../../assets/imgs/emojis/avatar.png")}
              className="h-12 w-12 md:h-[60px] md:w-[60px] rounded-md object-cover"
              style={{
                resizeMode: "contain",
              }}
            />
            <H1 styling="pt-2 text-xl md:text-3xl">Assistant</H1>
            <P style="pt-1 text-lg md:text-2xl">
              Reach out to us and we will assist you with your query
            </P>
          </View>

          <TouchableOpacity
            className="h-[180px] w-[350px] overflow-hidden rounded-md bg-[#F2E8FF] p-3 md:h-[250px] md:w-[400px] md:p-5 md:ml-5"
            onPress={() => router.push("/sessions")}
          >
            <Image
              source={require("../../../assets/imgs/emojis/message.png")}
              className="h-12 w-12 md:h-[60px] md:w-[60px] rounded-md object-cover"
              style={{
                resizeMode: "contain",
              }}
            />
            <H1 styling="pt-2 text-xl md:text-3xl">Consultations</H1>
            <P style="pt-1 text-lg md:text-2xl">
              Self diagnose yourself on the different mental health issues
            </P>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
