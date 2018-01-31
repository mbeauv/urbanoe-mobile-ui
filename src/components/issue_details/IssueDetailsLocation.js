// @flow

import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Icon } from 'react-native-elements';
import type { LocationInfo, Coordinates } from 'urbanoe-model';
import { formatStateCountryNames, formatAccuracy } from 'urbanoe-common';
import type { Style } from '../../common';
import Button from '../button/Button';

type Props = {
  location: LocationInfo,
  coordinates: Coordinates,
  textStyle: Style,
  headerStyle: Style,
  buttonBackgroundColor: string,
  buttonColor: string,
  onDirectionRequest: void => void,
};

const styles = StyleSheet.create({
  outerContainer: {
    flexDirection: 'column',
    alignContent: 'flex-start',
  },
  innerContainer: {
    flexDirection: 'column',
    flex: 1,
    justifyContent: 'flex-start',
  },
  locationContainer: {
    flexDirection: 'column',
    alignContent: 'flex-start',
  },
  buttonContainer: {
    marginTop: 12,
    alignSelf: 'center',
  },
});

const IssueDetailsLocation = ({
  location: { stateName, countryName, cityName, streetName },
  coordinates,
  textStyle,
  headerStyle,
  onDirectionRequest,
  buttonColor,
  buttonBackgroundColor,
}: Props) => (
  <View style={styles.outerContainer}>
    <Text style={headerStyle}>Location</Text>
    <View style={styles.innerContainer}>
      <View style={styles.locationContainer}>
        <Text style={textStyle}>{`near ${streetName}`}</Text>
        <Text style={textStyle}>{cityName}</Text>
        <Text style={textStyle}>{formatStateCountryNames(stateName, countryName)}</Text>
        <Text style={textStyle}>{`Accuracy: ${formatAccuracy(coordinates)}m`}</Text>
      </View>
      <View style={styles.buttonContainer}>
        <Button
          iconName='location-arrow'
          width={100}
          iconSize={16}
          backgroundColor={buttonBackgroundColor}
          iconColor='red'
          color={buttonColor}
          label='Route to'
          onPress={() => onDirectionRequest()}
        >
          <Icon type='font-awesome' name='compass' color={buttonColor} size={16} />
        </Button>
      </View>
    </View>
  </View>
);

export default IssueDetailsLocation;
