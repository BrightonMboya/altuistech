import { useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

import HomeScreen from "../components/home/HomePage";
import Screen1 from "~/components/onboarding-screens/Screen1";
async function storeOnboardedFlag() {
  try {
    const res = await AsyncStorage.setItem("onboarded", "true");
    return res;
  } catch (e) {
    console.log(e);
  }
}

async function getOnboardedFlag() {
  try {
    return await AsyncStorage.getItem("onboarded");
  } catch (e) {
    console.log(e);
  }
}

export default function Page() {
  const [onboardedFlag, setOnboardedFlag] = useState("");
  // const data = storeOnboardedFlag().then((res) => {
  //   console.log(res, "reees");
  //   // setOnboardedFlag(res);
  // });
  // console.log(onboardedFlag);
  const onboarded = getOnboardedFlag().then((res) => {
    setOnboardedFlag(res!);
    // return res;
  });

  return (
    <>{onboardedFlag != "true" ? <HomeScreen /> : <Screen1 />}</>
  );
}
