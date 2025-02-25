import { useState } from 'react';
import { Modal, TouchableOpacity } from 'react-native';
import { Calendar, LocaleConfig } from 'react-native-calendars';
import { ChevronDown } from 'lucide-react-native';

import { Text, View } from '../themed';

import { Button } from '@/components/ui/button';
import { HStack } from '@/components';
import { Icon } from '@/components/ui/icon';
import { capitalizeFirstLetter, UA_CALENDAR_LOCALE_CONFIG } from '@/src/utils';
import { LOCALES } from '@/src/consts';

LocaleConfig.locales[LOCALES.UA] = { ...UA_CALENDAR_LOCALE_CONFIG };
LocaleConfig.defaultLocale = LOCALES.UA;

export const CalendarDatePicker = ({
  selectedDate,
  setSelectedDate,
}: {
  selectedDate: Date;
  setSelectedDate: (value: Date) => void;
}) => {
  const [showCalendar, setShowCalendar] = useState(false);

  const formatDate = (date: any) => {
    return date.toLocaleDateString('uk-UA', {
      weekday: 'long',
      day: '2-digit',
      month: 'short',
      year: 'numeric',
    });
  };

  const formattedDate = capitalizeFirstLetter(formatDate(selectedDate));

  return (
    <View>
      <Button
        onPress={() => setShowCalendar(true)}
        style={{
          backgroundColor: '#fff',
          borderRadius: 12,
          paddingHorizontal: 16,
          elevation: 0.5,
          height: 44,
        }}>
        <HStack className="items-center justify-between gap-2">
          <Text style={{ fontWeight: 'bold', fontSize: 16, color: '#000' }}>
            {formattedDate}
          </Text>
          <Icon as={ChevronDown} size="md" color="#6B7280" />
        </HStack>
      </Button>

      <Modal visible={showCalendar} transparent={true} animationType="slide">
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
          }}>
          <View
            style={{
              backgroundColor: '#fff',
              padding: 20,
              borderRadius: 12,
              width: '50%',
            }}>
            <Calendar
              markedDates={{
                [selectedDate.toISOString().split('T')[0]]: {
                  selected: true,
                  selectedColor: '#4F46E5',
                },
              }}
              onDayPress={(day: any) => {
                setSelectedDate(new Date(day.dateString));
                setShowCalendar(false);
              }}
              locale={'uk'}
              theme={{
                backgroundColor: '#ffffff',
                calendarBackground: '#ffffff',
                selectedDayBackgroundColor: '#4F46E5',
                selectedDayTextColor: '#ffffff',
                todayTextColor: '#4F46E5',
                arrowColor: '#4F46E5',
                monthTextColor: '#000000',
                textDayFontWeight: 'bold',
                textMonthFontWeight: 'bold',
                textSectionTitleColor: '#6B7280',
                textDisabledColor: '#d9e1e8',
              }}
            />

            <TouchableOpacity
              onPress={() => setShowCalendar(false)}
              style={{ marginTop: 10, alignSelf: 'center' }}>
              <Text
                className="text-lg font-bold color-indigo-600"
                style={{ color: '#4F46E5' }}>
                Закрити
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};
