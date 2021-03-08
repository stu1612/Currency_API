import React, { useEffect } from 'react';
import { View, Text } from 'react-native';

import axios from 'axios';

export const Home = () => {
  async function getData() {
    try {
      const res = await axios.get('https://api.exchangeratesapi.io/latest');
      console.log(res.data.rates);
    } catch (err) {
      console.error(err);
    }
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <View>
      <Text>Hello Stu</Text>
    </View>
  );
};
