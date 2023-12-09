import React, {useContext, useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {AuthContext, useAuth} from '../../../routes/auth/AuthProvider';
import style from './style';
import Calendar from '../../../components/Calendar';
import TimeSlots from '../../../components/TimeSlots';

export default function Appointments({route}) {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectTime] = useState(null);
  return (
    <View style={style.container}>
      <Calendar
        style={{flex: 1}}
        onSelectDate={setSelectedDate}
        selected={selectedDate}
      />
      <View style={{flex: 2}}>
        <Text style={style.titleHours}>Horários Disponíveis</Text>
        <TimeSlots
          selectedDate={selectedDate}
          onSelectedTime={setSelectTime}
          selected={selectedTime}
        />
      </View>
    </View>
  );
}
