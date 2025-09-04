import React from 'react';
import {
  TouchableHighlight,
  Text,
  Image,
  ViewStyle,
  TextStyle,
  ImageSourcePropType,
} from 'react-native';

interface ButtonProps {
  onPress: () => void;
  style?: ViewStyle;
  textStyle?: TextStyle;
  icon?: ImageSourcePropType;
  label?: string;
  underlayColor?: string;
}

const Button: React.FC<ButtonProps> = ({
  onPress,
  style,
  textStyle,
  icon,
  label,
  underlayColor = '#8d7373ff',
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
