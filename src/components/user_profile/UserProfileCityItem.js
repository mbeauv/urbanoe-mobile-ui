// @flow

import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import type { CitySignature } from 'urbanoe-model';
import { formatDateYYYYMMDD, formatStateCountryNames } from 'urbanoe-common';
import type { Style } from '../../common';
import CityRelationshipIcon from '../city_relationship_icon/CityRelationshipIcon';

const TILE_WIDTH = 100;
const IMAGE_HEIGHT = 60;
const BORDER_RADIUS = 4;

type Props = {
  city: CitySignature,
  cellTextStyle: Style,
  cellTextStrongStyle: Style,
  iconColor: string,
  iconBackgroundColor: string,
};

const styles = StyleSheet.create({
  outerContainer: {
    flexDirection: 'column',
    width: TILE_WIDTH,
    marginRight: 8,
    marginTop: 4,
    marginBottom: 4,
    borderRadius: BORDER_RADIUS,
    borderWidth: 0.5,
  },
  imageContainer: {
    width: TILE_WIDTH - 1,
    height: IMAGE_HEIGHT,
    borderTopRightRadius: BORDER_RADIUS,
    borderTopLeftRadius: BORDER_RADIUS,
  },
  image: {
    width: TILE_WIDTH - 1,
    height: IMAGE_HEIGHT,
  },
  dataContainer: {
    flexDirection: 'column',
    padding: 2,
  },
});

const UserProfileCityItem = ({
  city,
  cellTextStyle,
  cellTextStrongStyle,
  iconColor,
  iconBackgroundColor,
} : Props) => (
  <View style={[styles.outerContainer, { borderColor: iconColor }]}>
    <View style={styles.imageContainer}>
      <Image style={styles.image} source={{ uri: city.imageUrl }}>
        <CityRelationshipIcon
          relationship={city.relationship}
          color={iconColor}
          backgroundColor={iconBackgroundColor}
        />
      </Image>
    </View>
    <View style={styles.dataContainer}>
      <Text style={cellTextStrongStyle}>{city.cityName}</Text>
      <Text style={cellTextStyle}>{formatStateCountryNames(city.stateName, city.countryName)}</Text>
      <Text style={cellTextStyle}>{`Since ${formatDateYYYYMMDD(city.joinedOn)}`}</Text>
    </View>
  </View>
);

export default UserProfileCityItem;
