// @flow

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

type Props = {
  fixed: bool,
  label?: string,
  textStyle?: number,
  width?: number,
  height?: number,
};

const styles = StyleSheet.create({
  outerContainerFixed: {
    backgroundColor: 'green',
    flexDirection: 'column',
    justifyContent: 'center',
    paddingLeft: 5,
    paddingRight: 5,
    borderRadius: 4,
    height: 26,
  },
  outerContainerNotFixed: {
    backgroundColor: 'red',
    flexDirection: 'column',
    justifyContent: 'center',
    paddingLeft: 5,
    paddingRight: 5,
    borderRadius: 4,
  },
});

function value(fixed) {
  return fixed ? 'FIXED' : 'NOT FIXED';
}

function valueStyle(fixed) {
  return fixed ? styles.outerContainerFixed : styles.outerContainerNotFixed;
}

function renderSimpleStatus(fixed, textStyle, width, height) {
  return (
    <View style={[valueStyle(fixed), { width, height }]}>
      <Text style={textStyle}>{value(fixed)}</Text>
    </View>
  );
}

function renderStatusWithLabel(fixed, label, textStyle, width, height) {
  return (
    <View style={[valueStyle(fixed), { width, height }]}>
      <Text style={textStyle}>{label}</Text>
      <Text style={textStyle}>{value(fixed)}</Text>
    </View>
  );
}

function renderWithStatus(fixed, label, textStyle, width, height) {
  return label ? renderStatusWithLabel(fixed, label, textStyle, width, height) :
    renderSimpleStatus(fixed, textStyle, width, height);
}

const IssueFixedBanner = ({ fixed, label, width, height, textStyle }: Props) =>
  renderWithStatus(fixed, label, textStyle, width, height);

export default IssueFixedBanner;
