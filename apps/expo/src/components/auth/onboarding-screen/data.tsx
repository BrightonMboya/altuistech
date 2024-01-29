import { ImageProps } from "react-native";

export interface OnboardingData {
  id: number;
  image: ImageProps | any;
  text: string;
  textColor: string;
  caption: string;
  backgroundColor: string;
}

const data: OnboardingData[] = [
  {
    id: 1,
    image: require("../../../../assets/imgs/onboarding/onboarding-1.png"),
    text: "Altruishealth is Your Toolkit for Well-being",
    caption:
      "Find videos, articles, and games to learn, cope, and thrive. We've got resources for different mental health topics like depression, anxiety, and more.",
    textColor: "#f8dac2",
    backgroundColor: "#fffbf9",
  },
  {
    id: 2,
    image: require("../../../../assets/imgs/onboarding/onboarding-2.png"),
    text: "Talk to a Therapist Anytime",
    caption:
      "Get confidential support from licensed therapists directly on the app. Book appointments, chat, or video call whenever you need help.",
    textColor: "#154f40",
    backgroundColor: "#fffbf9",
  },

  {
    id: 3,
    image: require("../../../../assets/imgs/onboarding/onboarding-3.png"),
    text: "Connect and Share with Others",
    caption:
      "Join (or create) groups where you can safely share your experiences, learn from others, and offer support. You're not alone.",
    textColor: "black",
    backgroundColor: "#fffbf9",
  },
  {
    id: 4,
    image: require("../../../../assets/imgs/onboarding/onboarding-4.png"),
    text: "Check Your Mental Health",
    caption:
      "Take accurate tests for depression, anxiety, PTSD, and other mental health concerns. Get personalized recommendations to use the app's solutions effectively.",
    textColor: "black",
    backgroundColor: "#fffbf9",
  },
];

export default data;
