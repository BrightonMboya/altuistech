import { useRef, useState } from "react";
import { FlatList, View } from "react-native";
import WebView from "react-native-webview";

import H1 from "../ui/Heading";
import P from "../ui/Text";

export const getYoutubeVideoId = (url: any) => {
  const regExp =
    /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
  const match = url.match(regExp);
  return match && match[2].length == 11 ? match[2] : "error";
};

export const createEmbedYoutubeUrl = (youtubeUrl: string) => {
  const youtubeVideoId = getYoutubeVideoId(youtubeUrl);
  return `https://www.youtube.com/embed/${youtubeVideoId}?  modestbranding=1`;
};

interface Props {
  link: string;
  label: string;
}

function VideoCard({ link, label }: Props) {
  return (
    <View className="mt-5 ">
      <P style="text-lg md:text-2xl">{label}</P>
      <View className="h-[200px] w-[100%] md:w-[840px] md:h-[400px] pr-5">
        <WebView
          javaScriptEnabled={true}
          source={{
            uri: createEmbedYoutubeUrl(link),
          }}
        />
      </View>
    </View>
  );
}

export default function ResourceGrid({
  data,
  title,
}: {
  data: Props[];
  title: string;
}) {
  const video = useRef(null);
  const [status, setStatus] = useState({});
  return (
    <View className="mt-10">
      <H1 styling="text-xl tracking-[0.32px] md:text-3xl">{title}</H1>
      {data.map((data) => (
        <VideoCard {...data} key={data.link} />
      ))}

      {/* <FlatList
        data={data}
        renderItem={({ item }) => <VideoCard {...item} />}
        keyExtractor={(_, index) => index.toString()}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          gap: 5,
          // marginTop: 10,
        }}
        // horizontal={true}
      /> */}
    </View>
  );
}
