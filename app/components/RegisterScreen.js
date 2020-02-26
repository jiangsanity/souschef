import React, {useState} from 'react';
import {
	StyleSheet,
    SafeAreaView,
    Text,
    TouchableOpacity,
    SegmentedControlIOS,
    View,
    Alert
} from 'react-native';
import InputFieldAndLabel from './InputFieldAndLabel';
import * as firebase from 'firebase';


const userTypes = ["SousChef", "HeadChef"];

const RegisterScreen = ({ navigation }) => {
    const [type, setType] = useState(userTypes[0]);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const onPressHandler = () => {
        if (!email.includes('@')) {
            Alert.alert('Error', 'Please enter a valid email.', {text: 'Ok'});
        } else if(password.length < 6) {
            Alert.alert('Error', 'Your password must exceed 5 characters.', {text: 'Ok'});
        } else if (password != confirmPassword) {
            Alert.alert('Error', 'Passwords do not match.', {text: 'Ok'});
        } else {
            // try signing up
            firebase
                .auth()
                .createUserWithEmailAndPassword(email, password)
                .then(userCreds => {
                    const userId = userCreds.user.uid;
                    const queryType = type === userTypes[0] ? "sousChef" : "headChef";
                    const ref = firebase.database().ref(`/users/${queryType}`);
                    const newUser = {
                        info: {
                            email: email,
                            name: name,
                            userId: userId
                        },
                        following: [],
                        completedMeals: [],
                        savedMeals: []
                    };
                    ref.child(userId).set(newUser, () => {
                        navigation.navigate("SousChefMainScreen");
                    });
                    // const ref = firebase.database().ref("users/sousChef/")
                    // navigation.navigate("SousChefMainScreen")
                    // return userCreds.user.updateProfile({
                    //     displayName: name
                    // });
                })
                .catch(err =>  Alert.alert(err.message));
<<<<<<< HEAD

                    
=======
            

>>>>>>> 77b3f0efa038282b3a9ac1e0588868c34672ff36
        }
    }

	return (
		<SafeAreaView style={registerStyles.container}>
            <View style={registerStyles.spacer} />
            <View style={{width: 300}}>
                <Text style={registerStyles.txt}>I am a ...</Text>
            </View>
            <SegmentedControlIOS 
                values={userTypes}
                selectedIndex={userTypes.indexOf(type)}
                style={registerStyles.segmented}
                onChange={(event) => {
                    setType(userTypes[event.nativeEvent.selectedSegmentIndex]);
                }} />
			<InputFieldAndLabel 
                fieldName={"Name"}
                fieldValue={name}
                setFieldValue={setName}
                secure={false} />
            <InputFieldAndLabel 
                fieldName={"Email"}
                fieldValue={email}
                setFieldValue={setEmail}
                secure={false} />
            <InputFieldAndLabel 
                fieldName={"Password"}
                fieldValue={password}
                setFieldValue={setPassword}
                secure={true} />
            <InputFieldAndLabel 
                fieldName={"Confirm Password"}
                fieldValue={confirmPassword}
                setFieldValue={setConfirmPassword}
                secure={true} />
            <TouchableOpacity 
                style={registerStyles.button}
                onPress={onPressHandler} >
                <Text style={registerStyles.txt2}>Register</Text>
            </TouchableOpacity>
		</SafeAreaView>
	)
}

registerStyles = StyleSheet.create({

    segmented: {
        height: 40, 
        width: 300, 
        marginBottom: 40, 
        borderColor: 'white', 
        borderWidth: 2
    },
    spacer: {
        height: 20
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
        fontSize: 24,
        color: 'white',
        marginBottom: 10,
        textAlign: 'left'
    },
    txt2: {
        fontSize: 20,
        color: 'black',
    },
    button: {
        backgroundColor: '#ccc',
        width: 150,
        alignItems: 'center',
        margin: 30,
        padding: 10,
        borderRadius: 5
    },
    input: {
        height: 40,
        width: 300,
        padding: 10,
        backgroundColor: 'white',
        marginBottom: 50,
    }
});

export default RegisterScreen;