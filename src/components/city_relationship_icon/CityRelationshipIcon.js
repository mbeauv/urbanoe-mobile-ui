// @flow
import React from 'react';
import { View } from 'react-native';
import { Icon } from 'react-native-elements';
import type { CityRelationship } from 'urbanoe-model';

type Props = {
  relationship: CityRelationship,
  backgroundColor: string,
  color: string,
};

function findIconName(relationship) {
  switch (relationship) {
    case 'home':
      return 'home';
    case 'visited':
      return 'heart-o';
    case 'liked':
    default:
      return 'thumbs-o-up';
  }
}

const CityRelationshipIcon = ({ relationship, color, backgroundColor } : Props) => (
  <View>
    <Icon
      reverse
      type='font-awesome'
      name={findIconName(relationship)}
      size={12}
      color={color}
      backgroundColor={backgroundColor}
    />
  </View>
);

export default CityRelationshipIcon;
