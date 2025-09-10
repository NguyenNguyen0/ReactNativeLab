import { Text, SafeAreaView, View, StyleSheet, ScrollView } from 'react-native';
import GridButton from './components/GridButton.jsx'
import { useState } from 'react'

export default function App() {
  const [value, setValue] = useState(0);
  const [valueA, setValueA] = useState(0);
  const [valueB, setValueB] = useState(0);
  const [operator, setOperator] = useState('');
  const [result, setResult] = useState();
  
  const onClear = () => {
    setValue(0)
    setValueA(0)
    setValueB(0)
    setResult(0)
    setOperator('')
  }
  const onCalculate = () => {
    if (valueB === 0) {
      setValueB(value)
    }
    switch (operator) {
      case '+': setResult(valueA + valueB); break;
      case '-': setResult(valueA - valueB); break;
      case '*': setResult(valueA * valueB); break;
      case '/': setResult(valueA / valueB); break;
    }

    if (result) {
      onClear()
    }
  }
  const onSetOperator = (operator) => {
    if (valueA == 0) {
      setValueA(value);
      setValue(0);
    }
    setOperator(operator)
  }
  const onSetValue = (num) => {
    setValue((value === 0 ? 1 : value) * 10 + num)
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Text style={styles.paragraph}>
          Calulator
        </Text>
        <View style={styles.calculateArea}>
          <Text>{valueA !== 0 ? valueA : ''}</Text>
          <Text>{value !== 0 ? value : ''}</Text>
          <Text>{operator}</Text>
          <Text style={{fontWeight: 'bold'}}>{result}</Text>
        </View>
        <GridButton
          setValue={onSetValue}
          value={value}
          onClear={onClear}
          onCalculate={onCalculate}
          setOperator={onSetOperator}
        />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  calculateArea: {
    padding: 50,
    borderColor: '#ccc',
    borderWidth: 1,

  }
});
