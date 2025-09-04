import React from 'react';
import { StyleSheet } from 'react-native';
import {View, Text,TextInput,Button} from 'react-native';

export default function LogIn() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Log In</Text>
            <TextInput placeholder="Email" style={styles.input} keyboardType="email-address" />
            <TextInput placeholder="Password" style={styles.input} secureTextEntry />
            <Button title="Log In" onPress={() => { /* Handle log-in logic */ }} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
    },
});
