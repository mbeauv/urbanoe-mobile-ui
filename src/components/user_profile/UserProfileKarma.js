// @flow

import React from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';
import Color from 'color';
import KarmaImage from '../../../assets/images/karma.png';

type Props = {
  karma: number,
  color: string,
};

const styles = StyleSheet.create({
  outerContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignContent: 'center',
    padding: 5,
    borderRadius: 5,
    borderWidth: 0.5,
    width: 100,
  },
  image: {
    height: 30,
    width: 30,
  },
  text: {
    fontSize: 20,
    padding: 5,
    fontFamily: 'open-sans-bold',
  },
});

const UserProfileKarma = ({ karma, color }: Props) => (
  <View style={
      [styles.outerContainer, { borderColor: color, backgroundColor: Color(color).lighten(0.5) }]}
  >
    <Image style={styles.image} source={KarmaImage} />
    <Text style={[styles.text, { color }]}>{karma}</Text>
  </View>
);

export default UserProfileKarma;
