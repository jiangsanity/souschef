import React from "react";
import { StyleSheet, Text, View, SafeAreaView, Image, ScrollView, TouchableOpacity, Button, Alert} from "react-native";
import DatePicker from 'react-native-datepicker'
import InputFieldAndLabelBlack from './InputFieldAndLabelBlack';
import { TextInput } from "react-native-gesture-handler";
import ImagePicker from 'react-native-image-picker';


const SousChefRedeemVoucher = ({ route, navigation }) => {
    const handleRedeem = () => { 
       Alert.alert('Successfully Redeemed FARFARINA');
       navigation.navigate("SousChefMyProfile", {});
    }

    const launchImagePicker = () => {
        ImagePicker.showImagePicker({'mediaType': 'video'}, (response) => {
            console.log('Response = ', response);

            if (response.didCancel) {
                console.log('User cancelled image picker');
            } else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
            } else if (response.customButton) {
                console.log('User tapped custom button: ', response.customButton);
            } else {
                const source = { uri: response.uri };
                setVideoFileName(response.fileName);
            }
        });
    }

    return (
        <SafeAreaView style={generateVoucherStyles.container}>
            <ScrollView style={generateVoucherStyles.scrollview}>
                <View style={generateVoucherStyles.spacer} />
                <View style={generateVoucherStyles.spacer} />
                <Text style={generateVoucherStyles.txt2}>Enter Promo Code</Text>
                <TextInput style={generateVoucherStyles.input}
                    placeholder = "Enter Code"
                />
                <View style={generateVoucherStyles.spacer} />

                <TouchableOpacity onPress={handleRedeem} 
                    style={generateVoucherStyles.button}>
                    <Text style={generateVoucherStyles.txt}>Redeem</Text>
                </TouchableOpacity>
            </ScrollView>
		</SafeAreaView>
    );
}

generateVoucherStyles = StyleSheet.create({
    button: {
        backgroundColor: 'green',
        alignItems: 'center',
        borderRadius: 5
    },
    scrollview: {
        marginHorizontal: 30,
        width: "75%"
    },
    date: {
        width: 200,
        height: 30,
        borderRadius: 5,
        
    },
    input: {
        paddingTop: 10,
        padding: 10,
        height: 40,
        width: 310,
        fontSize: 20,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 5
    },
    bigInput: {
        paddingTop: 10,
        padding: 10,
        height: 300,
        width: 310,
        fontSize: 20,
        borderColor: 'gray',
        borderRadius: 5,
        borderWidth: 1
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
		backgroundColor: 'white',
		width: '100%',
        height: '100%',
        flexDirection: 'column',
        flex: 1,
        alignItems: 'center',
        padding: 50
    },
    titleText: {
        color: 'black',
        fontWeight: 'bold',
        fontStyle: 'italic',
        fontFamily: 'times',
        fontSize: 40,
        paddingTop: 20,
        paddingBottom: 200,
        textAlign: 'center'
    },
    txt: {
        fontSize: 20,
        color: 'white',
        marginBottom: 10,
        textAlign: 'left'
    },
    txt2: {
        fontSize: 20,
        color: 'black',
        paddingBottom: 10,
    },

});

export default SousChefRedeemVoucher;