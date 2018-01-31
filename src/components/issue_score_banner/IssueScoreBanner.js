// @flow

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import RatingMeter from '../rating_meter/RatingMeter';
import type { Style } from '../../common';

type Props = {
  rating: number,
  width: number,
  height: number,
  label?: string,
  textStyle?: number,
  outerContainerStyle?: number,
};

const styles = StyleSheet.create({
  complexOuterContainer: {
    flexDirection: 'column',
    backgroundColor: '#4A90E2',
    padding: 5,
    marginBottom: 3,
    borderRadius: 4,
  },
  complexInnerContainer: {
    flexDirection: 'row',
  },
  complexLabel: {
    color: 'white',
  },
  simpleOuterContainer: {
    flexDirection: 'row',
    backgroundColor: '#4A90E2',
    padding: 5,
    marginLeft: 5,
    borderRadius: 4,
  },
});

function renderSimpleScoreBanner(
  rating: number,
  width: number,
  height: number,
  outerContainerStyle: Style,
) {
  return (
    <View style={[styles.simpleOuterContainer, outerContainerStyle, { width, height }]}>
      <RatingMeter rating={rating} />
    </View>
  );
}

function renderScoreWithLabel(
  rating: number,
  label: string,
  width: number,
  height: number,
  textStyle: Style,
  outerContainerStyle: Style,
) {
  return (
    <View style={[styles.complexOuterContainer, outerContainerStyle, { width, height }]}>
      <Text style={textStyle}>{label}</Text>
      <RatingMeter rating={rating} />
    </View>
  );
}

function renderScore(
  rating: number,
  label: string,
  width: number,
  height: number,
  textStyle: Style,
  outerContainerStyle: Style,
) {
  return label ?
    renderScoreWithLabel(rating, label, width, height, textStyle, outerContainerStyle) :
    renderSimpleScoreBanner(rating, width, height, outerContainerStyle);
}

const IssueScoreBanner =
  ({ rating, label, width, height, textStyle, outerContainerStyle }: Props) =>
    renderScore(rating, label, width, height, textStyle, outerContainerStyle);

export default IssueScoreBanner;
