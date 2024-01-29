import { Image, View } from "react-native";
import { Path, Svg } from "react-native-svg";

import H1 from "../ui/Heading";
import P from "../ui/Text";

interface Props {
  price: string;
  title: string;
  imgUrl: any;
}

export default function PricingCard({ price, title, imgUrl }: Props) {
  return (
    <View className="min-h-[250px] w-[90%] rounded-md border-[1px] border-[#b8b8b8] mt-10">
      <View className="p-[16px]">
        <Image source={imgUrl} />

        <View className="flex flex-row items-center justify-between pt-[16px]">
          <H1 styling="text-2xl ">{title}</H1>
          <View className="flex flex-row items-center">
            <H1 styling="text-3xl">{`$${price}`}</H1>
            <P style="text-base text-[#505050] pl-2">/month</P>
          </View>
        </View>

        <View className="mt-5 border-[0.5px] border-[#B8B8B8]" />
        <View className="gap-3 pt-5">
          <View className="flex flex-row items-center">
            <Svg width="20" height="20" viewBox="0 0 16 16" fill="none">
              <Path
                d="M6.66721 10.1141L12.7955 3.98584L13.7383 4.92865L6.66721 11.9997L2.42456 7.75709L3.36737 6.81429L6.66721 10.1141Z"
                fill="#F3AB33"
              />
            </Svg>
            <P style="text-[#505050] text-base pl-3">
              Gain access to all our services
            </P>
          </View>
          <View className="flex flex-row ">
            <Svg
              width="20"
              height="20"
              viewBox="0 0 16 16"
              fill="none"
              className="pt-8"
            >
              <Path
                d="M6.66721 10.1141L12.7955 3.98584L13.7383 4.92865L6.66721 11.9997L2.42456 7.75709L3.36737 6.81429L6.66721 10.1141Z"
                fill="#F3AB33"
              />
            </Svg>
            <P style="text-[#505050] text-base pl-3 pr-3">
              Be at the top of gig jobs recommendations.
            </P>
          </View>
          <View className="flex flex-row items-center">
            <Svg width="20" height="20" viewBox="0 0 16 16" fill="none">
              <Path
                d="M6.66721 10.1141L12.7955 3.98584L13.7383 4.92865L6.66721 11.9997L2.42456 7.75709L3.36737 6.81429L6.66721 10.1141Z"
                fill="#F3AB33"
              />
            </Svg>
            <P style="text-[#505050] text-base pl-3">
              Gain access to all our services
            </P>
          </View>
        </View>
      </View>
    </View>
  );
}
