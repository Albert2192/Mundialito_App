import React from "react";
import { View, Text, StyleSheet, StatusBar, Image, TouchableOpacity } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';
import FontAwesome from '@expo/vector-icons/FontAwesome';

export default function Partidos() {
    return (
        <SafeAreaView style={styles.container} className="bg-mundialito_Dos">
            <StatusBar barStyle="light-content" />
            <Text className="text-xl text-slate-200 text-center py-3">Partidos</Text>

            <View style={styles.CardPartido}>
                <View style={styles.BorderBottom} className="pb-2">
                    <Text className="text-center text-xs text-slate-300">Copa América 2024 · 28/06/2024, 06:00 p.m.</Text>
                </View>
                <View style={{ flexDirection: "row", justifyContent: "space-evenly", alignItems: "center" }}>
                    <View style={{alignItems: "center"}}>
                        <Image
                            source={{ uri: "https://mundialito.bet/dist/img/selecciones/colombia.png" }}
                            style={{ width: 50, height: 50, marginTop: 10 }}
                        />
                        <Text className="text-slate-300">COLOMBIA</Text>
                    </View>
                    <Text className="text-lg font-bold text-slate-300">VS</Text>
                    <View style={{alignItems: "center"}}>
                        <Image
                            source={{ uri: "https://mundialito.bet/dist/img/selecciones/costa_rica.png" }}
                            style={{ width: 50, height: 50, marginTop: 10 }}
                        />
                        <Text className="text-slate-300">COSTA RICA</Text>
                    </View>
                </View>
                <View className="py-4">
                <Text className="text-center text-xs text-slate-300">GRUPO D - Fecha 2</Text>
                </View>
                <View style={[styles.BorderTop, {flexDirection: "row", gap: 10,}]} className="py-2">
                    <TouchableOpacity style={styles.Cargar}>
                    <FontAwesome name="edit" size={14} color="black" />
                        <Text className="text-center text-sm">Cargar Apuesta</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.Apuestas}>
                    <FontAwesome name="list-ul" size={14} color="black" />
                        <Text className="text-center text-sm">Apuestas</Text>
                    </TouchableOpacity>
                </View>
                
                <View style={{borderColor: "transparent", borderWidth: 1, borderRadius: 5, gap: 5, }}>
                    <View style={styles.Marcos}>
                    <Text className="text-center text-base font-bold text-slate-300">Mi Apuesta</Text>
                    </View>
                    <View style={{flexDirection: "row", gap: 5, }}>
                        <View style={[styles.Marcos, {flex: 1, }]}>
                            <Text className="text-xs text-center font-bold text-slate-300">GANADOR</Text>
                            <Text className="text-xs text-center text-slate-300">Apuesta no realizada</Text>
                        </View>
                        <View style={[styles.Marcos, {flex: 1, }]}>
                            <Text className="text-xs text-center font-bold text-slate-300">RESULTADO</Text>
                            <Text className="text-xs text-center text-slate-300">Apuesta no realizada</Text>
                        </View>
                    </View>
                </View>

            </View>

        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
    },
    CardPartido: {
        width: "90%",
        backgroundColor: "#454D55",
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderRadius: 10,
    },
    BorderTop: {
        borderTopWidth: 1,
        borderTopColor: "#2F3439",
    },
    BorderBottom: {
        borderBottomWidth: 1,
        borderBottomColor: "#2F3439",
    },
    Cargar: {
        backgroundColor: "#3498DB",
        flex: 1,
        paddingVertical: 10,
        borderRadius: 5,
        flexDirection: "row",
        gap: 8,
        alignItems: "center",
        justifyContent: "center",
    },
    Apuestas: {
        backgroundColor: "#F39C12",
        flex: 1, 
        paddingVertical: 10,
        borderRadius: 5,
        flexDirection: "row",
        gap: 8,
        alignItems: "center",
        justifyContent: "center",
    },
    Marcos: {
        borderWidth: 1, 
        borderColor: "#2F3439", 
        borderRadius: 5, 
        paddingVertical: 5, 
    }
});