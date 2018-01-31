// @flow

import React from 'react';
import { Text, View } from 'react-native';
import _ from 'lodash';
import type { IssueStateChange } from 'urbanoe-model';
import type { Style } from '../../common';
import IssueDetailsHistoryItem from './IssueDetailsHistoryItem';

type Props = {
  headerStyle: Style,
  authorStyle: Style,
  descriptionStyle: Style,
  dateStyle: Style,
  history: Array<IssueStateChange>,
  onHistoryReporterClicked: (string, number) => void,
};

function renderHistory(
  history,
  authorStyle,
  dateStyle,
  descriptionStyle,
  onHistoryReporterClicked,
) {
  if (history === null || history.length === 0) {
    return <Text style={descriptionStyle}>No history</Text>;
  }

  return _.map(
    history,
    (item, index) =>
      (<IssueDetailsHistoryItem
        created={index === history.length - 1}
        key={index}
        historyItem={item}
        authorStyle={authorStyle}
        descriptionStyle={descriptionStyle}
        dateStyle={dateStyle}
        onHistoryReporterClicked={() =>
          onHistoryReporterClicked(item.author.userName, item.author.userId)}
      />),
  );
}

const IssueDetailsHistory = ({
  headerStyle,
  authorStyle,
  descriptionStyle,
  dateStyle,
  history,
  onHistoryReporterClicked,
}: Props) => (
  <View>
    <Text style={headerStyle}>History</Text>
    { renderHistory(history, authorStyle, dateStyle, descriptionStyle, onHistoryReporterClicked) }
  </View>
);

export default IssueDetailsHistory;
