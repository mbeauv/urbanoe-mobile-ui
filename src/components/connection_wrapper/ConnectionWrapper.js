// @flow

import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import ErrorMessage from '../error_message/ErrorMessage';
import { Style } from '../../common';

type Props = {
  connected: bool,
  screenStyle: Style,
  textStyle: Style,
  dividerStyle: Style,
  errorType?: string,
  errorTypeStyle?: Style,
  errorMessage: string,
  children: React.Node,
};

const styles = StyleSheet.create({
  errorTypeStyle: {
    color: 'red',
  },
});

function renderContent(
  connected,
  children,
  textStyle,
  dividerStyle,
  errorMessage,
  errorType,
  errorTypeStyle,
) {
  if (connected) {
    return children;
  }

  return (
    <ErrorMessage
      dividerStyle={dividerStyle}
      errorMessage={errorMessage}
      textStyle={[textStyle, { marginTop: 10 }]}
      errorType={errorType}
      errorTypeStyle={errorTypeStyle}
    />
  );
}

const ConnectionWrapper = ({
  connected,
  screenStyle,
  children,
  textStyle,
  dividerStyle,
  errorMessage,
  errorType,
  errorTypeStyle,
} : Props) => (
  <View style={screenStyle}>
    { renderContent(
        connected,
        children,
        textStyle,
        dividerStyle,
        errorMessage,
        errorType,
        errorTypeStyle,
    )}
  </View>
);

ConnectionWrapper.defaultProps = {
  errorType: 'Error',
  errorTypeStyle: styles.errorTypeStyle,
};

export default ConnectionWrapper;
