import { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

const App = () => {
  const [name, setName] = useState('jaga');
  return (
    <View> 
      <Text style={styles.nameText}>{name}</Text>
      <Button title='Press' onPress={() => setName('Soumya')} />
    </View>
  );
}
export default App;
const styles = StyleSheet.create({
  nameText: {
    textAlign: 'center',
    justifyContent: 'center',
    marginTop:100
  }
})