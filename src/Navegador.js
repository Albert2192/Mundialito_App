import React, { useState, useEffect } from "react";
import { View, Image, StyleSheet, Text } from "react-native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from '@react-navigation/native';
import { AntDesign, MaterialIcons } from '@expo/vector-icons';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';

//Screens
// import MensajesPrivados from "./MensajesPrivados";
// import MensajesGrupales from "./MensajesGrupales";
// import Perfil from "./Perfil";
// import MensajeGrupo from "./MensajeGrupo";
// import DatosUsuario from "./DatosUsuario";
// import ResetPass from "./ResetPass";
import Principal from "./Principal";
import Partidos from "./Partidos";
import Perfil from "./Perfil";

/* AQUI CREAMOS ES STACK NAVIGATIOS */
const HomeStackNavigator = createNativeStackNavigator();
const PerfilStackNavigator = createNativeStackNavigator();

/* Y ESTO ES LA ESTRUCTURA DE NAVIGATOS */
/* function MyStack() {
    return (
        <HomeStackNavigator.Navigator
            initialRouteName="Grupo"
        >
            <HomeStackNavigator.Screen
                name="Grupo"
                component={MensajesGrupales}
                options={{
                    headerShown: false
                }}
            />
            {<HomeStackNavigator.Screen
                name="MensajeGrupo"
                component={MensajeGrupo}
                options={{
                    headerBackTitleVisible: false,
                    headerShown: false
                }}
            />}
        </HomeStackNavigator.Navigator>
    );
} */

/* function MyPerfilStack() {
    return (
        <PerfilStackNavigator.Navigator
            initialRouteName="Grupo"
        >
            <PerfilStackNavigator.Screen
                name="Perfiles"
                component={Perfil}
                options={{
                    headerShown: false
                }}
            />
            <PerfilStackNavigator.Screen
                name="DatosUsuario"
                component={DatosUsuario}
                options={{
                    headerBackTitleVisible: false,
                    headerShown: false
                }}
            />
            <PerfilStackNavigator.Screen
                name="ResetPass"
                component={ResetPass}
                options={{
                    headerBackTitleVisible: false,
                    headerShown: false
                }}
            />
        </PerfilStackNavigator.Navigator>
    );
} */

/* AQUI CREAMOS LOS TABS NAVIGATIOS */
const Tab = createBottomTabNavigator();
/* Y ESTA ES LA ESTRUCTURA DEL TAB */
function MyTabs() {
    return (
        <Tab.Navigator
            initialRouteName="Home"
            screenOptions={{
                tabBarActiveTintColor: "#2E86C1",
                tabBarHideOnKeyboard: true,
                tabBarStyle: { backgroundColor: "#454D55", borderColor: "transparent", height: 50, borderRadius: 10, marginHorizontal: 10, marginBottom: 3, },
            }}
        >
            <Tab.Screen
                name="Home"
                component={Principal}
                options={{
                    tabBarLabel: "Ranking",
                    tabBarIcon: ({ color, size }) => (
                        /* <FontAwesome5 name="trophy" size={size} color="red" /> */
                        <FontAwesome5 name="trophy" size={size} color={color} />
                    ),
                    /* tabBarBadge: 3, */
                    headerShown: false,
                }}
            />
            <Tab.Screen
                name="Partidos"
                /* component={MyStack} */
                component={Partidos}
                options={{
                    tabBarLabel: "Partidos",
                    tabBarLabelStyle: { display: "none" },
                    tabBarIcon: ({ color, size }) => (
                        <View style={styles.Partidos}>
                            <FontAwesome5 name="futbol" size={size} color={color} />
                        </View>
                    ),
                    /* tabBarBadge: 9, */
                    headerShown: false,
                    /* tabBarIconStyle: {position: "relative", zIndex: 10, top: -10, right: 0, backgroundColor: "red", width: 35, borderRadius: 50, } */
                }}
            />
            <Tab.Screen
                name="Perfil"
                component={Perfil}
                options={{
                    tabBarLabel: "Mi Perfil",
                    tabBarIcon: ({ color, size }) => (
                        <View>
                            <Image
                                source={require('../assets/system/user.png')}
                                style={{ width: 30, height: 30 }}
                            />
                        </View>
                    ),
                    headerShown: false,
                }}
            />
            {/* <Tab.Screen
                name="Perfil"
                component={Perfil}
                options={{
                    tabBarLabel: "Mi Perfil",
                    tabBarIcon: ({ color, size }) => (
                        <View>
                            <Image
                                source={require('../assets/system/user.png')}
                                style={{ width: 30, height: 30 }}
                            />
                        </View>
                    ),
                    headerShown: false,
                }}
            /> */}
        </Tab.Navigator>
    );
}

export default function NavegadorTab() {

    const [overlay, setOverlay] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setOverlay(false);
        }, 3000)
    }, [overlay]);

    return (
        <View style={styles.container}>
            <NavigationContainer>
                <MyTabs />

                <View style={[styles.overlay, overlay ? "" : styles.desaparecerOverlay]}>
                    <Text style={{ color: "#f1f1f1", fontSize: 20, }}>Cargando...</Text>
                </View>
            </NavigationContainer>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#343A40",
    },
    overlay: {
        position: "absolute",
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(0, 0, 0, .8)",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 11,
    },
    desaparecerOverlay: {
        display: "none"
    },
    Partidos: {
        backgroundColor: "red",
        width: 50,
        height: 50,
        justifyContent: "center",
        alignItems: "center",
        top: -10,
        borderRadius: 50,
    }
});