import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Svg, Circle, Line } from 'react-native-svg';
import moment from 'moment';

const AnalogClock2 = () => {
  const [currentTime, setCurrentTime] = useState(moment());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(moment());
    }, 1000);

    // Cleanup the interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  // Calculate angles for hour and minute hands
  const hourAngle = 360 * ((currentTime.hour() % 12) + currentTime.minute() / 60) / 12;
  const minuteAngle = 360 * currentTime.minute() / 60;
  const secondAngle = 360 * currentTime.second() / 60;

  return (
    <View style={styles.clockContainer}>
      <Svg height="200" width="200">
        {/* Clock face */}
        <Circle cx="100" cy="100" r="90" stroke="black" strokeWidth="2" fill="white" />

        {/* Hour hand */}
        <Line
          x1="100"
          y1="100"
          x2="100"
          y2="50"
          stroke="black"
          strokeWidth="10"
          strokeLinecap="round"
          transform={`rotate(${hourAngle}, 100, 100)`}
        />

        {/* Minute hand */}
        <Line
          x1="100"
          y1="100"
          x2="100"
          y2="30"
          stroke="black"
          strokeWidth="8"
          strokeLinecap="round"
          transform={`rotate(${minuteAngle}, 100, 100)`}
        />

        {/* Second hand */}
        <Line
          x1="100" y1="100" x2="100" y2="20"
          stroke="red" strokeWidth="5" strokeLinecap="round"
          transform={`rotate(${secondAngle}, 100, 100)`}
        />

      </Svg>
      <Text style={styles.timeText}>{currentTime.format('DD-MMM-YYYY')}</Text>
      <Text style={styles.timeText}>{currentTime.format('HH:mm A')}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  clockContainer: {
    flex: 0.7,
    alignItems: 'center',
    justifyContent: 'center',
  },
  timeText: {
    marginTop: 10,
    fontSize: 16,
  },
});

export default AnalogClock2;
