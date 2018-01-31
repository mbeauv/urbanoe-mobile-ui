// @flow
import React from 'react';
import { View, ActivityIndicator } from 'react-native';

type Props = {
  size?: string,
};

const styles = {
  spinnerStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
};

const Spinner = ({ size }: Props) => (
  <View style={styles.spinnerStyle}>
    <ActivityIndicator size={size} />
  </View>
);

Spinner.defaultProps = {
  size: 'large',
};

export default Spinner;
