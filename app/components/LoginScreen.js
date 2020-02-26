import React, {useState} from 'react';
import {
	StyleSheet,
    SafeAreaView,
    Text,
    TextInput,
    TouchableOpacity,
    View,
    Alert
} from 'react-native';
import * as firebase from 'firebase';

const LoginScreen = ({ navigation }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const tryLogin = () => {
        firebase
            .auth()
            .signInWithEmailAndPassword(email, password)
            .then(userCreds => {
                const { user } = userCreds;
                const sousChefsRef = firebase.database().ref("users/sousChef");
                sousChefsRef.on('value', (snapshot) => {
                    let sousChefs = snapshot.val();
                    if (Object.keys(sousChefs).includes(user.uid)) {
                        navigation.navigate("SousChefMainScreen", {user: user});
                    } else {
                        navigation.navigate("HeadChefMainScreen", {user: user});
                    }
                });
            })
            .catch(err => Alert.alert(err.message));
    }

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

            <TouchableOpacity 
                style={loginStyles.button}
                onPress={tryLogin} >
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
		backgroundColor: '#4d7bb0',
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
        borderBottomColor: "white",
        borderBottomWidth: StyleSheet.hairlineWidth,
        height: 40,
        width: 300,
        fontSize: 15,
        color: "white",
        padding: 10,
        marginBottom: 50,
        borderRadius: 5
    }
});

export default LoginScreen;