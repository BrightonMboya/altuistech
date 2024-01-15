import { FlatList, Image, View } from "react-native";

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

const data = [
  {
    id: 1,
    title: "Resource Centers",
    caption: "Take this 6 minute assessment to know your personality type.",
    imgSrc:
      "https://images.unsplash.com/photo-1512236393941-3d6da97e56bc?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fGJyaWdodCUyMG1vZGVsc3xlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 2,
    title: "Help Groups",
    caption: "Take this 6 minute assessment to know your personality type.",
    imgSrc:
      "https://images.unsplash.com/photo-1633294580267-6743bbe90b04?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDN8fGJyaWdodCUyMG1vZGVsc3xlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 3,
    title: "Health Screening",
    caption: "Take this 6 minute assessment to know your personality type.",
    imgSrc:
      "https://images.unsplash.com/photo-1517241938558-898c3afe02c8?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGJyaWdodCUyMG1vZGVsc3xlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 4,
    title: "Consultation",
    caption: "Take this 6 minute assessment to know your personality type.",
    imgSrc:
      "https://images.unsplash.com/photo-1517241938558-898c3afe02c8?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGJyaWdodCUyMG1vZGVsc3xlbnwwfHwwfHx8MA%3D%3D",
  },
];

export default function Services() {
  return (
    <View className="mt-5">
      <H1 styling="text-2xl mt-5">Services for You</H1>

      <View className="flex flex-row gap-2 pt-3">
        <View className="h-[180px] w-[200px] overflow-hidden rounded-md bg-[#FFF2EB] p-3">
          <Image
            source={require("../../../assets/imgs/emojis/file.png")}
            className="h-10 w-10 rounded-md object-cover"
            style={{
              resizeMode: "contain",
            }}
          />
          <P style="pt-2 text-lg" textType="medium">
            Resource Centers
          </P>
          <P style="pt-3">
            Take this 6 minute assessment to know your personality type.
          </P>
        </View>

        <View className="h-[180px] w-[200px] overflow-hidden rounded-md bg-[#FFEFC6] p-3">
          <Image
            source={require("../../../assets/imgs/emojis/avatar.png")}
            className="h-10 w-10 rounded-md object-cover"
            style={{
              resizeMode: "contain",
            }}
          />
          <P style="pt-2 text-lg" textType="medium">
            Help Groups
          </P>
          <P style="pt-3">
            Take this 6 minute assessment to know your personality type.
          </P>
        </View>
      </View>

      <View className="flex flex-row gap-2 pt-3">
        <View className="h-[180px] w-[200px] overflow-hidden bg-[#E4EDFF] p-3 rounded-md">
          <Image
            source={require("../../../assets/imgs/emojis/star.png")}
            className="h-10 w-10 rounded-md object-cover"
            style={{
              resizeMode: "contain",
            }}
          />
          <P style="pt-2 text-lg" textType="medium">
            Health Screening
          </P>
          <P style="pt-3">
            Take this 6 minute assessment to know your personality type.
          </P>
        </View>

        <View className="h-[180px] w-[200px] overflow-hidden bg-[#F2E8FF] p-3 rounded-md">
          <Image
            source={require("../../../assets/imgs/emojis/message.png")}
            className="h-10 w-10 rounded-md object-cover"
            style={{
              resizeMode: "contain",
            }}
          />
          <P style="pt-2 text-lg" textType="medium">
            Consultations
          </P>
          <P style="pt-3">
            Take this 6 minute assessment to know your personality type.
          </P>
        </View>
      </View>
    </View>
  );
}
