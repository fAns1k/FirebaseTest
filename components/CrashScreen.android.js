import React, { Component } from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'
import FirebaseCrash from 'react-native-firebase-crash-report';

export default class CrashScreen extends Component {

  handleCrashPress = () => {
       console.log('handleCrashPress')
       //TODO: need crash
       FirebaseCrash.undifinedFunction()
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

    return (
      <View style={styles.container}>
        <Text style={styles.header}>
          Crash report example
        </Text>
        <Text style={styles.instruction}>
          Click button to init crash.
        </Text>
        <Button
          onPress={this.handleCrashPress}
          title="Crash"
        />
        <Text style={styles.instruction}>
          Or use other options.
        </Text>
        <View style={styles.buttonRow}>
          <View style={styles.buttonContainer}>
            <Button
              style={styles.button}
              onPress={this.handleReportPress}
              title="report"
            />
          </View>
          <View style={styles.buttonContainer}>
            <Button
              style={styles.button}
              onPress={this.handleLogPress}
              title="log"
            />
          </View>
          <View style={styles.buttonContainer}>
            <Button
              style={styles.button}
              onPress={this.handleLogcatPress}
              title="logcat"
            />
          </View>
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
  buttonRow: {
    flexDirection: 'row'
  },
  buttonContainer: {
    margin: 10
  },
})
