// @flow

import React, { Component } from 'react';
import _ from 'lodash';
import { Text, View, StyleSheet, InteractionManager, Image } from 'react-native';
import Gallery from 'react-native-image-gallery';
import type { ImageInfo } from 'urbanoe-model';
import { formatDateYYYYMMDD } from 'urbanoe-common';
import { Style } from '../../common';

type Props = {
  imageInfo: Array<ImageInfo>,
  startPosition: number,
  backgroundColor: string,
  textStyle: Style,
};

type State = {
  interactionsComplete: bool,
  currentPosition: number,
};

const styles = StyleSheet.create({
  outerContainer: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    flex: 1,
  },
  captionContainer: {
    flexDirection: 'row',
    paddingBottom: 16,
  },
  authorContainer: {
    flexDirection: 'column',
    paddingLeft: 8,
    paddingBottom: 8,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
});

function imageProp(imageInfo : ImageInfo) {
  return {
    source: {
      uri: imageInfo.mainImageUrl,
    },
  };
}

class PictureViewer extends Component<Props, State> {
  static renderCaption(imageInfo: ImageInfo, textStyle: Style) {
    return (
      <View style={styles.captionContainer}>
        <Image
          style={styles.avatar}
          source={{ uri: imageInfo.author.avatarUrl }}
        />
        <View style={styles.authorContainer}>
          <Text style={textStyle}>{imageInfo.author.userName}</Text>
          <Text style={textStyle}>{`Created on ${formatDateYYYYMMDD(imageInfo.createdOn)}`}</Text>
        </View>
      </View>
    );
  }

  state = { interactionsComplete: false, currentPosition: this.props.startPosition };

  componentDidMount() {
    InteractionManager.runAfterInteractions(() => {
      this.setState({ interactionsComplete: true });
    });
  }

  onChangeImage(currentPosition: number) {
    this.setState({ ...this.state, currentPosition });
  }

  renderGallery(imageInfos) {
    return (
      <Gallery
        images={_.map(imageInfos, image => imageProp(image))}
        initialPage={this.state.currentPosition}
        onPageSelected={() => this.onChangeImage}
        pageMargin={12}
      />
    );
  }

  render() {
    const { imageInfo, backgroundColor, textStyle } = this.props;

    if (this.state.interactionsComplete) {
      return (
        <View style={[styles.outerContainer, { backgroundColor }]}>
          { this.renderGallery(imageInfo) }
          { PictureViewer.renderCaption(imageInfo[this.state.currentPosition], textStyle) }
        </View>
      );
    }

    return <View />;
  }
}

export default PictureViewer;
