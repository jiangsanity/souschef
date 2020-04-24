import React from "react";
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

const HeadChefActiveVouchers = ({ route, navigation }) => {

    return (
        <SafeAreaView style={activeVoucherStyles.container}>
            <ScrollView style={activeVoucherStyles.scrollview}>
                <View style={activeVoucherStyles.spacer} />
                <View >
                    <Text style={activeVoucherStyles.txt}>I am a ...</Text>
                </View>
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
                    style={activeVoucherStyles.button}
                    onPress={onPressHandler} >
                    <Text style={activeVoucherStyles.txt2}>Register</Text>
                </TouchableOpacity>
            </ScrollView>
		</SafeAreaView>
    );
}

activeVoucherStyles = StyleSheet.create({
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

export default HeadChefActiveVouchers;