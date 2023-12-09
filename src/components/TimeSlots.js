import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

const TimeSlots = ({selectedDate, onSelectedTime, selected}) => {
  const generateTimeSlots = () => {
    const TimeSlots = [];
    const startTime = new Date(selectedDate);

    startTime.setHours(8, 0, 0);

    for (let i = 0; i < 18; i++) {
      const time = new Date(startTime.getTime() + i * 30 * 60 * 1000);
      const formattedTime = `${String(time.getHours()).padStart(
        2,
        '0',
      )}:${String(time.getMinutes()).padStart(2, '0')}`;
      TimeSlots.push(formattedTime);
    }
    return TimeSlots;
  };

  return (
    <View style={styles.container}>
      {generateTimeSlots().map((time, index) => (
        <TouchableOpacity
          key={index}
          style={[
            styles.timeSlot,
            selected === time && styles.selectedTimeSlot,
          ]}
          onPress={() => onSelectedTime(time)}>
          <Text
            style={[
              styles.timeText,
              selected === time && styles.selectedTimeText,
            ]}>
            {time}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    padding: 12,
  },
  selectedTimeSlot: {
    backgroundColor: 'red', // Cor para indicar o tempo selecionado
  },
  selectedTimeText: {
    fontWeight: 'bold', // Estilo adicional para indicar o tempo selecionado
  },
  timeSlot: {
    width: '15%', // 2% menos para lidar com a margem e evitar quebras de linha
    backgroundColor: '#001524',
    borderRadius: 10,
    borderColor: '#ddd',
    textAlign: 'center',
    padding: 4,
    marginVertical: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  timeText: {
    color: 'white',
    fontSize: 14,
  },
});

export default TimeSlots;
