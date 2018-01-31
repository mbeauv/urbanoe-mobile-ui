// @flow

import React from 'react';
import { Text, View } from 'react-native';
import _ from 'lodash';
import type { IssueCommonData } from 'urbanoe-model';
import type { Style } from '../../common';
import CityIssueBrief from '../city_issue_brief/CityIssueBrief';

type Props = {
  issues: Array<IssueCommonData>,
  headerStyle: Style,
  itemInfoTextStyle: Style,
  itemHeaderTextStyle: Style,
  bannerTextStyle: Style,
  onIssueSelected: number => void,
  backgroundColor: string,
};

function renderIssues(
  issues,
  itemHeaderTextStyle,
  itemInfoTextStyle,
  bannerTextStyle,
  onIssueSelected,
  backgroundColor,
) {
  if (issues.length === 0) {
    return <Text>User did not report any issue.</Text>;
  }
  return _.map(
    issues,
    i => (<CityIssueBrief
      key={i.id}
      issue={i}
      headerTextStyle={itemHeaderTextStyle}
      infoTextStyle={itemInfoTextStyle}
      bannerTextStyle={bannerTextStyle}
      onChevronSelected={id => onIssueSelected(id)}
      onItemSelected={() => {}}
      backgroundColor={backgroundColor}
    />),
  );
}

/** Component that displays the list of latest issues raised by the user. */
const UserProfileLatestIssues = ({
  issues,
  headerStyle,
  itemHeaderTextStyle,
  itemInfoTextStyle,
  bannerTextStyle,
  onIssueSelected,
  backgroundColor,
} : Props) => (
  <View>
    <Text style={headerStyle}>Latest Issues Raised</Text>
    { renderIssues(
        issues,
        itemHeaderTextStyle,
        itemInfoTextStyle,
        bannerTextStyle,
        onIssueSelected,
        backgroundColor,
      )
    }
  </View>
);

export default UserProfileLatestIssues;
