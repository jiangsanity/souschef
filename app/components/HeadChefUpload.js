import React, { useState, useEffect } from 'react';
import {
	StyleSheet,
	View,
	Text,
	SafeAreaView,
    ScrollView,
    TouchableOpacity,
    TextInput
} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import ImagePicker from 'react-native-image-picker';
import * as firebase from 'firebase';

const HeadChefUpload = ({ route, navigation }) => {

    const [title, setTitle] = useState("");
    const [length, setLength] = useState("");
    const [ingredients, setIngredients] = useState([]);
    const [currIngredient, setCurrIngredient] = useState("");
    const [videoFileName, setVideoFileName] = useState("");
    
    const addCurrIngredient = () => {
        setIngredients(oldIngredients => {
            oldIngredients.push(currIngredient);
            setCurrIngredient("");
            return oldIngredients;
        });
    }

    const removeIngredient = (i) => {
        setIngredients(oldIngredients => {
            let removed = oldIngredients.splice(i, 1);
            // there has to be a better way to fo this
            return oldIngredients.filter(item => !removed.includes(item));
        })
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

    const getVideoPreview = () => {
        if (videoFileName === "") {
            return (
                <View style={headChefUploadStyles.buttonContent}>
                    <Icon name="plus" size={30} style={{color: "#bbb"}} />
                    <Text style={headChefUploadStyles.selectText}>Select Video</Text>
                </View>
            )
        } else {
            return (
                <View style={headChefUploadStyles.buttonContent}>
                    <Text style={headChefUploadStyles.selectText}>{videoFileName}</Text>
                </View>
            )
        }
    }

	return (
		<SafeAreaView style={headChefUploadStyles.container}>
            <ScrollView>
                <Text style={headChefUploadStyles.title}>Upload a Video</Text>
                <TouchableOpacity onPress={launchImagePicker} style={headChefUploadStyles.selectButton}>
                    {getVideoPreview()}
                </TouchableOpacity>
                <TextInput 
                    placeholder="Recipe Name" 
                    style={headChefUploadStyles.input} 
                    onChangeText={setTitle}
                    value={title}
                    autoCapitalize={"none"} />
                <TextInput 
                    placeholder="Length" 
                    style={headChefUploadStyles.input} 
                    onChangeText={setLength}
                    value={length}
                    autoCapitalize={"none"} />
                {ingredients.map((ing, i) => {
                    return (
                        <View style={headChefUploadStyles.row}>
                            <Text style={headChefUploadStyles.ingredient}> - {ing}</Text>
                            <TouchableOpacity onPress={() => removeIngredient(i)}>
                                <Icon name="minus" size={25} style={{color: "#cc3333"}} />
                            </TouchableOpacity>
                        </View>
                    )
                })}
                <View style={headChefUploadStyles.row}>
                    <TextInput 
                        placeholder="Add ingredient" 
                        style={headChefUploadStyles.input} 
                        onChangeText={setCurrIngredient}
                        value={currIngredient}
                        autoCapitalize={"none"} />
                    <TouchableOpacity onPress={addCurrIngredient}>
                        <Icon name="plus" size={25} style={{color: "#999"}} />
                    </TouchableOpacity>
                </View>
                <View style={headChefUploadStyles.buttonWrapper}>
                    <TouchableOpacity style={headChefUploadStyles.uploadButton}>
                        <Text style={headChefUploadStyles.uploadButtonText}>Upload</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView>
	);
}

const headChefUploadStyles = StyleSheet.create({
	container: {
        margin: 8
    },
    title: {
        textAlign: "center",
        fontSize: 28,
        marginBottom: 8,
        fontFamily: "HelveticaNeue",
        fontWeight: "200"
    },
    selectButton: {
        borderWidth: 1,
        borderColor: "#999",
        backgroundColor: "#ddd",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        borderRadius: 5,
        marginBottom: 10
    },
    buttonContent: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        margin: 90
    },
    selectText: {
        color: "#aaa",
        fontSize: 24,
        fontWeight: "300"
    },
    input: {
        borderBottomColor: "#888",
        borderBottomWidth: StyleSheet.hairlineWidth,
        height: 40,
        fontSize: 15,
        color: "black",
        padding: 5,
        borderRadius: 5,
        flex: 1,
        marginBottom: 10
    },
    ingredient: {
        padding: 5,
        flex: 1,
        height: 30
    },
    row: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
    },
    uploadButton: {
        padding: 5,
        backgroundColor: "#4a4",
        alignItems: "center",
        width: 150,
        borderRadius: 5
    },
    uploadButtonText: {
        fontSize: 24
    },
    buttonWrapper: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around"
    }
})

export default HeadChefUpload;