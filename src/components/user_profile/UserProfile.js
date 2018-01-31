// @flow

import React from 'react';
import { View } from 'react-native';
import type { UserProfileData } from 'urbanoe-model';
import type { Style } from '../../common';
import UserProfileOverview from './UserProfileOverview';
import UserProfileCities from './UserProfileCities';
import UserProfileLatestIssues from './UserProfileLatestIssues';

type Props = {
  userProfile: UserProfileData,
  textStyle: Style,
  textStrongStyle: Style,
  cellTextStyle: Style,
  cellTextStrongStyle: Style,
  headerStyle: Style,
  issueHeaderTextStyle: Style,
  issueInfoTextStyle: Style,
  bannerTextStyle: Style,
  karmaColor: string,
  relationshipIconColor: string,
  relationshipIconBackgroundColor: string,
  issueItemBackgroundColor: string,
  onIssueSelected: number => void,
};

const UserProfile = ({
  userProfile,
  textStyle,
  textStrongStyle,
  cellTextStyle,
  cellTextStrongStyle,
  headerStyle,
  issueHeaderTextStyle,
  issueInfoTextStyle,
  bannerTextStyle,
  onIssueSelected,
  karmaColor,
  relationshipIconColor,
  relationshipIconBackgroundColor,
  issueItemBackgroundColor,
}: Props) => (
  <View>
    <UserProfileOverview
      userProfile={userProfile}
      dateStyle={textStyle}
      nameStyle={textStrongStyle}
      karmaColor={karmaColor}
    />
    <UserProfileCities
      cities={userProfile.cities}
      headerStyle={headerStyle}
      textStyle={textStyle}
      cellTextStyle={cellTextStyle}
      cellTextStrongStyle={cellTextStrongStyle}
      iconColor={relationshipIconColor}
      iconBackgroundColor={relationshipIconBackgroundColor}
    />
    <UserProfileLatestIssues
      issues={userProfile.latestIssues}
      headerStyle={headerStyle}
      bannerTextStyle={bannerTextStyle}
      itemHeaderTextStyle={issueHeaderTextStyle}
      itemInfoTextStyle={issueInfoTextStyle}
      onIssueSelected={id => onIssueSelected(id)}
      backgroundColor={issueItemBackgroundColor}
    />
  </View>
);

export default UserProfile;
