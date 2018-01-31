// @flow

import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import type { IssueType } from 'urbanoe-model';
import { getImageForIssueType } from '../../common';

type Props = {
  issueType: IssueType,
  fixed: boolean,
  size?: number
};

const styles = StyleSheet.create({
  notFixedContainer: { backgroundColor: 'red', justifyContent: 'center' },
  fixedContainer: { backgroundColor: 'green', justifyContent: 'center' },
  image: { alignSelf: 'center' },
});

function getStyleForIssueStatus(status: bool): number {
  return status ? styles.fixedContainer : styles.notFixedContainer;
}

const IssueTypeIcon = (props : Props) => {
  const { size, issueType, fixed } = props;
  const height = size;
  const width = size;
  const borderRadius = size / 2;
  const imageSize = size * 0.8;

  return (
    <View style={[getStyleForIssueStatus(fixed), { height, width, borderRadius }]}>
      <Image
        style={[styles.image, { height: imageSize, width: imageSize }]}
        source={getImageForIssueType(issueType)}
      />
    </View>
  );
};

IssueTypeIcon.defaultProps = {
  size: 18,
};

export default IssueTypeIcon;
