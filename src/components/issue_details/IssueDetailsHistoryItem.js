// @flow
import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Divider } from 'react-native-elements';
import _ from 'lodash';
import { formatDateYYYYMMDD } from 'urbanoe-common';
import type { IssueStateChange } from 'urbanoe-model';
import type { Style } from '../../common';

type Props = {
  created: bool,
  historyItem: IssueStateChange,
  authorStyle: Style,
  dateStyle: Style,
  descriptionStyle: Style,
  onHistoryReporterClicked: void => void,
};

const styles = StyleSheet.create({
  outerContainer: {
    flexDirection: 'column',
  },
  innerContainer: {
    flexDirection: 'row',
    paddingBottom: 7,
    paddingTop: 7,
  },
  divider: {
    height: 0.5,
  },
  dataContainer: {
    flexDirection: 'column',
    paddingLeft: 7,
  },
  metaContainer: {
    flexDirection: 'row',
    paddingBottom: 4,
  },
  commentDate: {
    fontSize: 13,
    color: 'grey',
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 8,
  },
});

function findChangeReason(reason: string) {
  if (reason && reason !== 'fixed') {
    return `(${_.startCase(reason)})`;
  }
  return '';
}

function renderStatusChange(change: IssueStateChange, created: bool) {
  if (created) {
    return 'Issue created';
  }
  return change.fixed ? `Changed status to FIXED ${findChangeReason(change.closeReason)}` : 'Change status to NOT FIXED';
}

const IssueDetailsHistoryItem = ({
  created,
  historyItem,
  authorStyle,
  dateStyle,
  descriptionStyle,
  onHistoryReporterClicked,
} : Props) => (
  <View style={styles.outerContainer}>
    <View style={styles.innerContainer}>
      <TouchableOpacity onPress={() => onHistoryReporterClicked()}>
        <Image style={styles.image} source={{ uri: historyItem.author.avatarUrl }} />
      </TouchableOpacity>
      <View style={styles.dataContainer}>
        <View style={styles.metaContainer}>
          <TouchableOpacity onPress={() => onHistoryReporterClicked()}>
            <Text style={authorStyle}>{historyItem.author.userName}</Text>
          </TouchableOpacity>
          <Text style={dateStyle}>{` on ${formatDateYYYYMMDD(historyItem.changedOn)}`}</Text>
        </View>
        <Text style={descriptionStyle}>{renderStatusChange(historyItem, created)}</Text>
      </View>
    </View>
    <Divider style={styles.divider} />
  </View>
);

export default IssueDetailsHistoryItem;
