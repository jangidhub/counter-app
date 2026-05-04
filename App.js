import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';

export default function App() {


  const [count, setcount] = useState(0);
  const increaseCount = () => {
    setcount(count + 1);
  }
  const decreaseCount = () => {
    setcount(count - 1);
  }
  const resetCount = () => {
    setcount(0)
  }
  return (
    <View style={styles.container}>
      <StatusBar style='auto' />
      <View style={styles.header}>
        <Text style={styles.heading}>COUNTER APP</Text>
      </View>
      <Text style={styles.counterText}>{count}</Text>
      <View style={styles.buttonsBox}>
        <TouchableOpacity style={styles.buttons} onPress={() => { increaseCount() }}>
          <Text style={{ color: '#ddd' }}>+</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttons} onPress={() => { decreaseCount() }}>
          <Text style={{ color: '#ddd' }}>-</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttons} onPress={() => { resetCount() }}>
          <Text style={{ color: '#ddd', fontSize: 30 }}>0</Text>
        </TouchableOpacity>


      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  header: {
    marginTop: 50,
    padding: 15,
    paddingVertical: 20,
  },
  heading: {
    fontSize: 30,
    fontWeight: 600,
    color: '#333',
  },
  counterText: {
    fontSize: 500,
    textAlign: 'center',

  },
  buttonsBox: {
    position: 'absolute',
    bottom: 20,
    padding: 15,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly'
  },
  buttons: {
    backgroundColor: '#333',
    color: '#ddd',
    height: 70,
    width: 70,
    borderRadius: 35,
    alignItems: 'center',
    justifyContent: 'center',
  }

});
