import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useKeepAwake } from 'expo-keep-awake';
import { CountDown } from '../components/CountDown';
import { RoundedButton } from '../components/RoundedButton';
import { spaceing } from '../utils/sizes';
import { colors } from '../utils/colors';
import { ProgressBar } from 'react-native-paper';
import { Timing } from './Timing';

const ONE_SECOND_IN_MS = 1000;

const PATTERN = [
  1 * ONE_SECOND_IN_MS,
  1 * ONE_SECOND_IN_MS,
  1 * ONE_SECOND_IN_MS,
  1 * ONE_SECOND_IN_MS,
  1 * ONE_SECOND_IN_MS,
];

export const Timer = ({ focusSubject }) => {
  const [isStarted, setIsStarted] = useState(false);
  const [progress, setProgress] = useState(1);
  const [minutes, setMinutes] = useState(0.1);
const onEnd =  (reset) => {
  setIsStarted(false);
  setProgress(1);
  setMinutes(0);
  reset();
}

  return (
    <View style={styles.container}>
      <View style={styles.countdown}>
        <CountDown
          minutes={minutes}
          isPaused={!isStarted}
          onEnd={onEnd}
          onProgress={setProgress}
        />
        <View style={{ padding: spaceing.xxl }}>
          <Text style={styles.title}>Focusing on :</Text>
          <Text style={styles.task}>{focusSubject}</Text>
        </View>
      </View>
      <View style={{ paddingTop: spaceing.sm }}>
        <ProgressBar
          color={colors.progress}
          style={{ height: spaceing.sm }}
          progress={progress}
        />
      </View>
      <View style={styles.buttonWraper}>
        {!isStarted && (
          <RoundedButton onPress={() => setIsStarted(true)} title="Start" />
        )}
        {isStarted && (
          <RoundedButton onPress={() => setIsStarted(false)} title="Pause" />
        )}
        
      </View>
      <View style={styles.buttonWraper}>
        <Timing onChangeTime={setMinutes} />
      </View>

      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  countdown: {
    flex: 0.4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonWraper: {
    flex: 0.3,
    flexDirection: 'row',
    padding: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: colors.white,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  task: {
    color: colors.white,
    textAlign: 'center',
  },
});
