import React, { useState } from 'react';
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
  const [baseCurrency, setBaseCurrency] = useState('EUR');
  const [quoteCurrency, setQuotecurrency] = useState('GBP');
  const [value, setValue] = useState('100');
  const conversionRate = '1.2345';
  const date = new Date();

  const swapCurrencies = () => {
    setBaseCurrency(quoteCurrency);
    setQuotecurrency(baseCurrency);
  };

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
                  selectedCurrency: baseCurrency,
                  onChange: (currency) => setBaseCurrency(currency),
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
                  selectedCurrency: quoteCurrency,
                })
              }
              editable={false}
            />
            <Text style={styles.text}>
              {`1 ${baseCurrency} = ${conversionRate} ${quoteCurrency} as of ${date}`}
            </Text>
          </View>

          <Button onPress={() => swapCurrencies()} />
        </View>
      </ScrollView>
    </View>
  );
};
