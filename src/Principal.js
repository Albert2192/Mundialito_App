import React, { useContext } from "react";
import { View, Text, StyleSheet, Pressable, StatusBar, FlatList } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';
import Entypo from '@expo/vector-icons/Entypo';

export default function Principal() {

    const ranking = [
        {
            id: 1,
            posicion: 1,
            usuario: "Arturo",
            puntos: 20
        },
        {
            id: 2,
            posicion: 2,
            usuario: "Matias",
            puntos: 15
        },
        {
            id: 3,
            posicion: 3,
            usuario: "Leo",
            puntos: 11
        },
        {
            id: 4,
            posicion: 4,
            usuario: "Daniel",
            puntos: 10
        },
        {
            id: 5,
            posicion: 5,
            usuario: "Sebastian",
            puntos: 9
        },
        {
            id: 6,
            posicion: 6,
            usuario: "Angel",
            puntos: 8
        },
        {
            id: 7,
            posicion: 7,
            usuario: "Alberto",
            puntos: 7
        },
        {
            id: 8,
            posicion: 7,
            usuario: "Alberto",
            puntos: 7
        },
        {
            id: 9,
            posicion: 7,
            usuario: "Alberto",
            puntos: 7
        },
        {
            id: 10,
            posicion: 7,
            usuario: "Alberto",
            puntos: 7
        },
    ]

    const renderRanking = ({ item }) => (
        <View style={{ marginBottom: 5, paddingHorizontal: 20, }} key={item.id}>
            <View style={[styles.Puesto, item.posicion === 1 ? styles.Oro : item.posicion === 2 ? styles.Plata : item.posicion === 3 ? styles.Bronce : ""]}>
                <Text style={styles.Posicion}>{item.posicion}°</Text>
                <View style={{ flex: 1, flexDirection: "row", justifyContent: "space-between", paddingRight: 10, }}>
                    <Text className="text-base font-semibold text-slate-200">{item.usuario}</Text>
                    {item.posicion === 1 ? <Entypo name="trophy" size={24} color="#D4AC0D" /> : item.posicion === 2 ? <Entypo name="trophy" size={24} color="#ABB2B9" /> : item.posicion === 3 ? <Entypo name="trophy" size={24} color="#E59866" /> : ""}
                </View>
                <View style={{ flexDirection: "row", gap: 3, }}>
                    <Text style={{ fontSize: 15, fontWeight: "bold", color: "#f3f3f3", }}>{item.puntos}</Text>
                    <Text style={{color: "#f3f3f3",}}>Pts.</Text>
                </View>
            </View>
        </View>
    );

    return (
        <SafeAreaView style={styles.container} className="bg-mundialito_Dos">
            <StatusBar barStyle="light-content" />
            <View className="py-3" style={styles.Header}>
                <Text className="text-xl text-slate-200 text-center">Ranking</Text>
            </View>

            <View>
                <FlatList
                    data={ranking}
                    renderItem={renderRanking}
                    keyExtractor={item => item.id}
                    style={styles.FlatList}
                />
            </View>

        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    Header: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
    },
    Close: {
        position: "absolute",
        right: 20,
        top: 13,
        backgroundColor: "red",
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 3,
    },
    Puesto: {
        flexDirection: "row",
        backgroundColor: "#3A4047",
        paddingVertical: 15,
        borderRadius: 7,
        paddingHorizontal: 10,
        borderWidth: 3,
        borderLeftColor: "#3A4047",
        borderRightColor: "#3A4047",
        borderTopColor: "#3A4047",
        /* borderColor: "#3A4047", */
        borderBottomColor: "#AEB6BF",
        alignItems: "center", 
    },
    Oro: {
        /* backgroundColor: "#D4AC0D", */
        borderWidth: 3,
        borderColor: "#D4AC0D",
    },
    Plata: {
        /* backgroundColor: "#ABB2B9", */
        borderWidth: 3,
        borderColor: "#ABB2B9",
    },
    Bronce: {
        /* backgroundColor: "#E59866", */
        borderWidth: 3,
        borderColor: "#E59866",
    },
    Posicion: { 
        paddingHorizontal: 5, 
        paddingVertical: 2,
        color: "#f3f3f3", 
        backgroundColor: "#2471A3",
        textAlign: "center",
        marginRight: 5,
        borderRadius: 3,
    },
    FlatList: {
        marginBottom: 55,
    }
});