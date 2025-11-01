import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import CustomInput from './src/Custominput';
import { useState } from 'react';

export default function App() {

  const [nombre, setNombre] = useState('Tu Nombre');
  const [apellido, setApellido] = useState('Tu Apellido');

  return (
    <View style={styles.container}>
      <Text>Pon tu nombre y apellido</Text>
      <CustomInput
        placeholder="Nombre"
        value={nombre}
        setValue={() => {}}
        onChange={setNombre}
      />
      <CustomInput
        placeholder="Apellido"
        value={apellido}
        setValue={() => {}}
        onChange={setApellido}
      />
      <Text>Hola {nombre} {apellido}</Text>


    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
