// @flow
import React from 'react';
import { View } from 'react-native';
import type { ContactProfile } from 'urbanoe-model';
import type { Style } from '../../common';
import SingleContact from './SingleContact';

type Props = {
  onUrlSelected: (string) => void,
  city?: ContactProfile,
  service?: ContactProfile,
  headerStyle: Style,
  textStyle: Style,
  buttonColor: string,
};

const CityContacts = ({
  city,
  service,
  onUrlSelected,
  headerStyle,
  textStyle,
  buttonColor,
}: Props) => (
  <View>
    <SingleContact
      contactName='city'
      contactProfile={city}
      onUrlSelected={onUrlSelected}
      headerStyle={headerStyle}
      textStyle={textStyle}
      buttonColor={buttonColor}
    />
    <SingleContact
      contactName='service'
      contactProfile={service}
      onUrlSelected={onUrlSelected}
      headerStyle={headerStyle}
      textStyle={textStyle}
      buttonColor={buttonColor}
    />
  </View>
);

CityContacts.defaultProps = {
  city: undefined,
  service: undefined,
};

export default CityContacts;
