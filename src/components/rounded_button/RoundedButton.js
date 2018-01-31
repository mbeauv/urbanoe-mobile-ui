// @flow

import React from 'react';
import { Icon } from 'react-native-elements';

type Props = {
  iconName: string,
  iconType?: string,
  iconSize?: number,
  onPress?: void => void,
  iconColor: string,
  backgroundColor: string,
};

const RoundedButton = (props: Props) => (
  <Icon
    reverse
    color={props.iconColor}
    reverseColor={props.backgroundColor}
    size={props.iconSize}
    type={props.iconType}
    name={props.iconName}
    onPress={props.onPress}
  />
);

RoundedButton.defaultProps = {
  iconType: 'font-awesome',
  iconSize: 20,
  onPress: null,
};

export default RoundedButton;
