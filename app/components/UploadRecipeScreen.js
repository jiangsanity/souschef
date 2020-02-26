import React, { useState, useEffect } from 'react';
import {
	StyleSheet,
	View,
	Text,
	SafeAreaView,
	ScrollView
} from 'react-native';
import YouTube from 'react-native-youtube';

const UploadRecipeScreen = ({ route, navigation }) => {
	// const [ready, setReady] = useState(true);
	// const [state, setState] = useState(null);
	// const [quality, setQuality] = useState(null);
	// const [error, setError] = useState(null);

	// useEffect(() => {
		
	// })

	// const videoID = KVZ-P-ZI6W4

	const { videoID, recipeName, ingredients, length, headChef } = route.params;
	
	return (
		<SafeAreaView style={videoStyles.container}>
			
		</SafeAreaView>

	)
}

const videoStyles = StyleSheet.create({
	video: {
		alignSelf: 'stretch',
		height: 300
	},
	border: {
		borderBottomColor: "#aaa",
		borderBottomWidth: 1
	},
	row: {
		display: "flex",
		flexDirection: "row",
		justifyContent: "space-between",
		padding: 3,
	},
	information:  {
		margin: 10
	},
	large: {
		fontSize: 24,
		fontWeight: "500"
	},
	medium: {
		fontSize: 20
	},
	small: {
		fontSize: 16
	},
	ingredientsContainer: {
		backgroundColor: "#ddd",
		padding: 5,
		margin: 5
	},
	container: {
		display: "flex",
		flexDirection: "column",
		// backgroundColor: '#999'
		margin: 5
		
	}
})

export default UploadRecipeScreen;