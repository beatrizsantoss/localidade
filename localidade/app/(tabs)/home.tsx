import { View, Text, TouchableOpacity, Image, StyleSheet, Platform } from 'react-native';
import {useRouter} from 'expo-router';

export default function Home(){
    const router= useRouter();

    return(
    <View style={styles.container}>
        <Text style={styles.titulo}>Página Principal</Text>
        <TouchableOpacity style={styles.botao} onPress={() => router.push('/localidade')}>
        <Text style={styles.textobotao}> Entrar</Text>
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