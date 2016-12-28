import React, { Component } from 'react'
import { View, Text, StyleSheet, Button, TextInput } from 'react-native'

import Analytics from 'react-native-firebase-analytics'

export default class AnalyticsScreen extends Component {
  state = {
    user_id: '',
    property_name: '',
    property_value: '',
  }

  async componentDidMount() {
    Analytics.setEnabled(true)
  }

  sendUserId = async () => {
    console.log('sendUserId ' + this.state.user_id)
    Analytics.setUserId(this.state.user_id)
  }

  sendUserProperty = async () => {
    console.log('sendUserProperty ' + this.state.property_value)
    Analytics.setUserProperty(this.state.property_name, this.state.property_value)
  }

  sendCustomEvent = async () => {
    console.log('sendCustomEvent')
    console.log(this.state)
    Analytics.logEvent('tipsi_event', {
      'item_id': 'login'
    });
  }

  handleChangeTextInUserId = (text) => {
    console.log('handleChangeTextInUserId '+text)
      this.setState({
        user_id: text,
      })
  }

  handleChangeTextInPropertyName = (text) => {
    console.log('handleChangeTextInUserId '+text)
      this.setState({
        property_name: text,
      })
  }

  handleChangeTextInPropertyValue = (text) => {
    console.log('handleChangeTextInUserId '+text)
      this.setState({
        property_value: text,
      })
  }

  render() {

    return (
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder = 'Edit your user id'
            onChangeText={this.handleChangeTextInUserId}
          />
        </View>
        <View style={styles.buttonContainer}>
          <Button
            style={styles.button}
            onPress={this.sendUserId}
            title="Send user id"
          />
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder = 'propertyName'
            onChangeText={this.handleChangeTextInPropertyName}
          />
          <TextInput
            style={styles.input}
            placeholder = 'propertyValue'
            onChangeText={this.handleChangeTextInPropertyValue}
          />
        </View>
        <View style={styles.buttonContainer}>
          <Button
            style={styles.button}
            onPress={this.sendUserProperty}
            title="Send user property"
          />
        </View>
        <View style={styles.buttonContainer}>
          <Button
            style={styles.button}
            onPress={this.sendCustomEvent}
            title="Send custom event"
          />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  button: {
    marginBottom: 20,
  },
  buttonContainer: {
    marginBottom: 40
  },
  inputContainer: {
    flexDirection: 'row',
    marginRight: 20,
    marginLeft: 20,
    marginTop: 5,
    marginBottom: 5,
  },
  input: {
    height: 26,
    borderWidth: 0.5,
    borderColor: '#0f0f0f',
    borderRadius: 5,
    flex: 1,
    fontSize: 13,
    padding: 5,
    margin: 5,
  },
})
