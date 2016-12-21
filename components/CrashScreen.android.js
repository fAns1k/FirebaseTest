import React, { Component } from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'
import FirebaseCrash from 'react-native-firebase-crash-report';

export default class CrashScreen extends Component {
  state = {
    loading: true,
    allowed: true,
    token: null,
  }

  handleCrashPress = () => {
       console.log('handleCrashPress')
       //TODO: need crash
  }

  handleReportPress = () => {
       console.log('handleReportPress')
       FirebaseCrash.report('Test report...');
  }

  handleLogPress = () => {
       console.log('handleLogPress')
       FirebaseCrash.log('Test log')
  }

  handleLogcatPress = () => {
       console.log('handleLogcatPress')
       FirebaseCrash.logcat('Test logcat', 3, 'MyTag');
  }

  render() {
    const { loading, allowed, token } = this.state

    return (
      <View style={styles.container}>
        <Text style={styles.header}>
          Android Pay Example
        </Text>
        <Text style={styles.instruction}>
          Click button to init crash.
        </Text>
        <Button
          onPress={this.handleCrashPress}
          title="Crash"
        />
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
  },
  button: {
    margin: 10,
    borderWidth: 1,
  },
  token: {
    height: 20,
  },
})
