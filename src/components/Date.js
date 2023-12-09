import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import 'moment/locale/pt-br';
import moment from 'moment';

const Date = ({date, onSelectDate, selected}) => {
  const day =
    moment(date).format('YYYY-MM-DD') === moment().format('YYYY-MM-DD')
      ? 'HOJ'
      : moment(date).format('ddd').toUpperCase();

  const dayNumber = moment(date).format('D');

  const fullDate = moment(date).format('YYYY-MM-DD');

  const dayOfWeek = moment(date).format('dddd');

  const isWeekend = dayOfWeek === 'sábado' || dayOfWeek === 'domingo';

  return (
    <TouchableOpacity
      onPress={() => onSelectDate(fullDate)}
      style={[
        styles.card,
        selected === fullDate && {backgroundColor: '#96EFFF'},
      ]}>
      <Text
        style={[
          styles.big,
          selected === fullDate
            ? {color: '#001524'}
            : {color: 'white'} && isWeekend
            ? {color: 'red'}
            : {color: 'white'},
        ]}>
        {day}
      </Text>
      <View style={{height: 4}} />
      <Text
        style={[
          styles.medium,
          selected === fullDate && {
            color: '#001524',
            fontWeight: 'bold',
            fontSize: 15,
          },
        ]}>
        {dayNumber}
      </Text>
    </TouchableOpacity>
  );
};

export default Date;

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#001524',
    borderRadius: 14,
    borderColor: '#ddd',
    padding: 8,
    // marginVertical: 10,
    alignItems: 'center',
    height: 54,
    width: 50,
    elevation: 2,
    shadowColor: '#FF5B22',
    shadowOffset: {width: 8, height: 9},
    shadowOpacity: 0.3,
    shadowRadius: 3,
  },
  big: {
    fontWeight: 'bold',
    fontSize: 12,
  },
  medium: {
    color: 'white',
    fontSize: 15,
    fontWeight: 'bold',
  },
});
