import React, { useState, useEffect } from 'react';
import {
	StyleSheet,
	View,
	Text,
	SafeAreaView,
	ScrollView
} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import * as firebase from 'firebase';

const Favorites = ({ route, navigation }) => {

	const { user } = route.params;
	
	const [favorites, setFavorites] = useState([]);

	useEffect(() => {
		let userRef = firebase.database().ref(`users/${user.userType}/${user.uid}`);

		userRef.on('value', snapshot => {
			// updates every time the user adds or removes one from favorites
			let userVal = snapshot.val();
			setFavorites(userVal["favorites"]);
		});
		
	}, []);

	return (
		<SafeAreaView style={{margin: 10}}>
			<Text style={{fontWeight: "bold"}}>Favorite video IDs</Text>
			<Text style={{fontWeight: "bold", color: "red"}}>This screen can't show the video info until we get uploading working.</Text>
			<View>
				{favorites.map(videoID => {
					return (
						<Text key={videoID}>{videoID}</Text>
					)
				})}
			</View>
		</SafeAreaView>

	)
}

const favoritesStyles = StyleSheet.create({
	
})

export default Favorites;