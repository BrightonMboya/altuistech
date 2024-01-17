import React, { useState } from "react";
import {
  Image,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  View,
} from "react-native";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import { Stack, useRouter } from "expo-router";

import P from "../ui/Text";

export default function GroupForm() {
  const router = useRouter();
  const [privateGroup, setPrivateGroup] = useState(false);
  return (
    <SafeAreaView className="relative ">
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        keyboardVerticalOffset={100}
      >
        <Stack.Screen
          options={{
            title: "Editing",
          }}
        />
        <ScrollView className="pl-5">
          <View>
            <P style="text-lg" textType="medium">
              Group Name
            </P>
            <TextInput
              className="mt-3 h-[50px] w-[90%] rounded-lg border-[1px] border-[#b8b8b8]  px-5 "
              placeholder="Enter your Group Name"
              onChangeText={(text) => {}}
            />
          </View>

          <View className="mt-10">
            <P style="text-lg" textType="medium">
              Group Description
            </P>
            <TextInput
              className="mt-3 min-h-[80px] w-[90%] rounded-lg border-[1px] border-[#b8b8b8]  px-5 "
              placeholder="Enter your Group Description"
              multiline={true}
              numberOfLines={40}
              onChangeText={(text) => {}}
            />
          </View>

          <View className="mt-10 w-[300px]">
            <View className=" flex flex-row items-center justify-between">
              <P style="text-lg" textType="medium">
                Private
              </P>
              <TouchableOpacity
                onPress={() => setPrivateGroup(!privateGroup)}
                className={`${
                  privateGroup ? "border-blue" : " border-[#b8b8b8]"
                } h-6 w-10 rounded-xl border-[2px] `}
              >
                <View
                  className={`${
                    privateGroup ? "translate-x-4 bg-blue" : " bg-[#b8b8b8]"
                  } m-1 h-3 w-3 rounded-full`}
                />
              </TouchableOpacity>
            </View>
            <P style="pt-2 text-base">
              When you make a group private, only members added or invited can
              have access to group.
            </P>
          </View>
          <View>
            <TouchableOpacity
              className="mt-10 h-12 w-[350px] rounded-md bg-[#1960F2]"
              onPress={() => {
                router.push("/");
              }}
            >
              <P style="text-xl tracking-wide text-white pt-2 text-center">
                Continue
              </P>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
