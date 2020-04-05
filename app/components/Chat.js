import React, { Component } from 'react';
import { GiftedChat } from 'react-native-gifted-chat';
import { View, StyleSheet } from 'react-native';
import Fire from './Fire';
import LoginScreen from './LoginScreen';

type Props = {
  name?: string,
};

class Chat extends React.Component<Props> {
static navigationOptions = ({ navigation }) => ({
    title: (navigation.state.params || {}).name || 'Chat!',
  });
  state = {
      messages: [],
    };
    get user() {
        // Return our name and our UID for GiftedChat to parse
        return {
          name: LoginScreen.getName(),
          _id: Fire.shared.uid,
        };
      }


  render() {
    return (
        <GiftedChat
                messages={this.state.messages}
                onSend={Fire.shared.send}
                user={this.user}
              />
    );

  }
  componentDidMount() {
      Fire.shared.on(message =>
        this.setState(previousState => ({
          messages: GiftedChat.append(previousState.messages, message),
        }))
      );
  }
  // 2.
  componentWillUnmount() {
    Fire.shared.off();
  }



}

const styles = StyleSheet.create({});

export default Chat;