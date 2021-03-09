import React from 'react';
import { View, StyleSheet, StatusBar, Dimensions, Image } from 'react-native';

import { Input } from '../components/Input';
import colors from '../constants/colors';

const screen = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.blue,
    justifyContent: 'space-evenly',
  },
  logoContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    // marginBottom: 20,
  },

  logo: {
    position: 'absolute',
    width: screen.width * 0.45,
    height: screen.width * 0.45,
  },
});

export default () => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle='light-content' backgroundColor={colors.blue} />
      <View style={styles.logoContainer}>
        <Image
          source={require('../assets/images/logo.png')}
          style={styles.logo}
          resizeMode='contain'
        />
      </View>
      <View>
        <Input
          text='USD'
          value='123'
          onButtonPress={() => alert('todo!')}
          keyboardType='numeric'
          onChangeText={(text) => console.log('text', text)}
        />
        <Input text='GBP' value='123' onButtonPress={() => alert('todo!')} />
      </View>
    </View>
  );
};
