import React from 'react';
import { StyleSheet } from 'react-native';
import {View, Text,TextInput,Button} from 'react-native';

export default function SignUp() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Sign Up</Text>
            {/* Add your sign-up form elements here */}
            <TextInput placeholder="Username" style={styles.input} />
            <TextInput placeholder="Email" style={styles.input} keyboardType="email-address" />
            <TextInput placeholder="Password" style={styles.input} secureTextEntry />
            <Button title="Sign Up" onPress={() => { /* Handle sign-up logic */ }} />,
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
