import { Image, Pressable, ScrollView, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import { Stack, useRouter } from "expo-router";
import { useAuth, useUser } from "@clerk/clerk-expo";

import H1 from "~/components/ui/Heading";
import P from "~/components/ui/Text";

export default function Page() {
  const { user } = useUser();
  const router = useRouter();
  const { signOut } = useAuth();
  return (
    <SafeAreaView className="min-h-screen bg-white md:pt-10">
      <Stack.Screen
        options={{
          title: "",
          headerShown: false,
        }}
      />
      <ScrollView className="">
        <View className="pl-5">
          <Image
            source={{
              uri: user?.imageUrl
                ? user?.imageUrl
                : "https://st3.depositphotos.com/4111759/13425/v/450/depositphotos_134255532-stock-illustration-profile-placeholder-male-default-profile.jpg",
            }}
            className="h-[40px] w-[40px] rounded-full"
          />

          <H1 styling="text-xl pt-3">My Profile</H1>

          <View className="mt-10 min-h-[100px] w-[90%] bg-[#f9f9f9]">
            <View className="gap-5 px-[20px] py-[24px]">
              <View className="flex flex-row items-center justify-between">
                <P style="text-base">User Name</P>
                <H1 styling="text-lg">{user?.username}</H1>
              </View>

              <View className="flex flex-row items-center justify-between">
                <P style="text-base">Email</P>
                <H1 styling="text-lg">
                  {user?.emailAddresses[0]?.emailAddress}
                </H1>
              </View>
            </View>
          </View>

          {/* <TouchableOpacity
            className="mt-10 h-12 w-[350px] rounded-md bg-[#1960F2]"
            onPress={() => {
              router.push("/more/profile/edit");
            }}
          >
            <H1 styling="text-xl tracking-wide text-white p-3 text-center">
              Edit Profile
            </H1>
          </TouchableOpacity> */}
        </View>
        <Pressable onPress={() => signOut()}>
          <H1 styling="text-xl tracking-wide text-[#FF2525] text-center mt-5">
            Log Out
          </H1>
        </Pressable>
      </ScrollView>
    </SafeAreaView>
  );
}
