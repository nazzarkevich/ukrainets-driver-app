import { useState } from 'react';
import { StyleSheet } from 'react-native';
import { ArrowUpDown, MapPin, MapPinned } from 'lucide-react-native';

import {
  ScreenContainer,
  Stepper,
  CalendarDatePicker,
  Text,
  Title,
  View,
  CustomSelect,
  SelectOption,
} from 'src/components';
import { typographyConst } from 'src/consts';
import { Country, RootDrawerScreenProps, Nullable } from 'src/types';

import { GbFlagIcon, UaFlagIcon } from '@/src/assets/icons';
import { addDays } from '@/src/utils';
import { Button } from '@/components/ui/button';

import {
  Checkbox,
  CheckboxIndicator,
  CheckboxLabel,
  CheckboxIcon,
} from '@/components/ui/checkbox';
import { CheckIcon } from '@/components/ui/icon';

export const CustomCheckbox = ({
  isChecked,
  onChange,
}: {
  isChecked: boolean;
  onChange: (state: boolean) => void;
}) => {
  return (
    <Checkbox value="s" onChange={onChange} isChecked={isChecked} size="md">
      <CheckboxIndicator size="lg">
        <CheckboxIcon as={CheckIcon} />
      </CheckboxIndicator>

      <CheckboxLabel size="lg">Поїздка з причепом</CheckboxLabel>
    </Checkbox>
  );
};

const DottedLineWithGradient = () => {
  return (
    <View className="relative">
      <View className="absolute -top-6 left-[13px] flex flex-col items-center">
        {Array.from({ length: 6 }).map((_, index) => (
          <View
            key={index}
            className="h-2 w-[2px] rounded-full bg-indigo-600"
            style={{
              marginBottom: 3,
              opacity: 1 - index * 0.2,
            }}
          />
        ))}
      </View>
    </View>
  );
};

const LocationRow = ({
  title,
  country,
  isDeparture = false,
}: {
  title: string;
  country: Country;
  isDeparture?: boolean;
}) => {
  const countryNames = {
    [Country.UKRAINE]: 'Україна',
    [Country.UNITED_KINGDOM]: 'Велика Британія',
  };

  const countryFlags = {
    [Country.UKRAINE]: <UaFlagIcon size={25} />,
    [Country.UNITED_KINGDOM]: <GbFlagIcon size={25} />,
  };

  return (
    <View>
      <Title className="mb-1 ml-12" color="tertiary" size="m">
        {title}
      </Title>

      <View className="mb-4 flex-row items-center">
        <View className={`h-8 w-8 items-center justify-center`}>
          {isDeparture ? (
            <MapPin color="#4F46E5" />
          ) : (
            <MapPinned color="#9CA3AF" />
          )}
        </View>

        <View
          className="ml-4 flex-1 flex-row items-center rounded-xl bg-white p-3"
          style={{ elevation: 0.5 }}>
          <View>{countryFlags[country]}</View>
          <View>
            <Text className="ml-3 text-xl font-bold text-black">
              {countryNames[country]}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const TravelInfo = () => {
  const [journeyCountries, setJourneyCountries] = useState({
    origin: Country.UKRAINE,
    destination: Country.UNITED_KINGDOM,
  });

  const changeCountry = () => {
    setJourneyCountries((prev) => ({
      origin: prev.destination,
      destination: prev.origin,
    }));
  };

  return (
    <View className="flex flex-col gap-2">
      <Title size="l">Напрямок</Title>

      <View className="w-[40%]">
        <View>
          <LocationRow
            isDeparture
            title="Відправлення"
            country={journeyCountries.origin}
          />

          <DottedLineWithGradient />

          <LocationRow
            country={journeyCountries.destination}
            title="Прибуття"
          />
        </View>

        <View className="absolute -right-20 top-1/2 h-16 w-16 -translate-y-1/2 items-center justify-center rounded-full bg-white">
          <Button
            size="xl"
            variant="link"
            action="primary"
            onPress={changeCountry}>
            <ArrowUpDown color="#4F46E5" size={24} />
          </Button>
        </View>
      </View>
    </View>
  );
};

const CreateJourneyStep = () => {
  const [hasTrailer, setHasTrailer] = useState(false);
  const [departureDate, setDepartureDate] = useState(new Date());
  const [arrivalDate, setArrivalDate] = useState(addDays(new Date(), 3));
  const [selectedDrivers, setSelectedDrivers] =
    useState<Nullable<SelectOption>>(null);

  const options: SelectOption[] = [
    { value: '1', label: 'Іван Брюховецький' },
    { value: '2', label: 'Павло Полуботок' },
    { value: '3', label: 'Петро Дорошенко', disabled: true },
  ];

  return (
    <View className="flex flex-col gap-7">
      <TravelInfo />

      <View className="flex flex-col gap-2">
        <Title size="l">Дата поїздки</Title>

        <View className="flex flex-row">
          <View className="flex flex-col gap-1">
            <Title color="tertiary" size="m">
              Відправлення:
            </Title>

            <CalendarDatePicker
              selectedDate={departureDate}
              setSelectedDate={setDepartureDate}
            />
          </View>

          <View className="ml-12 flex flex-col gap-1">
            <Title color="tertiary" size="m">
              Прибуття:
            </Title>

            <CalendarDatePicker
              selectedDate={arrivalDate}
              setSelectedDate={setArrivalDate}
            />
          </View>
        </View>
      </View>

      <View className="flex flex-row gap-5">
        <View className="flex flex-col gap-1">
          <Title size="l">Водій 1</Title>
          <CustomSelect options={options} placeholder="Вибрати водія" />
        </View>

        <View className="flex flex-col gap-1">
          <Title size="l">Водій 2</Title>
          <CustomSelect options={options} placeholder="Вибрати водія" />
        </View>

        <View className="flex flex-col gap-1">
          <Title size="l">Водій 3</Title>
          <CustomSelect options={options} placeholder="Вибрати водія" />
        </View>
      </View>

      <View className="flex flex-row gap-5">
        <View className="flex flex-col gap-2">
          <Title size="l">Автомобіль</Title>

          <CustomSelect options={options} placeholder="Вибрати авто" />
        </View>

        <View className="flex flex-row">
          <View className="flex flex-col gap-2">
            <Title size="l">Причеп</Title>

            <CustomCheckbox
              isChecked={hasTrailer}
              onChange={(state: boolean) => {
                setHasTrailer(state);
                console.log('state: ', state);
              }}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

export function CreateJourneyScreen({
  navigation,
}: RootDrawerScreenProps<'CreateJourneyScreen'>) {
  const stepPages = [
    { label: 'Головна інформація', component: <CreateJourneyStep /> },
    { label: 'Навантаження', component: <Text>Content 2</Text> },
    { label: 'Готово', component: <Text>Content 3</Text> },
  ];

  return (
    <ScreenContainer title="Створити нову поїздку">
      <View style={styles.stepOneContainer}>
        <Stepper
          stepPages={stepPages}
          finishButtonText="Розпочати поїздку"
          inFinish={() => console.log('Finish!')}
        />
      </View>
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  stepOneContainer: {
    display: 'flex',
    gap: typographyConst.spacing.m,
  },
});
