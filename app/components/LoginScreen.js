import React, {useState} from 'react';
import {
	StyleSheet,
    SafeAreaView,
    Text,
    TextInput,
    TouchableOpacity,
    View
} from 'react-native';

const LoginScreen = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

	return (
		<SafeAreaView style={loginStyles.container}>
			{/* <Text style={loginStyles.titleText}>
                Login
            </Text> */}
            <View style={loginStyles.spacer}></View>
            <Text style={loginStyles.txt}>Email</Text>
            <TextInput 
                placeholder="Email..." 
                style={loginStyles.input} 
                onChangeText={setEmail}
                value={email}
                autoCapitalize={"none"} />

            <Text style={loginStyles.txt}>Password</Text>
            <TextInput 
                placeholder="Password..." 
                style={loginStyles.input} 
                onChangeText={setPassword}
                value={password}
                secureTextEntry={true} />

            <TouchableOpacity style={loginStyles.button}>
                <Text style={loginStyles.txt2}>Login</Text>
            </TouchableOpacity>
		</SafeAreaView>
	)
}

loginStyles = StyleSheet.create({
    spacer: {
        height: 150
    },
	container: {
		backgroundColor: '#6666aa',
		width: '100%',
        height: '100%',
        flexDirection: 'column',
        alignItems: 'center',
        padding: 100
    },
    titleText: {
        color: 'white',
        fontWeight: 'bold',
        fontStyle: 'italic',
        fontFamily: 'times',
        fontSize: 40,
        paddingTop: 20,
        paddingBottom: 200,
        textAlign: 'center'
    },
    txt: {
        fontSize: 30,
        color: 'white',
        marginBottom: 10
    },
    txt2: {
        fontSize: 20,
        color: 'black',
    },
    button: {
        backgroundColor: '#ccc',
        width: 150,
        alignItems: 'center',
        margin: 50,
        padding: 10,
        borderRadius: 5
    },
    input: {
        height: 50,
        width: 300,
        padding: 10,
        backgroundColor: 'white',
        marginBottom: 50,

    }
});

export default LoginScreen;