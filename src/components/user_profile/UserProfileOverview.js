// @flow

import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import type { UserProfileData } from 'urbanoe-model';
import { formatDateYYYYMMDD } from 'urbanoe-common';
import type { Style } from '../../common';
import UserProfileKarma from './UserProfileKarma';

type Props = {
  userProfile: UserProfileData,
  nameStyle: Style,
  dateStyle: Style,
  karmaColor: string,
};

const styles = StyleSheet.create({
  outerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  imageContainer: {
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  dataContainer: {
    flexDirection: 'column',
  },
  karmaContainer: {
    flexDirection: 'column',
  },
});

/** Component used to display a given user's basic information. */
const UserProfileOverview = ({
  userProfile: {
    avatarUrl,
    userName,
    joinedOn,
    lastActiveOn,
    karma,
  },
  karmaColor,
  nameStyle,
  dateStyle,
} : Props) => (
  <View style={styles.outerContainer}>
    <View style={styles.imageContainer}>
      <Image style={styles.image} source={{ uri: avatarUrl }} />
    </View>
    <View style={styles.dataContainer}>
      <Text style={nameStyle}>{userName}</Text>
      <Text style={dateStyle}>{`Joined on ${formatDateYYYYMMDD(joinedOn)}`}</Text>
      <Text style={dateStyle}>{`Last active on ${formatDateYYYYMMDD(lastActiveOn)}`}</Text>
    </View>
    <View style={styles.karmaContainer}>
      <UserProfileKarma karma={karma} color={karmaColor} />
    </View>
  </View>
);

export default UserProfileOverview;
