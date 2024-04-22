import { StyleSheet, View } from "react-native";
import { WebView } from "react-native-webview";

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

export default function Page() {
  return (
    <View className="h-[200px] w-full">
      <WebView
        javaScriptEnabled={true}
        source={{
          uri: createEmbedYoutubeUrl(
            "https://www.youtube.com/watch?v=F8nrmr-NW40",
          ),
        }}
      />
    </View>
  );
}
