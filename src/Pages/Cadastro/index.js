import React, { useState, useRef } from 'react';
import { View, Text, StyleSheet, TextInput, Button, Keyboard } from 'react-native';
import firebase from '../../fireBaseConfig';
import { useNavigation } from '@react-navigation/native';


console.disableYellowBox = true;

export default function Cadastro() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const inputFocus = useRef(null)
  const [visible, setVisible] = useState(true)
  const [nome, setNome] = useState('');

  const navigation = useNavigation();


  async function cadastrar() {
    await firebase.auth().createUserWithEmailAndPassword(email, password)
      .then((value) => {
        firebase.database().ref('usuarios').child(value.user.uid).set({
          nome: nome,
          email: email,
          password: password
          
        })
        alert("Usuario Criado: " + value.user.email);
        navigation.navigate('Login');
      })
      .catch((error) => {
        if (error.code === 'auth/weak-password') {
          alert("Sua senha deve ter pelo menos 6 caracteres");
          return;
        }
        if (error.code === 'auth/invalid-email') {
          alert('Email invalido');
          return;
        } else {
          alert("Ops algo deu errado!")
          return;
        }
      })

    setEmail('');
    setPassword('');
    setNome('');
    Keyboard.dismiss();
    inputFocus.current.focus();

  }

  return (
    <View style={styles.container}>
      <Text style={styles.texto}> Nome </Text>
      <TextInput
        style={styles.input}
        underlineColorAndroid="transparent"
        onChangeText={(nome) => setNome(nome)}
        value={nome}
        ref={inputFocus}
      />
      <Text style={styles.texto}> Email </Text>
      <TextInput
        style={styles.input}
        underlineColorAndroid="transparent"
        onChangeText={(texto) => setEmail(texto)}
        value={email}
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
        title=" Cadastrar "
        onPress={cadastrar}
      >
      </Button>


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
  }
});