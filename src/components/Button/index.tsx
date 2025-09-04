import React from 'react';
import {
  TouchableHighlight,
  Text,
  Image,
} from 'react-native';
import { color } from '../../views/styles';
import { ButtonProps } from './types';

const Button: React.FC<ButtonProps> = ({
  onPress,
  style,
  textStyle,
  icon,
  label,
  underlayColor = color.underlayColor,
}) => (
  <TouchableHighlight
    style={style}
    onPress={onPress}
    underlayColor={underlayColor}
  >
    {icon ? <Image source={icon} /> : <Text style={textStyle}>{label}</Text>}
  </TouchableHighlight>
);

export default Button;
