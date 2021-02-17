import React from 'react';
import { StyleSheet, View, Text, TextInput } from 'react-native';
import useKeyboardHeight from 'react-native-use-keyboard-height';

export default function App() {
  const keyboardHeight = useKeyboardHeight();
  return (
    <View style={styles.container}>
      <Text>Current Keyboard Height: {keyboardHeight}</Text>
      <TextInput style={styles.input}></TextInput>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    width: 300, 
    height: 50, 
    borderWidth: 1, 
    borderColor: 'grey',
    textAlign: 'center',
    marginTop: 10
  }
});
