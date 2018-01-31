// @flow

import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Divider } from 'react-native-elements';
import { Style } from '../../common';

type Props = {
  textStyle: Style,
  dividerStyle: Style,
  errorMessage: string,
  errorType: string,
  errorTypeStyle: Style,
};

const styles = StyleSheet.create({
  outerContainer: {
    flexDirection: 'column',
    flex: 1,
    justifyContent: 'flex-end',
  },
});

const ErrorMessage = ({
  textStyle,
  dividerStyle,
  errorMessage,
  errorType,
  errorTypeStyle,
}: Props) => (
  <View style={styles.outerContainer}>
    <Divider style={dividerStyle} />
    <Text style={textStyle}>
      <Text style={errorTypeStyle}>{`${errorType} `}</Text>
      { errorMessage }
    </Text>

  </View>
);

export default ErrorMessage;
