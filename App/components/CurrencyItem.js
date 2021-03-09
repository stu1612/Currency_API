import React from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';

import colors from '../constants/colors';

const styles = StyleSheet.create({
  row: {
    paddingHorizontal: 20,
    paddingVertical: 16,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: colors.white,
    marginVertical: 2,
  },
  title: {
    color: colors.text,
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export const CurrencyItem = ({ text, onPress, rightIcon }) => (
  <TouchableOpacity style={styles.row} onPress={onPress}>
    <Text style={styles.title}>{text}</Text>
    {rightIcon}
  </TouchableOpacity>
);
