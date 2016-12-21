/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { TabViewAnimated, TabBarTop } from 'react-native-tab-view'
import CrashScreen from './components/CrashScreen'
import AnalyticsScreen from './components/AnalyticsScreen'
import NotificationScreen from './components/NotificationScreen'

export default class FirebaseTest extends Component {
  state = {
    index: 0,
    routes: [
      { key: '1', title: 'Crash' },
      { key: '2', title: 'Analytics' },
      { key: '3', title: 'Notifications' },
    ],
  };

  handleChangeTab = (index) => {
    this.setState({ index })
  }

  renderHeader = props => (
    <TabBarTop
      {...props}
      indicatorStyle={styles.indicator}
      style={styles.tabbar}
      tabWidth={10}
      renderLabel={this.renderLabel}
    />
  )

  renderLabel = ({ route, index }) => (
    <Text
      accessible
      accessibilityLabel={`headerTab_${index}`}
      style={[styles.label]}>
      {route.title.toUpperCase()}
    </Text>
  )

  renderScene = ({ route }) => {
    switch (route.key) {
    case '1':
      return <CrashScreen />
    case '2':
      return <AnalyticsScreen />
    case '3':
      return <NotificationScreen />
    default:
      return null
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.statusbar} />
        <TabViewAnimated
          style={styles.tabsContainer}
          navigationState={this.state}
          renderScene={this.renderScene}
          renderHeader={this.renderHeader}
          onRequestChangeTab={this.handleChangeTab}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  statusbar: {
    height: 0,
  },
  tabsContainer: {
    flex: 1,
  },
  tabbar: {
    height: 48,
    backgroundColor: '#fff',
  },
  page: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  indicator: {
    backgroundColor: '#000',
  },
  label: {
    color: '#000',
    fontSize: 10,
    fontWeight: '600',
    textAlign: 'center',
  },
})

AppRegistry.registerComponent('FirebaseTest', () => FirebaseTest);
