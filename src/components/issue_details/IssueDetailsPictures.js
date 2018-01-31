// @flow

import React from 'react';
import { Text, View, Image, StyleSheet, TouchableOpacity } from 'react-native';
import _ from 'lodash';
import type { ImageInfo } from 'urbanoe-model';
import type { Style } from '../../common';

type Props = {
  imageDefinitions: Array<ImageInfo>,
  headerStyle: Style,
  textStyle: Style,
  onPictureClicked: number => void,
};

const styles = StyleSheet.create({
  outerContainer: {
    flexDirection: 'column',
  },
  imageContainer: {
    flexDirection: 'row',
  },
  image: {
    width: 60,
    height: 60,
    marginTop: 8,
    marginBottom: 8,
    marginRight: 8,
    borderRadius: 4,
  },
  noComment: {
    fontSize: 12,
    color: '#1F0D3E',
  },
});

function constructThumbImage(imageDefinition, index, onPictureClicked) {
  const { thumbImageUrl } = imageDefinition;
  return (
    <TouchableOpacity key={index} onPress={() => onPictureClicked(index)}>
      <Image key={thumbImageUrl} source={{ uri: thumbImageUrl }} style={styles.image} />
    </TouchableOpacity>
  );
}

function renderPictures(imageDefinitions, onPictureClicked, textStyle) {
  if (imageDefinitions === null || imageDefinitions.length === 0) {
    return <Text style={textStyle}>No picture for this issue</Text>;
  }

  return (
    <View style={styles.imageContainer}>
      {
        _.map(imageDefinitions, (definition, index) =>
        constructThumbImage(definition, index, onPictureClicked))
      }
    </View>
  );
}

const IssueDetailsPictures = ({
  imageDefinitions,
  headerStyle,
  textStyle,
  onPictureClicked,
}: Props) => (
  <View style={styles.outerContainer}>
    <Text style={headerStyle}>Pictures</Text>
    { renderPictures(imageDefinitions, onPictureClicked, textStyle) }
  </View>
);

export default IssueDetailsPictures;
