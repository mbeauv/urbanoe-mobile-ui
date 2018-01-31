// @flow

import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import _ from 'lodash';
import type { IssueDetailsData, IssueProperties } from 'urbanoe-model';
import {
  findIssueType,
  formatPropertyType,
  formatPropertyValue,
} from 'urbanoe-common';
import IssueTypeIcon from '../issue_type_icon/IssueTypeIcon';
import IssueFixedBanner from '../issue_fixed_banner/IssueFixedBanner';
import IssueScoreBanner from '../issue_score_banner/IssueScoreBanner';
import type { Style } from '../../common';

type Props = {
  issue: IssueDetailsData,
  issueTypeStyle: Style,
  propertyStyle: Style,
  bannerWidth: number,
  bannerHeight: number,
  bannerTextStyle: Style,
};

const styles = StyleSheet.create({
  outerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  dataContainer: {
    flexDirection: 'column',
  },
  statusContainer: {
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
});

function createProperty(label, value, textStyle) {
  return (
    <Text style={textStyle} key={label}>{`${formatPropertyType(label)}: ${formatPropertyValue(value)}`}</Text>
  );
}

function renderProperties(properties: IssueProperties, textStyle: Style) {
  const values = [];
  _.forOwn(properties, (value, key) => values.push(createProperty(key, value, textStyle)));
  return values;
}

const IssueDetailsOverview = ({
  issue,
  issueTypeStyle,
  propertyStyle,
  bannerWidth,
  bannerHeight,
  bannerTextStyle } : Props) => (
    <View style={styles.outerContainer}>
      <IssueTypeIcon issueType={issue.issueType} fixed={issue.fixed} size={42} />
      <View style={styles.dataContainer}>
        <Text style={issueTypeStyle}>{findIssueType(issue.issueType, true)}</Text>
        { renderProperties(issue.properties, propertyStyle) }
      </View>
      <View style={styles.statusContainer}>
        <IssueScoreBanner rating={issue.rating} label='Importance' width={bannerWidth} height={bannerHeight} textStyle={bannerTextStyle} />
        <IssueFixedBanner fixed={issue.fixed} label='Status' width={bannerWidth} height={bannerHeight} textStyle={bannerTextStyle} />
      </View>
    </View>
);

export default IssueDetailsOverview;
