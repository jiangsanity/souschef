import React, {useState} from 'react';
import {
	StyleSheet,
    SafeAreaView,
    Picker,
    Text,
    TextInput,
    TouchableOpacity,
    SegmentedControlIOS,
    View
} from 'react-native';
import InputFieldAndLabel from './InputFieldAndLabel';

// const userTypes = {
//     sousChef: "SousChef",
//     headChef: "HeadChef"
// }

const userTypes = ["SousChef", "HeadChef"];

const RegisterScreen = () => {
    const [type, setType] = useState(userTypes[0]);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

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
                style={registerStyles.button} >
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