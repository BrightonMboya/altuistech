import { ImageProps } from "react-native";





export interface OnboardingData {
  id: number;
  image: ImageProps | any;
  text: Array<{
    id: number;
    word: string;
    type: "normal" | "accent";
  }>;
  textColor: string;
  caption: string;
  backgroundColor: string;
}

const data: OnboardingData[] = [
  {
    id: 1,
    image: require("../../../../assets/imgs/onboarding/onboarding-1.png"),
    text: [
      {
        id: 1,
        word: "Emotions is your ",
        type: "normal",
      },
      {
        id: 2,
        word: "Toolkit ",
        type: "accent",
      },
      {
        id: 3,
        word: "for ",
        type: "normal",
      },
      {
        id: 4,
        word: "Well-being.",
        type: "accent",
      },
    ],

    caption:
      "Find videos, articles, and games to learn, cope, and thrive. We've got resources for different mental health topics like depression, anxiety, and more.",
    textColor: "#f8dac2",
    backgroundColor: "#fffbf9",
  },
  {
    id: 2,
    image: require("../../../../assets/imgs/onboarding/onboarding-2.png"),
    text: [
      {
        id: 1,
        word: "Talk to a ",
        type: "normal",
      },
      {
        id: 2,
        word: "Therapist ",
        type: "accent",
      },
      {
        id: 3,
        word: "Anytime ",
        type: "normal",
      },
    ],
    caption:
      "Get confidential support from licensed therapists directly on the app. Book appointments, chat, or video call whenever you need help.",
    textColor: "#154f40",
    backgroundColor: "#fffbf9",
  },

  {
    id: 3,
    image: require("../../../../assets/imgs/onboarding/onboarding-3.png"),
    text: [
      {
        id: 1,
        word: "Connect ",
        type: "accent",
      },
      {
        id: 2,
        word: "and ",
        type: "normal",
      },
      {
        id: 3,
        word: "Share ",
        type: "accent",
      },
      {
        id: 4,
        word: "with Others",
        type: "normal",
      },
    ],
    caption:
      "Join (or create) groups where you can safely share your experiences, learn from others, and offer support. You're not alone.",
    textColor: "black",
    backgroundColor: "#fffbf9",
  },
  {
    id: 4,
    image: require("../../../../assets/imgs/onboarding/onboarding-4.png"),
    text: [
      {
        id: 1,
        word: "Check Your ",
        type: "normal",
      },
      {
        id: 2,
        word: "Mental Health",
        type: "accent",
      },
    ],
    caption:
      "Take accurate tests for depression, anxiety, PTSD, and other mental health concerns. Get personalized recommendations to use the app's solutions effectively.",
    textColor: "black",
    backgroundColor: "#fffbf9",
  },
];

export default data;