import React, { useState, useContext } from 'react';
import {
  View,
  StyleSheet,
  StatusBar,
  Dimensions,
  Image,
  Text,
  ScrollView,
} from 'react-native';
import colors from '../constants/colors';

import { Input } from '../components/Input';
import { Button } from '../components/Button';

import { CurrencyContext } from '../utils/Context';

const screen = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.blue,
  },
  logoContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    // marginBottom: 20,
  },
  content: {
    paddingTop: screen.height * 0.2,
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

export default ({ navigation }) => {
  const {
    baseCurrency,
    quoteCurrency,
    swapCurrencies,
    dateData,
    currencyRate,
  } = useContext(CurrencyContext);
  const [value, setValue] = useState('100');

  const conversionRate = currencyRate[quoteCurrency];

  console.log(currencyRate);

  return (
    <View style={styles.container}>
      <ScrollView>
        <StatusBar barStyle='light-content' backgroundColor={colors.blue} />
        <View style={styles.content}>
          <View style={styles.logoContainer}>
            <Image
              source={require('../assets/images/logo.png')}
              style={styles.logo}
              resizeMode='contain'
            />
          </View>
          <View style={{ marginTop: 100 }}>
            <Input
              text={baseCurrency}
              value={value}
              onButtonPress={() =>
                navigation.push('CurrencyList', {
                  title: 'Base Currency',
                  activeCurrency: baseCurrency,
                  isBaseCurrency: true,
                })
              }
              keyboardType='numeric'
              onChangeText={(text) => setValue(text)}
            />
            <Input
              text={quoteCurrency}
              value={
                value && `${(parseFloat(value) * conversionRate).toFixed(2)}`
              }
              onButtonPress={() =>
                navigation.push('CurrencyList', {
                  title: 'Quote Currency',
                  activeCurrency: quoteCurrency,
                  isBaseCurrency: false,
                })
              }
              editable={false}
            />
            <Text style={styles.text}>
              {`1 ${baseCurrency} = ${conversionRate} ${quoteCurrency} as of ${dateData}`}
            </Text>
          </View>

          <Button onPress={() => swapCurrencies()} />
        </View>
      </ScrollView>
    </View>
  );
};
