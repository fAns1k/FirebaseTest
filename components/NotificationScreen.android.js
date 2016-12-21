import React, { Component } from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'

export default class NotificationScreen extends Component {
  state = {
    loading: true,
    allowed: true,
    token: null,
  }

//  async componentDidMount() {
//    const allowed = await stripe.deviceSupportsAndroidPay()
//    this.setState({ allowed, loading: false })
//  }

  handleCrashPress = async () => {
       console.log('handleCrashPress')
//    try {
//      this.setState({
//        loading: true,
//        token: null,
//      })
//      const token = await stripe.paymentRequestWithAndroidPay({
//        total_price: '100.00',
//        currency_code: 'USD',
//        line_items: [{
//          currency_code: 'USD',
//          description: 'Whisky',
//          total_price: '50.00',
//          unit_price: '50.00',
//          quantity: '1',
//        }, {
//          currency_code: 'USD',
//          description: 'Vine',
//          total_price: '30.00',
//          unit_price: '30.00',
//          quantity: '1',
//        }, {
//          currency_code: 'USD',
//          description: 'Tipsi',
//          total_price: '20.00',
//          unit_price: '20.00',
//          quantity: '1',
//        }],
//      })
//      console.log('Result:', token) // eslint-disable-line no-console
//      this.setState({
//        loading: false,
//        token,
//      })
//    } catch (error) {
//      console.log('Error:', error) // eslint-disable-line no-console
//      this.setState({
//        loading: false,
//      })
//    }
  }

  render() {
    const { loading, allowed, token } = this.state

    return (
      <View style={styles.container}>
        <Text style={styles.header}>
          Notifications Example
        </Text>
        <View style={styles.bottomButton}>
        <Button
          title="Send Message"
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
    bottom: 10
  },
  buttonContainer: {
    margin: 10
  },
})
