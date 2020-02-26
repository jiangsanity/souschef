import React, {useState} from 'react';
import {
	StyleSheet,
    Text,
    TextInput,
    View
} from 'react-native';

const InputFieldAndLabel = ({ fieldName, fieldValue, setFieldValue, secure }) => {
    return (
        <View>
            <Text style={registerStyles.txt}>{fieldName}</Text>
            <TextInput 
                placeholder={`${fieldName}...`} 
                style={inputStyles.input} 
                onChangeText={setFieldValue}
                value={fieldValue}
                autoCapitalize={"none"}
                secureTextEntry={secure} />
        </View>
    )
}

inputStyles = StyleSheet.create({
    input: {
        // height: 40,
        // width: 300,
        // padding: 10,
        // backgroundColor: 'white',
        // marginBottom: 40,
        // borderRadius: 5,
        // color: "black"
        borderBottomColor: "white",
        borderBottomWidth: StyleSheet.hairlineWidth,
        height: 40,
        width: 300,
        fontSize: 15,
        color: "white",
        padding: 10,
        marginBottom: 50,
        borderRadius: 5
    },

});

export default InputFieldAndLabel;