import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { colors } from '../utils/colors';
import { TextInput } from 'react-native-paper';
import { RoundedButton } from '../components/RoundedButton';
import { spaceing } from '../utils/sizes'

export const Focus = ({ addSubject }) => {
  const [subject, setSubject] = useState(null);
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          onChangeText={setSubject}
          label="Focus Item"
          style={styles.textInout}
        />
        <View>
          <RoundedButton
            title="+"
            style={styles.button}
            onPress={() => addSubject(subject)}
            size={50}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inputContainer: {
    padding: spaceing.lg,
    justifyContent: 'top',
    flexDirection: 'row',
  },
  button: {
    justifyContent: 'center',
  },
  textInout: {
    flex: 1,
    marginRight: spaceing.sm,
  },
});
