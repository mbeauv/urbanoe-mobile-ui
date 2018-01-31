// @flow
import React from 'react';
import { Image, StyleSheet } from 'react-native';
import type { IssueType } from 'urbanoe-model';
import { getImageForIssueType } from '../../common';

const IMAGE_SIZE = 84;

type Props = {
  imageUrl: string,
  issueType: IssueType,
  backgroundColor: string,
};

const styles = StyleSheet.create({
  image: {
    width: IMAGE_SIZE,
    height: IMAGE_SIZE,
    borderRadius: 6,
  },
});

const IssueImage = ({ imageUrl, issueType, backgroundColor }: Props) => {
  if (imageUrl) {
    return <Image style={styles.image} source={{ uri: imageUrl }} />;
  }

  return (
    <Image
      style={[styles.image, { backgroundColor }]}
      source={getImageForIssueType(issueType)}
    />);
};

export default IssueImage;
