// @flow
import * as React from 'react';
import { View, Text, Dimensions, StyleSheet, Image } from 'react-native';

const styles = StyleSheet.create({
  outerContainer: {
    width: Dimensions.get('window').width,
    flexDirection: 'row',
    padding: 8,
    alignItems: 'flex-end',
  },
  imageContainer: {
    padding: 0,
    margin: 0,
  },
  image: {
    width: 37,
    height: 28,
  },
  title: {
    fontFamily: 'open-sans-regular',
    fontSize: 21,
    paddingLeft: 8,
    color: 'white',
  },
});

type Props = {
  appName: string,
  imageSource: number,
  height?: number,
  backgroundColor: string,
  titleStyle?: number,
  children?: React.Node,
};

/**
 * Header component for city based screens.  It displays the name of the city,
 * its state and country.
 * @param {Object} Props Properties for the header
 * @param {string} Props.cityName Name of the city
 * @param {string} Props.stateName Name of the state
 * @param {string} Props.countryName Name of the country
 * @param {ReactElement} Props.children List of React element to add as children.
 */
const ScreenHeader = ({
  appName,
  imageSource,
  children,
  height,
  titleStyle,
  backgroundColor,
} : Props) => (
  <View style={[styles.outerContainer, { height, backgroundColor }]}>
    <View style={styles.imageContainer}>
      <Image style={styles.image} source={imageSource} />
    </View>
    <Text style={titleStyle}>{appName}</Text>
    <View style={{ flex: 1, padding: 0, margin: 0, alignItems: 'flex-end', justifyContent: 'flex-end' }}>
      {children}
    </View>
  </View>
);

ScreenHeader.defaultProps = {
  children: null,
  height: 46,
  titleStyle: styles.title,
};

export default ScreenHeader;
