import React, { useState, useRef } from 'react';
import { View, Text, StyleSheet, TextInput, Button, Keyboard } from 'react-native';
import firebase from '../../fireBaseConfig';
import { useNavigation, StackActions } from '@react-navigation/native';


console.disableYellowBox = true;

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const inputFocus = useRef(null);
    const [visible, setVisible] = useState(true);
    const [user, setUser] = useState('');

    const navigation = useNavigation();

    async function login() {
        await firebase.auth().signInWithEmailAndPassword(email, password)
            .then((value) => {
                alert("Bem Vindo: " + value.user.email);
                setUser(value.user.email);
                // navigation.navigate('Cadastro')

            })
            .catch((error) => {
                alert("Ops algo deu errado!")
                return;
            })

        setEmail('');
        setPassword('');
        Keyboard.dismiss();
        inputFocus.current.focus();
    }


    async function logout() {
        await firebase.auth().signOut();
        setUser('');
        alert("Deslogado com sucesso!")
    }

    function voltar() {
        navigation.dispatch(StackActions.popToTop());
    }

    return (
        <View style={styles.container}>
            <Text style={styles.texto}> Login </Text>
            <TextInput
                style={styles.input}
                underlineColorAndroid="transparent"
                onChangeText={(texto) => setEmail(texto)}
                value={email}
                ref={inputFocus}
            />
            <Text style={styles.texto}> Senha </Text>
            <TextInput
                style={styles.input}
                underlineColorAndroid="transparent"
                onChangeText={(texto) => setPassword(texto)}
                value={password}
                secureTextEntry={visible}
            />

            <Button
                title=" Acessar "
                onPress={login}
            >
            </Button>
            <Text style={styles.text1}>
                {user}
            </Text>

            {user.length > 0 ? (


                <Button
                    title="Sair"
                    onPress={logout}
                />

            ) : (
                <Text style={styles.text1}> Nenhum usuario esta logado </Text>
            )}

            {user.length == 0 ? (

                <View style={styles.viewBtn}>
                    <Button
                        title="Voltar para o Cadastro"
                        onPress={voltar}
                    />
                </View>

            ) :
                (
                  <View/>
                )}



        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 10
    },
    texto: {
        fontSize: 20
    },
    input: {
        marginBottom: 10,
        padding: 10,
        borderWidth: 1,
        borderColor: "#121212",
        height: 45,
        fontSize: 17
    },
    text1: {
        marginTop: 20,
        marginBottom: 20,
        fontSize: 23,
        textAlign: 'center'
    },
    viewBtn: {
        marginTop: 10
    }
});