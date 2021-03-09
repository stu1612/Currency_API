import React from 'react';
import {
  View,
  StyleSheet,
  StatusBar,
  Dimensions,
  Image,
  Text,
} from 'react-native';

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
  text: {
    color: colors.white,
    fontSize: 16,
    textAlign: 'center',
  },
});

export default () => {
  const baseCurrency = 'EUR';
  const quoteCurrency = 'GBP';
  const conversionRate = '1.2345';
  const date = new Date();

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
          text={baseCurrency}
          value='123'
          onButtonPress={() => alert('todo!')}
          keyboardType='numeric'
          onChangeText={(text) => console.log('text', text)}
        />
        <Input
          text={quoteCurrency}
          value='123'
          onButtonPress={() => alert('todo!')}
          editable={false}
        />
        <Text style={styles.text}>
          {`1 ${baseCurrency} = ${conversionRate} ${quoteCurrency} as of ${date}`}
        </Text>
      </View>
    </View>
  );
};
