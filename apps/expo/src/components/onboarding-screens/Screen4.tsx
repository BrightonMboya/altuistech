import { useState } from "react";
import { Pressable, TextInput, TouchableOpacity, View } from "react-native";
import CountryPicker, {
  type Country,
  type CountryCode,
} from "react-native-country-picker-modal";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

import CustomText from "../ui/CustomText";
import H1 from "../ui/Heading";
import { BackIcon } from "../ui/icons";
import { OnboardingScreenProps } from "./index";

export default function Screen4(props: OnboardingScreenProps) {
  const [withFlag, setWithFlag] = useState<boolean>(true);
  const [countryCode, setCountryCode] = useState<CountryCode>("RW");
  const [country, setCountry] = useState<Country>();
  const [visible, setVisible] = useState<boolean>(false);
  const [withAlphaFilter, setWithAlphaFilter] = useState<boolean>(false);
  const switchVisible = () => setVisible(!visible);
  const onSelect = (country: Country) => {
    setCountryCode(country.cca2);
    setCountry(country);
  };
  return (
    <SafeAreaProvider>
      <SafeAreaView className="relative h-screen bg-white px-5">
        <BackIcon />
        <View className="mt-[16px] h-[33px] w-[93px] rounded-[200px] bg-[#EBF2FF]">
          <CustomText
            styling="text-center py-[8px] text-blue"
            textFontStyle="heading"
          >
            Step 5 of 6
          </CustomText>
        </View>
        <CustomText styling="text-[14px] pt-[24px]">
          Let’s get to know you
        </CustomText>
        <H1 styling="text-[16px] pt-[12px]" textFontStyle="heading">
          What country are you from?
        </H1>
        <TouchableOpacity
          className="pr-auto mt-[24px] flex flex-row items-center rounded-lg  border-[1px] border-blue py-[8px] pl-[20px]"
          onPress={switchVisible}
        >
          <CountryPicker
            {...{
              withFlag,
              countryCode,
              country,
              withAlphaFilter,
              onSelect,
              preferredCountries: ["US", "GB"],
              onClose: () => setVisible(false),
              onOpen: () => setVisible(true),
              modalProps: { visible },
            }}
            visible
          />
          {country !== null && <H1>{country?.name as string}</H1>}
        </TouchableOpacity>
        <TouchableOpacity
          className="mx-auto mt-[40px] flex h-[48px] w-full justify-center rounded-lg bg-blue"
          onPress={() => props.setPage(5)}
        >
          <H1 styling="text-white text-center text-[16px]">Next</H1>
        </TouchableOpacity>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
