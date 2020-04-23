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
// import ImagePicker from 'react-native-image-picker';
import DocumentPicker from 'react-native-document-picker';
// import * as firebase from 'firebase';
// import mediaUpload from './../youtube';
import TOKEN from '../youtube/youtube-token';
import MediaUploader from '../youtube/core-upload';
import fakeUpload from '../youtube/fakeUpload';

const HeadChefUpload = ({ route, navigation }) => {

    const [title, setTitle] = useState("");
    const [length, setLength] = useState("");
    const [tags, setTags] = useState([]);
    const [currTag, setCurrTag] = useState("");
    const [ingredients, setIngredients] = useState([]);
    const [currIngredient, setCurrIngredient] = useState("");
    const [videoFile, setVideoFile] = useState({});
    const [progress, setProgress] = useState(0);
    
    const addCurrIngredient = () => {
        setIngredients(oldIngredients => {
            oldIngredients.push(currIngredient);
            setCurrIngredient("");
            return oldIngredients;
        });
    }

    const addCurrTag = () => {
        setTags(oldTags => {
            oldTags.push(currTag);
            setCurrTag("");
            return oldTags;
        })
    }

    const removeIngredient = (i) => {
        setIngredients(oldIngredients => {
            let removed = oldIngredients.splice(i, 1);
            // there has to be a better way to fo this
            return oldIngredients.filter(item => !removed.includes(item));
        })
    }

    const removeTag = (i) => {
        setTags(oldTags => {
            let removed = oldTags.splice(i, 1);
            // there has to be a better way to fo this
            return oldTags.filter(item => !removed.includes(item));
        })
    }

    const launchImagePicker = () => {
        // ImagePicker.showImagePicker({'mediaType': 'video'}, (response) => {
        //     console.log('Response = ', response);

        //     if (response.didCancel) {
        //         console.log('User cancelled image picker');
        //     } else if (response.error) {
        //         console.log('ImagePicker Error: ', response.error);
        //     } else if (response.customButton) {
        //         console.log('User tapped custom button: ', response.customButton);
        //     } else {
        //         const source = { uri: response.uri };
        //         setVideoFileName(response.fileName);
        //     }
        // });

        // i think we could also use the image picker, but the tutorial had document picker

        DocumentPicker.pick({
            type: [DocumentPicker.types.video],
        }).then((file) => {
            console.log(file);
            setVideoFile(file);
        });
    }

    const sendToFirebase = () => {
        console.log("send to firebase function");
    }

    const mediaUpload = (file) => {

        // eventually this will be replaced with the user's input and all that
        var metadata = {
            snippet: {
                title: title,
                description: `${ingredients.join(', ')}\n${length}`,
                categoryId: 26
            },
            status: {
                privacyStatus: "unlisted",
                embeddable: true,
                license: "youtube"
            }
        }
    
        var uploader = new MediaUploader({
            baseUrl: "https://www.googleapis.com/upload/youtube/v3/videos",
            file: file,
            token: TOKEN.access_token,
            metadata: metadata,
            id: 0,
            params: {
                part: Object.keys(metadata).join(", ")
            },
            onError: (data) => {
                console.log("error", data)
                // onError code
            },
            onProgress: (data) => {
                console.log("Progress", data);
                // onProgress code
                // setProgress(data.loaded / data.total);
                console.log((data.loaded / data.total).toFixed(2))
                setProgress((data.loaded / data.total).toFixed(2));
            },
            onComplete: (data) => {
                console.log("Complete", data);
                // onComplete code
                sendToFirebase();
            }
        });
    
        uploader.upload()
    }

    const uploadVideo = async () => {
        // mediaUpload(videoFile);
        let response = await fakeUpload(videoFile);
        console.log(response);
    }

    const getVideoPreview = () => {
        if (!videoFile.name || videoFile.name === "") {
            return (
                <View style={headChefUploadStyles.buttonContent}>
                    <Icon name="plus" size={30} style={{color: "#bbb"}} />
                    <Text style={headChefUploadStyles.selectText}>Select Video</Text>
                </View>
            )
        } else {
            return (
                <View style={headChefUploadStyles.buttonContent}>
                    <Text style={headChefUploadStyles.selectText}>{videoFile.name}</Text>
                </View>
            )
        }
    }

    const getVideoProgress = () => {
        if (progress > 0) {
            <View>
                <Text>{progress * 100} % uploaded</Text>
            </View>
        }
    }

	return (
		<SafeAreaView style={headChefUploadStyles.container}>
            <ScrollView>
                <Text style={headChefUploadStyles.title}>Upload a Video</Text>
                <TouchableOpacity onPress={launchImagePicker} style={headChefUploadStyles.selectButton}>
                    {getVideoPreview()}
                </TouchableOpacity>
                <View>
                    {getVideoProgress()}
                </View>
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
                        <View style={headChefUploadStyles.row} key={i}>
                            <Text style={headChefUploadStyles.ingredient}>{i + 1}. {ing}</Text>
                            <TouchableOpacity onPress={() => removeIngredient(i)}>
                                <Icon name="times" size={25} style={{color: "#cf5b59"}} />
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
                        <Icon name="plus" size={25} style={{color: "#6c6"}} />
                    </TouchableOpacity>
                </View>
                <View style={headChefUploadStyles.row}>
                    {
                        tags.map((tag, i) => {
                            return (
                                <View style={headChefUploadStyles.tagItem} key={i}>
                                    <Text style={{marginRight: 5}}>{tag}</Text>
                                    <TouchableOpacity onPress={() => removeTag(i)}>
                                        <Icon name="times" size={25} style={{color: "#cf5b59"}} />
                                    </TouchableOpacity>
                                </View>
                            )
                        })
                    }
                    {/* <Text style={{padding: 5}}>{tags.join(", ")}</Text> */}
                </View>
                <View style={headChefUploadStyles.row}>
                    <TextInput 
                        placeholder="Add Tag / Keyword" 
                        style={headChefUploadStyles.input} 
                        onChangeText={setCurrTag}
                        value={currTag}
                        autoCapitalize={"none"} />
                    <TouchableOpacity onPress={addCurrTag}>
                        <Icon name="plus" size={25} style={{color: "#6c6"}} />
                    </TouchableOpacity>
                </View>
                <View style={headChefUploadStyles.buttonWrapper}>
                    <TouchableOpacity style={headChefUploadStyles.uploadButton} onPress={uploadVideo}>
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
        borderRadius: 0,
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
        borderRadius: 0,
        flex: 1,
        marginBottom: 5
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
        flexWrap: "wrap"
    },
    tagItem: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        margin: 3,
        backgroundColor: "#ded",
        padding: 3,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: "#aba"
    },
    uploadButton: {
        padding: 5,
        marginTop: 15,
        backgroundColor: "#6c6",
        alignItems: "center",
        width: 150,
        borderRadius: 20
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