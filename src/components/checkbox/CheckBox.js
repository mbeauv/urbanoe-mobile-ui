// @flow
import React from 'react';
import { TouchableOpacity, Text, StyleSheet, View } from 'react-native';
import { Icon } from 'react-native-elements';

type Props = {
  onPress: void => void,
  checked: bool,
  title: string,
  color?: string,
  iconSize?: number,
  checkboxWidth?: number,
};

const styles = StyleSheet.create({
  outerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 3,
    paddingBottom: 3,
  },
  checkBoxContainer: {
    width: 20,
  },
  label: {
    paddingLeft: 8,
  },
});

const CheckBox = ({ checked, title, onPress, color, iconSize, checkboxWidth } : Props) => (
  <View style={styles.outerContainer} onPress={onPress}>
    <TouchableOpacity
      onPress={onPress}
      style={{ width: checkboxWidth }}
    >
      <Icon type='font-awesome' name={checked ? 'check-square-o' : 'square-o'} color={color} size={iconSize} />
    </TouchableOpacity>
    <Text style={[styles.label, { color }]}>{title}</Text>
  </View>
);

CheckBox.defaultProps = {
  color: 'white',
  iconSize: 20,
  checkboxWidth: 22,
};

export default CheckBox;
