
// @flow
import * as React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import _ from 'lodash';
import { Icon } from 'react-native-elements';
import type { Style } from '../../common';

type Props = {
  onUrlSelected: (string) => void,
  name: string,
  value: string,
  textStyle: Style,
  color: string,
  iconSize?: number,
  buttonSize?: number,
};

const styles = StyleSheet.create({
  outerContainer: {
    marginRight: 10,
    alignItems: 'center',
  },
  iconContainer: {
    alignContent: 'center',
    justifyContent: 'center',
    margin: 5,
    padding: 5,
    borderWidth: 0.5,
    borderRadius: 8,
  },
});

const TYPE_INFO = {
  www: {
    title: 'official site',
    icon: 'globe',
    urlGenerator: value => `${value}`,
  },
  twitter: {
    title: 'twitter',
    icon: 'twitter',
    urlGenerator: value => `https://twitter.com/${value}`,

  },
  facebook: {
    title: 'offical page',
    icon: 'facebook',
    urlGenerator: value => `https://www.facebook.com/${value}`,
  },
  email: {
    title: 'email address',
    icon: 'envelope',
    urlGenerator: value => `mailto:${value}`,
  },
  phone: {
    title: 'telephone',
    icon: 'phone',
    urlGenerator: value => `tel:${value}`,
  },
};

function urlFor(name, urlPart) {
  return _.has(TYPE_INFO, name) ? TYPE_INFO[name].urlGenerator(urlPart) : urlPart;
}

function iconForType(name, color, iconSize) {
  const iconName = _.has(TYPE_INFO, name) ? TYPE_INFO[name].icon : 'question';
  return <Icon type='font-awesome' color={color} size={iconSize} name={iconName} />;
}

function titleForType(name) {
  return _.has(TYPE_INFO, name) ? TYPE_INFO[name].title : 'other';
}

const SingleContactItem = ({
  name,
  color,
  onUrlSelected,
  value,
  iconSize,
  buttonSize,
  textStyle,
}: Props) => (
  <View style={styles.outerContainer}>
    <TouchableOpacity
      onPress={() => onUrlSelected(urlFor(name, value))}
      style={[styles.iconContainer, { borderColor: color, height: buttonSize, width: buttonSize }]}
    >
      { iconForType(name, color, iconSize) }
    </TouchableOpacity>
    <Text style={textStyle}>{_.startCase(titleForType(name))}</Text>
  </View>
);

SingleContactItem.defaultProps = {
  iconSize: 36,
  buttonSize: 60,
};

export default SingleContactItem;
