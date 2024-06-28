import React, { useContext, useState } from "react";
import { SafeAreaView, TextInput, View, Text, StyleSheet, Image, TouchableOpacity, Modal, KeyboardAvoidingView } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import TokenContext from '../Config/TokenContext';
import config from "../Config/Config";
/* import SERVER_URL from "../Config/Config"; */

const [SERVER_URL] = config;

export default function Acceso({ setIsLoggedIn }) {
    /* CONTEXTO PARA OBTENER LOS DATOS DEL INDEX */
    const { setDatos } = useContext(TokenContext);

    /* CONSTANTES DEL COMPONENTE */
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const [error, setError] = useState('');
    /* CONSTANTE QUE HACE VISIBLE EL MODAL */
    const [modalVisible, setModalVisible] = useState(false);
    /* CONSTANTE DE ACTIVAR BOTON INGRESAR */
    const [ingresar, setIngresar] = useState(true);

    /* FUNCION PARA HACER LOGIN */
    const handleLogin = async () => {

        setIngresar(false);

        const formData = new FormData();
        formData.append('username', username);
        formData.append('password', password);
        /* formData.append('token_dispositivo', expoPushToken); */

        const response = await fetch(`${SERVER_URL}?q=acceder`, {
            method: 'POST',
            body: formData,
        });

        const result = await response.json();

        if (result.status === 'ok') {
            let token = result.token;
            await AsyncStorage.setItem('myToken', token.toString());
            setDatos(result.usuario)
            setIsLoggedIn(true);
        } else {
            setTimeout(() => {
                /* OBTIENE EL ERROR DE LA RESPUESTA */
                setError(result.mensaje);
                /* CAMBIA EL ESTADO DEL MODAL A VISIBLE */
                setModalVisible(true);
                /* CAMBIA EL ESTADO DEL BOTON DE INACTIVO A ACTIVO */
                setIngresar(true);
            }, 3000);
        }
    };

    return (
        <KeyboardAvoidingView style={styles.contaniner} className="bg-mundialito_Dos">
        {/* <SafeAreaView style={styles.contaniner} className="bg-gray-100"> */}
            <View style={styles.seccion1}>
                <View>
                    <Image
                        source={require('../assets/system/Mundialito.png')}
                        style={{ width: 150, height: 150, marginTop: 10 }}
                    />
                </View>
            </View>
            <View style={styles.seccion2}>
                <View style={styles.InputContainer}>
                    <TextInput style={styles.Input} placeholder="Ingrese Usuario" placeholderTextColor="#888" value={username} onChangeText={setUsername} />
                    <TextInput style={styles.Input} placeholder="Ingrese Contraseña" placeholderTextColor="#888" value={password} secureTextEntry={true} onChangeText={setPassword} />
                </View>
                <View className="py-3"></View>

                <TouchableOpacity
                    className="bg-mundialito_Primary rounded-md justify-center items-center mt-7 py-4"
                    style={[styles.ButtonIngresar, ingresar ? styles.ingresar : styles.ingresando]}
                    onPress={handleLogin}
                    disabled={!ingresar}
                >
                    <Text className="text-xl text-slate-200 font-semibold">{ingresar ? " Iniciar Sesión" : "Espere..."}</Text>
                </TouchableOpacity>

            </View>

            <Modal
                visible={modalVisible}
                onRequestClose={() => setModalVisible(false)}
                animationType="slide"
                transparent={true}
            >
                <View
                    style={styles.modalContainer}
                >
                    <View className="bg-ModalColor" style={styles.modalView}>

                        <View style={{ flexDirection: "row", gap: 10, alignItems: "baseline" }}>
                            <FontAwesome name="warning" size={24} color="black" />
                            <Text className="text-xl text-slate-800 font-bold">Atención</Text>
                        </View>

                        <View style={{ paddingVertical: 23, }}>
                            <Text className="text-base">{error}</Text>
                        </View>

                        <TouchableOpacity style={{ backgroundColor: "#1565C0", paddingHorizontal: 30, paddingVertical: 10, borderRadius: 5, }} onPress={() => setModalVisible(false)}>
                            <Text style={{ color: "#f1f1f1" }}>Aceptar</Text>
                        </TouchableOpacity>

                    </View>
                </View>
            </Modal>

        </KeyboardAvoidingView>
        /* </SafeAreaView> */
    )
}

const styles = StyleSheet.create({
    contaniner: {
        flex: 1,
        width: "100vw",
        alignItems: "center",
        justifyContent: "center",
    },
    seccion1: {
        flex: 2,
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
    },
    seccion2: {
        flex: 3,
        width: "100%",
        paddingHorizontal: 30,
    },
    InputContainer: {
        justifyContent: "center",
        alignItems: "center",
        paddingVertical: 10,
        marginTop: 20,
        gap: 15,
    },
    Input: {
        borderBottomWidth: 1,
        borderBottomColor: "#AEB6BF",
        width: 300,
        width: "100%",
        fontSize: 18,
        padding: 10,
        /* backgroundColor: "#f4f4f4", */
        color: "#f3f3f3",
    },
    modalContainer: {
        flex: 1,
        //justifyContent: "flex-end",
        justifyContent: "center",
        alignItems: "center",
        paddingBottom: 10,
        //backgroundColor: "rgba(0, 0, 0, .5)",
    },
    modalView: {
        //backgroundColor: "#F2D7D5",
        justifyContent: "center",
        alignItems: "center",
        width: 300,
        //height: 150,
        borderRadius: 8,
        paddingVertical: 20,
        position: "relative",
        borderWidth: 1,
        borderColor: "#34495E",
    },
    close: {
        backgroundColor: "red",
        width: 35,
        height: 35,
        borderRadius: 5,
        justifyContent: "center",
        alignItems: "center",
        position: "absolute",
        top: 0,
        right: 0,
    },
    ingresar: {
        backgroundColor: "#3F6791",
    },
    ingresando: {
        backgroundColor: "#45B39D",
    }
})