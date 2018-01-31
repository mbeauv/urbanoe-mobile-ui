// @flow

import React from 'react';
import { Animated, View } from 'react-native';
import RoundedButton from '../rounded_button/RoundedButton';

type Props = {
  extraId: number,
  extraType: string,
  onChevronClicked: (string, number) => void,
  iconColor: string,
  iconBackgroundColor: string,
};

function renderActionButton(
  extraId: number,
  extraType: string,
  onChevronClicked,
  iconColor,
  iconBackgroundColor,
) {
  if (extraId && extraType && onChevronClicked) {
    return (
      <RoundedButton
        alignSelf='center'
        iconName='chevron-right'
        onPress={() => onChevronClicked(extraType, extraId)}
        iconColor={iconColor}
        backgroundColor={iconBackgroundColor}
      />
    );
  }

  return <View />;
}

const CityNewsBriefActionBar = ({ extraId, extraType, onChevronClicked, iconColor, iconBackgroundColor } : Props) => (
  <Animated.View style={{ flexDirection: 'row' }}>
    { renderActionButton(extraId, extraType, onChevronClicked, iconColor, iconBackgroundColor) }
  </Animated.View>
);

CityNewsBriefActionBar.defaultProps = {
  extraType: '',
  extraId: null,
};

export default CityNewsBriefActionBar;
