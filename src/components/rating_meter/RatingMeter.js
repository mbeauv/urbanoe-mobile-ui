// @flow

import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Icon } from 'react-native-elements';
import _ from 'lodash';

const styles = StyleSheet.create({
  outerContainer: {
    flexDirection: 'row',
  },
});

function getRatingStarProfile(totalStars: number, rating: number) {
  const full = Math.round(rating);
  const half = full > rating ? 1 : 0;
  const empty = totalStars - full - half;
  return {
    star: full,
    'star-half-o': half,
    'star-o': empty,
  };
}

function constructStarIcon(iconName, index, iconSize) {
  return (<Icon
    key={`${iconName}-${index}`}
    type='font-awesome'
    name={iconName}
    color='white'
    size={iconSize}
  />);
}

function printIconTimes(iconName, iconSize, times) {
  return _.times(times, index => constructStarIcon(iconName, index, iconSize));
}

function convertRatingToStars(totalStars: number, iconSize: number, rating: number) {
  return _.map(getRatingStarProfile(totalStars, rating), (label, value) =>
    printIconTimes(value, iconSize, label));
}

type Props = {
  rating: number,
  totalStars?: number,
  iconSize?: number,
};

/**
 * Component that expresses a given rating with a series of stars.
 * @param totalStars Maximum number of totalStars
 * @param iconSize Size of the star icon
 * @param rating Rating value
 */
const RatingMeter = ({ totalStars, iconSize, rating }: Props) => (
  <View style={styles.outerContainer}>
    { convertRatingToStars(totalStars, iconSize, rating) }
  </View>
);

RatingMeter.defaultProps = {
  totalStars: 5,
  iconSize: 10,
};

export default RatingMeter;
