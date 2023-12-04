import React from 'react';
import {View, StyleSheet, TouchableOpacity, Text} from 'react-native';
export default function CustomTabBar({state, descriptors, navigation}) {
  return (
    <View style={styles.container}>
      <View style={styles.tabContainer}>
        {state.routes.map((route, index) => {
          const options = descriptors[route.key].options;

          let label = options.tabBarLabel;
          let icon = options.tabBarIcon;

          const isFocused = state.index === index;

          const handleTabPress = () => {
            navigation.navigate(route.name);
          };
          if (route.name === 'Appointments') {
            return (
              <TouchableOpacity
                key={index}
                style={[styles.tabAppointment, styles.shadowProp]}
                onPress={handleTabPress}
                underlayColor="transparent"
                activeOpacity={1}>
                {icon &&
                  icon({color: isFocused ? '#F3F3F3' : '#96EFFF', size: 30})}
              </TouchableOpacity>
            );
          } else {
            return (
              <TouchableOpacity
                key={index}
                style={styles.tab}
                onPress={handleTabPress}
                underlayColor="transparent"
                activeOpacity={1}>
                {icon &&
                  icon({color: isFocused ? '#F3F3F3' : '#96EFFF', size: 27})}
              </TouchableOpacity>
            );
          }
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#363062',
    elevation: 8,
    shadowOpacity: 0.5,
    shadowRadius: 12,
  },
  tabContainer: {
    transform: [{scaleX: 1}],
    width: 300,
    borderRadius: 20,
    top: -10,
    flexDirection: 'row',
    backgroundColor: '#161A30',
  },
  tab: {
    y: 0,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    height: 50,
  },
  tabAppointment: {
    width: 50,
    height: 50,
    backgroundColor: '#161A30',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: -20,
  },
  label: {
    fontSize: 16,
    color: 'red',
  },

  shadowProp: {
    borderColor: '#F5F7F8',
    shadowColor: '#F5F7F8',
    // borderBottomWidth: 1,
    // borderLeftWidth: 1,
    // borderRightWidth: 1,
    // borderTopWidth: 1,
    borderRadius: 40,
    // borderWidth: 0.2,

    elevation: 2,

    // borderBottomLeftRadius: 42,
    // borderBottomRightRadius: 42,
    // borderTopLeftRadius: 42,
    // borderTopRightRadius: 42,
  },
});
