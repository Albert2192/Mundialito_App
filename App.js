import React, { createContext, useEffect, useState } from 'react';
/* import { StatusBar } from 'expo-status-bar'; */
/* import { usePreventScreenCapture } from 'expo-screen-capture'; */
import AsyncStorage from '@react-native-async-storage/async-storage';
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';
import Navegador from './src/Navegador';
import Acceso from './src/Acceso';
import config from './Config/Config';
/* import { useExpoPushToken } from './Config/expoPushToken'; */

const [SERVER_URL, FOTOS_URL] = config;

import TokenContext from './Config/TokenContext';

// 1. Crear el contexto
/* const TokenContext = createContext(); */

export default function App() {

  /* const expoPushToken = useExpoPushToken(); */

 /*  usePreventScreenCapture(); */

  const [isLoggedIn, setIsLoggedIn] = useState(false);   
  const [loading, setLoading] = useState(true);

  const [datos, setDatos] = useState();

  useEffect(() => {
    const checkToken = async () => {
      const token = await AsyncStorage.getItem('myToken');
      if (token) {

        const formData = new FormData();
        formData.append('token', token);

        const response = await fetch(`${SERVER_URL}?q=verificar`, {
        /* const response = await fetch(`${SERVER_URL}/acceso.php?q=verificar`, { */
          method: 'POST',
          body: formData,
        });
        const result = await response.json();
        if (result.status === 'ok') {
          setDatos(result.usuario)
          setIsLoggedIn(true);
        } else {
          await AsyncStorage.removeItem('myToken');
        }
      }
      setLoading(false);
    };

    checkToken();
  }, []);

  // HACE LA ANIMACION DE CARGANDO AL INICIO
  if (loading) { 
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" color="#2980B9"/>
      </View>
    );
  }

  // 3. Envolver el componente App con el proveedor del contexto
  return (
    <TokenContext.Provider value={{ setIsLoggedIn, datos, setDatos }}>

      {isLoggedIn ? <Navegador setIsLoggedIn={setIsLoggedIn} /> : <Acceso setIsLoggedIn={setIsLoggedIn} />}

    </TokenContext.Provider>
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

// Exportar el contexto para usarlo en otros componentes
/* export { TokenContext }; */