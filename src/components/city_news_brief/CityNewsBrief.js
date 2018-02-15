// @flow

import React, { Component } from 'react';
import { Animated, StyleSheet, TouchableOpacity } from 'react-native';
import type { CityNews } from 'urbanoe-model';
import type { Style } from '../../common';
import CityNewsBriefHeader from './CityNewsBriefHeader';
import CityNewsBriefActionBar from './CityNewsBriefActionBar';

const SHORT_HEIGHT = 160;
const LONG_HEIGHT = 300;

type Props = {
  onClick: number => void,
  onChevronClicked: (string, number) => void,
  expanded: boolean,
  news: CityNews,
  textStyle: Style,
  authorStyle: Style,
  dateStyle: Style,
  width: number,
  onAuthorClicked: (string, number) => void,
  buttonIconColor: string,
  buttonBackgroundColor: string,
};

const styles = StyleSheet.create({
  outerContainer: {
    flexDirection: 'column',
    marginBottom: 8,
    borderWidth: 1,
    borderColor: '#EAEAEA',
    borderRadius: 8,
  },
  image: {
    height: 160,
  },
  imageContainer: {
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    overflow: 'hidden',
  },
});

class CityNewsBrief extends Component<Props> {
  static findHeight(expanded: bool) : number {
    return expanded ? LONG_HEIGHT : SHORT_HEIGHT;
  }

  constructor(props: Props) {
    super(props);
    this.imageHeight = new Animated.Value(this.props.expanded ? LONG_HEIGHT : SHORT_HEIGHT);
  }

  componentWillReceiveProps(nextProps: Props) {
    if (this.props.expanded !== nextProps.expanded) {
      Animated.parallel([
        Animated.timing(this.imageHeight, {
          duration: 200,
          toValue: nextProps.expanded ? LONG_HEIGHT : SHORT_HEIGHT,
        }),
      ]).start();
    }
  }

  renderActionBar = () => {
    if (this.props.expanded) {
      return (
        <Animated.View style={{ position: 'absolute', left: 0, right: 0, bottom: 0 }}>
          <Animated.View style={{ alignItems: 'center', flex: 1, flexDirection: 'column', justifyContent: 'flex-end' }}>
            <CityNewsBriefActionBar
              extraId={this.props.news.actionableId}
              extraType={this.props.news.actionableType}
              onChevronClicked={(type, id) => this.props.onChevronClicked(type, id)}
              iconColor={this.props.buttonIconColor}
              iconBackgroundColor={this.props.buttonBackgroundColor}
            />
          </Animated.View>
        </Animated.View>
      );
    }

    return <Animated.View />;
  }

  renderImage(imageUrl: string, width: number) {
    if (imageUrl) {
      return (
        <Animated.View>
          <Animated.Image
            style={{ height: this.imageHeight, width }}
            source={{ uri: imageUrl }}
          />
          { this.renderActionBar() }
        </Animated.View>

        //   { this.renderActionBar() }
        // </Animated.Image>
      );
    }

    return <Animated.View />;
  }

  render() {
    const { news, textStyle, authorStyle, width, onAuthorClicked, dateStyle } = this.props;
    return (
      <Animated.View style={[styles.outerContainer, { width }]}>
        <CityNewsBriefHeader
          news={news}
          textStyle={textStyle}
          authorStyle={authorStyle}
          dateStyle={dateStyle}
          onAuthorClicked={() => onAuthorClicked(news.reporter.userName, news.reporter.userId)}
        />
        <TouchableOpacity onPress={() => this.props.onClick(this.props.news.id)}>
          <Animated.View style={styles.imageContainer}>
            { this.renderImage(news.imageUrl, width) }
          </Animated.View>
        </TouchableOpacity>
      </Animated.View>
    );
  }
}

export default CityNewsBrief;
