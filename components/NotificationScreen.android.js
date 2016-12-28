import React, { Component } from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'

import PushNotification from 'react-native-push-notification'

export default class NotificationScreen extends Component {
  state = {
    message: '',
  }

//  var count = 0

  componentDidMount() {
    PushNotification.configure({

        // (optional) Called when Token is generated (iOS and Android)
        onRegister: function(token) {
            console.log( 'TOKEN:', token );
        },

        // (required) Called when a remote or local notification is opened or received
        onNotification: function(notification) {
            console.log( 'NOTIFICATION:', notification )
            console.log( 'NOTIFICATION.message:', notification.message )
            this.handleNotification(notification)
        },
//        onNotification: this.handleNotification(notification),

        // ANDROID ONLY: GCM Sender ID (optional - not required for local notifications, but is need to receive remote push notifications)
        senderID: "906521633855",


        // Should the initial notification be popped automatically
        // default: true
        popInitialNotification: true,

        /**
          * (optional) default: true
          * - Specified if permissions (ios) and token (android and ios) will requested or not,
          * - if not, you must call PushNotificationsHandler.requestPermissions() later
          */
        requestPermissions: true,
    });
  }

  handlePress = async () => {
       console.log('handlePress')
       PushNotification.localNotification({
           /* Android Only Properties */
           id: '0', // (optional) Valid unique 32 bit integer specified as string. default: Autogenerated Unique ID
           ticker: "My Notification Ticker", // (optional)
           autoCancel: true, // (optional) default: true
           largeIcon: "ic_launcher", // (optional) default: "ic_launcher"
           smallIcon: "ic_notification", // (optional) default: "ic_notification" with fallback for "ic_launcher"
           bigText: "My big text that will be shown when notification is expanded", // (optional) default: "message" prop
           subText: "This is a subText", // (optional) default: none
           color: "red", // (optional) default: system default
           vibrate: true, // (optional) default: true
           vibration: 300, // vibration length in milliseconds, ignored if vibrate=false, default: 1000
           tag: 'some_tag', // (optional) add tag to message
           group: "group", // (optional) add group to message
           ongoing: false, // (optional) set whether this is an "ongoing" notification

           /* iOS and Android properties */
           title: "My Notification Title", // (optional, for iOS this is only used in apple watch, the title will be the app name on other iOS devices)
           message: "My Notification Message", // (required)
           playSound: false, // (optional) default: true
           soundName: 'default', // (optional) Sound to play when the notification is shown. Value of 'default' plays the default sound. It can be set to a custom sound such as 'android.resource://com.xyz/raw/my_sound'. It will look for the 'my_sound' audio file in 'res/raw' directory and play it. default: 'default' (default sound is played)
           number: '10', // (optional) Valid 32 bit integer specified as string. default: none (Cannot be zero)
           actions: '["Yes", "No"]',  // (Android only) See the doc for notification actions to know more
       })
///        /count++
    }

    handleNotification = (notification) => {
      console.log('handleNotification')
      console.log(notification)
    }

  render() {

    return (
      <View style={styles.container}>
        <Text style={styles.header}>
          Notifications Example
        </Text>
        <Text style={styles.instruction}>
          Send message from Firebase Console and you should see bellow your message
        </Text>
        <Text style={styles.header}>
          {this.state.message || 'Waiting for message'}
        </Text>
        <View style={styles.bottomButton}>
        <Button
          title="Send Message"
          onPress={this.handlePress}
        />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  header: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instruction: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
    marginTop: 10,
  },
  button: {
    margin: 20,
  },
  token: {
    height: 20,
  },
  bottomButton: {
    marginTop: 100,
    bottom: 10
  },
  buttonContainer: {
    margin: 10
  },
})
