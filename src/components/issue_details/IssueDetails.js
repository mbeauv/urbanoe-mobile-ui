// @flow
import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import type { IssueDetailsData } from 'urbanoe-model';
import type { Style } from '../../common';
import IssueDetailsMap from './IssueDetailsMap';
import IssueDetailsOverview from './IssueDetailsOverview';
import IssueDetailsLocation from './IssueDetailsLocation';
import IssueDetailsPictures from './IssueDetailsPictures';
import IssueDetailsComments from './IssueDetailsComments';
import IssueDetailsHistory from './IssueDetailsHistory';

type Props = {
  issueDetails: IssueDetailsData,
  textStyle: Style,
  textStrongStyle: Style,
  headerStyle: Style,
  superscriptStyle: Style,
  superscriptStrongStyle: Style,
  bannerTextStyle: Style,
  buttonColor: string,
  buttonBackgroundColor: string,
  onCommentReporterClicked: (string, number) => void,
  onHistoryReporterClicked: (string, number) => void,
  onPictureClicked: number => void,
  onDirectionRequest: void => void,
};

const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
    flexDirection: 'column',
  },
  innerContainer: {
    padding: 8,
  },
  dataContainer: {
    margin: 8,
  },
});

const IssueDetails = ({
  issueDetails,
  onCommentReporterClicked,
  onHistoryReporterClicked,
  onPictureClicked,
  onDirectionRequest,
  textStyle,
  textStrongStyle,
  headerStyle,
  superscriptStyle,
  superscriptStrongStyle,
  buttonColor,
  buttonBackgroundColor,
  bannerTextStyle } : Props) => (
    <ScrollView>
      <View style={styles.outerContainer}>
        <IssueDetailsMap issue={issueDetails} />
        <View style={styles.innerContainer}>
          <IssueDetailsOverview
            issue={issueDetails}
            issueTypeStyle={textStrongStyle}
            propertyStyle={textStyle}
            bannerHeight={40}
            bannerWidth={70}
            bannerTextStyle={bannerTextStyle}
          />
          <IssueDetailsLocation
            location={issueDetails.location}
            coordinates={issueDetails.coordinates}
            headerStyle={headerStyle}
            textStyle={textStyle}
            buttonColor={buttonColor}
            buttonBackgroundColor={buttonBackgroundColor}
            onDirectionRequest={() => onDirectionRequest()}
          />
          <IssueDetailsPictures
            imageDefinitions={issueDetails.imageDefinitions}
            headerStyle={headerStyle}
            textStyle={textStyle}
            onPictureClicked={index => onPictureClicked(index)}
          />
          <IssueDetailsComments
            comments={issueDetails.comments}
            headerStyle={headerStyle}
            authorStyle={superscriptStrongStyle}
            descriptionStyle={textStyle}
            dateStyle={superscriptStyle}
            onCommentReporterClicked={(name, id) => onCommentReporterClicked(name, id)}
          />
          <IssueDetailsHistory
            headerStyle={headerStyle}
            authorStyle={superscriptStrongStyle}
            descriptionStyle={textStyle}
            dateStyle={superscriptStyle}
            history={issueDetails.history}
            superscriptStyle={superscriptStyle}
            onHistoryReporterClicked={(name, id) => onHistoryReporterClicked(name, id)}
          />
        </View>
      </View>
    </ScrollView>
);

export default IssueDetails;
