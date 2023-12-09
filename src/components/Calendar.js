import {useState, useEffect} from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';
import moment from 'moment';
import Date from './Date';

const Calendar = ({onSelectDate, selected}) => {
  const [dates, setDates] = useState([]);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [currentMonth, setCurrentMonth] = useState();

  const getDates = () => {
    const _dates = [];
    for (let i = 0; i < 10; i++) {
      const date = moment().add(i, 'days');
      _dates.push(date);
    }
    setDates(_dates);
  };

  useEffect(() => {
    getDates();
  }, []);

  return (
    <>
      <View style={styles.centered}>
        <Text style={styles.title}></Text>
      </View>
      <View style={styles.dateSection}>
        <View style={styles.scroll}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <Text>
              {dates.map((date, index) => (
                <Date
                  key={index}
                  date={date}
                  onSelectDate={onSelectDate}
                  selected={selected}
                />
              ))}
            </Text>
          </ScrollView>
        </View>
      </View>
    </>
  );
};

export default Calendar;

const styles = StyleSheet.create({
  centered: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  dateSection: {
    backgroundColor: '#001524',
    width: '94%',
    height: 76,
    borderRadius: 20,
    padding: 10,
  },
  scroll: {
    height: 150,
  },
});
