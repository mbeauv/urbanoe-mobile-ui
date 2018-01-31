// @flow
import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import _ from 'lodash';
import type { ContactProfile } from 'urbanoe-model';
import type { Style } from '../../common';
import SingleContactItem from './SingleContactItem';

type Props = {
  onUrlSelected: (string) => void,
  contactName: string,
  contactProfile: ?ContactProfile,
  headerStyle: Style,
  textStyle: Style,
  buttonColor: string,
};

const styles = StyleSheet.create({
  outerContainer: {
    flexDirection: 'column',
    marginBottom: 5,
  },
});

function renderContactContent(contactProfile, onUrlSelected, textStyle, color) {
  let items = [];

  if (contactProfile) {
    items = _.map(
      contactProfile,
      (value, key) =>
        (<SingleContactItem
          key={key}
          name={key}
          value={value}
          onUrlSelected={url => onUrlSelected(url)}
          textStyle={textStyle}
          color={color}
        />),
    );
  }


  if (items.length === 0) {
    return (
      <View>
        <Text>No content present</Text>
      </View>
    );
  }

  return (
    <View style={{ flexDirection: 'row' }}>
      { items }
    </View>
  );
}

const SingleContact = ({
  contactName,
  contactProfile,
  onUrlSelected,
  headerStyle,
  textStyle,
  buttonColor,
}: Props) => (
  <View style={styles.outerContainer}>
    <Text style={headerStyle}>{`To contact ${contactName}`}</Text>
    <View style={{ flexDirection: 'row', paddingTop: 10, paddingBottom: 10 }}>
      { renderContactContent(contactProfile, onUrlSelected, textStyle, buttonColor) }
    </View>
  </View>
);

SingleContact.defaultProps = {
  contactProfile: null,
};

export default SingleContact;
