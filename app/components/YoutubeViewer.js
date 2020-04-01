import React, { useState, useEffect } from 'react';
import {
	StyleSheet,
	View,
	Text,
	SafeAreaView,
	ScrollView
} from 'react-native';
import YouTube from 'react-native-youtube';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import * as firebase from 'firebase';

const YoutubeViewer = ({ route, navigation }) => {

	const { videoID, recipeName, ingredients, length, headChef, user } = route.params;

	const [favorite, setFavorite] = useState(false);

	useEffect(() => {
		let userRef = firebase.database().ref(`users/${user.userType}/${user.uid}`);

		userRef.once('value').then(snapshot => {
			let userVal = snapshot.val();
			if (userVal["favorites"] && userVal["favorites"].includes(videoID)) {
				setFavorite(true);
			}
		});
	}, []);

	const toggleFavorite = () => {
		setFavorite(oldFavorite => {
			return !oldFavorite;
		});

		let userRef = firebase.database().ref(`users/${user.userType}/${user.uid}`);
		
		userRef.once('value').then(snapshot => {
			let userVal = snapshot.val();
			
			if (!userVal["favorites"]) {
				// doesn't have any favorites --> add it
				userRef.child("favorites").set([videoID]);
			} else if (userVal["favorites"] && !userVal["favorites"].includes(videoID)) {
				// has favorites but not this video --> add it
				userRef.child("favorites").set([...userVal["favorites"], videoID]);
			} else if (userVal["favorites"] && userVal["favorites"].includes(videoID)) {
				// has favorites that include this video --> remove it
				userRef.child("favorites").set(userVal["favorites"].filter(id => id !== videoID));
			}
		});
	}

	const displayProfileViewer = () => {
		navigation.navigate("ProfileViewer");
	}

	return (
		<SafeAreaView style={videoStyles.container}>
			<View>
				<YouTube
					videoId={videoID} // The YouTube video ID
					play={false} // control playback of video with true/false
					fullscreen={false} // control whether the video should play in fullscreen or inline
					loop // control whether the video should loop when ended
					// onReady={setReady(true)}
					// onChangeState={e => setState(e.state)}
					// onChangeQuality={e => setQuality(e.quality)}
					// onError={e => setError(e.error)}
					style={videoStyles.video}
				/>
			</View>
			
			<View style={videoStyles.information}>
				<View style={videoStyles.row}>
					<Icon
						name={"star" + (favorite ? "" : "-o")} 
						size={30} 
						color="black"
						onPress={toggleFavorite} />
				</View>
				<View style={videoStyles.row}>
					<Text style={videoStyles.large}>{recipeName}</Text>
					<Text style={videoStyles.large}>5/5 stars</Text>
				</View>
				<View style={videoStyles.row}>
					<Text onPress={displayProfileViewer} style={[videoStyles.medium, videoStyles.underlined]}>{headChef}</Text>
					<Text style={videoStyles.medium}>{length} mins</Text>
				</View>
				<View style={videoStyles.border}></View>
				<View style={{padding: 3}}>
					<Text style={videoStyles.medium}>Ingredients</Text>
					<ScrollView style={videoStyles.ingredientsContainer}>
						{ingredients.map(i => {
							return (
								<Text style={videoStyles.small} key={i}> - {i}</Text>
							)
						})}
					</ScrollView>
				</View>
			</View>
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
	underlined: {
		textDecorationLine: "underline",
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

export default YoutubeViewer;