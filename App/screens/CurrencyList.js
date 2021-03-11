import React, { useContext } from 'react';
import { StatusBar, View, FlatList } from 'react-native';

import { MaterialCommunityIcons } from '@expo/vector-icons';
import colors from '../constants/colors';
import { CurrencyItem } from '../components/CurrencyItem';

import { CurrencyContext } from '../utils/Context';

export default ({ navigation, route = {} }) => {
  // const [apiData, setApiData] = useState([]);

  // useEffect(() => {
  //   fetch('https://api.exchangeratesapi.io/latest')
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log(data);
  //       setApiData([data.base, ...Object.keys(data.rates)]);
  //     })
  //     .catch((err) => console.log(err));
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);

  const { apiData } = useContext(CurrencyContext);

  const params = route.params || {};
  return (
    <View>
      <StatusBar barStyle='dark-content' backgroundColor={colors.white} />
      <FlatList
        data={apiData}
        renderItem={({ item }) => {
          const selected = params.selectedCurrency === item;
          return (
            <CurrencyItem
              style={{ backgroundColor: 'red' }}
              text={item}
              onPress={
                (() => {
                  if (params.onChange) {
                    params.onChange(item);
                  }
                },
                () => navigation.pop())
              }
              rightIcon={
                selected && (
                  <MaterialCommunityIcons
                    name='currency-sign'
                    size={24}
                    color='#9bd1e5'
                  />
                )
              }
            />
          );
        }}
        keyExtractor={(item) => item}
      />
    </View>
  );
};
