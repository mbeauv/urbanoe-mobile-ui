// @flow
import React from 'react';
import { FlatList, StyleSheet } from 'react-native';
import { List } from 'react-native-elements';
import type { IssueCommonData } from 'urbanoe-model';
import type { Style } from '../../common';
import CityIssueBrief from '../city_issue_brief/CityIssueBrief';

type Props = {
  onEndReached: void => void,
  onChevronSelected: number => void,
  onItemSelected: number => void,
  cityIssues: Array<IssueCommonData>,
  issueHeaderTextStyle: Style,
  issueInfoTextStyle: Style,
  issueBannerTextStyle: Style,
  itemBackgroundColor: string,
};

const styles = StyleSheet.create({
  outerContainer: {
    marginTop: 0,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderBottomColor: '#cbd2d9',
  },
});

function renderItem(
  item: IssueCommonData,
  onItemSelected,
  onChevronSelected,
  issueHeaderTextStyle,
  issueInfoTextStyle,
  issueBannerTextStyle,
  itemBackgroundColor,
) {
  return (
    <CityIssueBrief
      key={item.id}
      issue={item}
      onChevronSelected={onChevronSelected}
      onItemSelected={onItemSelected}
      headerTextStyle={issueHeaderTextStyle}
      infoTextStyle={issueInfoTextStyle}
      bannerTextStyle={issueBannerTextStyle}
      backgroundColor={itemBackgroundColor}
    />);
}

const CityIssuesList = ({
  cityIssues,
  onEndReached,
  onItemSelected,
  onChevronSelected,
  issueHeaderTextStyle,
  issueInfoTextStyle,
  issueBannerTextStyle,
  itemBackgroundColor,
}: Props) => (
  <List containerStyle={styles.outerContainer}>
    <FlatList
      data={cityIssues}
      renderItem={({ item }) => renderItem(
        item,
        onItemSelected,
        onChevronSelected,
        issueHeaderTextStyle,
        issueInfoTextStyle,
        issueBannerTextStyle,
        itemBackgroundColor,
      )}
      keyExtractor={item => item.id.toString()}
      onEndReached={onEndReached}
    />
  </List>
);

export default CityIssuesList;
