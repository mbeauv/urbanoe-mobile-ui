// @flow

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Divider } from 'react-native-elements';

type Props = {
  title: string,
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  divider: {
    backgroundColor: 'white',
    width: '40%',
  },
});

const DividerHeader = ({ title } : Props) => (
  <View style={styles.container}>
    <Divider style={styles.divider} />
    <Text style={{ color: 'white', paddingLeft: 8, paddingRight: 8 }}>{title}</Text>
    <Divider style={styles.divider} />
  </View>
);

export default DividerHeader;
