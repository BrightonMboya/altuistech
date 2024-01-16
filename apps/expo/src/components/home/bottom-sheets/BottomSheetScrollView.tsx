import React, {
  forwardRef,
  useCallback,
  useImperativeHandle,
  useState,
} from "react";
import { Dimensions, ScrollView, StyleSheet, View } from "react-native";
import { Gesture, GestureDetector } from "react-native-gesture-handler";
import Animated, {
  AnimatedScrollViewProps,
  runOnJS,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
} from "react-native-reanimated";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import BackDrop from "./BackDrop";

interface Props extends AnimatedScrollViewProps {
  snapTo: string;
  backgroundColor: string;
  backDropColor: string;
}

export interface BottomSheetMethods {
  expand: () => void;
  close: () => void;
}

const BottomSheetScrollView = forwardRef<BottomSheetMethods, Props>(
  (
    { snapTo, children, backgroundColor, backDropColor, ...rest }: Props,
    ref,
  ) => {
    const inset = useSafeAreaInsets();
    const { height } = Dimensions.get("screen");
    const percentage = parseFloat(snapTo.replace("%", "")) / 100;
    const closeHeight = height;
    const openHeight = height - height * percentage;
    const topAnimation = useSharedValue(closeHeight);
    const context = useSharedValue(0);
    const scrollBegin = useSharedValue(0);
    const scrollY = useSharedValue(0);
    const [enableScroll, setEnableScroll] = useState(true);

    const expand = useCallback(() => {
      "worklet";
      topAnimation.value = withTiming(openHeight);
    }, [openHeight, topAnimation]);

    const close = useCallback(() => {
      "worklet";
      topAnimation.value = withTiming(closeHeight);
    }, [closeHeight, topAnimation]);

    useImperativeHandle(
      ref,
      () => ({
        expand,
        close,
      }),
      [expand, close],
    );

    const animationStyle = useAnimatedStyle(() => {
      const top = topAnimation.value;
      return {
        top,
      };
    });

    const pan = Gesture.Pan()
      .onBegin(() => {
        context.value = topAnimation.value;
      })
      .onUpdate((event) => {
        if (event.translationY < 0) {
          topAnimation.value = withSpring(openHeight, {
            damping: 100,
            stiffness: 400,
          });
        } else {
          topAnimation.value = withSpring(context.value + event.translationY, {
            damping: 100,
            stiffness: 400,
          });
        }
      })
      .onEnd(() => {
        if (topAnimation.value > openHeight + 50) {
          topAnimation.value = withSpring(closeHeight, {
            damping: 100,
            stiffness: 400,
          });
        } else {
          topAnimation.value = withSpring(openHeight, {
            damping: 100,
            stiffness: 400,
          });
        }
      });

    const onScroll = useAnimatedScrollHandler({
      onBeginDrag: (event) => {
        scrollBegin.value = event.contentOffset.y;
      },
      onScroll: (event) => {
        scrollY.value = event.contentOffset.y;
      },
    });

    const panScroll = Gesture.Pan()
      .onBegin(() => {
        context.value = topAnimation.value;
      })
      .onUpdate((event) => {
        if (event.translationY < 0) {
          topAnimation.value = withSpring(openHeight, {
            damping: 100,
            stiffness: 400,
          });
        } else if (event.translationY > 0 && scrollY.value === 0) {
          runOnJS(setEnableScroll)(false);
          topAnimation.value = withSpring(
            Math.max(
              context.value + event.translationY - scrollBegin.value,
              openHeight,
            ),
            {
              damping: 100,
              stiffness: 400,
            },
          );
        }
      })
      .onEnd(() => {
        runOnJS(setEnableScroll)(true);
        if (topAnimation.value > openHeight + 50) {
          topAnimation.value = withSpring(closeHeight, {
            damping: 100,
            stiffness: 400,
          });
        } else {
          topAnimation.value = withSpring(openHeight, {
            damping: 100,
            stiffness: 400,
          });
        }
      });

    const scrollViewGesture = Gesture.Native();

    return (
      <>
        <BackDrop
          topAnimation={topAnimation}
          backDropColor={backDropColor}
          closeHeight={closeHeight}
          openHeight={openHeight}
          close={close}
        />
        <GestureDetector gesture={pan}>
          <Animated.View
            style={[
              styles.container,
              animationStyle,
              {
                backgroundColor: backgroundColor,
                paddingBottom: inset.bottom,
              },
            ]}
          >
            <ScrollView className="relative">
              <View style={styles.lineContainer}>
                <View className="absolute h-[5px] w-[124px] bg-white top-2 z-[100]" />
              </View>
              <View className="absolute h-[170px] w-full rounded-t-[20px] bg-blue"/>
              <View className="absolute h-[5px] w-[150px] bg-[#6D9DFF] top-3 z-[100] left-[33%] rounded-md" />
              <GestureDetector
                gesture={Gesture.Simultaneous(scrollViewGesture, panScroll)}
              >
                <Animated.ScrollView
                  {...rest}
                  scrollEnabled={enableScroll}
                  bounces={false}
                  scrollEventThrottle={16}
                  onScroll={onScroll}
                >
                  {children}
                </Animated.ScrollView>
              </GestureDetector>
            </ScrollView>
          </Animated.View>
        </GestureDetector>
      </>
    );
  },
);

export default BottomSheetScrollView;

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  lineContainer: {
    marginVertical: 10,
    alignItems: "center",
  },
  line: {
    width: 124,
    height: 6,
    backgroundColor: "#6D9DFF",
    borderRadius: 20,
  },
});
