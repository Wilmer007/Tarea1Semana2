import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Alert, Button } from 'react-native';
import { useState , useEffect} from 'react';

export default function App() {

  const [usuario, setUsuario] = useState('Tu usuario');
  const [edad, setEdad] = useState('Tu edad');
  const [count, setCount] = useState(0);
  const [horaActual, setHoraActual] = useState('');
  const [estadoVisible, setEstadoVisible] = useState(true);

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout> | undefined;
    if (estadoVisible) {
      alert('loading');
      timer = setTimeout(() => {
        setEstadoVisible(false);
        alert('Welcome to the app');
      }, 3000);
    }
    return () => {
      if (timer) clearTimeout(timer);
    };
  }, [estadoVisible]);

  const incrementCount = () => {
    setCount(count + 1);
    if (count%5 === 0) {
      alert(`Has alcanzado un multiplo de 5 : ${count}`);
  }}
  useEffect(() => {
    if (count+1) {
    console.log(`El contador a cambiado a: ${count}`);
  }}, [count]);

  useEffect(() => {
 const sacarYeliminar = () => {

    const hoy = new Date();
    const hora = hoy.getHours();
    const minutos = hoy.getMinutes();
    const segundos = hoy.getSeconds();

    const eliminarInterval = `${String(hora).padStart(2,"0")}:${String(minutos).padStart(2,"0")}:${String(segundos).padStart(2,"0")}`;
    setHoraActual(eliminarInterval);

 };

 sacarYeliminar();

 const timer = setInterval(sacarYeliminar, 1000);
 return () => {
    clearInterval(timer);
 };
  }, []);


  const handleTextChange = (text: string) => {
    const numericValue = text.replace(/[^0-9]/g, '');
    setEdad(numericValue);
  };


  const handleSubmit = () => {
    if (!usuario || usuario.trim().length === 0) {
      Alert.alert('Validacion', 'porfavor ingresa usuario');
      return;
    }
    if (!edad || edad.trim().length === 0) {
      Alert.alert('Validacion', 'porfavor ingresa edad');
      return;
    }
    Alert.alert('Enviado', `Hola ${usuario} tu edad es ${edad}`);
  };

  return (
    <View style={styles.container}>
      <Text>Pon tu nombre y apellido</Text>
      <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 3, marginBottom: 20, width: 200, paddingLeft: 10 }}
        placeholder="ingresa Tu usuario"
        value={usuario}
        onChangeText={(value) => setUsuario(value)}
      />
      <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 3, marginBottom: 20, width: 200, paddingLeft: 10 }}
        placeholder="Solo numeros - Tu edad"
        value={edad}
        onChangeText={handleTextChange}
        keyboardType='number-pad'
      />
      <Button title="Enviar" onPress={handleSubmit} />
      <Text>Hola {usuario} tu edad es {edad} </Text>

      <Button title='Contador' onPress={incrementCount}></Button>
      <Text>
        Hora Actual: {horaActual}
      </Text>

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
