import { Text, View, SafeAreaView, StyleSheet, TouchableOpacity } from 'react-native';
import { useState } from 'react'
import Button from './Button.jsx'

export default function GridButton({onClear, setOperator, setValue, value, onCalculate}) {
  return (
    <View style={styles.grid}>
      <View style={styles.numGrid}>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map(num => <Button onPress={() => setValue(num)} text={num} />)}
      </View>
      <View style={styles.operatorGrid}>
        <Button onPress={() => setOperator('+')} text='+' />
        <Button onPress={() => setOperator('-')} text='-' />
        <Button onPress={() => setOperator('*')} text='*' />
        <Button onPress={() => setOperator('/')} text='/' />
        <Button onPress={onClear} text="C" />
        <Button onPress={onCalculate} text="=" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  grid: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    flexWrap: 'wrap',
    gap: 4,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  numGrid: {
    width: '100%',
    gap: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
  operatorGrid: {
    width: '100%',
    gap: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    flexWrap: 'wrap',
  }
});
