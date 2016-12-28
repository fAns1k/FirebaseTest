import React, { Component } from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'

import FCM from 'react-native-fcm'

export default class NotificationScreen extends Component {
  state = {
    message: '',
  }

  componentDidMount() {
    FCM.getFCMToken().then(token => {
         console.log(token)
         // store fcm token in your server
    });

    this.notificationUnsubscribe = FCM.on('notification', this.handleNotification);

    this.refreshUnsubscribe = FCM.on('refreshToken', (token) => {
        console.log(token)
        // fcm token may not be available on first load, catch it here
    });
  }

  componentWillUnmount() {
      // prevent leaking
      this.refreshUnsubscribe();
      this.notificationUnsubscribe();
  }

  handlePress = async () => {
    console.log('handlePress')
    FCM.presentLocalNotification({
        id: "UNIQ_ID_STRING",                               // (optional for instant notification)
        title: "My Notification Title",                     // as FCM payload
        body: "My Local Notification Message",                    // as FCM payload (required)
        sound: "default",                                   // as FCM payload
        priority: "high",                                   // as FCM payload
        click_action: "ACTION",                             // as FCM payload
        number: 10,                                         // Android only
        ticker: "My Notification Ticker",                   // Android only
        auto_cancel: true,                                  // Android only (default true)
        large_icon: "ic_launcher",                           // Android only
        icon: "ic_launcher",                                // as FCM payload, you can relace this with custom icon you put in mipmap
        big_text: "Show when notification is expanded",     // Android only
        sub_text: "This is a subText",                      // Android only
        color: "red",                                       // Android only
        vibrate: 300,                                       // Android only default: 300, no vibration if you pass null
        tag: 'some_tag',                                    // Android only
        group: "group",                                     // Android only
        my_custom_data:'my_custom_field_value',             // extra data you want to throw
        lights: true                                       // Android only, LED blinking (default false)
//            show_in_foreground                                  // notification when app is in foreground (local & remote)
    });
  }

  handleNotification = (notification) => {
    console.log('handleNotification')
    console.log(notification)
    if(notification.local_notification){
      //this is a local notification
      this.setState({
        message: notification.body
      })
    } else {
      this.setState({
        message: notification.fcm.body
      })
    }
  }

  render() {

    return (
      <View style={styles.container}>
        <Text style={styles.header}>
          Notifications Example
        </Text>
        <Text style={styles.instruction}>
          Send message from Firebase Console or click button and you should see bellow your message
        </Text>
        <Text style={styles.header}>
          {this.state.message || 'Waiting for message'}
        </Text>
        <View style={styles.bottomButton}>
        <Button
          title="Send Local Message"
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
    marginRight: 5,
    marginLeft: 5,
  },
  bottomButton: {
    marginTop: 100,
    bottom: 10
  },
})
