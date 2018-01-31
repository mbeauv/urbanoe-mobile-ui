// @flow

import React from 'react';
import { Text, StyleSheet, View, Image } from 'react-native';
import { Icon } from 'react-native-elements';
import { MapView } from 'expo';
import type { IssueCommonData } from 'urbanoe-model';
import {
  findIssueType,
  formatDateYYYYMMDD,
  convertEpochToDate,
  formatStreetName,
} from 'urbanoe-common';
import IssueScoreBanner from '../issue_score_banner/IssueScoreBanner';

const IMAGE_SIZE = 58;

type Props = {
  onClicked: number => void,
  issue: IssueCommonData,
};

const styles = StyleSheet.create({
  outerContainer: {
    width: 260,
    flexDirection: 'row',
  },
  imageContainer: {
    width: IMAGE_SIZE,
    height: IMAGE_SIZE,
  },
  image: {
    width: IMAGE_SIZE,
    height: IMAGE_SIZE,
    borderRadius: 3,
  },
  dataContainer: {
    paddingLeft: 4,
    paddingBottom: 4,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  street: {
    color: '#1F0D3E',
    fontSize: 11,
    fontWeight: 'bold',
  },
  issueType: {
    color: 'grey',
    fontSize: 9,
    fontWeight: 'normal',
  },
  date: {
    color: '#898989',
    fontSize: 9,
  },
  score: {
    marginTop: 4,
    marginLeft: 0,
  },
  chevronContainer: {
    flex: 1,
    alignSelf: 'center',
    alignItems: 'flex-end',
  },
});

function renderIssueImage(imageUrl) {
  if (imageUrl) {
    return <Image style={styles.image} source={{ uri: imageUrl }} />;
  }
  return <View />;
}

const CityIssueMarkerCallout = ({ issue, onClicked }: Props) => (
  <MapView.Callout onPress={() => onClicked(issue.id)}>
    <View style={styles.outerContainer}>
      <View style={styles.imageContainer}>
        { renderIssueImage(issue.mainImageUrl) }
      </View>
      <View style={styles.dataContainer}>
        <Text style={styles.street}>{formatStreetName(issue.location.streetName)}</Text>
        <Text style={styles.issueType}>{findIssueType(issue.issueType, true)}</Text>
        <Text style={styles.date}>{`Reported on ${formatDateYYYYMMDD(convertEpochToDate(issue.reportedOn))}`}</Text>
        <IssueScoreBanner
          rating={issue.rating}
          width={54}
          height={20}
          outerContainerStyle={styles.score}
        />
      </View>
      <View style={styles.chevronContainer}>
        <Icon type='font-awesome' name='chevron-right' size={12} color='#EAEAEA' />
      </View>
    </View>
  </MapView.Callout>
);

export default CityIssueMarkerCallout;
