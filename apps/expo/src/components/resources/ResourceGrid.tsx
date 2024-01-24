import { useRef } from "react";
import { FlatList, View } from "react-native";
import YoutubePlayer from "react-native-youtube-iframe";
import { ResizeMode, Video } from "expo-av";



import { Card, data } from "~/components/home/Resources";
import H1 from "../ui/Heading";


function VideoCard() {
  const video = useRef(null);
  return (
    <View>
      {/* <Video
        ref={video}
        className="h-[150px] w-[120px]"
        source={{
          uri: "https://www.youtube.com/embed/9Qt8ftivJ5A?modestbranding=1&playsinline=1&showinfo=0&rel=0",
        }}
        useNativeControls
        resizeMode={ResizeMode.CONTAIN}
        isLooping
        // onPlaybackStatusUpdate={status => setStatus(() => status)}
      /> */}
     <YoutubePlayer
        height={300}
        play={true}
        videoId={'84WIaK3bl_s'}
      />
    </View>
  );
}

export default function ResourceGrid({ title }: { title: string }) {
  return (
    <View className="mt-5">
      {/* <P style="text-xl leading-[1.2em]" textType="heading">{title}</P> */}
      <H1 styling="text-xl tracking-[0.32px]">{title}</H1>
      <FlatList
        data={data}
        renderItem={({ item }) => <VideoCard />}
        keyExtractor={(_, index) => index.toString()}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          gap: 5,
          marginTop: 10,
        }}
        horizontal={true}
      />
    </View>
  );
}