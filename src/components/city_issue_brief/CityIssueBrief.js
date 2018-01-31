// @flow
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Divider, Icon } from 'react-native-elements';
import type { IssueSummaryData } from 'urbanoe-model';
import {
  formatDateYYYYMMDD,
  convertEpochToDate,
  findIssueType,
  formatStreetName,
} from 'urbanoe-common';
import IssueFixedBanner from '../issue_fixed_banner/IssueFixedBanner';
import IssueImage from '../issue_image/IssueImage';
import IssueScoreBanner from '../issue_score_banner/IssueScoreBanner';
import type { Style } from '../../common';

type Props = {
  issue: IssueSummaryData,
  onChevronSelected: number => void,
  onItemSelected: number => void,
  headerTextStyle: Style,
  infoTextStyle: Style,
  bannerTextStyle: Style,
  backgroundColor: string,
};

const styles = StyleSheet.create({
  dividerContainer: {
    flexDirection: 'column',
    flex: 1,
  },
  outerContainer: {
    flex: 1,
    justifyContent: 'flex-start',
    flexDirection: 'row',
    paddingTop: 8,
    paddingBottom: 8,
  },
  imageContainer: {

  },
  dataContainer: {
    paddingLeft: 10,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  bannerContainer: {
    flex: 1,
    flexDirection: 'row',
    paddingTop: 4,
  },
  chevronContainer: {
    flex: 1,
    alignSelf: 'center',
    alignItems: 'flex-end',
  },
});

const CityIssueBrief = ({
  issue,
  onChevronSelected,
  onItemSelected,
  headerTextStyle,
  infoTextStyle,
  bannerTextStyle,
  backgroundColor }: Props) => (
    <View style={styles.dividerContainer}>
      <TouchableOpacity style={styles.outerContainer} onPress={() => onItemSelected(issue.id)}>
        <View style={styles.imageContainer}>
          <IssueImage
            imageUrl={issue.mainImageUrl}
            issueType={issue.issueType}
            backgroundColor={backgroundColor}
          />
        </View>
        <View style={styles.dataContainer}>
          <View>
            <Text style={headerTextStyle}>{formatStreetName(issue.location.streetName)}</Text>
            <Text style={infoTextStyle}>{findIssueType(issue.issueType, true)}</Text>
            <Text style={infoTextStyle}>{`Reported on ${formatDateYYYYMMDD(convertEpochToDate(issue.reportedOn))}`}</Text>
          </View>
          <View style={styles.bannerContainer}>
            <IssueFixedBanner fixed={issue.fixed} textStyle={bannerTextStyle} />
            <IssueScoreBanner rating={issue.rating} textStyle={bannerTextStyle} />
          </View>
        </View>
        <TouchableOpacity
          style={styles.chevronContainer}
          onPress={() => onChevronSelected(issue.id)}
        >
          <Icon type='font-awesome' name='chevron-right' size={20} color='#EAEAEA' />
        </TouchableOpacity>
      </TouchableOpacity>
      <Divider style={{ backgroundColor: '#EAEAEA' }} />
    </View>
);


export default CityIssueBrief;
