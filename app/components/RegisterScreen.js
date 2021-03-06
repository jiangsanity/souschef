import React, {useState} from 'react';
import {
	StyleSheet,
    SafeAreaView,
    Text,
    TouchableOpacity,
    SegmentedControlIOS,
    View,
    Alert,
    ScrollView,
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
                        if (type === userTypes[0]) {
                            console.log("navigation to souschef");
                            navigation.navigate("SousChefMainScreen", {user: userCreds.user});
                        } else if (type === userTypes[1]) {
                            navigation.navigate("HeadChefMainScreen", {user: userCreds.user});
                        }
                    });
                    // const ref = firebase.database().ref("users/sousChef/")
                    // navigation.navigate("SousChefMainScreen")
                    // return userCreds.user.updateProfile({
                    //     displayName: name
                    // });
                })
                .catch(err =>  Alert.alert(err.message));
                    
        }
    }

	return (
		<SafeAreaView style={registerStyles.container}>
            <ScrollView style={registerStyles.scrollview}>
                <View style={registerStyles.spacer} />
                <View >
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
            </ScrollView>
		</SafeAreaView>
	)
}

registerStyles = StyleSheet.create({
    scrollview: {
        marginHorizontal: 30,
        width: "75%"
    },
    segmented: {
        height: 40, 
        marginBottom: 40, 
        borderColor: 'white', 
        borderWidth: 2
    },
    spacer: {
        height: 20
    },
	container: {
		backgroundColor: '#4d7bb0',
		width: '100%',
        height: '100%',
        flexDirection: 'column',
        flex: 1,
        alignItems: 'center',
        padding: 50
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
        alignItems: 'center',
        margin: 20,
        padding: 10,
        borderRadius: 5
    },
});

export default RegisterScreen;