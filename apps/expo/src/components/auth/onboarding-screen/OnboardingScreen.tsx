import React, { type Dispatch, type SetStateAction } from "react";
import {
  FlatList,
  StyleSheet,
  TouchableOpacity,
  View,
  ViewToken,
} from "react-native";
import Animated, {
  useAnimatedRef,
  useAnimatedScrollHandler,
  useSharedValue,
} from "react-native-reanimated";

import Pagination from "~/components/auth/onboarding-screen/Pagination";
import RenderItem from "~/components/auth/onboarding-screen/RenderItem";
import data, { OnboardingData } from "~/components/auth/onboarding-screen/data";
import H1 from "~/components/ui/Heading";
import { IconGoogle, MailIcon } from "~/components/ui/icons";
import SignUpWithGoogle from "./Sign-up-with-google";

export interface AuthScreenProps {
  setShowOnboarding: Dispatch<SetStateAction<boolean>>;
  setShowLogin: Dispatch<SetStateAction<boolean>>;
  setSignWithEmail: Dispatch<SetStateAction<boolean>>;
}

const OnboardingScreen = ({
  setShowOnboarding,
  setShowLogin,
  setSignWithEmail,
}: AuthScreenProps) => {
  const flatListRef = useAnimatedRef<FlatList<OnboardingData>>();
  const x = useSharedValue(0);
  const flatListIndex = useSharedValue(0);

  const onViewableItemsChanged = ({
    viewableItems,
  }: {
    viewableItems: ViewToken[];
  }) => {
    if (viewableItems[0]?.index !== null) {
      // @ts-expect-error  coz i know for a fact its not undefined
      flatListIndex.value = viewableItems[0]?.index;
    }
  };

  const onScroll = useAnimatedScrollHandler({
    onScroll: (event) => {
      x.value = event.contentOffset.x;
    },
  });
  return (
    <View className="h-screen bg-[#fffbf9]">
      <View style={styles.container} className={`relative mt-5  `}>
        <Animated.FlatList
          ref={flatListRef}
          onScroll={onScroll}
          data={data}
          renderItem={({ item, index }) => {
            return (
              <RenderItem
                item={item}
                index={index}
                x={x}
                setShowOnboarding={setShowOnboarding}
                setShowLogin={setShowLogin}
              />
            );
          }}
          keyExtractor={(item) => item.id}
          scrollEventThrottle={16}
          horizontal={true}
          bounces={false}
          pagingEnabled={true}
          showsHorizontalScrollIndicator={false}
          onViewableItemsChanged={onViewableItemsChanged}
          viewabilityConfig={{
            minimumViewTime: 300,
            viewAreaCoveragePercentThreshold: 10,
          }}
          contentContainerStyle={{
            paddingTop: 30,
            marginTop: 10,
          }}
        />
        <View
          className=""
          style={{
            alignItems: "center",
          }}
        >
         {/* <SignUpWithGoogle/> */}
          <TouchableOpacity
            className="mt-5 flex h-12 w-[350px] flex-row items-center justify-center rounded-md bg-[#1960F2]"
            onPress={() => {
              setShowOnboarding(false);
              setSignWithEmail(true);
              setShowLogin(false);
            }}
          >
            <MailIcon />
            <H1 styling="text-lg tracking-wide text-white  text-center pl-3">
              Sign Up with Email
            </H1>
          </TouchableOpacity>

          <View className="flex flex-row items-center space-x-3 pt-5">
            <H1 styling="text-[14px] ">Already have an account?</H1>
            <TouchableOpacity
              onPress={() => {
                setShowLogin(true);
                setShowOnboarding(false);
              }}
            >
              <H1 styling="text-[14px] text-blue">Log In</H1>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.bottomContainer}>
          <Pagination data={data} x={x} />
        </View>
      </View>
    </View>
  );
};

export default OnboardingScreen;

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // marginTop: 10
  },
  bottomContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginHorizontal: 30,
    paddingVertical: 30,
    position: "absolute",
    top: 10,
    left: 0,
    right: 0,
  },
});
