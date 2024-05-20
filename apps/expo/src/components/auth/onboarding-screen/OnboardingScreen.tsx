import React, { type Dispatch, type SetStateAction } from "react";
import { FlatList, StyleSheet, TouchableOpacity, View, ViewToken } from "react-native";
import Animated, { useAnimatedRef, useAnimatedScrollHandler, useSharedValue } from "react-native-reanimated";
import Svg, { Path } from "react-native-svg";



import Pagination from "~/components/auth/onboarding-screen/Pagination";
import RenderItem from "~/components/auth/onboarding-screen/RenderItem";
import data, { OnboardingData } from "~/components/auth/onboarding-screen/data";
import H1 from "~/components/ui/Heading";


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
          <TouchableOpacity
            className="mt-10 flex h-12 w-[350px] flex-row items-center justify-center rounded-md border-2 border-solid border-[#1960F2]"
            onPress={() => {
              setShowOnboarding(false);
            }}
          >
            <Svg width={24} height={24} viewBox="0 0 25 24" fill="none">
              <Path
                fill="#4280EF"
                d="M18.822 10.215c0-.608-.059-1.236-.157-1.824h-8.491v3.471h4.863a4.092 4.092 0 0 1-1.804 2.726l2.902 2.255c1.707-1.588 2.687-3.902 2.687-6.628Z"
              />
              <Path
                fill="#34A353"
                d="M10.174 19.002c2.432 0 4.471-.804 5.962-2.177l-2.903-2.236c-.804.55-1.843.863-3.059.863-2.353 0-4.334-1.588-5.06-3.706l-2.98 2.294a8.992 8.992 0 0 0 8.04 4.962Z"
              />
              <Path
                fill="#F6B704"
                d="M5.115 11.726a5.468 5.468 0 0 1 0-3.452L2.134 5.96a9.013 9.013 0 0 0 0 8.08l2.98-2.314Z"
              />
              <Path
                fill="#E54335"
                d="M10.174 4.568a4.91 4.91 0 0 1 3.452 1.353l2.569-2.589A8.663 8.663 0 0 0 10.175 1 8.992 8.992 0 0 0 2.133 5.96l2.98 2.314c.726-2.138 2.707-3.706 5.06-3.706Z"
              />
            </Svg>

            <H1 styling="text-lg tracking-wide text-[#1960F2]  text-center pl-2">
              Sign Up with Google
            </H1>
          </TouchableOpacity>
          <TouchableOpacity
            className="mt-5 flex h-12 w-[350px] flex-row items-center justify-center rounded-md bg-[#1960F2]"
            onPress={() => {
              setShowOnboarding(false);
              setSignWithEmail(true);
              setShowLogin(false);
            }}
          >
            <Svg width={24} height={24} viewBox="0 0 25 24" fill="none">
              <Path
                d="M17.5 3.5H7.5C4.5 3.5 2.5 5 2.5 8.5V15.5C2.5 19 4.5 20.5 7.5 20.5H17.5C20.5 20.5 22.5 19 22.5 15.5V8.5C22.5 5 20.5 3.5 17.5 3.5ZM17.97 9.59L14.84 12.09C14.18 12.62 13.34 12.88 12.5 12.88C11.66 12.88 10.81 12.62 10.16 12.09L7.03 9.59C6.71 9.33 6.66 8.85 6.91 8.53C7.17 8.21 7.64 8.15 7.96 8.41L11.09 10.91C11.85 11.52 13.14 11.52 13.9 10.91L17.03 8.41C17.35 8.15 17.83 8.2 18.08 8.53C18.34 8.85 18.29 9.33 17.97 9.59Z"
                fill="white"
              />
            </Svg>
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