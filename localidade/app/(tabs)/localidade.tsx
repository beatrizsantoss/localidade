import { View, Text, Image, StyleSheet, Platform, TouchableOpacity } from 'react-native';
import {useRouter} from 'expo-router';

export default function Localidade(){
    const router= useRouter();

    return(
    <View style={styles.container}>
        <Text style={styles.titulo}>Página Localidade</Text>
        <TouchableOpacity style={styles.botao} onPress={() => router.push('/home')}>
        <Text style={styles.textobotao}> Voltar</Text>
    </TouchableOpacity>
    </View>
    )
}
    const styles = StyleSheet.create({
        container: {
            flex: 1,
            justifyContent: 'center',
        },
        titulo: {
            fontSize: 40,
            textAlign: 'left',
        },
        botao: {
            backgroundColor: '#4169E1',
            paddingVertical: 15,
            paddingHorizontal: 150,
            borderRadius: 10,
        },
        textobotao: {
            color: '#FFF',
            fontSize: 20,

        }
        });