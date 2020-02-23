import React from 'react';
import {ActivityIndicator, StyleSheet, Text, View} from 'react-native';
//import * as firebase from 'firebase';
import { firebase } from '@react-native-firebase';
import {Input} from './components/Input';
import {Button} from './components/Button';

export default class App extends React.Component {

    state = {
        email: '',
        password:'',
        authenticating: false,

    }
    componentWillMount() {
        const firebaseConfig = {
            apiKey: 'AIzaSyAnYhPlb9HskZ0BmpfbkVCMKhWbS0wfEsY',
            authDomain:'souschef-50dec.firebaseapp.com ',
        }

        firebase.initializeApp(firebaseConfig)
    }

    onPressSignIn(){
        this.setState({

            authenticating:true,

        });

    }
    renderCurrentState() {

        if (this.state.authenticating) {
            return(
            <View>
            <ActivityIndicator size='large'/>
            </View>

            )

        }

        return (
            <View>
                <Input
                    placeholder="Enter your email..."
                    label='Email'
                    onChangeText={email => this.setState({email})}
                    value={this.state.email}

                />
                <Input
                     placeholder="Enter your email..."
                     label='Password'
                     secureTextEntry
                     onChangeText={password => this.setState({password})}
                     value={this.state.password}

                 />
                 <Button onPress={()=>this.onPressSignIn()}>Log In</Button>

            </View>

        )
    }
    render(){
        return (
            <View style={styles.container}>
                {this.renderCurrentState}
            </View>
        );
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding:20,

    },

});

//import {
    //	StyleSheet,
    //	View,
    //	Text,
    //	SafeAreaView,
    //} from 'react-native';
    //import MyPage from './components/MyPage';
    //import YouTube from 'react-native-youtube';
    //
    //const App = () => {
    //	// const [ready, setReady] = useState(true);
    //	// const [state, setState] = useState(null);
    //	// const [quality, setQuality] = useState(null);
    //	// const [error, setError] = useState(null);
    //
    //	useEffect(() => {
    //
    //	})
    //
    //	return (
    //		// <SafeAreaView style={styles.safeAreaView}>
    //		// 	<YouTube
    //		// 		videoId="KVZ-P-ZI6W4" // The YouTube video ID
    //		// 		play={false} // control playback of video with true/false
    //		// 		fullscreen={false} // control whether the video should play in fullscreen or inline
    //		// 		loop // control whether the video should loop when ended
    //		// 		// onReady={setReady(true)}
    //		// 		// onChangeState={e => setState(e.state)}
    //		// 		// onChangeQuality={e => setQuality(e.quality)}
    //		// 		// onError={e => setError(e.error)}
    //		// 		style={{ alignSelf: 'stretch', height: 300 }}
    //		// 	/>
    //		// </SafeAreaView>
    //		<MyPage
    //			text={"My Text"} />
    //
    //	)
    //}
    //
    //styles = StyleSheet.create({
    //	safeAreaView: {
    //		backgroundColor: '#999'
    //	}
    //})

//export default App;