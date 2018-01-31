// @flow

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import _ from 'lodash';
import type { CitySignature, CityRelationship } from 'urbanoe-model';
import type { Style } from '../../common';
import UserProfileCityItem from './UserProfileCityItem';

type Props = {
  cities: Array<CitySignature>,
  headerStyle: Style,
  textStyle: Style,
  cellTextStyle: Style,
  cellTextStrongStyle: Style,
  iconColor: string,
  iconBackgroundColor: string,
};

const styles = StyleSheet.create({
  listContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
});

function relationshipValue(relationship : CityRelationship) : number {
  if (relationship === 'home') return 0;
  if (relationship === 'visited') return 1;
  return 2;
}

function renderCities(
  cities,
  textStyle,
  cellTextStyle,
  cellTextStrongStyle,
  iconColor,
  iconBackgroundColor,
) {
  if (cities.length === 0) {
    return <Text style={textStyle}>User does not have any associated city.</Text>;
  }

  return (
    <View style={styles.listContainer}>
      { _.orderBy(_.map(cities, city => (
        <UserProfileCityItem
          key={`${relationshipValue(city.relationship)}_${city.id}`}
          city={city}
          cellTextStyle={cellTextStyle}
          cellTextStrongStyle={cellTextStrongStyle}
          iconColor={iconColor}
          iconBackgroundColor={iconBackgroundColor}
        />)), 'key')
      }
    </View>
  );
}
const UserProfileCities = ({
  cities,
  headerStyle,
  textStyle,
  cellTextStyle,
  cellTextStrongStyle,
  iconColor,
  iconBackgroundColor,
} : Props) => (
  <View>
    <Text style={headerStyle}>Cities</Text>
    {
      renderCities(
        cities,
        textStyle,
        cellTextStyle,
        cellTextStrongStyle,
        iconColor,
        iconBackgroundColor,
      )
    }
  </View>
);

export default UserProfileCities;
