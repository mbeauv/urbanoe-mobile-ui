// @flow
import * as React from 'react';
import { TouchableOpacity, Text, View } from 'react-native';

type Props = {
  label: string,
  width: number,
  color?: string,
  backgroundColor?: string,
  children?: React.Node,
  onPress: void => void,
};

function renderChildren(children) {
  if (children) return children;
  return <View />;
}

const Button = ({ label, color, onPress, children, width, backgroundColor } : Props) => (
  <TouchableOpacity
    onPress={onPress}
    style={
      {
        borderWidth: 1,
        borderRadius: 8,
        borderColor: color,
        width,
        padding: 2,
        alignItems: 'center',
        backgroundColor,
        marginRight: 4,
      }
    }
  >
    <View style={{ flexDirection: 'row' }}>
      { renderChildren(children) }
      <Text style={{ color, padding: 10 }}>{label}</Text>
    </View>
  </TouchableOpacity>
);

Button.defaultProps = {
  color: 'white',
  backgroundColor: 'transparent',
  children: undefined,
};

export default Button;
