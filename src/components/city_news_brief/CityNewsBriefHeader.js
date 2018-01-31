// @flow

import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import type { CityNews } from 'urbanoe-model';
import { formatDateYYYYMMDD, convertEpochToDate } from 'urbanoe-common';
import type { Style } from '../../common';

const styles = StyleSheet.create({
  outerContainer: {
    flexDirection: 'row',
    padding: 7,
  },
  image: {
    width: 28,
    height: 28,
    borderRadius: 14,
  },
  dataContainer: {
    flexDirection: 'column',
    flex: 1,
    paddingLeft: 7,
  },
  metaInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 2,
  },
});

type Props = {
  news: CityNews,
  textStyle: Style,
  authorStyle: Style,
  dateStyle: Style,
  onAuthorClicked: void => void,
};

const CityNewsBriefHeader = ({
  news: {
    description,
    reportedOn,
    reporter,
  },
  textStyle,
  authorStyle,
  dateStyle,
  onAuthorClicked }: Props) => (
    <View style={styles.outerContainer}>
      <TouchableOpacity onPress={() => onAuthorClicked()}>
        <Image style={styles.image} source={{ uri: reporter.avatarUrl }} />
      </TouchableOpacity>
      <View style={styles.dataContainer}>
        <View style={styles.metaInfo}>
          <TouchableOpacity onPress={() => onAuthorClicked()}>
            <Text style={[authorStyle, { marginRight: 4 }]}>{reporter.userName}</Text>
          </TouchableOpacity>
          <Text style={dateStyle}>{`on ${formatDateYYYYMMDD(convertEpochToDate(reportedOn))}`}</Text>
        </View>
        <Text style={textStyle}>{description}</Text>
      </View>
    </View>
);

export default CityNewsBriefHeader;
