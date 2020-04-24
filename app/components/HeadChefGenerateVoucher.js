import React from "react";
import { StyleSheet, Text, View, SafeAreaView, Image, ScrollView, TouchableOpacity, Button, Alert} from "react-native";
import DatePicker from 'react-native-datepicker'
import InputFieldAndLabelBlack from './InputFieldAndLabelBlack';
import { TextInput } from "react-native-gesture-handler";
import ImagePicker from 'react-native-image-picker';


const HeadChefGenerateVoucher = ({ route, navigation }) => {
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
                <Text style={generateVoucherStyles.txt2}>Desired Promo Code</Text>
                <TextInput style={generateVoucherStyles.input}
                    placeholder = "Enter Code"
                />
                <View >
                <View style={generateVoucherStyles.spacer} />

                <Text style={generateVoucherStyles.txt2}>Start Date</Text>
                <DatePicker
                    style={generateVoucherStyles.date}
                    mode="date"
                    date="20-04-23"
                    placeholder="select date"
                    format="YYYY-MM-DD"
                    minDate="2020-04-23"
                    maxDate="2024-06-01"
                    confirmBtnText="Confirm"
                    cancelBtnText="Cancel"
                    customStyles={{
                    dateIcon: {
                        position: 'absolute',
                        left: 0,
                        top: 4,
                        marginLeft: 0
                    },
                    dateInput: {
                        marginLeft: 36
                    }
                    // ... You can check the source to find the other keys.
                    }}
                />
                </View>
                <View style={generateVoucherStyles.spacer} />
                <View >
                <Text style={generateVoucherStyles.txt2}>End Date</Text>
                <DatePicker
                    style={generateVoucherStyles.date}
                    mode="date"
                    date="21-04-23"
                    placeholder="select date"
                    format="YYYY-MM-DD"
                    minDate="2020-04-23"
                    maxDate="2024-06-01"
                    confirmBtnText="Confirm"
                    cancelBtnText="Cancel"
                    customStyles={{
                    dateIcon: {
                        position: 'absolute',
                        left: 0,
                        top: 4,
                        marginLeft: 0
                    },
                    dateInput: {
                        marginLeft: 36
                    }
                    // ... You can check the source to find the other keys.
                    }}
                />
                </View>

                <View style={generateVoucherStyles.spacer} />
                <Text style={generateVoucherStyles.txt2}>Promo Description</Text>
                <TextInput style={generateVoucherStyles.bigInput}
                    multiline={true}
                    placeholder = "Promo Description/Benefits"
                    
                />
                <TouchableOpacity onPress={launchImagePicker} 
                    style={generateVoucherStyles.button}>
                    <Text style={generateVoucherStyles.txt2}>Upload Handout</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                    style={generateVoucherStyles.selectButton} >
                    <Text style={generateVoucherStyles.txt2}>Create</Text>
                </TouchableOpacity>
            </ScrollView>
		</SafeAreaView>
    );
}

generateVoucherStyles = StyleSheet.create({
    selectButton: {
        backgroundColor: 'green',
        alignItems: 'center',
        margin: 10,
        padding: 5,
        borderRadius: 5
    },
    button: {
        backgroundColor: '#ccc',
        alignItems: 'center',
        margin: 10,
        padding: 5,
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
        width: 200,
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
        fontSize: 16,
        color: 'black',
        marginBottom: 10,
        textAlign: 'left'
    },
    txt2: {
        fontSize: 20,
        color: 'black',
        paddingBottom: 10,
    },

});

export default HeadChefGenerateVoucher;