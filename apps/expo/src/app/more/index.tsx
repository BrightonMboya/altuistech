import { Pressable, ScrollView, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import Svg, { Path } from "react-native-svg";
import { Stack, useRouter } from "expo-router";
import { useUser } from "@clerk/clerk-expo";

import H1 from "~/components/ui/Heading";
import P from "~/components/ui/Text";

export default function Page() {
  const { user } = useUser();
  const router = useRouter();
  return (
    <SafeAreaProvider>
      <SafeAreaView className="min-h-screen bg-white pl-5">
        <Stack.Screen
          options={{
            headerShown: false,
          }}
        />
        <ScrollView>
          <H1 styling="text-xl">My Account</H1>
          <P style="text-lg pt-1 text-[#505050]">{user?.username}</P>

          <P style="text-lg  mt-5 uppercase tracking-wider text-[#505050]">
            account
          </P>

          <View className="mt-2 flex  w-[80%] flex-col rounded-md border-2 border-[#f9f9f9] bg-[#f9f9f9] p-5">
            <Pressable onPress={() => router.push("/more/profile")}>
              <View className="flex flex-row items-center ">
                <Svg width="16" height="17" viewBox="0 0 16 17" fill="none">
                  <Path
                    d="M8 8.50016C9.84095 8.50016 11.3333 7.00778 11.3333 5.16683C11.3333 3.32588 9.84095 1.8335 8 1.8335C6.15905 1.8335 4.66667 3.32588 4.66667 5.16683C4.66667 7.00778 6.15905 8.50016 8 8.50016Z"
                    fill="#1960F2"
                  />
                  <Path
                    d="M8 10.1665C4.66 10.1665 1.94 12.4065 1.94 15.1665C1.94 15.3532 2.08667 15.4998 2.27333 15.4998H13.7267C13.9133 15.4998 14.06 15.3532 14.06 15.1665C14.06 12.4065 11.34 10.1665 8 10.1665Z"
                    fill="#1960F2"
                  />
                </Svg>

                <P style="text-[#505050] text-lg pl-[12px]">Your Profile</P>
              </View>
            </Pressable>

            <View className="mt-3 flex flex-row items-center">
              <Svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <Path
                  d="M13.1933 2.81338C11.22 0.846712 8.02 0.846712 6.06 2.81338C4.68 4.18005 4.26667 6.14671 4.8 7.88005L1.66667 11.0134C1.44667 11.24 1.29333 11.6867 1.34 12.0067L1.54 13.46C1.61333 13.94 2.06 14.3934 2.54 14.46L3.99333 14.66C4.31333 14.7067 4.76 14.56 4.98667 14.3267L5.53333 13.78C5.66667 13.6534 5.66667 13.44 5.53333 13.3067L4.24 12.0134C4.04667 11.82 4.04667 11.5 4.24 11.3067C4.43333 11.1134 4.75333 11.1134 4.94667 11.3067L6.24667 12.6067C6.37333 12.7334 6.58667 12.7334 6.71333 12.6067L8.12667 11.2C9.85333 11.74 11.82 11.32 13.1933 9.95338C15.16 7.98671 15.16 4.78005 13.1933 2.81338ZM9.66667 8.00005C8.74667 8.00005 8 7.25338 8 6.33338C8 5.41338 8.74667 4.66671 9.66667 4.66671C10.5867 4.66671 11.3333 5.41338 11.3333 6.33338C11.3333 7.25338 10.5867 8.00005 9.66667 8.00005Z"
                  fill="#1960F2"
                />
              </Svg>

              <P style="text-[#505050] text-lg pl-[12px]">Change Password</P>
            </View>

            <View className="mt-3 flex flex-row items-center">
              <Svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <Path
                  d="M11.8733 3.66016V4.1535L9.51333 2.78683C8.62 2.2735 7.37333 2.2735 6.48667 2.78683L4.12667 4.16016V3.66016C4.12667 2.16016 4.94667 1.3335 6.44667 1.3335H9.55333C11.0533 1.3335 11.8733 2.16016 11.8733 3.66016Z"
                  fill="#1960F2"
                />
                <Path
                  d="M11.8933 5.31349L11.8 5.26682L10.8933 4.74682L9.01333 3.66016C8.44 3.32682 7.56 3.32682 6.98667 3.66016L5.10667 4.74016L4.2 5.27349L4.08 5.33349C2.91333 6.12016 2.83333 6.26682 2.83333 7.52682V10.5402C2.83333 11.8002 2.91333 11.9468 4.10667 12.7535L6.98667 14.4135C7.27333 14.5868 7.63333 14.6602 8 14.6602C8.36 14.6602 8.72667 14.5802 9.01333 14.4135L11.92 12.7335C13.0933 11.9468 13.1667 11.8068 13.1667 10.5402V7.52682C13.1667 6.26682 13.0867 6.12016 11.8933 5.31349ZM9.86 9.00016L9.45333 9.50016C9.38667 9.57349 9.34 9.71349 9.34667 9.81349L9.38667 10.4535C9.41333 10.8468 9.13333 11.0468 8.76667 10.9068L8.17333 10.6668C8.08 10.6335 7.92667 10.6335 7.83333 10.6668L7.24 10.9002C6.87333 11.0468 6.59333 10.8402 6.62 10.4468L6.66 9.80682C6.66667 9.70682 6.62 9.56682 6.55333 9.49349L6.14 9.00016C5.88667 8.70016 6 8.36682 6.38 8.26682L7 8.10682C7.1 8.08016 7.21333 7.98682 7.26667 7.90682L7.61333 7.37349C7.82667 7.04016 8.16667 7.04016 8.38667 7.37349L8.73333 7.90682C8.78667 7.99349 8.90667 8.08016 9 8.10682L9.62 8.26682C10 8.36682 10.1133 8.70016 9.86 9.00016Z"
                  fill="#1960F2"
                />
              </Svg>

              <P style="text-[#505050] text-lg pl-[12px]">Leaderboard</P>
            </View>
          </View>

          <P style="text-lg  mt-10 uppercase tracking-wider text-[#505050]">
            consultation
          </P>
          <View className="mt-2 flex  w-[80%] flex-col rounded-md border-2 border-[#f9f9f9] bg-[#f9f9f9] p-5">
            {/* <View className="flex flex-row items-center ">
              <Svg width="16" height="17" viewBox="0 0 16 17" fill="none">
                <Path
                  d="M11.5933 10.9467L8.9 8.5H7.09333L4.4 10.9467C3.64666 11.6267 3.4 12.6733 3.76666 13.62C4.13333 14.56 5.02666 15.1667 6.03333 15.1667H9.96C10.9733 15.1667 11.86 14.56 12.2267 13.62C12.5933 12.6733 12.3467 11.6267 11.5933 10.9467ZM9.21333 12.5933H6.78666C6.53333 12.5933 6.33333 12.3867 6.33333 12.14C6.33333 11.8933 6.54 11.6867 6.78666 11.6867H9.21333C9.46666 11.6867 9.66666 11.8933 9.66666 12.14C9.66666 12.3867 9.46 12.5933 9.21333 12.5933Z"
                  fill="#1960F2"
                />
                <Path
                  d="M12.2333 3.38016C11.8667 2.44016 10.9733 1.8335 9.96667 1.8335H6.03333C5.02667 1.8335 4.13333 2.44016 3.76667 3.38016C3.40667 4.32683 3.65333 5.3735 4.40667 6.0535L7.1 8.50016H8.90667L11.6 6.0535C12.3467 5.3735 12.5933 4.32683 12.2333 3.38016ZM9.21333 5.32016H6.78667C6.53333 5.32016 6.33333 5.1135 6.33333 4.86683C6.33333 4.62016 6.54 4.4135 6.78667 4.4135H9.21333C9.46667 4.4135 9.66667 4.62016 9.66667 4.86683C9.66667 5.1135 9.46 5.32016 9.21333 5.32016Z"
                  fill="#1960F2"
                />
              </Svg>

              <P style="text-[#505050] text-lg pl-[12px]">
                Upcoming Consultations
              </P>
            </View> */}

            <Pressable
              onPress={() => router.push("/sessions/available-proffesionals")}
            >
              <View className=" flex flex-row items-center">
                <Svg width="16" height="17" viewBox="0 0 16 17" fill="none">
                  <Path
                    d="M8 8.50016C9.84095 8.50016 11.3333 7.00778 11.3333 5.16683C11.3333 3.32588 9.84095 1.8335 8 1.8335C6.15905 1.8335 4.66667 3.32588 4.66667 5.16683C4.66667 7.00778 6.15905 8.50016 8 8.50016Z"
                    fill="#1960F2"
                  />
                  <Path
                    d="M8 10.1665C4.66 10.1665 1.94 12.4065 1.94 15.1665C1.94 15.3532 2.08667 15.4998 2.27333 15.4998H13.7267C13.9133 15.4998 14.06 15.3532 14.06 15.1665C14.06 12.4065 11.34 10.1665 8 10.1665Z"
                    fill="#1960F2"
                  />
                </Svg>

                <P style="text-[#505050] text-lg pl-[12px]">
                  Available Proffesionals
                </P>
              </View>
            </Pressable>
          </View>

          <P style="text-lg  mt-10 uppercase tracking-wider text-[#505050]">
            others
          </P>
          <View className="mt-2 flex  w-[80%] flex-col rounded-md border-2 border-[#f9f9f9] bg-[#f9f9f9] p-5">
            <Pressable onPress={() => router.push("/more/pricing")}>
              <View className="flex flex-row items-center ">
                <Svg width="16" height="17" viewBox="0 0 16 17" fill="none">
                  <Path
                    d="M13.22 6.30003L10.2 3.28003C9.56667 2.6467 8.69333 2.3067 7.8 2.35337L4.46667 2.51337C3.13333 2.57337 2.07333 3.63337 2.00667 4.96003L1.84667 8.29337C1.80667 9.1867 2.14 10.06 2.77333 10.6934L5.79333 13.7134C7.03333 14.9534 9.04667 14.9534 10.2933 13.7134L13.22 10.7867C14.4667 9.55337 14.4667 7.54003 13.22 6.30003ZM6.33333 8.75337C5.28 8.75337 4.41333 7.89337 4.41333 6.83337C4.41333 5.77337 5.28 4.91337 6.33333 4.91337C7.38667 4.91337 8.25333 5.77337 8.25333 6.83337C8.25333 7.89337 7.38667 8.75337 6.33333 8.75337ZM11.6867 9.52003L9.02 12.1867C8.92 12.2867 8.79333 12.3334 8.66667 12.3334C8.54 12.3334 8.41333 12.2867 8.31333 12.1867C8.12 11.9934 8.12 11.6734 8.31333 11.48L10.98 8.81337C11.1733 8.62003 11.4933 8.62003 11.6867 8.81337C11.88 9.0067 11.88 9.3267 11.6867 9.52003Z"
                    fill="#1960F2"
                  />
                </Svg>

                <P style="text-[#505050] text-lg pl-[12px]">Pricing</P>
              </View>
            </Pressable>

            <View className="mt-3 flex flex-row items-center">
              <Svg width="16" height="17" viewBox="0 0 16 17" fill="none">
                <Path
                  d="M8 8.49967C9.84095 8.49967 11.3333 7.00729 11.3333 5.16634C11.3333 3.32539 9.84095 1.83301 8 1.83301C6.15905 1.83301 4.66667 3.32539 4.66667 5.16634C4.66667 7.00729 6.15905 8.49967 8 8.49967Z"
                  fill="#1960F2"
                />
                <Path
                  d="M8 10.167C4.66 10.167 1.94 12.407 1.94 15.167C1.94 15.3537 2.08667 15.5003 2.27333 15.5003H13.7267C13.9133 15.5003 14.06 15.3537 14.06 15.167C14.06 12.407 11.34 10.167 8 10.167Z"
                  fill="#1960F2"
                />
              </Svg>

              <P style="text-[#505050] text-lg pl-[12px]">Refer & Earn</P>
            </View>

            <Pressable onPress={() => router.push("/more/contactUs")}>
              <View className="mt-3 flex flex-row items-center">
                <Svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <Path
                    d="M7.36667 9.96634L6.13333 11.1997C5.87333 11.4597 5.46 11.4597 5.19333 11.2063C5.12 11.133 5.04667 11.0663 4.97333 10.993C4.28667 10.2997 3.66667 9.57301 3.11333 8.81301C2.56667 8.05301 2.12667 7.29301 1.80667 6.53967C1.49333 5.77967 1.33333 5.05301 1.33333 4.35967C1.33333 3.90634 1.41333 3.47301 1.57333 3.07301C1.73333 2.66634 1.98667 2.29301 2.34 1.95967C2.76667 1.53967 3.23333 1.33301 3.72667 1.33301C3.91333 1.33301 4.1 1.37301 4.26667 1.45301C4.44 1.53301 4.59333 1.65301 4.71333 1.82634L6.26 4.00634C6.38 4.17301 6.46667 4.32634 6.52667 4.47301C6.58667 4.61301 6.62 4.75301 6.62 4.87967C6.62 5.03967 6.57333 5.19967 6.48 5.35301C6.39333 5.50634 6.26666 5.66634 6.10667 5.82634L5.6 6.35301C5.52666 6.42634 5.49333 6.51301 5.49333 6.61967C5.49333 6.67301 5.5 6.71967 5.51333 6.77301C5.53333 6.82634 5.55333 6.86634 5.56667 6.90634C5.68667 7.12634 5.89333 7.41301 6.18666 7.75967C6.48666 8.10634 6.80666 8.45967 7.15333 8.81301C7.22 8.87967 7.29333 8.94634 7.36 9.01301C7.62666 9.27301 7.63333 9.69967 7.36667 9.96634Z"
                    fill="#1960F2"
                  />
                  <Path
                    d="M14.6467 12.2204C14.6467 12.407 14.6133 12.6004 14.5467 12.787C14.5267 12.8404 14.5067 12.8937 14.48 12.947C14.3667 13.187 14.22 13.4137 14.0267 13.627C13.7 13.987 13.34 14.247 12.9333 14.4137C12.9267 14.4137 12.92 14.4204 12.9133 14.4204C12.52 14.5804 12.0933 14.667 11.6333 14.667C10.9533 14.667 10.2267 14.507 9.46 14.1804C8.69333 13.8537 7.92667 13.4137 7.16667 12.8604C6.90667 12.667 6.64667 12.4737 6.4 12.267L8.58 10.087C8.76667 10.227 8.93333 10.3337 9.07333 10.407C9.10667 10.4204 9.14667 10.4404 9.19333 10.4604C9.24667 10.4804 9.3 10.487 9.36 10.487C9.47333 10.487 9.56 10.447 9.63333 10.3737L10.14 9.87369C10.3067 9.70702 10.4667 9.58035 10.62 9.50035C10.7733 9.40702 10.9267 9.36035 11.0933 9.36035C11.22 9.36035 11.3533 9.38702 11.5 9.44702C11.6467 9.50702 11.8 9.59369 11.9667 9.70702L14.1733 11.2737C14.3467 11.3937 14.4667 11.5337 14.54 11.7004C14.6067 11.867 14.6467 12.0337 14.6467 12.2204Z"
                    fill="#1960F2"
                  />
                </Svg>

                <P style="text-[#505050] text-lg pl-[12px]">Contact Us</P>
              </View>
            </Pressable>
          </View>

          <View className="ml-[-40px] mt-[40px] flex flex-row items-center justify-center">
            <P style="pr-3 text-lg text-[#FF2525]">Log Out</P>
            <Svg width="20" height="20" viewBox="0 0 17 16" fill="none">
              <Path
                d="M11.7 1.33301H9.96667C7.83333 1.33301 6.5 2.66634 6.5 4.79967V7.49967H10.6667C10.94 7.49967 11.1667 7.72634 11.1667 7.99967C11.1667 8.27301 10.94 8.49967 10.6667 8.49967H6.5V11.1997C6.5 13.333 7.83333 14.6663 9.96667 14.6663H11.6933C13.8267 14.6663 15.16 13.333 15.16 11.1997V4.79967C15.1667 2.66634 13.8333 1.33301 11.7 1.33301Z"
                fill="#FF2525"
              />
              <Path
                d="M3.54001 7.50022L4.92001 6.12022C5.02001 6.02022 5.06667 5.89355 5.06667 5.76689C5.06667 5.64022 5.02001 5.50689 4.92001 5.41355C4.72667 5.22022 4.40667 5.22022 4.21334 5.41355L1.98001 7.64689C1.78667 7.84022 1.78667 8.16022 1.98001 8.35355L4.21334 10.5869C4.40667 10.7802 4.72667 10.7802 4.92001 10.5869C5.11334 10.3936 5.11334 10.0736 4.92001 9.88022L3.54001 8.50022H6.50001V7.50022H3.54001V7.50022Z"
                fill="#FF2525"
              />
            </Svg>
          </View>
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
