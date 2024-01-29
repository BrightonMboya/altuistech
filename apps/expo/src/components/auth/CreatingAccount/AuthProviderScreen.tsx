import { ScrollView, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import Svg, { ClipPath, Defs, Path } from "react-native-svg";
import Rect from "react-native-svg";
import G from "react-native-svg";
import LinearGradient from "react-native-svg";
import Stop from "react-native-svg";

import H1 from "~/components/ui/Heading";
import P from "~/components/ui/Text";

export default function CreateAccountScreen() {
  return (
    <SafeAreaProvider>
      <SafeAreaView className="flex min-h-screen flex-col items-center bg-blue">
        <ScrollView className="w-[80%]">
          <H1 styling="text-white text-xl pt-[60px]">Create an Account</H1>

          <View className="gap-5 pt-10">
            <View className="flex w-[90%] flex-row items-center justify-center rounded-md border-[1px] border-white py-[8px] ">
              <Svg width="21" height="20" viewBox="0 0 21 20" fill="none">
                <G clip-path="url(#clip0_415_6651)">
                  <Path
                    d="M10.5 13.75C9.8543 13.75 9.20859 13.5382 8.65781 13.109L0.5 6.76562V15.625C0.5 16.6602 1.33945 17.5 2.375 17.5H18.625C19.6605 17.5 20.5 16.6605 20.5 15.625V6.76562L12.3438 13.1133C11.793 13.5391 11.1445 13.75 10.5 13.75ZM1.13633 5.67578L9.42539 12.125C10.0578 12.6172 10.9437 12.6172 11.5762 12.125L19.8652 5.67578C20.2305 5.36328 20.5 4.88281 20.5 4.375C20.5 3.33945 19.6602 2.5 18.625 2.5H2.375C1.33945 2.5 0.5 3.33945 0.5 4.375C0.5 4.88281 0.734766 5.36328 1.13633 5.67578Z"
                    fill="white"
                  />
                </G>
                <Defs>
                  <ClipPath id="clip0_415_6651">
                    <Rect
                      width="20"
                      height="20"
                      fill="white"
                      // transform="translate(0.5)"
                    />
                  </ClipPath>
                </Defs>
              </Svg>
              <H1 styling="text-white text-lg pl-5">Continue With Email</H1>
            </View>

            <View className="flex w-[90%] flex-row items-center justify-center rounded-md border-[1px] border-white py-[8px] ">
              <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <Path
                  d="M17.6855 12.9187C17.6592 10.2805 19.8368 9.01518 19.9342 8.95126C18.7103 7.16183 16.8037 6.9163 16.125 6.88836C14.5037 6.72368 12.9598 7.8434 12.1373 7.8434C11.3164 7.8434 10.0456 6.91249 8.70106 6.9362C6.93238 6.96244 5.30213 7.9649 4.39196 9.54816C2.55512 12.7346 3.92206 17.4569 5.71191 20.043C6.58694 21.3071 7.63046 22.7295 8.99951 22.6774C10.319 22.6253 10.8169 21.824 12.412 21.824C14.0071 21.824 14.455 22.6774 15.8507 22.6507C17.2697 22.6249 18.1693 21.3625 19.0372 20.0934C20.0417 18.6248 20.4553 17.2029 20.4799 17.1309C20.449 17.1165 17.7138 16.0688 17.6855 12.9187Z"
                  fill="white"
                />
                <Path
                  d="M15.0629 5.17684C15.7889 4.29546 16.2808 3.07076 16.147 1.85156C15.0993 1.8939 13.831 2.54794 13.0787 3.42848C12.4048 4.20995 11.8155 5.45412 11.9734 6.65131C13.1422 6.7419 14.3343 6.05653 15.0629 5.17684Z"
                  fill="white"
                />
              </Svg>
              <H1 styling="text-white text-lg pl-5">Continue With Apple</H1>
            </View>

            <View className="flex w-[90%] flex-row items-center justify-center rounded-md border-[1px] border-white py-[8px] ">
              <Svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <G clip-path="url(#clip0_415_6661)">
                  <Path
                    d="M9.99995 4.16667C11.3472 4.16667 12.5843 4.62794 13.5719 5.39505L16.6028 2.50341C14.8406 0.949961 12.5338 0 9.99995 0C6.16028 0 2.83051 2.1666 1.15479 5.34154L4.52515 8.00232C5.34159 5.76614 7.48118 4.16667 9.99995 4.16667Z"
                    fill="#F44336"
                  />
                  <Path
                    d="M19.9134 11.2516C19.9655 10.8419 20 10.424 20 10.0001C20 9.28521 19.9219 8.5891 19.7794 7.91675H10V12.0834H15.4052C14.9679 13.2199 14.1894 14.1815 13.1983 14.8496L16.5812 17.5203C18.3745 15.9463 19.6016 13.742 19.9134 11.2516Z"
                    fill="#2196F3"
                  />
                  <Path
                    d="M4.16667 10C4.16667 9.29714 4.29738 8.62636 4.5252 8.00233L1.15484 5.34155C0.420278 6.73336 0 8.31681 0 10C0 11.6644 0.412547 13.2303 1.13185 14.6108L4.50648 11.9466C4.29036 11.337 4.16667 10.6837 4.16667 10Z"
                    fill="#FFC107"
                  />
                  <Path
                    d="M9.99999 15.8333C7.46205 15.8333 5.30867 14.2095 4.50647 11.9465L1.13184 14.6107C2.79937 17.8111 6.1415 19.9999 9.99999 19.9999C12.5231 19.9999 14.824 19.0626 16.5812 17.5202L13.1983 14.8495C12.2843 15.4657 11.1903 15.8333 9.99999 15.8333Z"
                    fill="#00B060"
                  />
                  <Path
                    opacity="0.1"
                    d="M9.99993 19.7917C7.05686 19.7917 4.41053 18.5774 2.53955 16.6428C4.37106 18.6982 7.03031 20.0001 9.99993 20.0001C12.9421 20.0001 15.5793 18.7239 17.4067 16.7007C15.5413 18.6039 12.915 19.7917 9.99993 19.7917Z"
                    fill="white"
                  />
                  <Path
                    opacity="0.1"
                    d="M10 11.875V12.0833H15.4052L15.4896 11.875H10Z"
                    fill="white"
                  />
                  <Path
                    d="M19.9954 10.1226C19.9961 10.0816 20 10.0413 20 10.0001C20 9.98846 19.9982 9.97722 19.9982 9.96558C19.9976 10.0181 19.995 10.0699 19.9954 10.1226Z"
                    fill="#E6E6E6"
                  />
                  <Path
                    opacity="0.2"
                    d="M10 7.91675V8.12508H19.8213C19.8082 8.05632 19.7939 7.98501 19.7794 7.91675H10Z"
                    fill="white"
                  />
                  <Path
                    d="M19.7794 7.91667H10V12.0833H15.4052C14.5646 14.268 12.481 15.8333 10 15.8333C6.77836 15.8333 4.16667 13.2216 4.16667 10C4.16667 6.77831 6.77836 4.16667 10 4.16667C11.1682 4.16667 12.2449 4.52555 13.1571 5.11724C13.2967 5.20798 13.4408 5.29317 13.5719 5.39505L16.6029 2.50341L16.5345 2.45082C14.7808 0.930888 12.5029 0 10 0C4.47713 0 0 4.47713 0 10C0 15.5228 4.47713 20 10 20C15.0981 20 19.2962 16.1823 19.9134 11.2515C19.9655 10.8418 20 10.4239 20 10C20 9.28513 19.9219 8.58902 19.7794 7.91667Z"
                    fill="url(#paint0_linear_415_6661)"
                  />
                  <Path
                    opacity="0.1"
                    d="M13.1572 4.90892C12.245 4.31723 11.1683 3.95834 10.0001 3.95834C6.77844 3.95834 4.16675 6.56999 4.16675 9.79168C4.16675 9.82682 4.16722 9.85429 4.16783 9.88933C4.22403 6.71627 6.81359 4.16668 10.0001 4.16668C11.1683 4.16668 12.245 4.52556 13.1572 5.11725C13.2968 5.20799 13.4408 5.29318 13.572 5.39506L16.603 2.50342L13.572 5.18673C13.4408 5.08485 13.2968 4.99965 13.1572 4.90892Z"
                    fill="white"
                  />
                  <Path
                    opacity="0.2"
                    d="M10 0.208333C12.4792 0.208333 14.7358 1.12366 16.4827 2.618L16.6029 2.50341L16.5112 2.42356C14.7575 0.903633 12.5029 0 10 0C4.47713 0 0 4.47713 0 10C0 10.0351 0.00488283 10.0691 0.00523883 10.1042C0.0616963 4.62987 4.51228 0.208333 10 0.208333Z"
                    fill="white"
                  />
                </G>
                <Defs>
                  <LinearGradient id="paint0_linear_415_6661">
                    <Stop stop-color="white" stop-opacity="0.2" />
                    <Stop stop-color="white" stop-opacity="0" />
                  </LinearGradient>
                  <ClipPath id="clip0_415_6661">
                    <Rect width="20" height="20" fill="white" />
                  </ClipPath>
                </Defs>
              </Svg>
              <H1 styling="text-white text-lg pl-5">Continue With Google</H1>
            </View>

            <View className="flex w-[90%] flex-row items-center justify-center rounded-md border-[1px] border-white py-[8px] ">
              <Svg width="21" height="20" viewBox="0 0 21 20" fill="none">
                <G clip-path="url(#clip0_415_6676)">
                  <Path
                    d="M20.9167 10C20.9167 4.47715 16.4396 0 10.9167 0C5.3939 0 0.916748 4.47715 0.916748 10C0.916748 14.9913 4.57362 19.1283 9.35425 19.8785V12.8906H6.81519V10H9.35425V7.79688C9.35425 5.29063 10.8472 3.90625 13.1314 3.90625C14.2255 3.90625 15.3699 4.10156 15.3699 4.10156V6.5625H14.1089C12.8667 6.5625 12.4792 7.33332 12.4792 8.12414V10H15.2527L14.8093 12.8906H12.4792V19.8785C17.2599 19.1283 20.9167 14.9913 20.9167 10Z"
                    fill="#1877F2"
                  />
                  <Path
                    d="M14.8093 12.8906L15.2527 10H12.4792V8.12414C12.4792 7.33332 12.8666 6.5625 14.1089 6.5625H15.3699V4.10156C15.3699 4.10156 14.2255 3.90625 13.1314 3.90625C10.8472 3.90625 9.35425 5.29063 9.35425 7.79688V10H6.81519V12.8906H9.35425V19.8785C9.86335 19.9584 10.3852 20 10.9167 20C11.4483 20 11.9701 19.9584 12.4792 19.8785V12.8906H14.8093Z"
                    fill="white"
                  />
                </G>
                <Defs>
                  <ClipPath id="clip0_415_6676">
                    <Rect width="20" height="20" fill="white" />
                  </ClipPath>
                </Defs>
              </Svg>
              <H1 styling="text-white text-lg pl-5">Continue With Facebook</H1>
            </View>
          </View>

          <P style="text-white pt-[40px] text-base">
            By continuing, you agree to our Terms and Conditions and Privacy
            Policy.
          </P>
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
