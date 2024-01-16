import { ImageProps } from "react-native";

export interface OnboardingData {
  id: number;
  image: ImageProps;
  text: string;
  textColor: string;
  backgroundColor: string;
}

const data: OnboardingData[] = [
  {
    id: 1,
    image: require("../../../assets/imgs/emojis/avatar.png"),
    text: "Lorem Ipsum dolor sit amet bnsb",
    textColor: "#f8dac2",
    backgroundColor: "#154f40",
  },
  {
    id: 2,
    image: require("../../../assets/imgs/emojis/angry.png"),
    text: "Lorem Ipsum dolor sit amet",
    textColor: "#154f40",
    backgroundColor: "#fd94b2",
  },
  {
    id: 3,
    image: require("../../../assets/imgs/emojis/star.png"),
    text: "Lorem Ipsum dolor sit amet",
    textColor: "black",
    backgroundColor: "#f8dac2",
  },
];

export default data;
