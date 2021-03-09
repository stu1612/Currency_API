import React, { useEffect, useState } from 'react';
import { Text, View, FlatList } from 'react-native';

export default () => {
  const [apiData, setApiData] = useState([]);

  useEffect(() => {
    fetch('https://api.exchangeratesapi.io/latest')
      .then((res) => res.json())
      .then((data) => {
        console.log(apiData);
        setApiData([data.base, ...Object.keys(data.rates)]);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <FlatList
      data={apiData}
      renderItem={({ item }) => (
        <View>
          <Text>{item}</Text>
        </View>
      )}
      keyExtractor={(item) => item}
    />
  );
};
