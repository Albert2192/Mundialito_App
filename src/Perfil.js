import React, {useContext} from "react";
import { View, Text, StyleSheet, StatusBar, Image, TouchableOpacity } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';
import AsyncStorage from '@react-native-async-storage/async-storage';
import TokenContext from '../Config/TokenContext';

export default function Perfil() {

    const { setIsLoggedIn } = useContext(TokenContext);

    const handleLogout = async () => {
        /* setLoading(true) */
        await AsyncStorage.removeItem('myToken');
        setTimeout(() => {
            setIsLoggedIn(false);
        }, 500);
    };

    return (
        <SafeAreaView style={styles.container} className="bg-mundialito_Dos">
            <StatusBar barStyle="light-content" />
            {/* <Text className="text-xl text-slate-200 text-center py-3">Perfil</Text> */}
            <View style={styles.CardContainer}>
                <Image
                    source={require('../assets/system/user.png')}
                    style={{ width: 80, height: 80}}
                />
                <Text className="text-lg font-semibold my-2 text-slate-300">Alberto Aquino</Text>
                <TouchableOpacity className="bg-red-600 text-center rounded-sm mt-3" style={{width: "50%", alignItems: "center", paddingVertical: 8,}} onPress={handleLogout}>
                    <Text className="text-slate-300">Cerrar Sesión</Text>
                </TouchableOpacity>
            </View>

        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
    },
    CardContainer: {
        marginTop: 15,
        width: "80%",
        backgroundColor: "#454D55",
        alignItems: "center",
        paddingVertical: 20,
        borderRadius: 10, 
    }
});